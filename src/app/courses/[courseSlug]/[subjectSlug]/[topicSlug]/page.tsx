import { notFound } from 'next/navigation'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { CourseTopicView } from '@/components/course-topic-view'
import { getTopic } from '@/lib/services/coursesService'

export default async function CourseTopicPage({
  params,
}: {
  params: Promise<{ courseSlug: string; subjectSlug: string; topicSlug: string }>
}) {
  const { courseSlug, subjectSlug, topicSlug } = await params
  const data = getTopic(courseSlug, subjectSlug, topicSlug)
  if (!data) notFound()

  return (
    <>
      <SiteNavbar />
      <CourseTopicView {...data} />
      <SiteFooter />
    </>
  )
}
