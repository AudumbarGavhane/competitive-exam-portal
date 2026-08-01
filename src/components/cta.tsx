'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CTA() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <section id="start" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-primary px-6 py-14 text-primary-foreground sm:px-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_85%_15%,var(--brand),transparent_45%)]"
            />
            <div className="relative">
              <h2 className="max-w-xl font-serif text-4xl font-normal tracking-tight text-balance sm:text-5xl">
                Start where you are.
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-primary-foreground/70">
                Bring your syllabus, or use ours. The first chapter and its
                practice set are free — no card, no trial clock.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  if (email.trim()) setDone(true)
                }}
                className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-label="Email address"
                  className="h-11 flex-1 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:border-primary-foreground/50"
                />
                <button
                  type="submit"
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90"
                >
                  {done ? (
                    <>
                      <CheckCircle2 className="size-4" />
                      You&apos;re in
                    </>
                  ) : (
                    <>
                      Start free
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
