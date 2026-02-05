import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Database, Palette, Zap, Globe, ExternalLink } from 'lucide-react';

interface TechCardProps {
  name: string;
  description: string;
  logo: string;
  url: string;
  category: 'framework' | 'styling' | 'api' | 'tooling' | 'platform';
}

const TechCard: React.FC<TechCardProps> = ({ name, description, logo, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-warm-bg rounded-xl p-6 border border-warm-border hover:border-warm-accent/50 transition-all hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center overflow-hidden flex-shrink-0 border border-warm-border">
          <img src={logo} alt={name} className="w-8 h-8 object-contain" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-warm-text font-semibold">{name}</h3>
            <ExternalLink className="w-3.5 h-3.5 text-warm-text-secondary group-hover:text-warm-accent transition-colors" />
          </div>
          <p className="text-warm-text-secondary text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
};

const technologies: TechCardProps[] = [
  { name: 'React', description: 'Frontend UI library powering the entire application', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', url: 'https://react.dev', category: 'framework' },
  { name: 'TypeScript', description: 'Type-safe JavaScript for better developer experience', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org', category: 'framework' },
  { name: 'React Router', description: 'Client-side routing and navigation', logo: 'https://reactrouter.com/favicon-light.png', url: 'https://reactrouter.com', category: 'framework' },
  { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid styling', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', url: 'https://tailwindcss.com', category: 'styling' },
  { name: 'Lucide Icons', description: 'Beautiful, consistent icon set', logo: 'https://lucide.dev/logo.light.svg', url: 'https://lucide.dev', category: 'styling' },
  { name: 'GitHub API', description: 'Fetching repository data and profile information', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', url: 'https://docs.github.com/en/rest', category: 'api' },
  { name: 'Neynar API', description: 'Farcaster protocol data and profile pictures', logo: 'https://neynar.com/favicon.ico', url: 'https://neynar.com', category: 'api' },
  { name: 'Chess.com API', description: 'Live chess statistics and game data', logo: 'https://www.chess.com/bundles/web/favicons/favicon-32x32.d9b10e3a.png', url: 'https://www.chess.com/news/view/published-data-api', category: 'api' },
  { name: 'Create React App', description: 'Build tooling and development server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', url: 'https://create-react-app.dev', category: 'tooling' },
  { name: 'PostCSS', description: 'CSS processing and autoprefixing', logo: 'https://postcss.org/assets/logo-3e39b0aa.svg', url: 'https://postcss.org', category: 'tooling' },
  { name: 'Farcaster', description: 'Decentralized social protocol integration', logo: 'https://warpcast.com/favicon.ico', url: 'https://farcaster.xyz', category: 'platform' },
  { name: 'Base', description: 'L2 blockchain for $EPICDYLAN.COM token', logo: 'https://www.base.org/favicon.ico', url: 'https://base.org', category: 'platform' }
];

export const BuiltWithPage: React.FC = () => {
  const frameworks = technologies.filter(t => t.category === 'framework');
  const styling = technologies.filter(t => t.category === 'styling');
  const apis = technologies.filter(t => t.category === 'api');
  const tooling = technologies.filter(t => t.category === 'tooling');
  const platforms = technologies.filter(t => t.category === 'platform');

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link
        to="/"
        className="flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Code className="w-12 h-12 text-warm-accent" />
          <h1 className="text-5xl font-bold font-display text-warm-text">Built With</h1>
        </div>
        <p className="text-xl text-warm-text-secondary leading-relaxed max-w-4xl">
          The technologies, APIs, and platforms that power epicdylan.com.
          Open source and decentralized where possible.
        </p>
        <p className="text-warm-text-secondary font-mono text-sm mt-2">{'// colophon'}</p>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-6 h-6 text-warm-accent" />
          <h2 className="text-2xl font-bold font-display text-warm-text">Core Framework</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {frameworks.map(tech => <TechCard key={tech.name} {...tech} />)}
        </div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Palette className="w-6 h-6 text-warm-accent" />
          <h2 className="text-2xl font-bold font-display text-warm-text">Styling & Design</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {styling.map(tech => <TechCard key={tech.name} {...tech} />)}
        </div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Database className="w-6 h-6 text-warm-accent" />
          <h2 className="text-2xl font-bold font-display text-warm-text">Data & APIs</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {apis.map(tech => <TechCard key={tech.name} {...tech} />)}
        </div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Code className="w-6 h-6 text-warm-accent" />
          <h2 className="text-2xl font-bold font-display text-warm-text">Build Tooling</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tooling.map(tech => <TechCard key={tech.name} {...tech} />)}
        </div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-6 h-6 text-warm-accent" />
          <h2 className="text-2xl font-bold font-display text-warm-text">Platforms & Protocols</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {platforms.map(tech => <TechCard key={tech.name} {...tech} />)}
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 border border-warm-border">
        <h3 className="text-2xl font-bold font-display text-warm-text mb-4">Open Source</h3>
        <p className="text-warm-text-secondary leading-relaxed mb-4">
          This entire website is open source. Feel free to explore the code, learn from it,
          or fork it for your own projects.
        </p>
        <a
          href="https://github.com/ipfsnut/epicdylan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-warm-accent hover:bg-warm-accent-hover text-white rounded-lg transition-colors"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="w-5 h-5"
          />
          View Source on GitHub
        </a>
      </div>
    </div>
  );
};
