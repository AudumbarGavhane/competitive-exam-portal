'use client'

import { motion } from 'framer-motion'
import { BookOpen, PenLine, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'

type Feature = {
  icon: LucideIcon
  title: string
  body: string
  tags: string[]
}

const features: Feature[] = [
  {
    icon: BookOpen,
    title: 'Read',
    body: "Notes written the way a topper's own would read — a syllabus tree on the left, breadcrumbs above the text, and a focus mode that clears everything but the page when the hour gets long.",
    tags: ['Polity', 'History', 'Economy'],
  },
  {
    icon: PenLine,
    title: 'Practice',
    body: 'A timed test engine that mirrors the real paper: negative marking, a question palette, and an explanation for every option the moment you submit — not just the one you got wrong.',
    tags: ['MCQ', 'Sectional', 'Full mock'],
  },
  {
    icon: Trophy,
    title: 'Rank',
    body: "An All India Rank recomputed nightly, topic-wise accuracy against the room's average, and a streak that tells you the truth about consistency — no badge inflation, no noise.",
    tags: ['Accuracy', 'Streaks', 'Leaderboard'],
  },
]

export function Features() {
  return (
    <section id="how" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-brand">
            How it works
          </span>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl font-normal tracking-tight text-balance sm:text-5xl">
            Three habits, one tab.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="group h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-muted/60 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <feature.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-normal">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {feature.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
