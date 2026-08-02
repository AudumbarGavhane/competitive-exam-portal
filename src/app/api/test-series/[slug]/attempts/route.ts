import { NextResponse } from 'next/server';
import { createAttempt } from '@/lib/services/attemptService';
import { errorResponse } from '@/lib/services/errors';
import type { CreateAttemptResponse } from '@/types/api';

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const attempt = createAttempt(slug);
    const body: CreateAttemptResponse = { attemptId: attempt.id };
    return NextResponse.json(body, { status: 201 });
  } catch (error) {
    return errorResponse(error);
  }
}
