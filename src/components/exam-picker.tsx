'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { exams } from '@/lib/exams'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

export function ExamPicker() {
  const [activeKey, setActiveKey] = useState(exams[0].key)
  const active = exams.find((e) => e.key === activeKey) ?? exams[0]

  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-brand">
            Choose your exam
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {exams.map((exam) => {
              const isActive = exam.key === activeKey
              return (
                <button
                  key={exam.key}
                  type="button"
                  onClick={() => setActiveKey(exam.key)}
                  aria-pressed={isActive}
                  className={cn(
                    'rounded-xl border px-4 py-2.5 text-left transition-all',
                    isActive
                      ? 'border-brand/60 bg-brand-muted/60 shadow-sm'
                      : 'border-border bg-card hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-sm',
                  )}
                >
                  <span className="block font-serif text-base leading-none">
                    {exam.label}
                  </span>
                  <span
                    className={cn(
                      'mt-1 block text-xs',
                      isActive ? 'text-brand-foreground/80' : 'text-muted-foreground',
                    )}
                  >
                    {exam.ageGroup}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-8 min-h-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
            >
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-brand">
                {active.ageGroup}
              </span>
              <p className="mt-2 max-w-2xl font-serif text-2xl leading-snug text-balance sm:text-3xl">
                {active.pitch}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {active.subjects.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
            Everything adapts to the exam you pick — the syllabus, the notes, the
            practice sets and your rank. The reading room and the first questions
            of every set are free; full test series and timed mocks are Exam
            Point Pro.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
