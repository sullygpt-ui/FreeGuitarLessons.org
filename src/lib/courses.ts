export interface Course {
  slug: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  category: 'rhythm' | 'theory' | 'technique' | 'bundle';
  url: string;
  featured?: boolean;
}

export const courses: Course[] = [
  {
    slug: 'rrg1',
    name: 'Real Rhythm Guitar Level 1',
    price: '$45',
    description: 'Master the fundamentals of rhythm guitar with real-world strumming patterns, chord transitions, and timing exercises. Perfect for beginners who want to sound great fast.',
    features: ['HD video lessons', 'Downloadable practice tracks', 'Progressive difficulty', 'Real song applications'],
    category: 'rhythm',
    url: 'https://signalsmusic.studio/courses/rrg1?ref=sully',
    featured: true,
  },
  {
    slug: 'rrg2',
    name: 'Real Rhythm Guitar Level 2',
    price: '$45',
    description: 'Take your rhythm playing to the next level with advanced strumming, syncopation, muting techniques, and complex time signatures.',
    features: ['Advanced strumming patterns', 'Muting & ghost notes', 'Syncopation mastery', 'Genre-specific techniques'],
    category: 'rhythm',
    url: 'https://signalsmusic.studio/courses/rrg2?ref=sully',
    featured: true,
  },
  {
    slug: 'songwriting',
    name: 'Theory & Songwriting Course',
    price: '$270',
    description: 'A comprehensive deep-dive into music theory and songwriting. Learn how chords work together, how to craft melodies, and how to write complete songs from scratch.',
    features: ['Complete theory foundation', 'Songwriting frameworks', 'Melody & harmony', 'Arrangement techniques'],
    category: 'theory',
    url: 'https://signalsmusic.studio/courses/songwriting-course?ref=sully',
    featured: true,
  },
  {
    slug: 'codex',
    name: 'Chord Progression Codex',
    price: '$45',
    description: 'Unlock the secrets behind the chord progressions used in thousands of hit songs. A practical reference guide for songwriters and guitarists.',
    features: ['100+ chord progressions', 'Genre categorization', 'Audio examples', 'Songwriting applications'],
    category: 'theory',
    url: 'https://signalsmusic.studio/shop?ref=sully',
  },
  {
    slug: 'blues',
    name: '5-Day Blues Guitar Crash Course',
    price: 'Pay What You Can',
    description: 'Learn the essentials of blues guitar in just 5 days. Covers the 12-bar blues, essential licks, shuffle rhythms, and blues scale patterns.',
    features: ['5-day structured plan', 'Blues scale patterns', '12-bar blues mastery', 'Classic blues licks'],
    category: 'technique',
    url: 'https://signalsmusic.studio/shop?ref=sully',
  },
  {
    slug: 'intervals',
    name: 'Guitar Interval Course',
    price: 'Pay What You Can',
    description: 'Understand intervals on the fretboard — the building blocks of chords, scales, and melodies. Train your ear and unlock the neck.',
    features: ['Interval recognition', 'Fretboard visualization', 'Ear training exercises', 'Practical applications'],
    category: 'theory',
    url: 'https://signalsmusic.studio/shop?ref=sully',
  },
  {
    slug: 'barre',
    name: 'Mastering Barre Chord Technique',
    price: 'Pay What You Can',
    description: 'Finally conquer barre chords with proper technique, hand positioning, and progressive exercises that build strength and clarity.',
    features: ['Proper hand technique', 'Progressive exercises', 'Common barre shapes', 'Troubleshooting guide'],
    category: 'technique',
    url: 'https://signalsmusic.studio/shop?ref=sully',
  },
  {
    slug: 'bundle',
    name: 'RRG1 Bundle (Digital + Physical)',
    price: '$60',
    description: 'Get Real Rhythm Guitar Level 1 in both digital and physical formats. Includes the full digital course plus a printed companion book.',
    features: ['Full digital course', 'Physical companion book', 'Practice journal', 'Best value for RRG1'],
    category: 'bundle',
    url: 'https://signalsmusic.studio/shop?ref=sully',
  },
  {
    slug: 'codex-bundle',
    name: 'Codex Bundle (Digital + Physical)',
    price: '$90',
    description: 'The complete Chord Progression Codex in digital and physical formats. A beautiful reference book plus full digital access.',
    features: ['Digital + physical book', 'Premium print quality', 'Quick reference format', 'Lifetime digital access'],
    category: 'bundle',
    url: 'https://signalsmusic.studio/shop?ref=sully',
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getFeaturedCourses(): Course[] {
  return courses.filter((c) => c.featured);
}
