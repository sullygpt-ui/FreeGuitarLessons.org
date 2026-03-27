import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import TestimonialCard from '@/components/TestimonialCard';
import { reviews } from '@/lib/reviews';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Student Reviews',
  description: 'Read real reviews from guitar students who used our free lessons and Signals Music Studio courses.',
  keywords: ['guitar course reviews', 'signals music studio reviews', 'rhythm guitar reviews'],
  openGraph: { title: 'Student Reviews', description: 'Real feedback from guitar students.' },
};

export default function ReviewsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="relative h-64 md:h-80 w-full mb-12 rounded-2xl overflow-hidden">
        <Image src="/images/concert.jpg" alt="Concert" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-1 via-dark-1/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white">Reviews</h1>
        </div>
      </div>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Reviews' }]} />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4"><span className="gradient-text">Student Reviews</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Real feedback from guitarists who&apos;ve used our free lessons and the Signals Music Studio courses we recommend.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <TestimonialCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}
