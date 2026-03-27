import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://freeguitarlessons.org';
  const pages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/lessons', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/lessons/beginner-guitar-guide', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/lessons/easy-guitar-chords', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/lessons/how-to-read-guitar-tabs', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/lessons/how-to-tune-guitar', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/lessons/easy-songs-guitar', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/lessons/barre-chords', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/lessons/guitar-scales-beginners', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/lessons/fingerpicking-beginners', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/lessons/blues-guitar', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/lessons/guitar-practice-routine', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/best-online-guitar-courses', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/best-rhythm-guitar-course', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/best-music-theory-course', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/signals-music-studio-review', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/free-vs-paid-guitar-lessons', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/courses', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/reviews', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.5, changeFrequency: 'monthly' as const },
    { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return pages.map((p) => ({
    url: `${base}${p.url}`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
