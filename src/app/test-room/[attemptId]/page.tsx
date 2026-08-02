import { notFound, redirect } from 'next/navigation'
import { getAttemptWithQuestions } from '@/lib/services/attemptService'
import { NotFoundError } from '@/lib/services/errors'
import { TestRoomClient } from '@/components/test-room/test-room-client'

export default async function TestRoomPage({
  params,
}: {
  params: Promise<{ attemptId: string }>
}) {
  const { attemptId } = await params

  let data
  try {
    data = getAttemptWithQuestions(attemptId)
  } catch (error) {
    if (error instanceof NotFoundError) notFound()
    throw error
  }

  if (data.attempt.status === 'COMPLETED') {
    redirect(`/dashboard/test/${attemptId}`)
  }

  return (
    <TestRoomClient
      attemptId={attemptId}
      seriesTitle={data.seriesTitle}
      questions={data.questions}
      initialAnswers={data.answers}
    />
  )
}
