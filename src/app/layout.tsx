import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: 'Free Guitar Lessons | Learn Guitar Online', template: '%s | FreeGuitarLessons.org' },
  description: 'Learn guitar for free with our comprehensive lessons, chord guides, and tab tutorials. Plus recommended courses to accelerate your progress.',
  keywords: ['guitar lessons', 'learn guitar', 'free guitar lessons', 'guitar chords', 'guitar tabs', 'beginner guitar'],
  metadataBase: new URL('https://freeguitarlessons.org'),
  openGraph: {
    siteName: 'FreeGuitarLessons.org',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FreeGuitarLessons.org',
    url: 'https://freeguitarlessons.org',
    description: 'Free guitar lessons, chord guides, and tutorials for beginners and intermediate players.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://freeguitarlessons.org/lessons?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');` }} />
          </>
        )}
        <script dangerouslySetInnerHTML={{ __html: `
          // Track signalsmusic.studio outbound clicks
          document.addEventListener('DOMContentLoaded', function() {
            function trackSignalsMusicClick(url) {
              const data = {
                timestamp: new Date().toISOString(),
                url: url,
                referrer: window.location.href,
                userAgent: navigator.userAgent.substring(0, 200),
                site: 'freeguitarlessons.org'
              };
              
              // Send to analytics as custom event if gtag exists
              if (typeof gtag === 'function') {
                gtag('event', 'outbound_click', {
                  event_category: 'signalsmusic_affiliate',
                  event_label: url,
                  transport_type: 'beacon'
                });
              }
              
              // Also try to log to our tracking endpoint
              fetch('/api/track-outbound', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                keepalive: true
              }).catch(() => {}); // Silent fail if endpoint doesn't exist
            }
            
            // Track all signalsmusic.studio links
            document.addEventListener('click', function(e) {
              const link = e.target.closest('a');
              if (link && link.href && link.href.includes('signalsmusic.studio')) {
                trackSignalsMusicClick(link.href);
              }
            });
          });
        ` }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
