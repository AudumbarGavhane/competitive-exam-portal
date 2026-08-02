// src/lib/services/attemptService.ts
// Business logic for the test-taking flow: start an attempt, save answers,
// grade on submit, and read back results. Server Components and API routes
// both call these directly.

import {
  findAnswersByAttemptId,
  findAttemptById,
  findQuestionsBySeriesId,
  findSeriesById,
  findSeriesBySlug,
  insertAttempt,
  nextAttemptId,
  upsertAnswer,
} from '@/data/db';
import { DEMO_USER_ID } from '@/lib/constants';
import { ConflictError, NotFoundError } from '@/lib/services/errors';
import type { Question, QuestionForAttempt, TestAttempt } from '@/types/index';
import type { AttemptResults, AttemptWithQuestions } from '@/types/api';

function stripAnswerKey(question: Question): QuestionForAttempt {
  const { correctOption: _correctOption, explanation: _explanation, ...rest } = question;
  return rest;
}

export function createAttempt(slug: string): TestAttempt {
  const series = findSeriesBySlug(slug);
  if (!series) throw new NotFoundError(`No test series found for slug "${slug}"`);

  const attempt: TestAttempt = {
    id: nextAttemptId(),
    userId: DEMO_USER_ID,
    testSeriesId: series.id,
    score: 0,
    status: 'ONGOING',
    startedAt: new Date().toISOString(),
  };
  return insertAttempt(attempt);
}

export function getAttemptWithQuestions(attemptId: string): AttemptWithQuestions {
  const attempt = findAttemptById(attemptId);
  if (!attempt) throw new NotFoundError(`No attempt found with id "${attemptId}"`);

  const series = findSeriesById(attempt.testSeriesId);
  if (!series) throw new NotFoundError(`Test series for attempt "${attemptId}" is missing`);

  const questions = findQuestionsBySeriesId(series.id).map(stripAnswerKey);
  const savedAnswers = findAnswersByAttemptId(attemptId);
  const answers = Object.fromEntries(
    savedAnswers.map((a) => [a.questionId, a.selectedOption]),
  );

  return {
    attempt,
    seriesTitle: series.title,
    seriesSlug: series.slug,
    questions,
    answers,
  };
}

export function saveAnswer(
  attemptId: string,
  questionId: string,
  selectedOption: string,
) {
  const attempt = findAttemptById(attemptId);
  if (!attempt) throw new NotFoundError(`No attempt found with id "${attemptId}"`);
  if (attempt.status !== 'ONGOING') {
    throw new ConflictError('This attempt has already been submitted');
  }
  return upsertAnswer(attemptId, questionId, selectedOption);
}

export function submitAttempt(attemptId: string): TestAttempt {
  const attempt = findAttemptById(attemptId);
  if (!attempt) throw new NotFoundError(`No attempt found with id "${attemptId}"`);
  if (attempt.status === 'COMPLETED') {
    throw new ConflictError('This attempt has already been submitted');
  }

  const seriesQuestions = findQuestionsBySeriesId(attempt.testSeriesId);
  const savedAnswers = findAnswersByAttemptId(attemptId);

  let score = 0;
  for (const question of seriesQuestions) {
    const answer = savedAnswers.find((a) => a.questionId === question.id);
    if (!answer) continue;
    const isCorrect = answer.selectedOption === question.correctOption;
    answer.isCorrect = isCorrect;
    score += isCorrect ? question.marks : -question.negativeMarks;
  }

  attempt.score = Math.round(score * 100) / 100;
  attempt.status = 'COMPLETED';
  attempt.completedAt = new Date().toISOString();
  return attempt;
}

export function getAttemptResults(attemptId: string): AttemptResults {
  const attempt = findAttemptById(attemptId);
  if (!attempt) throw new NotFoundError(`No attempt found with id "${attemptId}"`);
  if (attempt.status !== 'COMPLETED') {
    throw new ConflictError('This attempt has not been submitted yet');
  }

  const series = findSeriesById(attempt.testSeriesId);
  if (!series) throw new NotFoundError(`Test series for attempt "${attemptId}" is missing`);

  const seriesQuestions = findQuestionsBySeriesId(series.id);
  const savedAnswers = findAnswersByAttemptId(attemptId);

  const questionResults = seriesQuestions.map((question) => {
    const answer = savedAnswers.find((a) => a.questionId === question.id);
    return {
      question,
      selectedOption: answer?.selectedOption ?? null,
      isCorrect: answer?.isCorrect ?? null,
    };
  });

  return {
    attempt,
    seriesTitle: series.title,
    seriesSlug: series.slug,
    maxMarks: seriesQuestions.reduce((sum, q) => sum + q.marks, 0),
    questionResults,
  };
}
