import Link from 'next/link'
import { ArrowRight, FileQuestion } from 'lucide-react'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { listTestSeries } from '@/lib/services/testSeriesService'
import { exams } from '@/lib/exams'

function examLabel(examKey: string) {
  return exams.find((e) => e.key === examKey)?.label ?? examKey
}

export default async function TestSeriesCatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ exam?: string }>
}) {
  const { exam } = await searchParams
  const series = listTestSeries(exam)

  return (
    <>
      <SiteNavbar />
      <main className="px-4 pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-brand">
              Test series
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl font-normal tracking-tight text-balance sm:text-5xl">
              {exam ? `${examLabel(exam)} test series` : 'Every test series, in one place'}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Pick a set, see the syllabus it covers, and start when you&apos;re
              ready. The first sets in every exam are free.
            </p>
          </Reveal>

          {exam && (
            <Reveal delay={0.12}>
              <Link
                href="/test-series"
                className="mt-4 inline-block text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Clear filter — show all exams
              </Link>
            </Reveal>
          )}

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {series.map((s, i) => (
              <Reveal key={s.id} delay={0.05 * i}>
                <Link
                  href={`/test-series/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">
                      {examLabel(s.examKey)}
                    </span>
                    <span
                      className={
                        s.tier === 'FREE'
                          ? 'rounded-full border border-brand/40 bg-brand-muted/60 px-2.5 py-1 text-xs font-medium text-brand-foreground'
                          : 'rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground'
                      }
                    >
                      {s.tier === 'FREE' ? 'Free' : 'Pro'}
                    </span>
                  </div>

                  <h2 className="mt-4 font-serif text-xl leading-snug">{s.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <FileQuestion className="size-3.5 text-brand" />
                      {s.questionCount} questions
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium text-foreground">
                      View
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {series.length === 0 && (
            <p className="mt-10 text-muted-foreground">
              No test series found for this exam yet.
            </p>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
