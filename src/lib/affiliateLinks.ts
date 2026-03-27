const affiliateLinks: Record<string, string> = {
  rrg1: 'https://signalsmusic.studio/courses/rrg1',
  rrg2: 'https://signalsmusic.studio/courses/rrg2',
  songwriting: 'https://signalsmusic.studio/courses/songwriting-course',
  codex: 'https://signalsmusic.studio/shop',
  blues: 'https://signalsmusic.studio/shop',
  intervals: 'https://signalsmusic.studio/shop',
  barre: 'https://signalsmusic.studio/shop',
  bundle: 'https://signalsmusic.studio/shop',
  'codex-bundle': 'https://signalsmusic.studio/shop',
  shop: 'https://signalsmusic.studio/shop',
};

export function getAffiliateLink(slug: string): string {
  return affiliateLinks[slug] || affiliateLinks.shop;
}

export default affiliateLinks;
