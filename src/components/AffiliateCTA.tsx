interface AffiliateCTAProps {
  slug: string;
  courseName: string;
  price: string;
  description: string;
}

export default function AffiliateCTA({ slug, courseName, price, description }: AffiliateCTAProps) {
  return (
    <div className="glass-card p-6 my-8 text-center">
      <div className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-2">Recommended Course</div>
      <h3 className="text-xl font-bold text-white mb-2">{courseName}</h3>
      <p className="text-gray-400 mb-4 max-w-lg mx-auto">{description}</p>
      <div className="text-2xl font-bold gradient-text mb-4">{price}</div>
      <a
        href={`/go/${slug}`}
        className="btn-primary text-lg px-8 py-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get {courseName} →
      </a>
    </div>
  );
}
