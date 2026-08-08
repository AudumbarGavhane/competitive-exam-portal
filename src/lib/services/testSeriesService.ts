// src/lib/services/testSeriesService.ts
// Read-only business logic for browsing test series. Server Components call
// these directly; API routes call them too and just forward the JSON.

import { findQuestionsBySeriesId, findSeriesBySlug, testSeries } from '@/data/db';
import type { TestSeries } from '@/types/index';
import type { TestSeriesSummary } from '@/types/api';

function toSummary(series: TestSeries): TestSeriesSummary {
  const seriesQuestions = findQuestionsBySeriesId(series.id);
  return {
    ...series,
    questionCount: seriesQuestions.length,
    maxMarks: seriesQuestions.reduce((sum, q) => sum + q.marks, 0),
  };
}

export function listTestSeries(examKey?: string): TestSeriesSummary[] {
  const filtered = testSeries.filter(
    (s) => s.kind === 'MOCK' && (!examKey || s.examKey === examKey),
  );
  return filtered.map(toSummary);
}

export function getTestSeriesBySlug(slug: string): TestSeriesSummary | undefined {
  const series = findSeriesBySlug(slug);
  return series && series.kind === 'MOCK' ? toSummary(series) : undefined;
}
