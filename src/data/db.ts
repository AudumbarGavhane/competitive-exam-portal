// src/data/db.ts
//
// Dummy in-memory data store for local development and testing only.
// There is no real database behind this app yet — this module plays that role:
// plain arrays + array methods, no ORM. State lives in the Node process and
// resets on every server restart / hot reload, which is expected here.

import type { Note, Question, TestAttempt, TestSeries, UserAnswer } from '@/types/index';
import { notesData, notesQuizQuestions, notesQuizSeries } from '@/data/notes';

const mockTestSeries: TestSeries[] = [
  {
    id: 'ts-upsc-prelims-1',
    title: 'UPSC CSE Prelims Mock 1',
    slug: 'upsc-prelims-mock-1',
    description:
      'A full-length General Studies mock covering polity, history, economy and geography, marked to the real prelims pattern.',
    tier: 'FREE',
    examKey: 'upsc',
    kind: 'MOCK',
  },
  {
    id: 'ts-ssc-quant-1',
    title: 'SSC CGL Quant Sprint',
    slug: 'ssc-cgl-quant-sprint',
    description:
      'A speed-focused quantitative aptitude set drilling the exact question types SSC CGL Tier 1 sets every year.',
    tier: 'PAID',
    examKey: 'ssc',
    kind: 'MOCK',
  },
  {
    id: 'ts-banking-reasoning-1',
    title: 'Banking Reasoning Set 1',
    slug: 'banking-reasoning-set-1',
    description:
      'IBPS/SBI-style reasoning questions covering puzzles, syllogisms and direction sense, built for accuracy under time pressure.',
    tier: 'FREE',
    examKey: 'banking',
    kind: 'MOCK',
  },
  {
    id: 'ts-neet-physics-1',
    title: 'NEET Physics Set 1',
    slug: 'neet-physics-set-1',
    description:
      'NCERT-aligned physics questions on mechanics and electrostatics, scored on the NEET marking scheme.',
    tier: 'PAID',
    examKey: 'neet',
    kind: 'MOCK',
  },
];

