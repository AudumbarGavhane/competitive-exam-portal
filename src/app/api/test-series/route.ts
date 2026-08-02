import { NextRequest, NextResponse } from 'next/server';
import { listTestSeries } from '@/lib/services/testSeriesService';
import { errorResponse } from '@/lib/services/errors';

export async function GET(request: NextRequest) {
  try {
    const examKey = request.nextUrl.searchParams.get('examKey') ?? undefined;
    const series = listTestSeries(examKey);
    return NextResponse.json(series);
  } catch (error) {
    return errorResponse(error);
  }
}
