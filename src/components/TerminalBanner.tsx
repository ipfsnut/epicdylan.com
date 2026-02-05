import React, { useState, useEffect } from 'react';

const TERMINAL_LINES = [
  '> initializing consciousness research...',
  '> status: LIVE',
  '> deploying to decentralized networks...',
  '> ready_'
];

export const TerminalBanner: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= TERMINAL_LINES.length) return;

    const currentLine = TERMINAL_LINES[lineIndex];

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentLine[charIndex]);
        setCharIndex(charIndex + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + '\n');
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="mb-12 bg-warm-text rounded-lg p-4 font-mono text-sm overflow-hidden">
      <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <span className="text-warm-text-secondary text-xs ml-2">~/epicdylan</span>
      </div>
      <pre className="text-warm-accent whitespace-pre-wrap leading-relaxed">
        {displayText}
        <span className="animate-pulse">█</span>
      </pre>
    </div>
  );
};
