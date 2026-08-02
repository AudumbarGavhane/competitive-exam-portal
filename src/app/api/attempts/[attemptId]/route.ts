import { NextResponse } from 'next/server';
import { getAttemptWithQuestions } from '@/lib/services/attemptService';
import { errorResponse } from '@/lib/services/errors';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ attemptId: string }> },
) {
  try {
    const { attemptId } = await params;
    const data = getAttemptWithQuestions(attemptId);
    return NextResponse.json(data);
  } catch (error) {
    return errorResponse(error);
  }
}
