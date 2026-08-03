'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import {
  Atom,
  Building2,
  ChevronDown,
  FlaskConical,
  Landmark,
  Rocket,
  Sigma,
  type LucideIcon,
} from 'lucide-react'
import { courses } from '@/lib/courses'
import { cn } from '@/lib/utils'

const courseIcons: Record<string, LucideIcon> = {
  upsc: Landmark,
  mpsc: Building2,
  jee: Rocket,
  mathematics: Sigma,
  physics: Atom,
  chemistry: FlaskConical,
}

export function CoursesDropdown() {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
          open && 'bg-muted text-foreground',
        )}
      >
        Courses
        <ChevronDown className={cn('size-3.5 transition-transform', open && 'rotate-180')} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute left-1/2 top-full z-50 mt-3 w-[min(90vw,640px)] -translate-x-1/2 rounded-3xl border border-border/70 bg-background/95 p-4 shadow-xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {courses.map((course) => {
                const Icon = courseIcons[course.slug]
                return (
                  <Link
                    key={course.slug}
                    href={`/courses/${course.slug}`}
                    onClick={() => setOpen(false)}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-sm"
                  >
                    <span className="flex size-9 items-center justify-center rounded-xl bg-brand-muted/60 text-brand-foreground">
                      {Icon && <Icon className="size-4.5" />}
                    </span>
                    <span className="mt-3 font-serif text-base leading-snug">
                      {course.title}
                    </span>
                    <span className="mt-1 text-xs text-muted-foreground">
                      {course.tagline}
                    </span>
                  </Link>
                )
              })}
            </div>

            <div className="mt-3 flex items-center justify-between rounded-2xl bg-muted/40 px-4 py-3">
              <p className="text-xs text-muted-foreground">
                Free tutorial-style topics for every course, with a quiz at the end.
              </p>
              <Link
                href="/courses"
                onClick={() => setOpen(false)}
                className="shrink-0 text-xs font-medium text-brand-foreground underline-offset-4 hover:underline"
              >
                See all
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
