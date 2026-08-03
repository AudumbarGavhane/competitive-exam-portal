// src/data/courseTopics.ts
//
// Dummy tutorial-style topic content, nested by course -> subject -> topic —
// the left-sidebar chapters on a /courses/[courseSlug]/[subjectSlug]/[topicSlug]
// page. Placeholder copy for now; swap for real/SSG-sourced content later
// without changing the shape consumed by coursesService.

import type { CourseTopic } from '@/types/index';

type TopicSeed = {
  title: string;
  content: string[];
};

// courseSlug -> subjectSlug -> ordered topics
const seeds: Record<string, Record<string, TopicSeed[]>> = {
  upsc: {
    polity: [
      {
        title: 'Constitution Basics',
        content: [
          'The Constitution of India, adopted on 26 January 1950, is organised into Parts, Articles and Schedules that lay out the structure of government.',
          'The Preamble states the document’s guiding ideals — sovereign, socialist, secular, democratic republic — and is used by courts to interpret ambiguous provisions.',
        ],
      },
      {
        title: 'Fundamental Rights & DPSP',
        content: [
          'Part III (Articles 12–35) guarantees Fundamental Rights — equality, freedom, and constitutional remedies — enforceable directly in courts.',
          'Part IV’s Directive Principles of State Policy are non-justiciable but guide the state toward social and economic welfare.',
        ],
      },
      {
        title: 'Parliament & Law-Making',
        content: [
          'Parliament is bicameral: the directly elected Lok Sabha and the permanent, indirectly elected Rajya Sabha.',
          'A Bill, except a Money Bill, must pass both Houses before it goes to the President for assent and becomes law.',
        ],
      },
    ],
    history: [
      {
        title: 'Revolt of 1857 to Congress',
        content: [
          'The Revolt of 1857 is widely seen as the first large-scale uprising against British rule, though it was suppressed within a year.',
          'The Indian National Congress, founded in 1885, began as a moderate platform for dialogue before radicalising over the following decades.',
        ],
      },
      {
        title: 'The Gandhian Era',
        content: [
          'Gandhi’s return from South Africa in 1915 introduced Satyagraha as a tool for mass, non-violent mobilisation.',
          'The Non-Cooperation (1920–22), Civil Disobedience (1930) and Quit India (1942) movements marked its three major phases.',
        ],
      },
      {
        title: 'Path to Independence',
        content: [
          'World War II weakened Britain’s hold and accelerated negotiations over India’s political future.',
          'Partition and independence arrived together on 15 August 1947, under the Mountbatten Plan.',
        ],
      },
    ],
    economy: [
      {
        title: 'Basics of the Indian Economy',
        content: [
          'India runs a mixed economy, combining private enterprise with public-sector planning across agriculture, industry and services.',
          'Understanding which sector a policy targets is the first step to making sense of most economy questions.',
        ],
      },
      {
        title: 'RBI & Monetary Policy',
        content: [
          'The Reserve Bank of India, established in 1935, regulates monetary policy — setting the repo rate to manage inflation and liquidity.',
          'Tools like CRR and SLR let the RBI control how much banks can lend, independent of the interest rate itself.',
        ],
      },
      {
        title: 'Union Budget & Fiscal Policy',
        content: [
          'The Union Budget, presented every February, outlines government revenue and expenditure for the April–March fiscal year.',
          'The fiscal deficit — expenditure minus revenue — is conventionally reported as a percentage of GDP.',
        ],
      },
    ],
    geography: [
      {
        title: 'Physical Features of India',
        content: [
          'India spans the Himalayan mountain system, the Indo-Gangetic plains, the Deccan Plateau, and coastal plains on both sides of the peninsula.',
          'Each region’s landform shapes its climate, drainage and the crops that grow best there.',
        ],
      },
      {
        title: 'Climate & Monsoon',
        content: [
          'The southwest monsoon (June–September) brings most of India’s annual rainfall and governs the agricultural calendar.',
          'The northeast, or retreating, monsoon (October–December) mainly affects the southeastern coast.',
        ],
      },
      {
        title: 'Rivers & Drainage',
        content: [
          'Himalayan rivers like the Ganga and Brahmaputra are perennial, fed by both rainfall and melting snow.',
          'Peninsular rivers like the Godavari and Krishna are rain-fed and seasonal by comparison.',
        ],
      },
    ],
    ethics: [
      {
        title: 'Attitude & Emotional Intelligence',
        content: [
          'Attitude is a learned predisposition that shapes how a person responds to a situation, distinct from a one-off reaction.',
          'Emotional intelligence — self-awareness, self-regulation and empathy — is repeatedly tested through case-study responses.',
        ],
      },
      {
        title: 'Probity in Governance',
        content: [
          'Probity means adherence to transparency, accountability and integrity in public conduct.',
          'Conflicts of interest and misuse of discretion are the most common probity failures examined in case studies.',
        ],
      },
      {
        title: 'Case Studies & Ethical Reasoning',
        content: [
          'A good case-study answer identifies every stakeholder before weighing the options.',
          'Reasoned trade-offs — loyalty versus public interest, for instance — matter more than picking the "correct" answer.',
        ],
      },
    ],
  },

  mpsc: {
    polity: [
      {
        title: "Maharashtra's Legislature",
        content: [
          'Maharashtra’s state legislature is bicameral — the directly elected Vidhan Sabha and the partly nominated Vidhan Parishad.',
          'It is one of only six Indian states to still retain a Legislative Council.',
        ],
      },
      {
        title: 'Governor & Council of Ministers',
        content: [
          'The Governor, appointed by the President, is the constitutional head of the state, while real executive power rests with the Chief Minister.',
          'The Council of Ministers is collectively responsible to the Vidhan Sabha, not to the Governor.',
        ],
      },
      {
        title: 'Panchayati Raj in Maharashtra',
        content: [
          'Local governance runs through a three-tier system — Zilla Parishad, Panchayat Samiti and Gram Panchayat.',
          'The 73rd Constitutional Amendment (1992) gave these bodies formal constitutional status.',
        ],
      },
    ],
    maharashtra: [
      {
        title: 'Formation of Maharashtra',
        content: [
          'Maharashtra was formed on 1 May 1960 through the linguistic bifurcation of Bombay State.',
          'It is India’s second-most populous state, with Mumbai as its capital and financial hub.',
        ],
      },
      {
        title: 'Geography of Maharashtra',
        content: [
          'The Western Ghats (Sahyadri range), the Deccan Plateau and the coastal Konkan belt give the state distinct agro-climatic zones.',
          'These zones support very different crops — cotton and sugarcane inland, grapes and rice closer to the coast.',
        ],
      },
      {
        title: 'History & Culture',
        content: [
          'The Maratha Empire, founded by Chhatrapati Shivaji Maharaj in the 17th century, remains central to the state’s historical identity.',
          'Maharashtra has also been a leading centre of India’s industrial and film output in the modern era.',
        ],
      },
    ],
    economy: [
      {
        title: 'Mumbai — Financial Capital',
        content: [
          'Mumbai hosts the BSE, NSE and RBI headquarters, making it India’s de facto financial capital.',
          'Maharashtra has consistently ranked among India’s largest state economies by GSDP.',
        ],
      },
      {
        title: 'Industrial Belts & Agriculture',
        content: [
          'Pune and Nashik anchor major industrial belts spanning automobiles, textiles and chemicals.',
          'Agriculture remains diversified — cotton, sugarcane and horticulture all feature prominently.',
        ],
      },
      {
        title: 'Cooperative Institutions',
        content: [
          'Sugar cooperatives and cooperative banks have historically shaped rural Maharashtra’s economy and politics.',
          'Their influence is a recurring theme in questions on the state’s rural development.',
        ],
      },
    ],
    science: [
      {
        title: 'Physics Basics',
        content: [
          'MPSC general science covers motion and force at a foundational level, built around Newton’s laws.',
          'Simple electricity concepts — Ohm’s law, series and parallel circuits — are equally common.',
        ],
      },
      {
        title: 'Chemistry Basics',
        content: [
          'Acids, bases and salts, and their everyday reactions, are the core chemistry topics tested.',
          'Questions favour applied, real-world framing over abstract formulas.',
        ],
      },
      {
        title: 'Biology Basics',
        content: [
          'Human body systems — digestive, circulatory, nervous — and common diseases are the main biology focus.',
          'Prevention and public health angles often accompany straightforward anatomy questions.',
        ],
      },
    ],
  },

  jee: {
    physics: [
      {
        title: 'Rotational Mechanics',
        content: [
          'Moment of inertia, torque and angular momentum conservation extend Newtonian mechanics to spinning bodies.',
          'JEE problems often combine rotation with translation in the same system, so track both together.',
        ],
      },
      {
        title: 'Electromagnetic Induction',
        content: [
          'Faraday’s and Lenz’s laws describe how a changing magnetic field induces an EMF, and in which direction it opposes the change.',
          'This topic carries heavy weightage and frequently appears alongside circuit analysis.',
        ],
      },
      {
        title: 'Calculus-Based Problem Solving',
        content: [
          'JEE Advanced problems often require differentiating or integrating a physical quantity rather than applying a fixed formula.',
          'Recognising when a problem needs calculus, versus a direct kinematics equation, saves significant time.',
        ],
      },
    ],
    chemistry: [
      {
        title: 'Chemical Kinetics',
        content: [
          'Chemical kinetics studies reaction rates — how fast reactants convert to products — through rate laws and rate constants.',
          'The order of a reaction is determined experimentally, not just from the balanced equation.',
        ],
      },
      {
        title: 'Coordination Compounds',
        content: [
          'Coordination compounds feature a central metal atom bonded to surrounding ligands through coordinate bonds.',
          'Their geometry and colour depend on the ligand field, a recurring theme in JEE inorganic chemistry.',
        ],
      },
      {
        title: 'Periodic Trends',
        content: [
          'Ionization energy, electronegativity and atomic radius all follow predictable trends across periods and down groups.',
          'Knowing the trend direction lets you reason out an answer instead of memorising individual values.',
        ],
      },
    ],
    maths: [
      {
        title: 'Calculus for JEE',
        content: [
          'Limits, differentiation and integration typically carry the highest weightage of any topic in JEE maths.',
          'Building fluency here pays off across nearly every other topic, since most problems eventually reduce to a calculus step.',
        ],
      },
      {
        title: 'Coordinate Geometry',
        content: [
          'Straight lines and circles are the base case; conics (parabola, ellipse, hyperbola) extend the same coordinate techniques.',
          'Sketching the curve first, even roughly, catches algebra mistakes a diagram would have flagged.',
        ],
      },
      {
        title: 'Problem-Solving Strategy',
        content: [
          'JEE rewards recognising a standard technique quickly over deriving from first principles under time pressure.',
          'Keeping a running list of "recognise this pattern, use this trick" notes pays off across practice sets.',
        ],
      },
    ],
  },

  mathematics: {
    mathematics: [
      {
        title: 'Numbers & Algebra Basics',
        content: [
          'Real numbers, exponents and basic algebraic manipulation are the toolkit every later topic assumes you already have.',
          'Practising simplification until it’s automatic pays off — it’s the step most careless errors happen in.',
        ],
      },
      {
        title: 'Linear Equations',
        content: [
          'A linear equation describes a straight-line relationship between variables — solving one means finding where that relationship holds.',
          'Systems of two or more linear equations can be solved by substitution, elimination, or graphically, each useful in different situations.',
        ],
      },
      {
        title: 'Quadratic Equations',
        content: [
          'A quadratic equation ax² + bx + c = 0 can be solved by factoring, completing the square, or the quadratic formula.',
          'The discriminant (b² − 4ac) tells you the nature of the roots before you even solve — real and distinct, real and equal, or complex.',
        ],
      },
      {
        title: 'Trigonometry Basics',
        content: [
          'Sine, cosine and tangent relate a right triangle’s angles to its side ratios — everything else in trigonometry builds on these three.',
          'The unit circle extends these ratios beyond 0–90°, which is what makes trigonometric identities and graphs make sense.',
        ],
      },
      {
        title: 'Introduction to Calculus',
        content: [
          'Differentiation measures how a quantity changes — the slope of a curve at a single point, rather than between two points.',
          'Integration does the reverse: it accumulates change, which is why it’s used to find areas under curves.',
        ],
      },
      {
        title: 'Probability & Statistics',
        content: [
          'Probability quantifies uncertainty — the chance of an event happening, expressed as a number between 0 and 1.',
          'Mean, median and mode summarise a data set in different ways; which one to use depends on what the data looks like.',
        ],
      },
    ],
  },

  physics: {
    physics: [
      {
        title: 'Units & Measurement',
        content: [
          'Every physical quantity needs a unit — the SI system standardises these so measurements are comparable across contexts.',
          'Dimensional analysis, checking that units match on both sides of an equation, catches a surprising number of errors early.',
        ],
      },
      {
        title: 'Laws of Motion',
        content: [
          'Newton’s three laws describe how objects move and how forces change that motion — inertia, F = ma, and action-reaction.',
          'Most mechanics problems reduce to identifying every force acting on an object and applying these laws carefully.',
        ],
      },
      {
        title: 'Work, Energy & Power',
        content: [
          'Work is done when a force moves an object; energy is the capacity to do work; power is how fast that work happens.',
          'The work-energy theorem links the two directly: net work done on an object equals its change in kinetic energy.',
        ],
      },
      {
        title: 'Electricity Basics',
        content: [
          'Current is the flow of charge, voltage is what drives it, and resistance opposes it — Ohm’s law ties the three together.',
          'Series and parallel circuits combine these components differently, which changes how current and voltage distribute.',
        ],
      },
      {
        title: 'Optics Basics',
        content: [
          'Light travels in straight lines until it reflects or refracts — the basis for how mirrors and lenses form images.',
          'Refraction, light bending as it crosses between media, is why a straw looks bent in a glass of water.',
        ],
      },
      {
        title: 'Modern Physics Intro',
        content: [
          'Modern physics covers the ideas classical physics couldn’t explain — the photoelectric effect, atomic structure, and radioactivity.',
          'These topics introduce the idea that energy and matter behave differently at very small scales than in everyday life.',
        ],
      },
    ],
  },

  chemistry: {
    chemistry: [
      {
        title: 'Atomic Structure',
        content: [
          'Atoms are made of protons, neutrons and electrons — their arrangement determines how an element behaves chemically.',
          'Electron configuration, how electrons fill energy levels, explains why the periodic table is shaped the way it is.',
        ],
      },
      {
        title: 'Periodic Table Trends',
        content: [
          'Elements are arranged by atomic number, and properties like atomic size, ionization energy and electronegativity follow predictable trends across it.',
          'Once you know the trend direction, you can often reason out an element’s behaviour without memorising it directly.',
        ],
      },
      {
        title: 'Chemical Bonding',
        content: [
          'Atoms bond to reach a more stable electron arrangement — by sharing electrons (covalent) or transferring them (ionic).',
          'The type of bond largely determines a compound’s physical properties, like melting point and conductivity.',
        ],
      },
      {
        title: 'States of Matter',
        content: [
          'Solids, liquids and gases differ in how tightly their particles are packed and how freely they move.',
          'Changing temperature or pressure can shift matter between these states — the basis of phase diagrams.',
        ],
      },
      {
        title: 'Acids, Bases & Salts',
        content: [
          'Acids donate protons (or accept electron pairs), bases do the opposite, and their reaction typically produces a salt and water.',
          'pH measures how acidic or basic a solution is, on a scale most commonly read from 0 to 14.',
        ],
      },
      {
        title: 'Organic Chemistry Basics',
        content: [
          'Organic chemistry studies carbon-based compounds — carbon’s ability to form four stable bonds is why it supports so much structural variety.',
          'Functional groups, specific atom arrangements within a molecule, are what give organic compounds their characteristic reactions.',
        ],
      },
    ],
  },
}

function slugifyTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export const courseTopics: CourseTopic[] = Object.entries(seeds).flatMap(
  ([courseSlug, bySubject]) =>
    Object.entries(bySubject).flatMap(([subjectSlug, topics]) =>
      topics.map((topic, i) => ({
        id: `topic-${courseSlug}-${subjectSlug}-${i + 1}`,
        courseSlug,
        subjectSlug,
        slug: slugifyTitle(topic.title),
        title: topic.title,
        order: i + 1,
        content: topic.content,
      })),
    ),
)
