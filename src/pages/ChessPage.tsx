import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Target, Users, Zap, Crown, Swords, ExternalLink, ArrowLeft } from 'lucide-react';
import { ChessSection } from '../components/ChessSection';

export const ChessPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link
        to="/"
        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <Crown className="w-12 h-12 text-amber-400" />
          <h1 className="text-5xl font-bold text-white">Chess</h1>
        </div>
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
          Few games capture the pure essence of strategic thinking like chess. 
          It's a perfect blend of pattern recognition, tactical calculation, and deep planning 
          that mirrors the very cognitive processes I study in consciousness research.
        </p>
      </div>

      {/* Why I Love Chess */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-red-400" />
          <h2 className="text-3xl font-bold text-white">Why I Love This Game</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold text-purple-300">Cognitive Playground</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Chess is the ultimate laboratory for studying human cognition in action. Every move 
              requires pattern recognition, working memory, strategic planning, and tactical calculation. 
              It's a perfect microcosm of the cognitive processes I research—decision-making under 
              uncertainty, attention allocation, and the interplay between intuition and analysis.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-xl p-8 border border-amber-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-amber-400" />
              <h3 className="text-xl font-bold text-amber-300">Pure Logic Beauty</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              There's something deeply satisfying about a game where success depends entirely on 
              the quality of your thinking. No luck, no hidden information—just two minds 
              engaging in the purest form of intellectual combat. Every position is a puzzle 
              waiting to be solved, every game a story of strategic evolution.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl p-8 border border-green-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-bold text-green-300">Time Control Varieties</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I'm particularly drawn to bullet and blitz formats. The time pressure creates a 
              fascinating tension between deep calculation and rapid pattern recognition. 
              It's like interval training for the mind—forcing quick decisions while maintaining 
              tactical awareness. The adrenaline rush of a time scramble is incomparable.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-900/20 to-pink-900/20 rounded-xl p-8 border border-red-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold text-red-300">Global Connection</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Chess transcends language, culture, and geography. I can sit down with anyone, 
              anywhere in the world, and immediately engage in meaningful intellectual exchange. 
              Online platforms like Chess.com have created this incredible global community 
              where you can test your skills against diverse playing styles 24/7.
            </p>
          </div>
        </div>
      </div>

      {/* Current Performance */}
      <ChessSection />

      {/* Playing Philosophy */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Swords className="w-8 h-8 text-blue-400" />
          <h2 className="text-3xl font-bold text-white">My Playing Philosophy</h2>
        </div>
        
        <div className="bg-gradient-to-br from-slate-800/20 to-gray-900/20 rounded-xl p-8 border border-gray-500/20">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              I approach chess with the same systematic mindset I bring to research. I'm constantly 
              experimenting with different openings, studying tactical patterns, and analyzing my games 
              to identify improvement areas. The parallels between chess improvement and scientific 
              methodology are striking—hypothesis formation, controlled experimentation, and iterative refinement.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              My current focus is on improving tactical awareness in time-pressured situations. 
              There's something beautiful about the moment when pattern recognition kicks in and 
              you instantly see a tactical motif. It's pure intuition backed by thousands of hours 
              of deliberate practice—much like how expertise develops in any domain.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Chess also serves as an excellent break from academic work. When I'm debugging code 
              or wrestling with complex theoretical problems, a few games of blitz provide the perfect 
              mental reset. It's focused enough to be engaging but different enough to give other 
              cognitive systems a rest.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-br from-amber-900/20 to-yellow-900/20 rounded-xl p-8 border border-amber-500/20">
        <h3 className="text-2xl font-bold text-white mb-4">Let's Play!</h3>
        <p className="text-gray-300 mb-6">
          I'm always up for a game. Whether you're a beginner looking for a friendly match 
          or an experienced player wanting a competitive challenge, feel free to send me a challenge.
        </p>
        
        <div className="flex justify-center gap-4">
          <a
            href="https://chess.com/play/ipfsnut"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white rounded-lg transition-colors font-medium"
          >
            <Swords className="w-5 h-5" />
            Challenge Me to a Game
          </a>
          
          <a
            href="https://chess.com/member/ipfsnut"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-black/30 hover:bg-black/50 text-gray-300 hover:text-white rounded-lg transition-colors font-medium border border-gray-500"
          >
            <ExternalLink className="w-5 h-5" />
            View My Profile
          </a>
        </div>
        
        <p className="text-gray-400 text-sm mt-4">
          I typically play bullet (1+0), blitz (3+0, 5+0), and rapid (10+0) games. 
          All skill levels welcome!
        </p>
      </div>
    </div>
  );
};