// src/types/index.ts

export interface TestSeries {
  id: string;
  title: string;
  slug: string;
  description: string;
  tier: 'FREE' | 'PAID';
  examKey: string; // links to Exam.key in src/lib/exams.ts, e.g. 'upsc', 'ssc'
  metaTitle?: string;
  metaDescription?: string;
}

export interface Question {
  id: string;
  testSeriesId: string;
  questionText: string;
  options: string; // Stored as a raw JSON string from PostgreSQL: '{"A": "...", "B": "..."}'
  correctOption?: string; // Only populated during evaluation/results review
  explanation?: string;   // Only populated during evaluation/results review
  marks: number;
  negativeMarks: number;
}

// What the client sees while an attempt is ONGOING — never leak the answer key.
export type QuestionForAttempt = Omit<Question, 'correctOption' | 'explanation'>;

export interface TestAttempt {
  id: string;
  userId: string;
  testSeriesId: string;
  score: number;
  status: 'ONGOING' | 'COMPLETED';
  startedAt: string;
  completedAt?: string;
}

export interface UserAnswer {
  id: string;
  attemptId: string;
  questionId: string;
  selectedOption: string;
  isCorrect?: boolean | null;
}