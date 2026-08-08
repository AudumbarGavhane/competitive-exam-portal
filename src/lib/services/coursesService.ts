// src/lib/services/coursesService.ts
// Read-only business logic for browsing courses, their subjects, and each
// subject's tutorial-style topics.

import { courses, getCourse } from '@/lib/courses';
import { getFirstSubject, getSubject, listSubjects } from '@/lib/courseSubjects';
import { courseTopics } from '@/data/courseTopics';
import type { Course, CourseTopic, Subject } from '@/types/index';

export function listCourses(): Course[] {
  return courses;
}

export function getCourseBySlug(slug: string): Course | undefined {
  return getCourse(slug);
}

export { listSubjects, getSubject as getSubjectBySlug, getFirstSubject };

export function listTopics(courseSlug: string, subjectSlug: string): CourseTopic[] {
  return courseTopics
    .filter((t) => t.courseSlug === courseSlug && t.subjectSlug === subjectSlug)
    .sort((a, b) => a.order - b.order);
}

export function getFirstTopic(courseSlug: string, subjectSlug: string): CourseTopic | undefined {
  return listTopics(courseSlug, subjectSlug)[0];
}

export interface TopicWithContext {
  course: Course;
  subject: Subject;
  subjects: Subject[];
  topic: CourseTopic;
  topics: CourseTopic[];
  prev: CourseTopic | null;
  next: CourseTopic | null;
}

export function getTopic(
  courseSlug: string,
  subjectSlug: string,
  topicSlug: string,
): TopicWithContext | undefined {
  const course = getCourse(courseSlug);
  if (!course) return undefined;

  const subject = getSubject(courseSlug, subjectSlug);
  if (!subject) return undefined;

  const topics = listTopics(courseSlug, subjectSlug);
  const index = topics.findIndex((t) => t.slug === topicSlug);
  if (index === -1) return undefined;

  return {
    course,
    subject,
    subjects: listSubjects(courseSlug),
    topic: topics[index],
    topics,
    prev: index > 0 ? topics[index - 1] : null,
    next: index < topics.length - 1 ? topics[index + 1] : null,
  };
}
