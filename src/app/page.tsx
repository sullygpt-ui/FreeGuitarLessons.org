import Image from 'next/image';
import Link from 'next/link';
import CourseCard from '@/components/CourseCard';
import TestimonialCard from '@/components/TestimonialCard';
import NewsletterForm from '@/components/NewsletterForm';
import FAQSection from '@/components/FAQSection';
import { getFeaturedCourses } from '@/lib/courses';
import { reviews } from '@/lib/reviews';

const lessonCategories = [
  { title: 'Beginner Guitar Guide', description: 'Everything you need to start playing guitar from scratch.', href: '/lessons/beginner-guitar-guide', icon: '🎸' },
  { title: 'Easy Guitar Chords', description: 'Learn the essential open chords every guitarist needs.', href: '/lessons/easy-guitar-chords', icon: '🎶' },
  { title: 'How to Read Tabs', description: 'Understand guitar tablature and start learning songs.', href: '/lessons/how-to-read-guitar-tabs', icon: '📄' },
  { title: 'Strumming & Rhythm', description: 'Master timing, patterns, and groove fundamentals.', href: '/lessons/easy-songs-guitar', icon: '🥁' },
  { title: 'Scales & Theory', description: 'Unlock the fretboard with essential scales and theory.', href: '/lessons/guitar-scales-beginners', icon: '🎵' },
  { title: 'Practice Routine', description: 'A structured 30-minute daily plan for real progress.', href: '/lessons/guitar-practice-routine', icon: '⏱️' },
];

const faqs = [
  { question: 'Are these guitar lessons really free?', answer: 'Yes! All our lesson content is 100% free. We recommend paid courses from Signals Music Studio for those who want structured, in-depth learning, but our free content stands on its own.' },
  { question: 'Do I need any experience to start?', answer: 'Not at all. Our beginner guide starts from absolute zero — how to hold the guitar, tune it, and play your first chord. No prior experience needed.' },
  { question: 'What kind of guitar do I need?', answer: 'Any guitar works! Acoustic or electric, steel-string or nylon — the fundamentals are the same. Start with whatever you have access to.' },
  { question: 'How long does it take to learn guitar?', answer: 'You can play simple songs within a few weeks of consistent practice. Getting comfortable with most open chords takes 2-3 months. Becoming a confident player is a 6-12 month journey with regular practice.' },
  { question: 'Why do you recommend Signals Music Studio courses?', answer: 'We\'ve tried many guitar courses and Signals Music Studio consistently delivers the best quality, clearest instruction, and most practical approach. Their courses fill in gaps that free content can\'t cover as deeply.' },
];

export default function HomePage() {
  const featured = getFeaturedCourses();
  const topReviews = reviews.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image src="/images/hero-guitar.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-dark-1" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
          <p className="text-primary-light text-sm font-semibold uppercase tracking-widest mb-6">Your Free Guitar Education Starts Here</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
            Learn Guitar <span className="gradient-text">for Free</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Comprehensive lessons, chord guides, and tutorials that actually teach you how to play. No sign-up required. No paywalls. Just start playing.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/lessons/beginner-guitar-guide" className="btn-primary text-lg px-10 py-4 rounded-xl">
              Start Your First Lesson →
            </Link>
            <Link href="/courses" className="btn-accent text-lg px-10 py-4 rounded-xl">
              Browse Courses
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-1 to-transparent" />
      </section>

      {/* Lesson Categories */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Free Lesson Guides</span>
            </h2>
            <p className="text-gray-400 text-lg">Pick a topic and start learning at your own pace.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessonCategories.map((cat) => (
              <Link href={cat.href} key={cat.href} className="glass-card rounded-xl p-8 text-center group hover:glow-green transition-all duration-300">
                <div className="text-5xl mb-5">{cat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">{cat.title}</h3>
                <p className="text-gray-400 leading-relaxed">{cat.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/lessons" className="text-primary-light hover:text-accent transition-colors font-semibold inline-flex items-center gap-2">
              View All 10 Lessons
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Recommended Courses</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to accelerate your progress? These top-rated courses from Signals Music Studio take your playing to the next level.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/courses" className="text-primary-light hover:text-accent transition-colors font-semibold inline-flex items-center gap-2">
              View All Courses
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 px-4">
        <Image src="/images/playing-guitar.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">What Students Say</span>
            </h2>
            <p className="text-gray-400 text-lg">Real reviews from real guitarists.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {topReviews.map((review, i) => (
              <TestimonialCard key={i} review={review} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/reviews" className="text-primary-light hover:text-accent transition-colors font-semibold inline-flex items-center gap-2">
              Read All Reviews
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-24 px-4">
        <Image src="/images/guitar-strings.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Get Free Guitar Tips</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">Join our newsletter for weekly lessons, practice tips, and exclusive deals on courses.</p>
          <div className="glass-card rounded-xl p-8">
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <FAQSection faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">Start Playing?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed">Pick up your guitar and follow along with our beginner guide. You&apos;ll be playing your first song before you know it.</p>
          <Link href="/lessons/beginner-guitar-guide" className="btn-primary text-lg px-12 py-5 rounded-xl inline-block">
            Begin Your Guitar Journey →
          </Link>
        </div>
      </section>
    </>
  );
}
