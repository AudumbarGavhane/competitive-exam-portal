'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '@/lib/exams'
import { cn } from '@/lib/utils'

function CountUp({ target, active }: { target: number; active: boolean }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(target)
      return
    }
    const duration = 1200
    const start = performance.now()
    let raf = 0
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, target])

  return <>{value.toLocaleString('en-IN')}</>
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="stats" className="px-4 py-16 sm:py-20">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-10 border-y border-border py-12 md:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p
              className={cn(
                'font-serif text-4xl font-normal tracking-tight sm:text-5xl',
                stat.highlight ? 'text-brand' : 'text-foreground',
              )}
            >
              <CountUp target={stat.value} active={inView} />
            </p>
            <p className="mt-2 text-sm leading-snug text-muted-foreground">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
