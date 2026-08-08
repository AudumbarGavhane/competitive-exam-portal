// src/lib/courseSubjects.ts
//
// Subjects within each course — the tabs shown in the sub-navbar once a
// course is opened (e.g. mpsc -> Polity, Maharashtra, Economy, Science).
// Single-subject courses (mathematics, physics, chemistry) get exactly one
// Subject that mirrors the course itself, so the routing stays uniform even
// though the sub-navbar is hidden for them.

import type { Subject } from '@/types/index';

export const subjects: Subject[] = [
  // upsc
  { courseSlug: 'upsc', slug: 'polity', title: 'Polity', order: 1 },
  { courseSlug: 'upsc', slug: 'history', title: 'History', order: 2 },
  { courseSlug: 'upsc', slug: 'economy', title: 'Economy', order: 3 },
  { courseSlug: 'upsc', slug: 'geography', title: 'Geography', order: 4 },
  { courseSlug: 'upsc', slug: 'ethics', title: 'Ethics', order: 5 },

  // mpsc
  { courseSlug: 'mpsc', slug: 'polity', title: 'Polity', order: 1 },
  { courseSlug: 'mpsc', slug: 'maharashtra', title: 'Maharashtra', order: 2 },
  { courseSlug: 'mpsc', slug: 'economy', title: 'Economy', order: 3 },
  { courseSlug: 'mpsc', slug: 'science', title: 'Science', order: 4 },

  // jee
  { courseSlug: 'jee', slug: 'physics', title: 'Physics', order: 1 },
  { courseSlug: 'jee', slug: 'chemistry', title: 'Chemistry', order: 2 },
  { courseSlug: 'jee', slug: 'maths', title: 'Maths', order: 3 },

  // single-subject courses
  { courseSlug: 'mathematics', slug: 'mathematics', title: 'Mathematics', order: 1 },
  { courseSlug: 'physics', slug: 'physics', title: 'Physics', order: 1 },
  { courseSlug: 'chemistry', slug: 'chemistry', title: 'Chemistry', order: 1 },
]

export function listSubjects(courseSlug: string): Subject[] {
  return subjects
    .filter((s) => s.courseSlug === courseSlug)
    .sort((a, b) => a.order - b.order);
}

export function getSubject(courseSlug: string, subjectSlug: string): Subject | undefined {
  return subjects.find((s) => s.courseSlug === courseSlug && s.slug === subjectSlug);
}

export function getFirstSubject(courseSlug: string): Subject | undefined {
  return listSubjects(courseSlug)[0];
}
