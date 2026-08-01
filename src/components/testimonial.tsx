'use client'

import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Testimonial() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <figure className="relative rounded-3xl border border-border bg-gradient-to-b from-brand-muted/40 to-card p-8 sm:p-12">
            <Quote className="size-8 text-brand" />
            <blockquote className="mt-5 font-serif text-2xl font-normal leading-snug tracking-tight text-balance sm:text-4xl">
              &ldquo;I stopped switching between four apps to read, test and check
              my rank. Exam Point is the one tab I keep open from six in the
              morning.&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary font-serif text-sm text-primary-foreground">
                214
              </span>
              <span className="text-sm text-muted-foreground">
                Aspirant, AIR 214, UPSC CSE
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
