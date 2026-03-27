'use client';

import { useState } from 'react';
import Link from 'next/link';

const lessonLinks = [
  { href: '/lessons/beginner-guitar-guide', label: 'Beginner Guitar Guide' },
  { href: '/lessons/easy-guitar-chords', label: 'Easy Guitar Chords' },
  { href: '/lessons/how-to-read-guitar-tabs', label: 'How to Read Guitar Tabs' },
];

const compareLinks = [
  { href: '/best-online-guitar-courses', label: 'Best Online Guitar Courses' },
  { href: '/best-rhythm-guitar-course', label: 'Best Rhythm Guitar Course' },
  { href: '/best-music-theory-course', label: 'Best Music Theory Course' },
  { href: '/signals-music-studio-review', label: 'Signals Music Studio Review' },
  { href: '/free-vs-paid-guitar-lessons', label: 'Free vs Paid Lessons' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lessonsOpen, setLessonsOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-dark-1/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="guitar-grad" x1="0" y1="0" x2="32" y2="32">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            <path d="M22 2L22 12M20 2h4M16 10c-4 2-7 6-7 11a7 7 0 0014 0c0-5-3-9-7-11z" stroke="url(#guitar-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="16" cy="21" r="2" stroke="url(#guitar-grad)" strokeWidth="1.5"/>
          </svg>
          <span>
            <span className="gradient-text">FreeGuitarLessons</span>
            <span className="text-gray-400">.org</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <div className="relative" onMouseEnter={() => setLessonsOpen(true)} onMouseLeave={() => setLessonsOpen(false)}>
            <Link href="/lessons" className="text-gray-300 hover:text-white transition-colors py-4">Lessons</Link>
            {lessonsOpen && (
              <div className="absolute top-full left-0 pt-1 w-56">
                <div className="glass-card p-2 space-y-1">
                  {lessonLinks.map((l) => (
                    <Link key={l.href} href={l.href} className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="relative" onMouseEnter={() => setCompareOpen(true)} onMouseLeave={() => setCompareOpen(false)}>
            <span className="text-gray-300 hover:text-white transition-colors cursor-pointer py-4">Compare</span>
            {compareOpen && (
              <div className="absolute top-full left-0 pt-1 w-64">
                <div className="glass-card p-2 space-y-1">
                  {compareLinks.map((l) => (
                    <Link key={l.href} href={l.href} className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link>
          <Link href="/reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
          <a href="/go/shop" className="btn-primary text-sm px-4 py-2" target="_blank" rel="noopener noreferrer">Browse Courses</a>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gray-300 text-2xl" aria-label="Menu">
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-dark-2 border-t border-white/5 px-4 py-4 space-y-3 text-sm">
          <Link href="/lessons" className="block text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>Lessons</Link>
          {lessonLinks.map((l) => (
            <Link key={l.href} href={l.href} className="block text-gray-400 hover:text-white pl-4" onClick={() => setMobileOpen(false)}>{l.label}</Link>
          ))}
          <div className="pt-2 border-t border-white/5">
            <span className="block text-gray-300 font-medium">Compare</span>
          </div>
          {compareLinks.map((l) => (
            <Link key={l.href} href={l.href} className="block text-gray-400 hover:text-white pl-4" onClick={() => setMobileOpen(false)}>{l.label}</Link>
          ))}
          <Link href="/courses" className="block text-gray-300 hover:text-white pt-2 border-t border-white/5" onClick={() => setMobileOpen(false)}>Courses</Link>
          <Link href="/reviews" className="block text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>Reviews</Link>
          <Link href="/about" className="block text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>About</Link>
          <a href="/go/shop" className="btn-primary block text-center mt-2" target="_blank" rel="noopener noreferrer">Browse Courses</a>
        </nav>
      )}
    </header>
  );
}
