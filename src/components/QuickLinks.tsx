import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, FileText, ScrollText } from 'lucide-react';

const links = [
  {
    to: '/publications',
    icon: ScrollText,
    title: 'Publications',
    desc: 'Peer-reviewed articles, books, and selected writing.',
  },
  {
    to: '/books',
    icon: BookOpen,
    title: 'Books',
    desc: 'Read online or purchase INEVITABLE and Formal Dialectics.',
  },
  {
    to: '/research',
    icon: Brain,
    title: 'Research',
    desc: 'Oscillatory dynamics, Markov blankets, and the metabolic basis of cognition.',
  },
  {
    to: '/cv',
    icon: FileText,
    title: 'CV',
    desc: 'Education, research experience, and publications.',
  },
];

export const QuickLinks: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="section-number">03 //</span>
        <h2 className="text-3xl font-bold font-display text-warm-text">Explore</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {links.map(({ to, icon: Icon, title, desc }) => (
          <Link
            key={to}
            to={to}
            className="bg-white rounded-xl p-6 border border-warm-border hover:border-warm-accent transition-all block hover:shadow-md"
          >
            <Icon className="w-8 h-8 text-warm-accent mb-3" />
            <h3 className="text-xl font-semibold text-warm-text mb-2">{title}</h3>
            <p className="text-warm-text-secondary text-sm">{desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
