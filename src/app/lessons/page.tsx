import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Free Guitar Lessons',
  description: 'Browse our library of free guitar lessons — beginner guides, chord tutorials, tab reading, and more.',
  keywords: ['free guitar lessons', 'guitar tutorials', 'learn guitar free', 'guitar for beginners'],
  openGraph: { title: 'Free Guitar Lessons', description: 'Comprehensive free guitar lessons for all levels.' },
};

const lessons = [
  {
    title: 'How to Play Guitar: Complete Beginner\'s Guide',
    description: 'Everything you need to know to start playing guitar from absolute zero. Covers holding the guitar, tuning, your first chords, and basic strumming.',
    href: '/lessons/beginner-guitar-guide',
    level: 'Beginner',
    readTime: '15 min read',
  },
  {
    title: 'Easy Guitar Chords for Beginners',
    description: 'Learn the essential open chords that form the foundation of thousands of songs. Step-by-step finger placement and practice tips.',
    href: '/lessons/easy-guitar-chords',
    level: 'Beginner',
    readTime: '12 min read',
  },
  {
    title: 'How to Read Guitar Tabs',
    description: 'Understand guitar tablature notation so you can learn any song. Covers numbers, symbols, techniques, and how to practice with tabs.',
    href: '/lessons/how-to-read-guitar-tabs',
    level: 'Beginner',
    readTime: '13 min read',
  },
];

export default function LessonsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Lessons' }]} />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4"><span className="gradient-text">Free Guitar Lessons</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive, in-depth lessons written by guitarists for guitarists. Every lesson is completely free — no sign-up required.</p>
      </div>

      <div className="space-y-6">
        {lessons.map((lesson) => (
          <Link href={lesson.href} key={lesson.href} className="glass-card p-6 md:p-8 block group">
            <div className="flex flex-wrap gap-3 mb-3">
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/20 text-primary-light">{lesson.level}</span>
              <span className="text-xs text-gray-500">{lesson.readTime}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-light transition-colors mb-2">{lesson.title}</h2>
            <p className="text-gray-400">{lesson.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-16 glass-card p-8 text-center">
        <h2 className="text-2xl font-bold mb-3"><span className="gradient-text">Want Structured Learning?</span></h2>
        <p className="text-gray-400 mb-6 max-w-lg mx-auto">Our free lessons are a great start. For a complete, step-by-step curriculum, check out the courses from Signals Music Studio.</p>
        <Link href="/courses" className="btn-primary">Browse Recommended Courses →</Link>
      </div>
    </div>
  );
}
