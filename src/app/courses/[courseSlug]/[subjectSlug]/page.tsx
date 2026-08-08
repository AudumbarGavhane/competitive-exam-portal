import { notFound, redirect } from 'next/navigation'
import { getCourseBySlug, getFirstTopic, getSubjectBySlug } from '@/lib/services/coursesService'

export default async function CourseSubjectPage({
  params,
}: {
  params: Promise<{ courseSlug: string; subjectSlug: string }>
}) {
  const { courseSlug, subjectSlug } = await params
  const course = getCourseBySlug(courseSlug)
  if (!course) notFound()

  const subject = getSubjectBySlug(courseSlug, subjectSlug)
  if (!subject) notFound()

  const firstTopic = getFirstTopic(courseSlug, subjectSlug)
  if (!firstTopic) notFound()

  redirect(`/courses/${courseSlug}/${subjectSlug}/${firstTopic.slug}`)
}
