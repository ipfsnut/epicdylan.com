import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { books } from '../data/books';

export const BooksPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold font-display text-warm-text mb-4 flex items-center gap-4">
        <BookOpen className="w-12 h-12 text-warm-accent" />
        Books
      </h1>
      <p className="text-sm text-warm-text-secondary/60 mb-12">
        Published works on consciousness, cognition, and the limits of reason.
      </p>

      <div className="space-y-8">
        {books.map((book) => (
          <div key={book.slug} className="bg-white rounded-xl p-8 border border-warm-border">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-24 sm:w-32 flex-shrink-0 rounded-lg overflow-hidden aspect-[2/3]">
                <img
                  src={book.coverImage}
                  alt={`${book.title} book cover`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold font-display text-warm-text mb-1">
                  {book.title}
                </h2>
                {book.subtitle && (
                  <p className="text-warm-text-secondary text-sm mb-2">{book.subtitle}</p>
                )}
                <p className="text-warm-text-secondary/60 text-xs mb-3">
                  {book.author} &middot; {book.publisher}, {book.year}
                </p>
                <p className="text-warm-text-secondary mb-4">{book.description}</p>
                <div className="flex flex-wrap gap-3">
                  {book.purchaseLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-warm-border text-warm-text hover:border-warm-text-secondary rounded-lg transition-colors"
                    >
                      {link.label}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
