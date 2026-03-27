export interface Review {
  name: string;
  rating: number;
  text: string;
  course?: string;
  date: string;
}

export const reviews: Review[] = [
  {
    name: 'Jason M.',
    rating: 5,
    text: "Real Rhythm Guitar Level 1 completely changed how I approach the instrument. I'd been playing for two years but my strumming was stiff and robotic. After this course, I actually sound like I'm making music.",
    course: 'Real Rhythm Guitar Level 1',
    date: '2024-11-15',
  },
  {
    name: 'Sarah K.',
    rating: 5,
    text: "The Theory & Songwriting Course is worth every penny. I went from knowing zero theory to writing my own songs in about three months. The way concepts build on each other is brilliant.",
    course: 'Theory & Songwriting Course',
    date: '2024-10-22',
  },
  {
    name: 'Mike R.',
    rating: 5,
    text: "I've tried dozens of free YouTube tutorials and nothing stuck. The structured approach of Real Rhythm Guitar gave me a clear path forward. My wife even noticed the difference after the first week.",
    course: 'Real Rhythm Guitar Level 1',
    date: '2024-09-30',
  },
  {
    name: 'Emily T.',
    rating: 5,
    text: "The Chord Progression Codex is like having a cheat code for songwriting. Whenever I'm stuck, I flip through it and find inspiration immediately. It's become my most-used guitar resource.",
    course: 'Chord Progression Codex',
    date: '2024-12-05',
  },
  {
    name: 'David L.',
    rating: 4,
    text: "The 5-Day Blues Course packed so much into such a short time. I can now jam a 12-bar blues confidently at open mics. For a pay-what-you-can course, the value is insane.",
    course: '5-Day Blues Guitar Crash Course',
    date: '2024-08-18',
  },
  {
    name: 'Chris P.',
    rating: 5,
    text: "Level 2 of Real Rhythm Guitar took my playing from 'good enough' to genuinely impressive. The syncopation and muting lessons alone were worth the price of admission.",
    course: 'Real Rhythm Guitar Level 2',
    date: '2024-11-02',
  },
  {
    name: 'Amanda W.',
    rating: 5,
    text: "I struggled with barre chords for over a year. This course fixed my technique in two weeks. Turns out I was doing almost everything wrong with my hand position. Game changer.",
    course: 'Mastering Barre Chord Technique',
    date: '2024-07-14',
  },
  {
    name: 'Tom H.',
    rating: 5,
    text: "The interval course opened up the entire fretboard for me. I used to be stuck in the first three frets. Now I can find any note, any chord shape, anywhere on the neck.",
    course: 'Guitar Interval Course',
    date: '2024-10-08',
  },
  {
    name: 'Rachel N.',
    rating: 5,
    text: "As a complete beginner, the free lessons on this site gave me enough confidence to invest in the full courses. Six months later, I'm playing songs I never thought I could. Incredible journey.",
    date: '2025-01-12',
  },
  {
    name: 'Brandon S.',
    rating: 4,
    text: "I got the RRG1 physical bundle and the book is really well made. Having something to reference away from the screen makes practice sessions more focused. Highly recommend the bundle option.",
    course: 'RRG1 Bundle (Digital + Physical)',
    date: '2024-12-20',
  },
  {
    name: 'Lisa M.',
    rating: 5,
    text: "The songwriting course gave me a framework I never had. I used to just noodle aimlessly — now I actually finish songs. My band is impressed with how much I've improved.",
    course: 'Theory & Songwriting Course',
    date: '2025-01-28',
  },
  {
    name: 'Kevin D.',
    rating: 5,
    text: "These free guitar lessons are legitimately better than most paid content I've seen. The fact that the paid courses are even more in-depth is almost hard to believe. Signals Music Studio delivers.",
    date: '2025-02-03',
  },
];
