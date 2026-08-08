import Link from 'next/link'
import { ArrowRight, Atom, Building2, FlaskConical, Landmark, Rocket, Sigma, type LucideIcon } from 'lucide-react'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { listCourses } from '@/lib/services/coursesService'

const courseIcons: Record<string, LucideIcon> = {
  upsc: Landmark,
  mpsc: Building2,
  jee: Rocket,
  mathematics: Sigma,
  physics: Atom,
  chemistry: FlaskConical,
}

export default function CoursesCatalogPage() {
  const courses = listCourses()

  return (
    <>
      <SiteNavbar />
      <main className="px-4 pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-brand">
              Courses
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl font-normal tracking-tight text-balance sm:text-5xl">
              Learn a subject, one topic at a time
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Short, readable topics for every course — free to read, with a quiz
              at the end of each subject.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, i) => {
              const Icon = courseIcons[course.slug]
              return (
                <Reveal key={course.slug} delay={0.05 * i}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-sm"
                  >
                    <span className="flex size-10 items-center justify-center rounded-xl bg-brand-muted/60 text-brand-foreground">
                      {Icon && <Icon className="size-5" />}
                    </span>
                    <h2 className="mt-4 font-serif text-xl leading-snug">{course.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{course.tagline}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {course.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                      Start learning
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
