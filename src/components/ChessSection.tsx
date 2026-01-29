import React, { useState, useEffect } from 'react';
import { Trophy, Target, Zap, Users, ExternalLink, Swords, ArrowRight } from 'lucide-react';
import { ApiService } from '../services/api';
import { ChessPlayerStats } from '../types';

interface ChessSectionProps {
  onClick?: () => void;
  showViewMoreButton?: boolean;
}

export const ChessSection: React.FC<ChessSectionProps> = ({ 
  onClick, 
  showViewMoreButton = false 
}) => {
  const [chessStats, setChessStats] = useState<ChessPlayerStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChessData = async () => {
      try {
        const stats = await ApiService.fetchChessStats();
        setChessStats(stats);
      } catch (err) {
        setError('Failed to load chess stats');
        console.error('Chess API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchChessData();
  }, []);

  const formatRecord = (record: { win: number; loss: number; draw: number }) => {
    const total = record.win + record.loss + record.draw;
    const winRate = total > 0 ? ((record.win / total) * 100).toFixed(1) : '0';
    return { total, winRate, ...record };
  };

  if (loading) {
    return (
      <div className="mb-16">
        <div className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 rounded-xl p-8 border border-amber-500/20">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-8 h-8 text-amber-400 animate-pulse" />
            <h2 className="text-3xl font-bold text-white">Chess Is Hard</h2>
          </div>
          <div className="text-gray-400">Loading chess stats...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-16">
        <div className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 rounded-xl p-8 border border-amber-500/20">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-8 h-8 text-amber-400" />
            <h2 className="text-3xl font-bold text-white">Chess Is Hard</h2>
          </div>
          <div className="text-red-400">Unable to load chess data</div>
        </div>
      </div>
    );
  }

  const bulletStats = chessStats?.chess_bullet;
  const blitzStats = chessStats?.chess_blitz;
  const rapidStats = chessStats?.chess_rapid;

  return (
    <div className="mb-16">
      <div 
        className={`bg-gradient-to-br from-amber-900/20 to-yellow-900/20 rounded-xl p-8 border border-amber-500/20 ${
          onClick ? 'cursor-pointer hover:from-amber-900/30 hover:to-yellow-900/30 hover:border-amber-500/30 transition-all duration-300' : ''
        }`}
        onClick={onClick}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="section-number">06 //</span>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3 glitch-hover" data-text="Chess Is Hard">
              <Trophy className="w-8 h-8 text-amber-400" />
              Chess Is Hard
            </h2>
          </div>
          <div className="flex gap-3">
            <a
              href="https://chess.com/play/ipfsnut"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white rounded-lg transition-colors text-sm font-medium"
            >
              <Swords className="w-4 h-4" />
              Challenge Me
            </a>
            <a
              href="https://chess.com/member/ipfsnut"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-black/30 hover:bg-black/50 text-gray-300 hover:text-white rounded-lg transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              View Profile
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Bullet */}
          {bulletStats && (
            <div className="bg-black/20 rounded-lg p-6 border border-amber-500/10">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-bold text-yellow-300">Bullet</h3>
                <span className="text-xs text-gray-400 bg-black/30 px-2 py-1 rounded">1+0</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Current:</span>
                  <span className="text-white font-semibold">{bulletStats.last.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Best:</span>
                  <span className="text-yellow-300 font-semibold">{bulletStats.best.rating}</span>
                </div>
                {bulletStats.record && (
                  <div className="pt-2 border-t border-gray-600">
                    <div className="text-gray-400 text-sm mb-1">Record:</div>
                    <div className="text-sm">
                      <span className="text-green-400">{bulletStats.record.win}W</span>
                      <span className="text-gray-500 mx-1">•</span>
                      <span className="text-red-400">{bulletStats.record.loss}L</span>
                      <span className="text-gray-500 mx-1">•</span>
                      <span className="text-gray-400">{bulletStats.record.draw}D</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {formatRecord(bulletStats.record).winRate}% win rate
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Blitz */}
          {blitzStats && (
            <div className="bg-black/20 rounded-lg p-6 border border-amber-500/10">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl font-bold text-orange-300">Blitz</h3>
                <span className="text-xs text-gray-400 bg-black/30 px-2 py-1 rounded">3+0, 5+0</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Current:</span>
                  <span className="text-white font-semibold">{blitzStats.last.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Best:</span>
                  <span className="text-orange-300 font-semibold">{blitzStats.best.rating}</span>
                </div>
                {blitzStats.record && (
                  <div className="pt-2 border-t border-gray-600">
                    <div className="text-gray-400 text-sm mb-1">Record:</div>
                    <div className="text-sm">
                      <span className="text-green-400">{blitzStats.record.win}W</span>
                      <span className="text-gray-500 mx-1">•</span>
                      <span className="text-red-400">{blitzStats.record.loss}L</span>
                      <span className="text-gray-500 mx-1">•</span>
                      <span className="text-gray-400">{blitzStats.record.draw}D</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {formatRecord(blitzStats.record).winRate}% win rate
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Rapid */}
          {rapidStats && (
            <div className="bg-black/20 rounded-lg p-6 border border-amber-500/10">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-blue-300">Rapid</h3>
                <span className="text-xs text-gray-400 bg-black/30 px-2 py-1 rounded">10+0, 15+10</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Current:</span>
                  <span className="text-white font-semibold">{rapidStats.last.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Best:</span>
                  <span className="text-blue-300 font-semibold">{rapidStats.best.rating}</span>
                </div>
                {rapidStats.record && (
                  <div className="pt-2 border-t border-gray-600">
                    <div className="text-gray-400 text-sm mb-1">Record:</div>
                    <div className="text-sm">
                      <span className="text-green-400">{rapidStats.record.win}W</span>
                      <span className="text-gray-500 mx-1">•</span>
                      <span className="text-red-400">{rapidStats.record.loss}L</span>
                      <span className="text-gray-500 mx-1">•</span>
                      <span className="text-gray-400">{rapidStats.record.draw}D</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {formatRecord(rapidStats.record).winRate}% win rate
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="mt-6 bg-black/20 rounded-lg p-4 border border-amber-500/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-amber-300">
                {bulletStats ? bulletStats.last.rating : '-'}
              </div>
              <div className="text-xs text-gray-400">Bullet Current</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-300">
                {blitzStats ? blitzStats.last.rating : '-'}
              </div>
              <div className="text-xs text-gray-400">Blitz Current</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-300">
                {rapidStats ? rapidStats.last.rating : '-'}
              </div>
              <div className="text-xs text-gray-400">Rapid Current</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">
                {bulletStats && blitzStats && rapidStats 
                  ? Math.round((bulletStats.last.rating + blitzStats.last.rating + rapidStats.last.rating) / 3)
                  : '-'
                }
              </div>
              <div className="text-xs text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center text-gray-400 text-sm">
          Stats update daily via Chess.com API • Challenge me for a game!
        </div>

        {showViewMoreButton && (
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer">
              <span className="text-sm font-medium">Click anywhere to view my chess philosophy & more stats</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};