import React from 'react';
import { ExternalLink } from 'lucide-react';
import { publications, Publication, PublicationCategory } from '../data/publications';

const GROUPS: { category: PublicationCategory; label: string }[] = [
  { category: 'journal', label: 'Peer-Reviewed Articles' },
  { category: 'book', label: 'Books' },
  { category: 'chapter', label: 'Book Chapters' },
  { category: 'magazine', label: 'Essays & Encyclopedic Entries' },
];

const Citation: React.FC<{ pub: Publication }> = ({ pub }) => (
  <div className="py-4 border-b border-warm-border last:border-b-0">
    <p className="text-warm-text font-medium leading-snug">
      {pub.url ? (
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-warm-accent transition-colors inline-flex items-start gap-1"
        >
          {pub.title}
          <ExternalLink className="w-3.5 h-3.5 mt-1 flex-shrink-0 opacity-60" />
        </a>
      ) : (
        pub.title
      )}
    </p>
    <p className="text-warm-text-secondary text-sm mt-1">
      {pub.authors} ({pub.year}). <span className="italic">{pub.venue}</span>
      {pub.volume ? `, ${pub.volume}` : ''}.
      {pub.note ? ` ${pub.note}.` : ''}
    </p>
    {pub.doi && (
      <p className="text-warm-text-secondary text-xs mt-1 font-mono">
        DOI:{' '}
        {pub.doiResolves ? (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-accent hover:text-warm-accent-hover transition-colors"
          >
            {pub.doi}
          </a>
        ) : (
          <span>{pub.doi}</span>
        )}
      </p>
    )}
  </div>
);

export const PublicationsPage: React.FC = () => {
  const featured = publications.find((p) => p.featured);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold font-display text-warm-text mb-3">Publications</h1>
      <p className="text-warm-text-secondary mb-12">
        T. Dylan Daniel — peer-reviewed research, books, and selected writing.
      </p>

      {featured && (
        <section className="mb-14">
          <p className="text-xs uppercase tracking-widest text-warm-text-secondary mb-3">
            Latest
          </p>
          <div className="bg-white rounded-xl p-8 border border-warm-border">
            <h2 className="text-2xl font-bold font-display text-warm-text leading-snug mb-3">
              {featured.title}
            </h2>
            <p className="text-warm-text-secondary text-sm mb-1">
              {featured.authors} ({featured.year}). <span className="italic">{featured.venue}</span>
              {featured.volume ? `, ${featured.volume}` : ''}.
            </p>
            {featured.note && (
              <p className="text-warm-text-secondary text-xs mb-5">{featured.note}</p>
            )}
            {featured.abstract && (
              <p className="text-warm-text leading-relaxed mb-5">{featured.abstract}</p>
            )}
            {featured.keywords && featured.keywords.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {featured.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs text-warm-text-secondary border border-warm-border rounded-full px-3 py-1"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-3">
              {featured.url && (
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-warm-accent hover:bg-warm-accent-hover text-white rounded-lg transition-colors"
                >
                  Read on Frontiers
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {featured.doi &&
                (featured.doiResolves ? (
                  <a
                    href={`https://doi.org/${featured.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-warm-border text-warm-text-secondary hover:text-warm-text hover:border-warm-text-secondary rounded-lg transition-colors font-mono text-sm"
                  >
                    DOI: {featured.doi}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 border border-warm-border text-warm-text-secondary rounded-lg font-mono text-sm">
                    DOI: {featured.doi}
                  </span>
                ))}
            </div>
          </div>
        </section>
      )}

      {GROUPS.map(({ category, label }) => {
        const items = publications.filter((p) => p.category === category && !p.featured);
        if (items.length === 0) return null;
        return (
          <section key={category} className="mb-10">
            <h2 className="text-sm uppercase tracking-widest text-warm-text-secondary mb-2">
              {label}
            </h2>
            <div className="bg-white rounded-xl px-8 border border-warm-border">
              {items.map((pub) => (
                <Citation key={pub.title} pub={pub} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};
