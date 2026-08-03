import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { CheckCircle2, Circle, XCircle } from 'lucide-react'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { StartTestButton } from '@/components/StartTestButton'
import { getAttemptResults } from '@/lib/services/attemptService'
import { ConflictError, NotFoundError } from '@/lib/services/errors'
import { cn } from '@/lib/utils'
import type { AttemptResults } from '@/types/api'

export default async function TestResultsPage({
  params,
}: {
  params: Promise<{ attemptId: string }>
}) {
  const { attemptId } = await params

  let results: AttemptResults
  try {
    results = getAttemptResults(attemptId)
  } catch (error) {
    if (error instanceof NotFoundError) notFound()
    if (error instanceof ConflictError) redirect(`/test-room/${attemptId}`)
    throw error
  }

  const { attempt, seriesTitle, seriesSlug, maxMarks, questionResults } = results
  const percentage = maxMarks > 0 ? Math.round((attempt.score / maxMarks) * 100) : 0

  return (
    <>
      <SiteNavbar />
      <main className="px-4 pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-brand">
              Results
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-serif text-4xl font-normal tracking-tight text-balance sm:text-5xl">
              {seriesTitle}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-end gap-6 rounded-2xl border border-border bg-card p-6">
              <div>
                <p className="text-xs text-muted-foreground">Score</p>
                <p className="mt-1 font-serif text-4xl">
                  {attempt.score}
                  <span className="text-lg text-muted-foreground"> / {maxMarks}</span>
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Accuracy</p>
                <p className="mt-1 font-serif text-4xl">{percentage}%</p>
              </div>
              <div className="ml-auto flex gap-3">
                <StartTestButton slug={seriesSlug} />
              </div>
            </div>
          </Reveal>

          <div className="mt-10 flex flex-col gap-4">
            {questionResults.map((qr, i) => {
              const options: Record<string, string> = JSON.parse(qr.question.options)
              return (
                <Reveal key={qr.question.id} delay={Math.min(0.3, 0.03 * i)}>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                        Question {i + 1}
                      </span>
                      {qr.isCorrect === true && (
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                          <CheckCircle2 className="size-4" />
                          Correct
                        </span>
                      )}
                      {qr.isCorrect === false && (
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-destructive">
                          <XCircle className="size-4" />
                          Incorrect
                        </span>
                      )}
                      {qr.isCorrect === null && (
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                          <Circle className="size-4" />
                          Not answered
                        </span>
                      )}
                    </div>

                    <p className="mt-3 leading-relaxed text-balance">{qr.question.questionText}</p>

                    <div className="mt-4 flex flex-col gap-2">
                      {Object.entries(options).map(([key, label]) => {
                        const isCorrectOption = key === qr.question.correctOption
                        const isSelected = key === qr.selectedOption
                        return (
                          <div
                            key={key}
                            className={cn(
                              'flex items-center gap-3 rounded-xl border px-4 py-2.5 text-sm',
                              isCorrectOption
                                ? 'border-brand/60 bg-brand-muted/50'
                                : isSelected
                                  ? 'border-destructive/40 bg-destructive/10'
                                  : 'border-border',
                            )}
                          >
                            <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-current text-xs font-medium">
                              {key}
                            </span>
                            <span className="flex-1">{label}</span>
                            {isCorrectOption && <span className="text-xs font-medium text-brand-foreground">Correct answer</span>}
                            {isSelected && !isCorrectOption && (
                              <span className="text-xs font-medium text-destructive">Your answer</span>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    {qr.question.explanation && (
                      <p className="mt-4 rounded-xl bg-muted/50 p-4 text-sm leading-relaxed text-muted-foreground">
                        {qr.question.explanation}
                      </p>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.1}>
            <Link
              href="/test-series"
              className="mt-10 inline-block text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Back to all test series
            </Link>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
