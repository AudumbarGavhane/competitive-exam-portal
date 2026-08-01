import { SiteNavbar } from '@/components/site-navbar'
import { Hero } from '@/components/hero'
import { ExamPicker } from '@/components/exam-picker'
import { Stats } from '@/components/stats'
import { Features } from '@/components/features'
import { ReadingRoom } from '@/components/reading-room'
import { Testimonial } from '@/components/testimonial'
import { CTA } from '@/components/cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen scroll-smooth">
      <SiteNavbar />
      <Hero />
      <ExamPicker />
      <Stats />
      <Features />
      <ReadingRoom />
      <Testimonial />
      <CTA />
      <SiteFooter />
    </main>
  )
}
