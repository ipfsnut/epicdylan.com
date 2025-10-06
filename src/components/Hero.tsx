import React from 'react';
import { Github, Users, Code2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Hero: React.FC = () => {
  const { githubData } = useApp();

  return (
    <div className="text-center mb-16">
      <div className="mb-6">
        {githubData?.avatar_url && (
          <img 
            src={githubData.avatar_url} 
            alt="Dylan"
            className="w-32 h-32 rounded-full mx-auto border-4 border-purple-400 shadow-2xl"
          />
        )}
      </div>
      <h1 className="text-6xl font-bold text-white mb-4">
        Dylan
      </h1>
      <p className="text-2xl text-purple-300 mb-2">
        Consciousness Researcher • Web3 Builder
      </p>
      <p className="text-xl text-gray-400 mb-6">
        Psychology PhD Student • Open Source Developer • Author
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <a 
          href="https://github.com/ipfsnut"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
        <a 
          href="https://warpcast.com/epicdylan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
        >
          <Users className="w-5 h-5" />
          Farcaster
        </a>
        <a 
          href="https://github.com/ipfsnut/epicdylan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
        >
          <Code2 className="w-5 h-5" />
          Site Source
        </a>
      </div>
    </div>
  );
};