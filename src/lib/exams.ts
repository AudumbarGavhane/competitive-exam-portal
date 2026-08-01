export type Exam = {
  key: string
  label: string
  ageGroup: string
  pitch: string
  subjects: string[]
}

export const exams: Exam[] = [
  {
    key: 'upsc',
    label: 'UPSC CSE',
    ageGroup: 'Ages 21–32',
    pitch: 'The whole GS syllabus mapped to notes, from Polity to Ethics, with mocks that mark like the real prelims.',
    subjects: ['Polity', 'History', 'Economy', 'Geography', 'Ethics'],
  },
  {
    key: 'mpsc',
    label: 'MPSC',
    ageGroup: 'Ages 19–38',
    pitch: 'Maharashtra-focused notes and sets in the pattern the state commission actually sets — history, polity and current affairs.',
    subjects: ['Polity', 'Maharashtra', 'Economy', 'Science'],
  },
  {
    key: 'ssc',
    label: 'SSC CGL',
    ageGroup: 'Ages 18–32',
    pitch: 'Quant, reasoning, English and GK drilled to speed, with sectional timers that match tier-one pressure.',
    subjects: ['Quant', 'Reasoning', 'English', 'GK'],
  },
  {
    key: 'banking',
    label: 'Banking',
    ageGroup: 'Ages 20–30',
    pitch: 'IBPS and SBI prep built for speed — data interpretation, reasoning and banking awareness in every set.',
    subjects: ['Reasoning', 'Quant', 'English', 'Awareness'],
  },
  {
    key: 'neet',
    label: 'NEET',
    ageGroup: 'Ages 17–25',
    pitch: 'Physics, chemistry and biology notes tied to NCERT lines, with full-length mocks scored on the NEET curve.',
    subjects: ['Physics', 'Chemistry', 'Biology'],
  },
  {
    key: 'jee',
    label: 'JEE',
    ageGroup: 'Ages 16–19',
    pitch: 'Concept-first notes and advanced problem sets for Mains and Advanced, with a difficulty that climbs as you do.',
    subjects: ['Physics', 'Chemistry', 'Maths'],
  },
]

export const stats = [
  { value: 61204, label: 'Aspirants reading and practicing daily', highlight: true },
  { value: 2340, label: 'Notes across UPSC, SSC, banking and PCS' },
  { value: 184000, label: 'Questions answered this month' },
  { value: 1, label: 'Rank list, updated every night' },
]
