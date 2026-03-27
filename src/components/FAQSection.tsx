export interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQ[]; title?: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <section className="py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h2 className="text-3xl font-bold text-center mb-10">
        <span className="gradient-text">{title}</span>
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="glass-card p-5 group cursor-pointer">
            <summary className="font-semibold text-white list-none flex justify-between items-center">
              {faq.question}
              <span className="text-primary-light group-open:rotate-45 transition-transform text-xl">+</span>
            </summary>
            <p className="mt-3 text-gray-400 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
