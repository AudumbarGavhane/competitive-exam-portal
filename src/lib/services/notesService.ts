// src/lib/services/notesService.ts
// Read-only business logic for browsing free notes and their recap quizzes.

import { findNoteBySlug, findQuestionsBySeriesId, findSeriesBySlug, notes } from '@/data/db';
import type { Note } from '@/types/index';
import type { NoteDetail } from '@/types/api';

export function listNotes(examKey?: string): Note[] {
  return examKey ? notes.filter((n) => n.examKey === examKey) : notes;
}

export function getNoteBySlug(slug: string): NoteDetail | undefined {
  const note = findNoteBySlug(slug);
  if (!note) return undefined;

  const quizSeries = findSeriesBySlug(note.quizSlug);
  const quizQuestionCount = quizSeries ? findQuestionsBySeriesId(quizSeries.id).length : 0;

  return { ...note, quizQuestionCount };
}
