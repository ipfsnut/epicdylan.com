import React from 'react';
import { ExternalLink, Star, GitFork, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const GitHubRepos: React.FC = () => {
  const { repos, errors, loading } = useApp();

  if (errors.github) {
    return (
      <div className="flex items-center gap-2 text-red-400">
        <AlertCircle className="w-5 h-5" />
        <p>{errors.github}</p>
      </div>
    );
  }

  if (loading) {
    return <p className="text-gray-400">Loading repositories...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {repos.map(repo => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400 transition-all hover:transform hover:scale-105"
        >
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-xl font-semibold text-white">{repo.name}</h4>
            <ExternalLink className="w-5 h-5 text-green-400" />
          </div>
          {repo.description && (
            <p className="text-gray-300 mb-4 text-sm">{repo.description}</p>
          )}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            {repo.language && (
              <span className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
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