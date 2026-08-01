'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] as const },
  },
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      {/* soft gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-brand-muted/60 blur-3xl dark:bg-brand-muted/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,color-mix(in_srgb,var(--brand)_14%,transparent),transparent_55%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
        >
          <Sparkles className="size-3.5 text-brand" />
          Read, practice, rank — in one place
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 font-serif text-5xl font-normal leading-[1.02] tracking-tight text-balance sm:text-7xl"
        >
          Read less noise.
          <br />
          <span className="text-brand">Rank higher.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty"
        >
          Exam Point is a reading room and a practice hall in one place —
          structured notes for UPSC, MPSC, SSC, banking, NEET and JEE, and a
          test engine that scores you against every other aspirant on the day.
          Focus, practice, rank.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#start"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Start free
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#focus"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <BookOpen className="size-4" />
            Open the reading room
          </a>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-5 text-xs text-muted-foreground"
        >
          No card, no trial clock. The first chapter is always free.
        </motion.p>
      </motion.div>
    </section>
  )
}
