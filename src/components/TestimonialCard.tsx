import type { Review } from '@/lib/reviews';

export default function TestimonialCard({ review }: { review: Review }) {
  return (
    <div className="glass-card p-6">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < review.rating ? 'text-accent' : 'text-gray-600'}>★</span>
        ))}
      </div>
      <p className="text-gray-300 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
      <div className="flex justify-between items-end">
        <div>
          <div className="font-semibold text-white">{review.name}</div>
          {review.course && <div className="text-xs text-primary-light">{review.course}</div>}
        </div>
        <div className="text-xs text-gray-500">{review.date}</div>
      </div>
    </div>
  );
}
