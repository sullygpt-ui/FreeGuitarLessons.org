import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about FreeGuitarLessons.org — our mission to make guitar education accessible to everyone.',
  keywords: ['about free guitar lessons', 'guitar education', 'learn guitar online'],
  openGraph: { title: 'About FreeGuitarLessons.org', description: 'Our mission to make guitar education accessible to everyone.' },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="relative h-64 md:h-80 w-full mb-12 rounded-2xl overflow-hidden">
        <Image src="/images/music-studio.jpg" alt="Music studio" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-1 via-dark-1/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white">About FreeGuitarLessons.org</h1>
        </div>
      </div>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <div className="prose-lesson">
        <h1 className="text-4xl font-bold mb-6"><span className="gradient-text">About FreeGuitarLessons.org</span></h1>

        <h2>Our Mission</h2>
        <p>FreeGuitarLessons.org exists for one reason: to make learning guitar as accessible as possible. We believe that everyone deserves the chance to pick up a guitar and make music, regardless of their budget or location.</p>
        <p>We create comprehensive, genuinely helpful guitar lessons and publish them completely free. No paywalls, no mandatory sign-ups, no &ldquo;premium tier&rdquo; that locks away the good stuff. Everything we publish is here for you to learn from.</p>

        <h2>Why We Recommend Signals Music Studio</h2>
        <p>While our free content covers a lot of ground, we recognize that structured courses with professional production, progressive curriculum design, and practice materials can dramatically accelerate your learning.</p>
        <p>After researching dozens of online guitar education platforms, we consistently recommend <strong>Signals Music Studio</strong> courses. Here&apos;s why:</p>
        <ul>
          <li><strong>Practical approach</strong> — Every lesson connects to real music, not abstract exercises</li>
          <li><strong>Clear instruction</strong> — Complex concepts are broken down in ways that actually make sense</li>
          <li><strong>Fair pricing</strong> — Courses range from pay-what-you-can to $270, with most at $45</li>
          <li><strong>Proven results</strong> — Thousands of students have transformed their playing</li>
        </ul>
        <p>When you purchase a course through our links, we may earn a commission at no extra cost to you. This helps us keep the site running and continue creating free content.</p>

        <h2>What You&apos;ll Find Here</h2>
        <p>Our site includes:</p>
        <ul>
          <li><strong><Link href="/lessons">Free lessons</Link></strong> — In-depth guides on chords, tabs, technique, and more</li>
          <li><strong><Link href="/courses">Course recommendations</Link></strong> — Honest reviews of the best guitar courses available</li>
          <li><strong><Link href="/reviews">Student reviews</Link></strong> — Real feedback from guitarists who&apos;ve used these resources</li>
        </ul>

        <h2>Our Promise</h2>
        <p>We will never recommend a course we don&apos;t genuinely believe in. Our reputation depends on your trust, and we take that seriously. If a product isn&apos;t worth your money, we won&apos;t promote it — period.</p>
        <p>Have questions or feedback? We&apos;d love to hear from you. Keep playing, keep learning, and enjoy the journey.</p>
      </div>
    </div>
  );
}
