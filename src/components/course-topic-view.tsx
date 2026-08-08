import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AdSlot } from '@/components/ad-slot'
import type { TopicWithContext } from '@/lib/services/coursesService'

export function CourseTopicView({
  course,
  subject,
  subjects,
  topic,
  topics,
  prev,
  next,
}: TopicWithContext) {
  return (
    <main className="px-4 pt-28 pb-20 sm:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/courses" className="hover:text-foreground">
            Courses
          </Link>
          <span>/</span>
          <Link href={`/courses/${course.slug}`} className="hover:text-foreground">
            {course.title}
          </Link>
          <span>/</span>
          <span className="text-foreground">{subject.title}</span>
        </div>

        {subjects.length > 1 && (
          <nav className="mt-4 flex flex-wrap gap-1.5 border-b border-border pb-4">
            {subjects.map((s) => {
              const active = s.slug === subject.slug
              return (
                <Link
                  key={s.slug}
                  href={`/courses/${course.slug}/${s.slug}`}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'rounded-full px-3.5 py-1.5 text-sm transition-colors',
                    active
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  )}
                >
                  {s.title}
                </Link>
              )
            })}
          </nav>
        )}

        <div className="mt-5 hidden justify-center lg:flex">
          <AdSlot size="leaderboard" />
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)_260px]">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="px-1 font-serif text-lg leading-snug">{subject.title}</p>
            <nav className="mt-3 flex gap-1.5 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {topics.map((t) => {
                const active = t.slug === topic.slug
                return (
                  <Link
                    key={t.slug}
                    href={`/courses/${course.slug}/${subject.slug}/${t.slug}`}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'shrink-0 rounded-xl border px-3 py-2 text-sm transition-colors lg:shrink lg:border-0 lg:px-3 lg:py-1.5',
                      active
                        ? 'border-brand/40 bg-brand-muted/60 font-medium text-brand-foreground'
                        : 'border-border text-muted-foreground hover:bg-muted hover:text-foreground',
                    )}
                  >
                    {t.order}. {t.title}
                  </Link>
                )
              })}
            </nav>
          </aside>

          <article className="min-w-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-brand">
              <BookOpen className="size-3.5" />
              Topic {topic.order} of {topics.length}
            </span>
            <h1 className="mt-3 font-serif text-3xl font-normal tracking-tight text-balance sm:text-4xl">
              {topic.title}
            </h1>

            <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
              {topic.content.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-foreground/90">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between gap-3">
              {prev ? (
                <Link
                  href={`/courses/${course.slug}/${subject.slug}/${prev.slug}`}
                  className="group inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground transition-colors hover:border-brand/40"
                >
                  <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
                  {prev.title}
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/courses/${course.slug}/${subject.slug}/${next.slug}`}
                  className="group inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
                >
                  {next.title}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ) : (
                <span />
              )}
            </div>

            <div className="mt-10 flex justify-center lg:hidden">
              <AdSlot size="rectangle" />
            </div>
          </article>

          <aside className="hidden lg:sticky lg:top-28 lg:flex lg:h-fit lg:flex-col lg:items-center lg:gap-6">
            <AdSlot size="rectangle" />
            <AdSlot size="half-page" />
          </aside>
        </div>
      </div>
    </main>
  )
}
