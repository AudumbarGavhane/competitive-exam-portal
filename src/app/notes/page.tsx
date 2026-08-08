import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { listNotes } from '@/lib/services/notesService'
import { exams } from '@/lib/exams'

function examLabel(examKey: string) {
  return exams.find((e) => e.key === examKey)?.label ?? examKey
}

export default async function NotesCatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ exam?: string }>
}) {
  const { exam } = await searchParams
  const notes = listNotes(exam)

  return (
    <>
      <SiteNavbar />
      <main className="px-4 pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-brand">
              Notes
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl font-normal tracking-tight text-balance sm:text-5xl">
              {exam ? `${examLabel(exam)} notes` : 'Every subject, free to read'}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Read the notes, then take the short recap quiz at the end — always
              free, no negative marking.
            </p>
          </Reveal>

          {exam && (
            <Reveal delay={0.12}>
              <Link
                href="/notes"
                className="mt-4 inline-block text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Clear filter — show all subjects
              </Link>
            </Reveal>
          )}

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {notes.map((n, i) => (
              <Reveal key={n.id} delay={0.05 * i}>
                <Link
                  href={`/notes/${n.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">
                      {examLabel(n.examKey)} · {n.subject}
                    </span>
                    <span className="rounded-full border border-brand/40 bg-brand-muted/60 px-2.5 py-1 text-xs font-medium text-brand-foreground">
                      Free
                    </span>
                  </div>

                  <h2 className="mt-4 font-serif text-xl leading-snug">{n.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {n.summary}
                  </p>

                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <BookOpen className="size-3.5 text-brand" />
                      Notes + quiz
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium text-foreground">
                      Read
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {notes.length === 0 && (
            <p className="mt-10 text-muted-foreground">
              No notes found for this exam yet.
            </p>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
