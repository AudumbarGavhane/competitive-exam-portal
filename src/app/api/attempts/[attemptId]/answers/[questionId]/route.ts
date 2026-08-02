import { NextResponse } from 'next/server';
import { saveAnswer } from '@/lib/services/attemptService';
import { ApiError, errorResponse } from '@/lib/services/errors';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ attemptId: string; questionId: string }> },
) {
  try {
    const { attemptId, questionId } = await params;
    const body = await request.json().catch(() => null);
    const selectedOption = body?.selectedOption;
    if (typeof selectedOption !== 'string' || !selectedOption) {
      throw new ApiError(400, 'Request body must include a non-empty "selectedOption" string');
    }

    const answer = saveAnswer(attemptId, questionId, selectedOption);
    return NextResponse.json(answer);
  } catch (error) {
    return errorResponse(error);
  }
}
