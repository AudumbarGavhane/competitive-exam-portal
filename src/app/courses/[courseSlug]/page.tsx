import { notFound, redirect } from 'next/navigation'
import { getCourseBySlug, getFirstSubject, getFirstTopic } from '@/lib/services/coursesService'

export default async function CourseHomePage({
  params,
}: {
  params: Promise<{ courseSlug: string }>
}) {
  const { courseSlug } = await params
  const course = getCourseBySlug(courseSlug)
  if (!course) notFound()

  const firstSubject = getFirstSubject(courseSlug)
  if (!firstSubject) notFound()

  const firstTopic = getFirstTopic(courseSlug, firstSubject.slug)
  if (!firstTopic) notFound()

  redirect(`/courses/${courseSlug}/${firstSubject.slug}/${firstTopic.slug}`)
}
