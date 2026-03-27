import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Affiliate Disclaimer',
  description: 'Affiliate disclosure and disclaimer for FreeGuitarLessons.org.',
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Disclaimer' }]} />
      <div className="prose-lesson">
        <h1 className="text-4xl font-bold mb-6"><span className="gradient-text">Affiliate Disclaimer</span></h1>
        <p><em>Last updated: February 2026</em></p>

        <h2>Affiliate Disclosure</h2>
        <p>FreeGuitarLessons.org is a participant in affiliate programs. This means we earn commissions when you purchase products through links on our site, at no additional cost to you.</p>

        <h2>How Affiliate Links Work</h2>
        <p>When you click a link to a course or product on this site, you may be directed to a third-party website (such as Signals Music Studio). If you make a purchase, we receive a small commission. This commission comes from the seller — it does not increase the price you pay.</p>

        <h2>Our Commitment to Honesty</h2>
        <p>We only recommend products and courses that we genuinely believe provide value to guitar learners. Our recommendations are based on quality, instructional value, and student outcomes — not commission rates.</p>
        <p>If we don&apos;t think a product is worth your money, we won&apos;t recommend it, regardless of the potential commission.</p>

        <h2>Editorial Independence</h2>
        <p>Our free lesson content is created independently and is not influenced by affiliate partnerships. We create the best educational content we can, and separately recommend tools and courses that complement your learning.</p>

        <h2>FTC Compliance</h2>
        <p>In accordance with FTC guidelines, we disclose that this site contains affiliate links. This disclaimer applies to all pages on FreeGuitarLessons.org.</p>

        <h2>Questions?</h2>
        <p>If you have questions about our affiliate relationships or recommendations, please don&apos;t hesitate to reach out.</p>
      </div>
    </div>
  );
}
