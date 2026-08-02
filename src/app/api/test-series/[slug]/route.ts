import { NextResponse } from 'next/server';
import { getTestSeriesBySlug } from '@/lib/services/testSeriesService';
import { errorResponse, NotFoundError } from '@/lib/services/errors';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const series = getTestSeriesBySlug(slug);
    if (!series) throw new NotFoundError(`No test series found for slug "${slug}"`);
    return NextResponse.json(series);
  } catch (error) {
    return errorResponse(error);
  }
}
