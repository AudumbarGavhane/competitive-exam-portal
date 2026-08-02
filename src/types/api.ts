// src/types/api.ts
// Request/response DTOs for the internal API routes (src/app/api/**).
// Kept separate from src/types/index.ts, which mirrors the underlying data model.

import type { Question, QuestionForAttempt, TestAttempt, TestSeries } from '@/types/index';

export interface TestSeriesSummary extends TestSeries {
  questionCount: number;
  maxMarks: number;
}

export interface CreateAttemptResponse {
  attemptId: string;
}

export interface AttemptWithQuestions {
  attempt: TestAttempt;
  seriesTitle: string;
  seriesSlug: string;
  questions: QuestionForAttempt[];
  answers: Record<string, string>; // questionId -> selectedOption, for resuming
}

export interface QuestionResult {
  question: Question; // full record, including correctOption & explanation
  selectedOption: string | null;
  isCorrect: boolean | null;
}

export interface AttemptResults {
  attempt: TestAttempt;
  seriesTitle: string;
  seriesSlug: string;
  maxMarks: number;
  questionResults: QuestionResult[];
}
