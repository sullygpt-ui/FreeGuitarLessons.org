import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/lib/courses';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Guitar Courses',
  description: 'Browse recommended guitar courses from Signals Music Studio — rhythm guitar, music theory, songwriting, blues, and more.',
  keywords: ['guitar courses', 'online guitar course', 'rhythm guitar course', 'music theory course', 'songwriting course'],
  openGraph: { title: 'Recommended Guitar Courses', description: 'Top-rated guitar courses from Signals Music Studio.' },
};

export default function CoursesPage() {
  const categories = ['rhythm', 'theory', 'technique', 'bundle'] as const;
  const categoryLabels: Record<string, string> = { rhythm: 'Rhythm Guitar', theory: 'Theory & Songwriting', technique: 'Technique', bundle: 'Bundles' };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="relative h-64 md:h-80 w-full mb-12 rounded-2xl overflow-hidden">
        <Image src="/images/recording-studio.jpg" alt="Recording studio" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-1 via-dark-1/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white">Guitar Courses</h1>
        </div>
      </div>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Courses' }]} />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4"><span className="gradient-text">Recommended Guitar Courses</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Curated courses from Signals Music Studio. Every course listed here has been reviewed and recommended for its quality, value, and results.</p>
      </div>

      {categories.map((cat) => {
        const catCourses = courses.filter((c) => c.category === cat);
        if (catCourses.length === 0) return null;
        return (
          <section key={cat} className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">{categoryLabels[cat]}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {catCourses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
