import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-dark-2 border-t border-white/5 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="font-bold text-white mb-3 gradient-text">FreeGuitarLessons.org</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Free guitar lessons, guides, and resources to help you learn guitar at your own pace. We recommend courses we genuinely believe in.
            </p>
          </div>

          {/* Lessons */}
          <div>
            <h3 className="font-bold text-white mb-3">Lessons</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/lessons/beginner-guitar-guide" className="text-gray-400 hover:text-primary-light transition-colors">Beginner Guitar Guide</Link></li>
              <li><Link href="/lessons/easy-guitar-chords" className="text-gray-400 hover:text-primary-light transition-colors">Easy Guitar Chords</Link></li>
              <li><Link href="/lessons/how-to-read-guitar-tabs" className="text-gray-400 hover:text-primary-light transition-colors">How to Read Tabs</Link></li>
              <li><Link href="/lessons" className="text-gray-400 hover:text-primary-light transition-colors">All Lessons →</Link></li>
            </ul>
          </div>

          {/* Compare & Reviews */}
          <div>
            <h3 className="font-bold text-white mb-3">Compare</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/best-online-guitar-courses" className="text-gray-400 hover:text-primary-light transition-colors">Best Guitar Courses</Link></li>
              <li><Link href="/best-rhythm-guitar-course" className="text-gray-400 hover:text-primary-light transition-colors">Best Rhythm Course</Link></li>
              <li><Link href="/best-music-theory-course" className="text-gray-400 hover:text-primary-light transition-colors">Best Theory Course</Link></li>
              <li><Link href="/signals-music-studio-review" className="text-gray-400 hover:text-primary-light transition-colors">Signals Studio Review</Link></li>
              <li><Link href="/free-vs-paid-guitar-lessons" className="text-gray-400 hover:text-primary-light transition-colors">Free vs Paid Lessons</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-3">Get free tips, lessons, and exclusive deals.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 text-center mb-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Sister Sites</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="https://rhythmguitar.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-light transition-colors">RhythmGuitar.org</a>
            <a href="https://musictheory.xyz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-light transition-colors">MusicTheory.xyz</a>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} FreeGuitarLessons.org. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
            <Link href="/disclaimer" className="hover:text-gray-300 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
