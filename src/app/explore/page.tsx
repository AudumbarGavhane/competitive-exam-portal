import Link from 'next/link'
import { BookOpen, Lock } from 'lucide-react'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { exams } from '@/lib/exams'

export default function ExplorePage() {
  return (
    <>
      <SiteNavbar />
      <main className="px-4 pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-brand">
              Explore
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl font-normal tracking-tight text-balance sm:text-5xl">
              Pick what you&apos;re studying for
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Every curriculum comes with its own syllabus, notes and subjects.
              Choose one to see what&apos;s inside.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {exams.map((exam, i) => (
              <Reveal key={exam.key} delay={0.05 * i}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-serif text-xl leading-snug">{exam.label}</h2>
                    <span className="rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">
                      {exam.ageGroup}
                    </span>
                  </div>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {exam.pitch}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exam.subjects.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <Link
                      href={`/notes?exam=${exam.key}`}
                      className="group inline-flex items-center justify-center gap-1.5 rounded-xl border border-brand/40 bg-brand-muted/60 px-3 py-2 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand-muted"
                    >
                      <BookOpen className="size-3.5" />
                      Notes
                    </Link>
                    <Link
                      href={`/test-series?exam=${exam.key}`}
                      className="group inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-muted/40 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      <Lock className="size-3.5 text-muted-foreground" />
                      Test series
                    </Link>
                  </div>
                  <p className="mt-2 text-center text-xs text-muted-foreground">
                    Notes are free · test series are Exam Point Pro
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
