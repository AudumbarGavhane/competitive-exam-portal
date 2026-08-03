// src/data/notes.ts
//
// Free study notes, one per (exam, subject) pair from src/lib/exams.ts, each
// paired with a short, ungraded recap quiz (a NOTES_QUIZ-kind TestSeries).
// Merged into the shared testSeries/questions tables in src/data/db.ts so the
// quiz reuses the exact same attempt/test-room/results pipeline as paid mocks.

import type { Note, Question, TestSeries } from '@/types/index';

type NoteSeed = {
  examKey: string;
  subject: string;
  title: string;
  summary: string;
  content: string[];
  quiz: {
    question: string;
    options: Record<'A' | 'B' | 'C' | 'D', string>;
    correctOption: 'A' | 'B' | 'C' | 'D';
    explanation: string;
  }[];
};

function slugifySubject(subject: string): string {
  return subject.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

const seeds: NoteSeed[] = [
  {
    examKey: 'upsc',
    subject: 'Polity',
    title: 'Indian Polity — the essentials',
    summary: 'Constitution structure, Fundamental Rights, DPSP and Parliament.',
    content: [
      'The Constitution of India, adopted on 26 January 1950, lays down the structure of government, fundamental rights, and directive principles. Part III (Articles 12–35) guarantees Fundamental Rights — equality, freedom, protection against exploitation, and constitutional remedies — enforceable directly in courts.',
      'Part IV (Articles 36–51) contains the Directive Principles of State Policy, non-justiciable guidelines directing the state toward social and economic welfare, drawn largely from the Irish Constitution.',
      'Parliament is bicameral: the Lok Sabha (directly elected, max 552 seats) and the Rajya Sabha (indirectly elected, permanent body, one-third retiring every two years). Bills, except Money Bills, must pass both Houses.',
    ],
    quiz: [
      {
        question: 'Which Part of the Constitution contains Fundamental Rights?',
        options: { A: 'Part II', B: 'Part III', C: 'Part IV', D: 'Part V' },
        correctOption: 'B',
        explanation: 'Fundamental Rights are guaranteed under Part III, Articles 12–35.',
      },
      {
        question: 'The Rajya Sabha is a:',
        options: { A: 'Permanent body', B: 'Body dissolved every 5 years', C: 'Fully nominated body', D: 'Temporary committee' },
        correctOption: 'A',
        explanation: 'Unlike the Lok Sabha, the Rajya Sabha is a permanent body with one-third of members retiring every two years.',
      },
      {
        question: 'Directive Principles of State Policy are:',
        options: { A: 'Justiciable', B: 'Non-justiciable', C: 'Fundamental Rights', D: 'Money Bills' },
        correctOption: 'B',
        explanation: 'DPSPs are non-justiciable — they cannot be enforced directly by courts.',
      },
    ],
  },
  {
    examKey: 'upsc',
    subject: 'History',
    title: 'The freedom struggle, from 1857 to 1947',
    summary: 'Key movements and turning points in the Indian independence movement.',
    content: [
      "The Indian freedom struggle spanned nearly a century, from the Revolt of 1857 to independence in 1947. Early phases were led by moderates within the Indian National Congress (founded 1885), followed by extremist and revolutionary movements in the early 1900s.",
      "Mahatma Gandhi's return from South Africa in 1915 introduced Satyagraha as a mass mobilisation tool — seen in the Non-Cooperation Movement (1920–22), Civil Disobedience Movement (1930), and Quit India Movement (1942).",
      'Partition and independence arrived together on 15 August 1947, following the Mountbatten Plan, ending nearly two centuries of British rule and beginning the republic’s constitutional journey.',
    ],
    quiz: [
      {
        question: 'The Indian National Congress was founded in which year?',
        options: { A: '1857', B: '1885', C: '1920', D: '1942' },
        correctOption: 'B',
        explanation: 'The Indian National Congress was founded in 1885.',
      },
      {
        question: 'The Quit India Movement was launched in:',
        options: { A: '1920', B: '1930', C: '1942', D: '1947' },
        correctOption: 'C',
        explanation: 'The Quit India Movement began in August 1942.',
      },
      {
        question: 'India gained independence on:',
        options: { A: '26 January 1950', B: '15 August 1947', C: '2 October 1869', D: '30 January 1948' },
        correctOption: 'B',
        explanation: 'India became independent on 15 August 1947.',
      },
    ],
  },
  {
    examKey: 'upsc',
    subject: 'Economy',
    title: 'How the Indian economy fits together',
    summary: 'RBI, the Union Budget, and the indicators that describe the economy.',
    content: [
      "India's economy is a mixed economy, combining private enterprise with public-sector planning. The Reserve Bank of India (RBI), established in 1935, regulates monetary policy — setting the repo rate to control inflation and liquidity.",
      'The Union Budget, presented every February, outlines government revenue and expenditure for the fiscal year (April–March), including allocations for subsidies, infrastructure, and welfare schemes.',
      'Key economic indicators include GDP growth rate, inflation (measured via CPI and WPI), and the fiscal deficit — the gap between government expenditure and revenue, typically expressed as a percentage of GDP.',
    ],
    quiz: [
      {
        question: 'The RBI controls inflation primarily through the:',
        options: { A: 'Income tax rate', B: 'Repo rate', C: 'Import duty', D: 'GST rate' },
        correctOption: 'B',
        explanation: 'The repo rate is the RBI’s primary monetary policy tool for managing inflation and liquidity.',
      },
      {
        question: 'The Union Budget covers a fiscal year running from:',
        options: { A: 'Jan–Dec', B: 'April–March', C: 'July–June', D: 'Oct–Sep' },
        correctOption: 'B',
        explanation: 'India’s fiscal year runs from 1 April to 31 March.',
      },
      {
        question: 'Fiscal deficit is expressed as a percentage of:',
        options: { A: 'Exports', B: 'GDP', C: 'Population', D: 'Imports' },
        correctOption: 'B',
        explanation: 'Fiscal deficit is conventionally reported as a percentage of GDP.',
      },
    ],
  },
  {
    examKey: 'upsc',
    subject: 'Geography',
    title: 'Physical and Indian geography basics',
    summary: 'Landforms, the Tropic of Cancer, and India’s monsoon system.',
    content: [
      "India spans a wide range of physical features: the Himalayan mountain system in the north, the Indo-Gangetic plains, the Deccan Plateau, and coastal plains flanking the peninsula.",
      'The Tropic of Cancer passes through eight Indian states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram.',
      "India's monsoon system — the southwest monsoon (June–September) and the northeast/retreating monsoon (October–December) — governs agriculture, river flow, and regional climate variation across the subcontinent.",
    ],
    quiz: [
      {
        question: "Which mountain system lies in India's north?",
        options: { A: 'Aravalli', B: 'Himalayas', C: 'Western Ghats', D: 'Vindhya' },
        correctOption: 'B',
        explanation: 'The Himalayas form India’s northern mountain boundary.',
      },
      {
        question: 'The southwest monsoon typically arrives in India during:',
        options: { A: 'Dec–Feb', B: 'Mar–May', C: 'Jun–Sep', D: 'Oct–Nov' },
        correctOption: 'C',
        explanation: 'The southwest monsoon season runs from June to September.',
      },
      {
        question: 'The Deccan Plateau is located in which part of India?',
        options: { A: 'North', B: 'Peninsular / South', C: 'Northeast', D: 'Northwest' },
        correctOption: 'B',
        explanation: 'The Deccan Plateau covers most of peninsular (southern) India.',
      },
    ],
  },
  {
    examKey: 'upsc',
    subject: 'Ethics',
    title: 'Ethics, integrity and aptitude for GS Paper IV',
    summary: 'Attitude, emotional intelligence and probity in public life.',
    content: [
      'GS Paper IV of the UPSC Mains examines ethics, integrity, and aptitude — testing how candidates apply moral reasoning to administrative situations rather than recalling facts.',
      'Core concepts include: attitude (a learned predisposition), emotional intelligence (self-awareness and empathy in decision-making), and probity in governance (transparency, accountability, and freedom from corruption in public life).',
      'Case studies form a major component, requiring candidates to weigh competing values — such as loyalty versus the larger public interest — and justify a reasoned, ethically defensible course of action.',
    ],
    quiz: [
      {
        question: 'GS Paper IV primarily tests:',
        options: { A: 'Historical facts', B: 'Ethics and aptitude', C: 'Geography', D: 'Economy' },
        correctOption: 'B',
        explanation: 'GS Paper IV is dedicated to Ethics, Integrity and Aptitude.',
      },
      {
        question: 'Probity in governance refers to:',
        options: { A: 'Personal wealth', B: 'Transparency and integrity in public life', C: 'Political loyalty', D: 'Speed of decisions' },
        correctOption: 'B',
        explanation: 'Probity means adherence to transparency, accountability and integrity in public conduct.',
      },
      {
        question: 'Emotional intelligence includes:',
        options: { A: 'Only IQ', B: 'Self-awareness and empathy', C: 'Physical strength', D: 'Memory power' },
        correctOption: 'B',
        explanation: 'Emotional intelligence centres on self-awareness, self-regulation and empathy.',
      },
    ],
  },
  {
    examKey: 'mpsc',
    subject: 'Polity',
    title: "Maharashtra's state government structure",
    summary: 'Vidhan Sabha, Vidhan Parishad, and the three-tier Panchayati Raj.',
    content: [
      "Maharashtra's state legislature is bicameral, comprising the Vidhan Sabha (Legislative Assembly, directly elected) and the Vidhan Parishad (Legislative Council, partly nominated and indirectly elected) — one of only six states retaining a Council.",
      'The Governor of Maharashtra, appointed by the President, acts as the constitutional head of state, while real executive power rests with the Chief Minister and Council of Ministers, collectively responsible to the Vidhan Sabha.',
      "Panchayati Raj in Maharashtra operates through a three-tier system — Zilla Parishad, Panchayat Samiti, and Gram Panchayat — strengthened by the 73rd Constitutional Amendment of 1992.",
    ],
    quiz: [
      {
        question: "Maharashtra's Legislative Council is also known as:",
        options: { A: 'Lok Sabha', B: 'Vidhan Parishad', C: 'Rajya Sabha', D: 'Zilla Parishad' },
        correctOption: 'B',
        explanation: 'The Legislative Council of Maharashtra is called the Vidhan Parishad.',
      },
      {
        question: 'The three-tier Panchayati Raj system was strengthened by which amendment?',
        options: { A: '42nd', B: '61st', C: '73rd', D: '86th' },
        correctOption: 'C',
        explanation: 'The 73rd Constitutional Amendment (1992) gave Panchayati Raj institutions constitutional status.',
      },
      {
        question: 'Who is the constitutional head of Maharashtra state?',
        options: { A: 'Chief Minister', B: 'Governor', C: 'Speaker', D: 'Chief Justice' },
        correctOption: 'B',
        explanation: 'The Governor is the nominal, constitutional head of the state.',
      },
    ],
  },
  {
    examKey: 'mpsc',
    subject: 'Maharashtra',
    title: 'Maharashtra — state formation, geography and culture',
    summary: 'From the 1960 bifurcation to the Sahyadris and the Maratha legacy.',
    content: [
      'Maharashtra, formed on 1 May 1960 through the bifurcation of Bombay State along linguistic lines, is India’s second-most populous state, with Mumbai as its capital and financial hub.',
      "The state's geography spans the Western Ghats (Sahyadri range), the Deccan Plateau, and a coastal Konkan belt, giving it varied agro-climatic zones for crops like cotton, sugarcane, and grapes.",
      'Maharashtra has a rich cultural and historical legacy — from the Maratha Empire under Chhatrapati Shivaji Maharaj in the 17th century to being a leading centre of India’s industrial and film output today.',
    ],
    quiz: [
      {
        question: 'Maharashtra was formed on:',
        options: { A: '26 January 1950', B: '1 May 1960', C: '15 August 1947', D: '2 October 1969' },
        correctOption: 'B',
        explanation: 'Maharashtra was formed on 1 May 1960 from the bifurcation of Bombay State.',
      },
      {
        question: 'The Sahyadri range is another name for the:',
        options: { A: 'Himalayas', B: 'Western Ghats', C: 'Eastern Ghats', D: 'Aravallis' },
        correctOption: 'B',
        explanation: 'The Western Ghats are locally known as the Sahyadri range.',
      },
      {
        question: 'The Maratha Empire is most associated with:',
        options: { A: 'Akbar', B: 'Chhatrapati Shivaji Maharaj', C: 'Ashoka', D: 'Tipu Sultan' },
        correctOption: 'B',
        explanation: 'Chhatrapati Shivaji Maharaj founded the Maratha Empire in the 17th century.',
      },
    ],
  },
  {
    examKey: 'mpsc',
    subject: 'Economy',
    title: "Maharashtra's economy",
    summary: 'Mumbai’s financial role, industrial belts and cooperative institutions.',
    content: [
      'Maharashtra has consistently been among India’s largest state economies by GSDP, anchored by Mumbai’s role as the country’s financial capital, home to the BSE, NSE, and RBI headquarters.',
      "The state's economy is diversified across agriculture (cotton, sugarcane, horticulture), a strong industrial base (automobiles, textiles, chemicals in belts like Pune and Nashik), and a fast-growing services and IT sector.",
      "Cooperative institutions, especially sugar cooperatives and cooperative banks, have historically played an outsized role in rural Maharashtra's economic and political structure.",
    ],
    quiz: [
      {
        question: "India's stock exchanges BSE and NSE are headquartered in:",
        options: { A: 'Delhi', B: 'Mumbai', C: 'Pune', D: 'Nagpur' },
        correctOption: 'B',
        explanation: 'Both the BSE and NSE are headquartered in Mumbai.',
      },
      {
        question: "Which crop is strongly associated with Maharashtra's cooperative sector?",
        options: { A: 'Wheat', B: 'Sugarcane', C: 'Tea', D: 'Coffee' },
        correctOption: 'B',
        explanation: 'Sugarcane cooperatives are a major feature of rural Maharashtra’s economy.',
      },
      {
        question: "Maharashtra's economy is best described as:",
        options: { A: 'Purely agricultural', B: 'Diversified across agriculture, industry and services', C: 'Only services', D: 'Only IT' },
        correctOption: 'B',
        explanation: 'Maharashtra has a diversified economy spanning agriculture, industry and services.',
      },
    ],
  },
  {
    examKey: 'mpsc',
    subject: 'Science',
    title: 'General science foundations',
    summary: 'Basic physics, chemistry and biology for MPSC.',
    content: [
      'General science sections for MPSC cover basic physics, chemistry, and biology at a foundational level, with emphasis on everyday applications and simple numerical concepts rather than advanced theory.',
      "Physics topics typically include units and measurement, motion and force (Newton's laws), and simple electricity concepts (Ohm's law, series/parallel circuits).",
      'Biology and chemistry sections often focus on the human body’s organ systems, common diseases and their prevention, and basic chemical reactions relevant to daily life, such as acids, bases, and salts.',
    ],
    quiz: [
      {
        question: "Newton's laws primarily describe:",
        options: { A: 'Chemical reactions', B: 'Motion and force', C: 'Cell biology', D: 'Genetics' },
        correctOption: 'B',
        explanation: 'Newton’s three laws of motion govern how forces affect the motion of objects.',
      },
      {
        question: "Ohm's law relates voltage, current, and:",
        options: { A: 'Mass', B: 'Resistance', C: 'Time', D: 'Temperature only' },
        correctOption: 'B',
        explanation: 'Ohm’s law states V = IR, relating voltage, current and resistance.',
      },
      {
        question: 'Acids and bases are typically studied under:',
        options: { A: 'Physics', B: 'Chemistry', C: 'Botany', D: 'Zoology' },
        correctOption: 'B',
        explanation: 'Acids, bases and salts are core topics in chemistry.',
      },
    ],
  },
  {
    examKey: 'ssc',
    subject: 'Quant',
    title: 'Quantitative aptitude for SSC CGL',
    summary: 'Percentages, interest, and time-speed-distance fundamentals.',
    content: [
      "SSC CGL's quantitative aptitude section tests speed and accuracy across arithmetic (percentages, ratio, simple and compound interest, time-speed-distance) and basic algebra/geometry.",
      'Simple interest and compound interest problems are staples — SI = (P×R×T)/100, while CI compounds the principal each period, producing a larger amount over time for the same rate and duration.',
      'Time-speed-distance problems often convert units between km/h and m/s (multiply by 5/18 or 18/5), and combine with concepts like relative speed for trains, boats, and races.',
    ],
    quiz: [
      {
        question: 'The formula for Simple Interest is:',
        options: { A: 'P×R×T', B: '(P×R×T)/100', C: 'P+R+T', D: '(P×T)/R' },
        correctOption: 'B',
        explanation: 'Simple Interest = (Principal × Rate × Time) / 100.',
      },
      {
        question: 'To convert km/h to m/s, you multiply by:',
        options: { A: '18/5', B: '5/18', C: '10', D: '1/10' },
        correctOption: 'B',
        explanation: 'Multiplying by 5/18 converts km/h to m/s.',
      },
      {
        question: 'Compound interest differs from simple interest because it:',
        options: { A: 'Ignores time', B: 'Compounds on the growing principal', C: 'Is always lower', D: 'Applies only to loans' },
        correctOption: 'B',
        explanation: 'Compound interest is calculated on the principal plus previously accumulated interest.',
      },
    ],
  },
  {
    examKey: 'ssc',
    subject: 'Reasoning',
    title: 'Verbal and non-verbal reasoning for SSC',
    summary: 'Coding-decoding, blood relations, and figure-based reasoning.',
    content: [
      'Reasoning for SSC CGL is split into verbal (analogies, series, coding-decoding, blood relations) and non-verbal (figure series, mirror/water images, paper folding) types.',
      'Coding-decoding problems typically shift letters by a fixed alphabetical distance or apply a pattern between two related words, which must be decoded and reapplied to a new word.',
      'Blood relation and direction-sense questions require careful diagramming — plotting family trees or cardinal directions step by step — to avoid careless errors under time pressure.',
    ],
    quiz: [
      {
        question: 'Non-verbal reasoning primarily deals with:',
        options: { A: 'Words', B: 'Numbers only', C: 'Figures and images', D: 'Grammar' },
        correctOption: 'C',
        explanation: 'Non-verbal reasoning is based on figures, patterns and images rather than words or numbers.',
      },
      {
        question: 'In coding-decoding, letters are often shifted by a:',
        options: { A: 'Random amount each time', B: 'Fixed alphabetical distance', C: 'Color', D: 'Sound' },
        correctOption: 'B',
        explanation: 'Most coding-decoding patterns use a consistent, fixed shift.',
      },
      {
        question: 'Blood relation questions are best solved using:',
        options: { A: 'Long division', B: 'A family tree diagram', C: 'Guesswork', D: 'Percentages' },
        correctOption: 'B',
        explanation: 'Drawing a family tree makes blood relation puzzles far less error-prone.',
      },
    ],
  },
  {
    examKey: 'ssc',
    subject: 'English',
    title: 'English grammar and vocabulary for SSC',
    summary: 'Error spotting, synonyms/antonyms, and comprehension basics.',
    content: [
      'The English section for SSC exams tests grammar (tenses, subject-verb agreement, prepositions), vocabulary (synonyms, antonyms, one-word substitutions), and comprehension of short passages.',
      'Common error-spotting questions require identifying the ungrammatical part of a sentence — frequent culprits include incorrect tense usage, wrong prepositions, and subject-verb mismatches.',
      'Building vocabulary through daily reading and practising idioms/phrases significantly improves accuracy in both direct vocabulary questions and comprehension-based inference questions.',
    ],
    quiz: [
      {
        question: 'Error-spotting questions most often test:',
        options: { A: 'Handwriting', B: 'Grammar mistakes', C: 'Spelling of names only', D: 'Punctuation only' },
        correctOption: 'B',
        explanation: 'Error-spotting questions are designed to catch common grammatical mistakes.',
      },
      {
        question: '"Synonym" questions ask for a word with:',
        options: { A: 'Opposite meaning', B: 'Similar meaning', C: 'No meaning', D: 'A rhyme' },
        correctOption: 'B',
        explanation: 'A synonym is a word with a meaning similar to another word.',
      },
      {
        question: 'Subject-verb agreement means:',
        options: { A: 'The subject and verb must match in number', B: 'The sentence must be short', C: 'The verb must be in past tense', D: 'The subject must be a noun' },
        correctOption: 'A',
        explanation: 'Subject-verb agreement requires singular subjects to take singular verbs, and plural subjects plural verbs.',
      },
    ],
  },
  {
    examKey: 'ssc',
    subject: 'GK',
    title: 'General knowledge and current affairs for SSC',
    summary: 'Static GK plus recent government schemes and events.',
    content: [
      'The General Knowledge section for SSC exams spans static GK (history, polity, geography, science) and current affairs (recent government schemes, awards, sports events, appointments).',
      'Static GK questions are often fact-recall based — capitals, rivers, important dates, and constitutional articles — rewarding consistent revision over last-minute cramming.',
      'Current affairs preparation typically relies on the last 6–12 months of news, with special attention to government schemes, budget highlights, and national/international summits.',
    ],
    quiz: [
      {
        question: 'Static GK typically includes:',
        options: { A: "Only yesterday's news", B: 'History, polity, geography and science facts', C: 'Only sports', D: 'Only movies' },
        correctOption: 'B',
        explanation: 'Static GK covers stable, fact-based knowledge across history, polity, geography and science.',
      },
      {
        question: 'Current affairs preparation usually focuses on the last:',
        options: { A: '6–12 months', B: '10 years', C: '1 day', D: '50 years' },
        correctOption: 'A',
        explanation: 'Exam-relevant current affairs typically span the preceding 6 to 12 months.',
      },
      {
        question: 'A useful source for current affairs is:',
        options: { A: 'Old textbooks only', B: 'Government schemes and budget highlights', C: 'Fiction novels', D: 'None of the above' },
        correctOption: 'B',
        explanation: 'Recent government schemes and budget highlights are common current affairs sources.',
      },
    ],
  },
  {
    examKey: 'banking',
    subject: 'Reasoning',
    title: 'Puzzles and syllogisms for banking exams',
    summary: 'Seating arrangements, box puzzles, and Venn-style syllogism logic.',
    content: [
      'Banking exam reasoning sections emphasize puzzles (seating arrangement, floor-based, box-based) and syllogisms, which test logical deduction under strict time limits.',
      'Seating arrangement puzzles require systematically placing entities based on given clues, often needing multiple passes to resolve ambiguous conditions before reaching a unique arrangement.',
      'Syllogisms test whether a conclusion logically follows from given statements, using Venn-diagram-style reasoning to check for "all," "some," and "no" relationships.',
    ],
    quiz: [
      {
        question: 'Seating arrangement puzzles are best solved using:',
        options: { A: 'Guesswork', B: 'Systematic placement from given clues', C: 'Memorization', D: 'Ignoring conditions' },
        correctOption: 'B',
        explanation: 'Systematically applying each clue is the reliable way to resolve seating puzzles.',
      },
      {
        question: 'Syllogism questions test whether a conclusion:',
        options: { A: 'Rhymes with the statement', B: 'Logically follows from the statements', C: 'Is grammatically correct', D: 'Is numerically accurate' },
        correctOption: 'B',
        explanation: 'Syllogisms test strict logical deduction from the given statements.',
      },
      {
        question: 'Banking reasoning puzzles commonly include:',
        options: { A: 'Only word problems', B: 'Seating and box-based puzzles', C: 'Only math', D: 'Only English grammar' },
        correctOption: 'B',
        explanation: 'Seating arrangement and box-based puzzles are staples of banking reasoning sections.',
      },
    ],
  },
  {
    examKey: 'banking',
    subject: 'Quant',
    title: 'Data interpretation and quant for banking',
    summary: 'Graphs, tables, and fast approximation techniques.',
    content: [
      'Banking quantitative aptitude leans heavily on data interpretation — reading bar graphs, pie charts, and tables to answer calculation-based questions quickly.',
      'Simplification and approximation questions test speed with basic arithmetic operations, often expecting close estimates rather than exact long-form calculation.',
      'Topics like ratio-proportion, average, and percentage recur constantly, both as standalone questions and embedded within larger data interpretation sets.',
    ],
    quiz: [
      {
        question: 'Data Interpretation questions primarily involve:',
        options: { A: 'Reading and calculating from graphs/tables', B: 'Grammar rules', C: 'Vocabulary', D: 'History facts' },
        correctOption: 'A',
        explanation: 'DI questions require extracting and calculating from graphs, charts or tables.',
      },
      {
        question: 'Approximation questions expect:',
        options: { A: 'Exact long calculations always', B: 'Close, quick estimates', C: 'No calculation', D: 'Only percentages' },
        correctOption: 'B',
        explanation: 'Approximation questions reward fast, close estimates over exact computation.',
      },
      {
        question: 'A common recurring topic in banking quant is:',
        options: { A: 'Ratio and proportion', B: 'Poetry analysis', C: 'Chemical formulas', D: 'Historical dates' },
        correctOption: 'A',
        explanation: 'Ratio and proportion appears constantly across banking quant questions.',
      },
    ],
  },
  {
    examKey: 'banking',
    subject: 'English',
    title: 'English for banking exams',
    summary: 'Cloze tests, para-jumbles, and comprehension strategy.',
    content: [
      'Banking English tests reading comprehension, cloze tests (fill-in-the-blank passages), and sentence correction/rearrangement, evaluating both grammar and comprehension speed.',
      'Cloze test passages remove several words, requiring candidates to select options that fit both grammatically and contextually with the surrounding sentence.',
      'Para-jumbles (sentence rearrangement) test logical flow — identifying the opening and closing sentences first often makes reconstructing the correct order faster.',
    ],
    quiz: [
      {
        question: 'Cloze tests require selecting words that fit:',
        options: { A: 'Only grammar, ignoring context', B: 'Both grammar and context', C: 'Only length', D: 'Only spelling' },
        correctOption: 'B',
        explanation: 'A correct cloze answer must fit both grammatically and contextually.',
      },
      {
        question: "Para-jumbles test a candidate's sense of:",
        options: { A: 'Logical sentence flow', B: 'Vocabulary size only', C: 'Handwriting', D: 'Numerical ability' },
        correctOption: 'A',
        explanation: 'Para-jumbles test the ability to reconstruct logically flowing paragraphs.',
      },
      {
        question: 'A good first step in para-jumbles is to identify:',
        options: { A: 'The middle sentence', B: 'The opening and closing sentences', C: 'Random sentences', D: 'The longest sentence' },
        correctOption: 'B',
        explanation: 'Fixing the opening and closing sentences first narrows down the possible orderings.',
      },
    ],
  },
  {
    examKey: 'banking',
    subject: 'Awareness',
    title: 'Banking and financial awareness',
    summary: 'RBI, bank types, monetary tools, and key financial terms.',
    content: [
      "Banking awareness covers the structure of India's financial system — RBI's role as regulator, types of banks (public, private, cooperative, payment banks), and key monetary policy tools like CRR and SLR.",
      'Important terms include NPA (Non-Performing Asset — a loan in default), MCLR (Marginal Cost of Funds based Lending Rate), and financial inclusion schemes like Pradhan Mantri Jan Dhan Yojana.',
      'Static banking awareness (headquarters, founding years, taglines of banks) is combined with current banking-sector news — policy rate changes, new RBI guidelines, and major bank mergers.',
    ],
    quiz: [
      {
        question: "RBI's role in the banking system is best described as:",
        options: { A: 'A commercial bank', B: 'The regulator and central bank', C: 'A private lender', D: 'A stock exchange' },
        correctOption: 'B',
        explanation: 'The RBI is India’s central bank and banking-sector regulator.',
      },
      {
        question: 'An NPA refers to:',
        options: { A: 'A new bank product', B: 'A loan in default', C: 'A savings account', D: 'A type of cheque' },
        correctOption: 'B',
        explanation: 'A Non-Performing Asset is a loan on which repayment has defaulted.',
      },
      {
        question: 'CRR and SLR are examples of:',
        options: { A: 'Loan products', B: 'Monetary policy tools', C: 'Insurance schemes', D: 'Tax categories' },
        correctOption: 'B',
        explanation: 'Cash Reserve Ratio and Statutory Liquidity Ratio are monetary policy tools used by the RBI.',
      },
    ],
  },
  {
    examKey: 'neet',
    subject: 'Physics',
    title: 'NEET physics fundamentals',
    summary: 'Kinematics, electrostatics, and current electricity essentials.',
    content: [
      'NEET physics blends conceptual understanding with numerical problem-solving across mechanics, electricity & magnetism, optics, and modern physics.',
      "Kinematics equations (v = u + at, s = ut + ½at², v² = u² + 2as) form the foundation for motion problems, extending into laws of motion, work-energy theorem, and rotational mechanics.",
      "Electrostatics and current electricity — covering electric field, potential, Ohm's law, and circuits — are heavily weighted, given their frequent appearance in NEET's physics section.",
    ],
    quiz: [
      {
        question: 'Which equation relates final velocity, initial velocity, acceleration, and time?',
        options: { A: 's = ut + ½at²', B: 'v = u + at', C: 'v² = u² + 2as', D: 'F = ma' },
        correctOption: 'B',
        explanation: 'v = u + at is the first kinematics equation, relating velocity, acceleration and time.',
      },
      {
        question: 'Electrostatics primarily deals with:',
        options: { A: 'Moving charges only', B: 'Charges at rest and their fields', C: 'Magnetism only', D: 'Sound waves' },
        correctOption: 'B',
        explanation: 'Electrostatics studies charges at rest and the electric fields they produce.',
      },
      {
        question: 'The work-energy theorem relates work done to a change in:',
        options: { A: 'Momentum', B: 'Kinetic energy', C: 'Charge', D: 'Temperature' },
        correctOption: 'B',
        explanation: 'The work-energy theorem states that net work done equals the change in kinetic energy.',
      },
    ],
  },
  {
    examKey: 'neet',
    subject: 'Chemistry',
    title: 'NEET chemistry fundamentals',
    summary: 'Mole concept, periodic trends, and organic reaction basics.',
    content: [
      'NEET chemistry spans three branches: physical (mole concept, thermodynamics, equilibrium), inorganic (periodic table trends, chemical bonding), and organic (hydrocarbons, functional groups, reaction mechanisms).',
      "The mole concept underlies most physical chemistry numericals — one mole of any substance contains Avogadro's number (6.022×10²³) of particles, linking mass, volume, and particle count.",
      'Organic chemistry rewards understanding reaction mechanisms and functional group behaviour over rote memorisation, since NEET frequently tests the "why" behind a reaction, not just the product.',
    ],
    quiz: [
      {
        question: "Avogadro's number is approximately:",
        options: { A: '6.022×10²²', B: '6.022×10²³', C: '3.14×10²³', D: '9.8×10²³' },
        correctOption: 'B',
        explanation: 'Avogadro’s number is 6.022 × 10²³ particles per mole.',
      },
      {
        question: "NEET chemistry's three main branches are physical, inorganic, and:",
        options: { A: 'Organic', B: 'Nuclear', C: 'Analytical', D: 'Environmental' },
        correctOption: 'A',
        explanation: 'The three branches tested are physical, inorganic and organic chemistry.',
      },
      {
        question: 'Understanding organic chemistry reaction mechanisms helps with:',
        options: { A: 'Memorizing dates', B: 'Predicting products and behaviour', C: 'Physics problems', D: 'Grammar' },
        correctOption: 'B',
        explanation: 'Knowing the mechanism lets you predict products and reactivity, not just recall them.',
      },
    ],
  },
  {
    examKey: 'neet',
    subject: 'Biology',
    title: 'NEET biology fundamentals',
    summary: 'Genetics, molecular biology, and human physiology essentials.',
    content: [
      'NEET biology, covering the largest weightage of the exam, spans botany and zoology — from cell structure and genetics to human physiology and ecology, closely aligned with the NCERT textbooks.',
      "Genetics and molecular biology (Mendelian inheritance, DNA structure, and the central dogma of molecular biology) are consistently high-yield chapters given their frequent appearance in NEET.",
      'Human physiology — digestion, circulation, respiration, and the nervous and endocrine systems — is tested with both conceptual and diagram-based questions.',
    ],
    quiz: [
      {
        question: 'NEET biology questions are closely aligned with:',
        options: { A: 'Wikipedia articles', B: 'NCERT textbooks', C: 'News articles', D: 'Random sources' },
        correctOption: 'B',
        explanation: 'NEET biology questions closely follow the NCERT syllabus and phrasing.',
      },
      {
        question: 'The "central dogma of molecular biology" describes the flow from:',
        options: { A: 'DNA to RNA to protein', B: 'Protein to DNA', C: 'RNA to DNA only', D: 'Cell to organ' },
        correctOption: 'A',
        explanation: 'The central dogma describes information flow: DNA → RNA → protein.',
      },
      {
        question: 'Human physiology topics include:',
        options: { A: 'Only bones', B: 'Digestion, circulation and respiration', C: 'Only skin', D: 'Only reproduction' },
        correctOption: 'B',
        explanation: 'Human physiology covers major organ systems including digestion, circulation and respiration.',
      },
    ],
  },
  {
    examKey: 'jee',
    subject: 'Physics',
    title: 'JEE physics fundamentals',
    summary: 'Rotational mechanics, electromagnetic induction, and calculus-based problem solving.',
    content: [
      "JEE physics demands rigorous problem-solving beyond NEET's conceptual focus, especially in mechanics, electromagnetism, and modern physics, often combining multiple concepts in a single problem.",
      "Rotational mechanics (moment of inertia, torque, angular momentum conservation) and electromagnetic induction (Faraday's and Lenz's laws) are consistently high-weightage, numerically intensive topics.",
      'JEE Advanced problems frequently require calculus-based approaches — differentiation and integration applied to kinematics, work-energy problems, and circuit analysis.',
    ],
    quiz: [
      {
        question: 'Rotational mechanics deals with concepts like torque and:',
        options: { A: 'Simple interest', B: 'Moment of inertia', C: 'Mole concept', D: 'Osmosis' },
        correctOption: 'B',
        explanation: 'Moment of inertia is the rotational analogue of mass in rotational mechanics.',
      },
      {
        question: "Faraday's and Lenz's laws are central to:",
        options: { A: 'Electromagnetic induction', B: 'Organic chemistry', C: 'Genetics', D: 'Thermodynamics only' },
        correctOption: 'A',
        explanation: 'Faraday’s and Lenz’s laws govern electromagnetic induction.',
      },
      {
        question: 'JEE Advanced physics problems often require:',
        options: { A: 'Rote memorization only', B: 'Calculus-based approaches', C: 'Ignoring units', D: 'Only verbal reasoning' },
        correctOption: 'B',
        explanation: 'Many JEE Advanced problems need differentiation/integration, not just formula recall.',
      },
    ],
  },
  {
    examKey: 'jee',
    subject: 'Chemistry',
    title: 'JEE chemistry fundamentals',
    summary: 'Chemical kinetics, coordination compounds, and periodic trends.',
    content: [
      'JEE chemistry places heavier emphasis on physical chemistry numericals (thermodynamics, electrochemistry, chemical kinetics) compared to NEET, alongside deep organic reaction mechanisms.',
      'Chemical kinetics — reaction rates, order of reaction, and rate constants — is a numerically rich, high-weightage topic requiring a strong grasp of differential rate laws.',
      "Coordination compounds and periodic properties (ionization energy, electronegativity trends) form the backbone of JEE's inorganic chemistry, often tested through trend-based conceptual questions.",
    ],
    quiz: [
      {
        question: 'Chemical kinetics primarily studies:',
        options: { A: 'Reaction rates', B: 'Cell division', C: 'Human anatomy', D: 'Grammar' },
        correctOption: 'A',
        explanation: 'Chemical kinetics is the study of the rates of chemical reactions.',
      },
      {
        question: 'JEE chemistry emphasizes more than NEET in:',
        options: { A: 'Physical chemistry numericals', B: 'Handwriting', C: 'History', D: 'Geography' },
        correctOption: 'A',
        explanation: 'JEE places heavier weight on physical chemistry numericals than NEET.',
      },
      {
        question: 'Periodic properties include trends like:',
        options: { A: 'Ionization energy and electronegativity', B: 'Blood types', C: 'Musical notes', D: 'Currency rates' },
        correctOption: 'A',
        explanation: 'Ionization energy and electronegativity are classic periodic trends.',
      },
    ],
  },
  {
    examKey: 'jee',
    subject: 'Maths',
    title: 'JEE mathematics fundamentals',
    summary: 'Calculus, coordinate geometry, and speed-focused problem solving.',
    content: [
      'JEE mathematics covers algebra, calculus, coordinate geometry, and trigonometry, with calculus (limits, differentiation, integration) typically carrying the highest weightage.',
      "Coordinate geometry — straight lines, circles, and conic sections (parabola, ellipse, hyperbola) — tests both algebraic manipulation and geometric visualization.",
      'Problem-solving speed matters as much as accuracy: JEE maths frequently rewards recognizing a shortcut or standard technique over lengthy first-principles derivation.',
    ],
    quiz: [
      {
        question: 'Which branch typically carries the highest weightage in JEE maths?',
        options: { A: 'Trigonometry', B: 'Calculus', C: 'Statistics', D: 'Set theory' },
        correctOption: 'B',
        explanation: 'Calculus (limits, differentiation, integration) typically carries the highest weightage in JEE maths.',
      },
      {
        question: 'Conic sections include parabola, ellipse, and:',
        options: { A: 'Hyperbola', B: 'Triangle', C: 'Rectangle', D: 'Polygon' },
        correctOption: 'A',
        explanation: 'The conic sections are the circle, parabola, ellipse and hyperbola.',
      },
      {
        question: 'JEE maths rewards:',
        options: { A: 'Only long derivations', B: 'Recognizing shortcuts and standard techniques', C: 'Ignoring formulas', D: 'Guesswork' },
        correctOption: 'B',
        explanation: 'Speed matters in JEE maths, so recognizing standard shortcuts pays off.',
      },
    ],
  },
];

export const notesData: Note[] = [];
export const notesQuizSeries: TestSeries[] = [];
export const notesQuizQuestions: Question[] = [];

for (const seed of seeds) {
  const subjectSlug = slugifySubject(seed.subject);
  const noteSlug = `${seed.examKey}-${subjectSlug}`;
  const quizSlug = `notes-quiz-${seed.examKey}-${subjectSlug}`;
  const quizId = `ts-notes-${seed.examKey}-${subjectSlug}`;

  notesData.push({
    id: `note-${seed.examKey}-${subjectSlug}`,
    slug: noteSlug,
    examKey: seed.examKey,
    subject: seed.subject,
    title: seed.title,
    summary: seed.summary,
    content: seed.content,
    quizSlug,
  });

  notesQuizSeries.push({
    id: quizId,
    title: `${seed.subject} — recap quiz`,
    slug: quizSlug,
    description: `A quick, ungraded quiz to check what you remember from the ${seed.subject} notes.`,
    tier: 'FREE',
    examKey: seed.examKey,
    kind: 'NOTES_QUIZ',
  });

  seed.quiz.forEach((q, i) => {
    notesQuizQuestions.push({
      id: `q-notes-${seed.examKey}-${subjectSlug}-${i + 1}`,
      testSeriesId: quizId,
      questionText: q.question,
      options: JSON.stringify(q.options),
      correctOption: q.correctOption,
      explanation: q.explanation,
      marks: 1,
      negativeMarks: 0,
    });
  });
}
