import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, FileQuestion, Trophy } from 'lucide-react'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { getTestSeriesBySlug } from '@/lib/services/testSeriesService'
import { StartTestButton } from './StartTestButton'

export default async function TestSeriesDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const series = getTestSeriesBySlug(slug)
  if (!series) notFound()

  return (
    <>
      <SiteNavbar />
      <main className="px-4 pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link
              href="/test-series"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              All test series
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <span
              className={
                series.tier === 'FREE'
                  ? 'mt-6 inline-block rounded-full border border-brand/40 bg-brand-muted/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-brand-foreground'
                  : 'mt-6 inline-block rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground'
              }
            >
              {series.tier === 'FREE' ? 'Free' : 'Exam Point Pro'}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 font-serif text-4xl font-normal tracking-tight text-balance sm:text-5xl">
              {series.title}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              {series.description}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-muted-foreground">
                <FileQuestion className="size-4 text-brand" />
                {series.questionCount} questions
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-muted-foreground">
                <Trophy className="size-4 text-brand" />
                {series.maxMarks} marks
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10">
              <StartTestButton slug={series.slug} />
              <p className="mt-3 text-xs text-muted-foreground">
                Timed once you start — answers save as you go.
              </p>
            </div>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
