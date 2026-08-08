import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, FileQuestion } from 'lucide-react'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { StartTestButton } from '@/components/StartTestButton'
import { getNoteBySlug } from '@/lib/services/notesService'
import { exams } from '@/lib/exams'

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const note = getNoteBySlug(slug)
  if (!note) notFound()

  const examLabel = exams.find((e) => e.key === note.examKey)?.label ?? note.examKey

  return (
    <>
      <SiteNavbar />
      <main className="px-4 pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link
              href="/notes"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              All notes
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
                {examLabel} · {note.subject}
              </span>
              <span className="rounded-full border border-brand/40 bg-brand-muted/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-brand-foreground">
                Free
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 font-serif text-4xl font-normal tracking-tight text-balance sm:text-5xl">
              {note.title}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              {note.summary}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
              {note.content.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-foreground/90">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 rounded-2xl border border-brand/30 bg-brand-muted/30 p-6">
              <h2 className="font-serif text-xl">Check what stuck</h2>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                <FileQuestion className="size-3.5 text-brand" />
                {note.quizQuestionCount} questions · free · no negative marking
              </p>
              <div className="mt-5">
                <StartTestButton slug={note.quizSlug} label="Start quiz" />
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
