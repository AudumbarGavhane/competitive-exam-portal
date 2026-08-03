'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const checklist = [
  'Syllabus-mapped notes, not a search box',
  'Breadcrumbs back to the exact sub-topic',
  'One tap into practice for what you just read',
]

export function ReadingRoom() {
  return (
    <section id="focus" className="px-4 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[7fr_5fr]">
        <div>
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-brand">
              The reading room
            </span>
            <h2 className="mt-3 font-serif text-4xl font-normal tracking-tight text-balance sm:text-5xl">
              One page. No noise.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              Focus mode drops the sidebar, the nav and every count on the
              screen, leaving the syllabus tree and the paragraph in front of
              you — the same page, held still for as long as the chapter takes.
            </p>
          </Reveal>

          <ul className="mt-8 flex flex-col gap-3">
            {checklist.map((item, i) => (
              <Reveal key={item} delay={0.1 + i * 0.08}>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 flex-none items-center justify-center rounded-full bg-brand text-brand-foreground">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1 + checklist.length * 0.08}>
            <Link
              href="/explore"
              className="group mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Explore curriculums
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <motion.figure
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 200, damping: 24 }}
            className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-black/5"
          >
            <Image
              src="/reading-room.png"
              alt="A student reading notes in Exam Point's distraction-free focus mode"
              width={640}
              height={800}
              className="h-auto w-full object-cover"
              priority={false}
            />
            <figcaption className="absolute bottom-3 left-3 right-3 rounded-xl border border-border/60 bg-background/80 px-4 py-2.5 text-sm backdrop-blur-md">
              <span className="font-medium">Focus mode</span>
              <span className="text-muted-foreground"> · one chapter at a time</span>
            </figcaption>
          </motion.figure>
        </Reveal>
      </div>
    </section>
  )
}