const mockQuestions: Question[] = [
  // UPSC CSE Prelims Mock 1
  {
    id: 'q-upsc-1',
    testSeriesId: 'ts-upsc-prelims-1',
    questionText: 'Which article of the Indian Constitution abolishes untouchability?',
    options: JSON.stringify({ A: 'Article 14', B: 'Article 17', C: 'Article 21', D: 'Article 32' }),
    correctOption: 'B',
    explanation: 'Article 17 abolishes "untouchability" and forbids its practice in any form.',
    marks: 2,
    negativeMarks: 0.5,
  },
  {
    id: 'q-upsc-2',
    testSeriesId: 'ts-upsc-prelims-1',
    questionText: 'The Battle of Buxar (1764) was fought between the British and a coalition led by whom?',
    options: JSON.stringify({
      A: 'Siraj-ud-Daulah',
      B: 'Tipu Sultan',
      C: 'Shah Alam II and Mir Qasim',
      D: 'Haidar Ali',
    }),
    correctOption: 'C',
    explanation:
      'Buxar was fought against a coalition of Mughal emperor Shah Alam II, Mir Qasim of Bengal, and the Nawab of Awadh Shuja-ud-Daulah.',
    marks: 2,
    negativeMarks: 0.5,
  },
  {
    id: 'q-upsc-3',
    testSeriesId: 'ts-upsc-prelims-1',
    questionText: 'Which of the following best defines "repo rate"?',
    options: JSON.stringify({
      A: 'Rate at which RBI lends to commercial banks against securities',
      B: 'Rate at which commercial banks lend to the public',
      C: 'Rate of return on government bonds',
      D: 'Rate at which RBI buys foreign currency',
    }),
    correctOption: 'A',
    explanation:
      'Repo rate is the rate at which the RBI lends short-term funds to commercial banks against government securities.',
    marks: 2,
    negativeMarks: 0.5,
  },
  {
    id: 'q-upsc-4',
    testSeriesId: 'ts-upsc-prelims-1',
    questionText: 'The Tropic of Cancer does NOT pass through which of these Indian states?',
    options: JSON.stringify({ A: 'Gujarat', B: 'Chhattisgarh', C: 'Punjab', D: 'West Bengal' }),
    correctOption: 'C',
    explanation:
      'The Tropic of Cancer passes through Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, WB, Tripura and Mizoram — not Punjab.',
    marks: 2,
    negativeMarks: 0.5,
  },
  {
    id: 'q-upsc-5',
    testSeriesId: 'ts-upsc-prelims-1',
    questionText: 'The concept of "Directive Principles of State Policy" was borrowed from the constitution of which country?',
    options: JSON.stringify({ A: 'USA', B: 'Ireland', C: 'Canada', D: 'Australia' }),
    correctOption: 'B',
    explanation: 'The Directive Principles of State Policy were borrowed from the Irish Constitution.',
    marks: 2,
    negativeMarks: 0.5,
  },

  // SSC CGL Quant Sprint
  {
    id: 'q-ssc-1',
    testSeriesId: 'ts-ssc-quant-1',
    questionText: 'A sum of money doubles itself in 8 years at simple interest. In how many years will it become 4 times itself?',
    options: JSON.stringify({ A: '16 years', B: '20 years', C: '24 years', D: '32 years' }),
    correctOption: 'C',
    explanation: 'To double, it takes 8 years (rate = 12.5%). To become 4x (3x growth) takes 3 × 8 = 24 years.',
    marks: 2,
    negativeMarks: 0.5,
  },
  {
    id: 'q-ssc-2',
    testSeriesId: 'ts-ssc-quant-1',
    questionText: 'If the ratio of two numbers is 3:4 and their LCM is 84, what is their sum?',
    options: JSON.stringify({ A: '42', B: '49', C: '56', D: '63' }),
    correctOption: 'B',
    explanation: 'Numbers are 3x and 4x with LCM = 12x = 84, so x = 7. Numbers are 21 and 28; sum = 49.',
    marks: 2,
    negativeMarks: 0.5,
  },
  {
    id: 'q-ssc-3',
    testSeriesId: 'ts-ssc-quant-1',
    questionText: 'A train 150 m long crosses a pole in 15 seconds. What is its speed in km/h?',
    options: JSON.stringify({ A: '30 km/h', B: '36 km/h', C: '45 km/h', D: '54 km/h' }),
    correctOption: 'B',
    explanation: 'Speed = 150/15 = 10 m/s = 10 × 18/5 = 36 km/h.',
    marks: 2,
    negativeMarks: 0.5,
  },
  {
    id: 'q-ssc-4',
    testSeriesId: 'ts-ssc-quant-1',
    questionText: 'What is 15% of 240?',
    options: JSON.stringify({ A: '32', B: '36', C: '40', D: '48' }),
    correctOption: 'B',
    explanation: '15% of 240 = 0.15 × 240 = 36.',
    marks: 2,
    negativeMarks: 0.5,
  },
  {
    id: 'q-ssc-5',
    testSeriesId: 'ts-ssc-quant-1',
    questionText: 'The average of 5 consecutive odd numbers is 61. What is the largest number?',
    options: JSON.stringify({ A: '63', B: '65', C: '67', D: '69' }),
    correctOption: 'B',
    explanation: 'Numbers are 57, 59, 61, 63, 65 — average 61, largest is 65.',
    marks: 2,
    negativeMarks: 0.5,
  },

  // Banking Reasoning Set 1
  {
    id: 'q-bank-1',
    testSeriesId: 'ts-banking-reasoning-1',
    questionText: 'Pointing to a photograph, a man said, "She is the daughter of my grandfather\'s only son." How is the woman related to the man?',
    options: JSON.stringify({ A: 'Mother', B: 'Sister', C: 'Aunt', D: 'Niece' }),
    correctOption: 'B',
    explanation: 'Grandfather\'s only son is the man\'s father, so his daughter is the man\'s sister.',
    marks: 1,
    negativeMarks: 0.25,
  },
  {
    id: 'q-bank-2',
    testSeriesId: 'ts-banking-reasoning-1',
    questionText: 'A man walks 5 km east, then turns south and walks 3 km, then turns east and walks 2 km. How far is he from the starting point?',
    options: JSON.stringify({ A: '√58 km', B: '7 km', C: '10 km', D: '5 km' }),
    correctOption: 'A',
    explanation: 'Net east = 7 km, net south = 3 km. Distance = √(7² + 3²) = √58 km.',
    marks: 1,
    negativeMarks: 0.25,
  },
  {
    id: 'q-bank-3',
    testSeriesId: 'ts-banking-reasoning-1',
    questionText: 'In a certain code, "COMPUTER" is written as "RFUVQNPC". How is "MEDICINE" written in that code?',
    options: JSON.stringify({ A: 'NFEDJJOF', B: 'EOJDJEFN', C: 'FODJIDJE', D: 'NFEJDJOF' }),
    correctOption: 'A',
    explanation: 'Each letter is shifted forward by one place in the alphabet: M→N, E→F, D→E, I→J, C→D, I→J, N→O, E→F.',
    marks: 1,
    negativeMarks: 0.25,
  },
  {
    id: 'q-bank-4',
    testSeriesId: 'ts-banking-reasoning-1',
    questionText: 'Find the odd one out: Triangle, Square, Circle, Cube',
    options: JSON.stringify({ A: 'Triangle', B: 'Square', C: 'Circle', D: 'Cube' }),
    correctOption: 'D',
    explanation: 'Triangle, Square and Circle are 2D shapes; Cube is a 3D solid.',
    marks: 1,
    negativeMarks: 0.25,
  },
  {
    id: 'q-bank-5',
    testSeriesId: 'ts-banking-reasoning-1',
    questionText: 'In a certain code, each letter is replaced by the letter two places after it in the alphabet, so "CAT" is coded as "ECV". How is "DOG" coded?',
    options: JSON.stringify({ A: 'FQI', B: 'EPH', C: 'FQH', D: 'GQI' }),
    correctOption: 'A',
    explanation: 'Shifting each letter forward by 2: D→F, O→Q, G→I, giving "FQI".',
    marks: 1,
    negativeMarks: 0.25,
  },

  // NEET Physics Set 1
  {
    id: 'q-neet-1',
    testSeriesId: 'ts-neet-physics-1',
    questionText: 'A body is thrown vertically upward with velocity u. The time taken to reach maximum height is:',
    options: JSON.stringify({ A: 'u/g', B: '2u/g', C: 'u/2g', D: 'g/u' }),
    correctOption: 'A',
    explanation: 'At maximum height, final velocity = 0. Using v = u - gt, 0 = u - gt, so t = u/g.',
    marks: 4,
    negativeMarks: 1,
  },
  {
    id: 'q-neet-2',
    testSeriesId: 'ts-neet-physics-1',
    questionText: 'The SI unit of electric field intensity is:',
    options: JSON.stringify({ A: 'N/C', B: 'C/N', C: 'N·C', D: 'J/C' }),
    correctOption: 'A',
    explanation: 'Electric field intensity E = F/q, so its SI unit is newton per coulomb (N/C).',
    marks: 4,
    negativeMarks: 1,
  },
  {
    id: 'q-neet-3',
    testSeriesId: 'ts-neet-physics-1',
    questionText: 'Two charges of equal magnitude and opposite sign form a dipole. The electric field on the equatorial line is:',
    options: JSON.stringify({
      A: 'Parallel to the dipole moment',
      B: 'Anti-parallel to the dipole moment',
      C: 'Perpendicular to the dipole moment',
      D: 'Zero',
    }),
    correctOption: 'B',
    explanation: 'On the equatorial line, the resultant electric field is anti-parallel to the dipole moment vector.',
    marks: 4,
    negativeMarks: 1,
  },
  {
    id: 'q-neet-4',
    testSeriesId: 'ts-neet-physics-1',
    questionText: 'A body of mass 2 kg moving with 3 m/s collides with a stationary body and comes to rest, imparting all its momentum. What is the impulse?',
    options: JSON.stringify({ A: '3 Ns', B: '6 Ns', C: '9 Ns', D: '2 Ns' }),
    correctOption: 'B',
    explanation: 'Impulse = change in momentum = 2 kg × 3 m/s = 6 Ns.',
    marks: 4,
    negativeMarks: 1,
  },
  {
    id: 'q-neet-5',
    testSeriesId: 'ts-neet-physics-1',
    questionText: 'Capacitance of a parallel plate capacitor increases when:',
    options: JSON.stringify({
      A: 'Plate separation increases',
      B: 'Plate area decreases',
      C: 'A dielectric medium replaces air between plates',
      D: 'Plates are moved apart and area is halved',
    }),
    correctOption: 'C',
    explanation: 'C = kε₀A/d — introducing a dielectric (k > 1) between the plates increases capacitance.',
    marks: 4,
    negativeMarks: 1,
  },
];

