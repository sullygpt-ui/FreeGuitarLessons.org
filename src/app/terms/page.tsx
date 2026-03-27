import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for FreeGuitarLessons.org.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Terms of Use' }]} />
      <div className="prose-lesson">
        <h1 className="text-4xl font-bold mb-6"><span className="gradient-text">Terms of Use</span></h1>
        <p><em>Last updated: February 2026</em></p>

        <h2>Acceptance of Terms</h2>
        <p>By accessing and using FreeGuitarLessons.org, you agree to these terms of use. If you do not agree, please do not use this website.</p>

        <h2>Free Content</h2>
        <p>All lesson content on this site is provided free of charge for personal, educational use. You may not republish, redistribute, or sell our content without written permission.</p>

        <h2>Affiliate Links & Recommendations</h2>
        <p>This site contains affiliate links to third-party products and services. When you purchase through these links, we may earn a commission at no additional cost to you. Our recommendations are based on genuine assessment of product quality.</p>

        <h2>Disclaimer of Warranties</h2>
        <p>Content is provided &ldquo;as is&rdquo; without warranties of any kind. We strive for accuracy but cannot guarantee that all information is complete or error-free. Guitar instruction involves physical activity — practice safely and consult a medical professional if you experience pain.</p>

        <h2>Limitation of Liability</h2>
        <p>FreeGuitarLessons.org shall not be liable for any damages arising from the use of this website or any products purchased through affiliate links.</p>

        <h2>Third-Party Links</h2>
        <p>This site links to third-party websites. We are not responsible for the content, policies, or practices of these external sites.</p>

        <h2>Changes to Terms</h2>
        <p>We reserve the right to update these terms at any time. Continued use of the site constitutes acceptance of updated terms.</p>
      </div>
    </div>
  );
}
