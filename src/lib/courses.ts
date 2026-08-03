// src/lib/courses.ts
//
// Metadata for every course shown in the navbar "Courses" dropdown and the
// /courses catalog. Mirrors src/lib/exams.ts in shape, but a course can be an
// exam ('upsc') or a standalone subject ('mathematics') — whatever deserves
// its own tutorial-style topic list.

import type { Course } from '@/types/index';

export const courses: Course[] = [
  {
    slug: 'upsc',
    title: 'UPSC CSE',
    tagline: 'Civil services, GS to Ethics',
    description:
      'Polity, history, economy and more — the full General Studies syllabus broken into short, readable topics.',
  },
  {
    slug: 'mpsc',
    title: 'MPSC',
    tagline: "Maharashtra's state services",
    description:
      'State polity, geography and current affairs, mapped to the exact pattern MPSC sets every year.',
  },
  {
    slug: 'jee',
    title: 'JEE',
    tagline: 'Engineering entrance',
    description:
      'Concept-first Physics, Chemistry and Maths for Mains and Advanced, with problems that climb in difficulty.',
  },
  {
    slug: 'mathematics',
    title: 'Mathematics',
    tagline: 'Algebra to calculus',
    description:
      'Core mathematics topics explained from first principles, with worked examples at every step.',
  },
  {
    slug: 'physics',
    title: 'Physics',
    tagline: 'Mechanics to modern physics',
    description:
      'Build physical intuition first, then the formulas — mechanics, electricity, optics and more.',
  },
  {
    slug: 'chemistry',
    title: 'Chemistry',
    tagline: 'Physical, organic, inorganic',
    description:
      'The reactions and concepts that show up again and again, explained with everyday examples.',
  },
]

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug)
}