// Paid mock series live alongside the free recap quizzes attached to notes —
// both flow through the same testSeries/questions tables and the same
// attempt/test-room pipeline; only TestSeries.kind tells them apart.
export const testSeries: TestSeries[] = [...mockTestSeries, ...notesQuizSeries];
export const questions: Question[] = [...mockQuestions, ...notesQuizQuestions];
export const notes: Note[] = notesData;

export function findNoteBySlug(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug);
}

// Mutable mock tables — grow at runtime as attempts are created/answered/submitted.
//
// Next.js can compile route handlers and page/server-component renders into
// separate module graphs (notably under Turbopack dev), which would otherwise
// give each its own copy of this module's top-level state. Stashing the
// mutable tables on `globalThis` keeps them a true process-wide singleton, the
// same trick used for dev-mode Prisma client instances.
type MockStore = {
  attempts: TestAttempt[];
  answers: UserAnswer[];
  attemptSeq: number;
  answerSeq: number;
};

const globalForMockDb = globalThis as unknown as { __examPortalMockDb?: MockStore };

const store: MockStore = (globalForMockDb.__examPortalMockDb ??= {
  attempts: [],
  answers: [],
  attemptSeq: 0,
  answerSeq: 0,
});

export const attempts: TestAttempt[] = store.attempts;
export const answers: UserAnswer[] = store.answers;

