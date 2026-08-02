import { NextResponse } from 'next/server';
import { getAttemptResults } from '@/lib/services/attemptService';
import { errorResponse } from '@/lib/services/errors';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ attemptId: string }> },
) {
  try {
    const { attemptId } = await params;
    const results = getAttemptResults(attemptId);
    return NextResponse.json(results);
  } catch (error) {
    return errorResponse(error);
  }
}
