import React from 'react';
import { ExternalLink, Star, GitFork, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const GitHubRepos: React.FC = () => {
  const { repos, errors, loading } = useApp();

  if (errors.github) {
    return (
      <div className="flex items-center gap-2 text-red-500">
        <AlertCircle className="w-5 h-5" />
        <p>{errors.github}</p>
      </div>
    );
  }

  if (loading) {
    return <p className="text-warm-text-secondary">Loading repositories...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {repos.map(repo => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-xl p-6 border border-warm-border hover:border-warm-accent transition-all hover:shadow-md"
        >
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-xl font-semibold text-warm-text">{repo.name}</h4>
            <ExternalLink className="w-5 h-5 text-warm-accent" />
          </div>
          {repo.description && (
            <p className="text-warm-text-secondary mb-4 text-sm">{repo.description}</p>
          )}
          <div className="flex items-center gap-4 text-sm text-warm-text-secondary">
            {repo.language && (
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-warm-accent"></div>
                {repo.language}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              {repo.forks_count}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};