export function nextAttemptId(): string {
  store.attemptSeq += 1;
  return `attempt-${store.attemptSeq}-${Date.now()}`;
}

export function nextAnswerId(): string {
  store.answerSeq += 1;
  return `answer-${store.answerSeq}-${Date.now()}`;
}

export function findSeriesBySlug(slug: string): TestSeries | undefined {
  return testSeries.find((s) => s.slug === slug);
}

export function findSeriesById(id: string): TestSeries | undefined {
  return testSeries.find((s) => s.id === id);
}

export function findQuestionsBySeriesId(testSeriesId: string): Question[] {
  return questions.filter((q) => q.testSeriesId === testSeriesId);
}

export function findQuestionById(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}

export function findAttemptById(id: string): TestAttempt | undefined {
  return attempts.find((a) => a.id === id);
}

export function findAnswersByAttemptId(attemptId: string): UserAnswer[] {
  return answers.filter((a) => a.attemptId === attemptId);
}

export function insertAttempt(attempt: TestAttempt): TestAttempt {
  attempts.push(attempt);
  return attempt;
}

export function upsertAnswer(
  attemptId: string,
  questionId: string,
  selectedOption: string,
): UserAnswer {
  const existing = answers.find(
    (a) => a.attemptId === attemptId && a.questionId === questionId,
  );
  if (existing) {
    existing.selectedOption = selectedOption;
    return existing;
  }
  const created: UserAnswer = {
    id: nextAnswerId(),
    attemptId,
    questionId,
    selectedOption,
    isCorrect: null,
  };
  answers.push(created);
  return created;
}
