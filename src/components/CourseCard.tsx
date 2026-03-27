import type { Course } from '@/lib/courses';

export default function CourseCard({ course }: { course: Course }) {
  const categoryColors: Record<string, string> = {
    rhythm: 'bg-primary/20 text-primary-light',
    theory: 'bg-accent/20 text-accent',
    technique: 'bg-purple-500/20 text-purple-300',
    bundle: 'bg-pink-500/20 text-pink-300',
  };

  return (
    <div className="glass-card p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[course.category]}`}>
          {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
        </span>
        <span className="text-lg font-bold gradient-text">{course.price}</span>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{course.name}</h3>
      <p className="text-gray-400 text-sm mb-4 flex-grow">{course.description}</p>
      <ul className="text-sm text-gray-400 mb-4 space-y-1">
        {course.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-primary-light">✓</span> {f}
          </li>
        ))}
      </ul>
      <a href={`/go/${course.slug}`} className="btn-primary text-center w-full" target="_blank" rel="noopener noreferrer">
        Get This Course →
      </a>
    </div>
  );
}
