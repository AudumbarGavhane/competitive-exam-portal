import { NextResponse } from 'next/server';
import { submitAttempt } from '@/lib/services/attemptService';
import { errorResponse } from '@/lib/services/errors';

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ attemptId: string }> },
) {
  try {
    const { attemptId } = await params;
    const attempt = submitAttempt(attemptId);
    return NextResponse.json(attempt);
  } catch (error) {
    return errorResponse(error);
  }
}
