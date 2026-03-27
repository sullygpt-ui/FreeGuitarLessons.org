import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for FreeGuitarLessons.org.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
      <div className="prose-lesson">
        <h1 className="text-4xl font-bold mb-6"><span className="gradient-text">Privacy Policy</span></h1>
        <p><em>Last updated: February 2026</em></p>

        <h2>Information We Collect</h2>
        <p>We collect minimal information to operate this website:</p>
        <ul>
          <li><strong>Email address</strong> — Only if you voluntarily subscribe to our newsletter</li>
          <li><strong>Usage data</strong> — Anonymous analytics data through Google Analytics, including pages visited, time on site, and general geographic region</li>
          <li><strong>Cookies</strong> — We use essential cookies for site functionality and analytics cookies through Google Analytics</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>Newsletter emails are used solely to send guitar tips, lessons, and occasional course recommendations</li>
          <li>Analytics data helps us understand which content is most useful so we can create better lessons</li>
          <li>We never sell, rent, or share your personal information with third parties</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul>
          <li><strong>Google Analytics</strong> — For anonymous website usage statistics</li>
          <li><strong>Supabase</strong> — For secure newsletter subscription storage</li>
          <li><strong>Signals Music Studio</strong> — When you click affiliate links, you&apos;ll be directed to their site, which has its own privacy policy</li>
        </ul>

        <h2>Affiliate Links</h2>
        <p>This site contains affiliate links to Signals Music Studio products. When you click these links and make a purchase, we may earn a commission. This does not affect the price you pay.</p>

        <h2>Your Rights</h2>
        <p>You may request deletion of your email from our newsletter list at any time by contacting us or using the unsubscribe link in any email.</p>

        <h2>Data Security</h2>
        <p>We use industry-standard security measures to protect your information. Newsletter data is stored securely on Supabase&apos;s infrastructure.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this privacy policy periodically. Changes will be posted on this page with an updated revision date.</p>
      </div>
    </div>
  );
}
