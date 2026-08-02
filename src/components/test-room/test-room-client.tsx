'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Check, ChevronLeft, ChevronRight, Clock, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { apiClient } from '@/utils/apiClient'
import type { QuestionForAttempt } from '@/types/index'

const SECONDS_PER_QUESTION = 60

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function TestRoomClient({
  attemptId,
  seriesTitle,
  questions,
  initialAnswers,
}: {
  attemptId: string
  seriesTitle: string
  questions: QuestionForAttempt[]
  initialAnswers: Record<string, string>
}) {
  const router = useRouter()
  const [answers, setAnswers] = useState<Record<string, string>>(initialAnswers)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(questions.length * SECONDS_PER_QUESTION)
  const [submitting, setSubmitting] = useState(false)
  const [confirmingSubmit, setConfirmingSubmit] = useState(false)

  const current = questions[currentIndex]
  const options: Record<string, string> = JSON.parse(current.options)
  const answeredCount = Object.keys(answers).length

  const handleSubmit = useCallback(async () => {
    if (submitting) return
    setSubmitting(true)
    try {
      await apiClient.post(`/attempts/${attemptId}/submit`)
      router.push(`/dashboard/test/${attemptId}`)
    } catch {
      setSubmitting(false)
    }
  }, [attemptId, router, submitting])

  useEffect(() => {
    if (secondsLeft <= 0) {
      handleSubmit()
      return
    }
    const timer = setInterval(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearInterval(timer)
  }, [secondsLeft, handleSubmit])

  function selectOption(option: string) {
    setAnswers((prev) => ({ ...prev, [current.id]: option }))
    apiClient
      .put(`/attempts/${attemptId}/answers/${current.id}`, {
        body: JSON.stringify({ selectedOption: option }),
      })
      .catch(() => {
        // Best-effort save; the selection still stands locally and will be
        // graded from whatever the server has recorded at submit time.
      })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <Link
            href="/test-series"
            aria-label="Exit test"
            className="inline-flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </Link>
          <span className="font-serif text-base">{seriesTitle}</span>
        </div>
        <div
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium tabular-nums',
            secondsLeft <= 60
              ? 'border-destructive/40 bg-destructive/10 text-destructive'
              : 'border-border bg-muted/50 text-foreground',
          )}
        >
          <Clock className="size-3.5" />
          {formatTime(secondsLeft)}
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-6xl flex-1 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_260px]">
        <div>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <span className="text-xs font-medium uppercase tracking-[0.1em] text-brand">
              Question {currentIndex + 1} of {questions.length}
            </span>
            <p className="mt-3 text-lg leading-relaxed text-balance">
              {current.questionText}
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              {Object.entries(options).map(([key, label]) => {
                const selected = answers[current.id] === key
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => selectOption(key)}
                    aria-pressed={selected}
                    className={cn(
                      'flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all',
                      selected
                        ? 'border-brand/60 bg-brand-muted/60 shadow-sm'
                        : 'border-border bg-background hover:border-brand/40 hover:bg-muted/40',
                    )}
                  >
                    <span
                      className={cn(
                        'flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-medium',
                        selected
                          ? 'border-brand bg-brand text-brand-foreground'
                          : 'border-border text-muted-foreground',
                      )}
                    >
                      {key}
                    </span>
                    <span className="text-sm leading-snug">{label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="size-4" />
              Previous
            </Button>
            {currentIndex < questions.length - 1 ? (
              <Button onClick={() => setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))}>
                Next
                <ChevronRight className="size-4" />
              </Button>
            ) : (
              <Button variant="brand" onClick={() => setConfirmingSubmit(true)} disabled={submitting}>
                Submit test
              </Button>
            )}
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-border bg-card p-5">
          <p className="text-sm font-medium">
            {answeredCount} of {questions.length} answered
          </p>
          <div className="mt-4 grid grid-cols-6 gap-2 lg:grid-cols-5">
            {questions.map((q, i) => {
              const isAnswered = Boolean(answers[q.id])
              const isCurrent = i === currentIndex
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  className={cn(
                    'flex size-9 items-center justify-center rounded-lg border text-sm font-medium transition-colors',
                    isCurrent
                      ? 'border-brand bg-brand text-brand-foreground'
                      : isAnswered
                        ? 'border-brand/40 bg-brand-muted/60 text-brand-foreground'
                        : 'border-border bg-background text-muted-foreground hover:bg-muted',
                  )}
                >
                  {i + 1}
                </button>
              )
            })}
          </div>
          <Button
            className="mt-5 w-full"
            variant="brand"
            onClick={() => setConfirmingSubmit(true)}
            disabled={submitting}
          >
            Submit test
          </Button>
        </aside>
      </div>

      {confirmingSubmit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 text-center">
            <h2 className="font-serif text-xl">Submit this test?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              You&apos;ve answered {answeredCount} of {questions.length} questions.
              You can&apos;t change your answers after submitting.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setConfirmingSubmit(false)}
              >
                Keep going
              </Button>
              <Button className="flex-1" variant="brand" onClick={handleSubmit} disabled={submitting}>
                <Check className="size-4" />
                {submitting ? 'Submitting…' : 'Submit'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
