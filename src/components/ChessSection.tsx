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
        <div className="bg-white rounded-xl p-8 border border-warm-border">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-8 h-8 text-warm-accent animate-pulse" />
            <h2 className="text-3xl font-bold font-display text-warm-text">Chess Is Hard</h2>
          </div>
          <div className="text-warm-text-secondary">Loading chess stats...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-16">
        <div className="bg-white rounded-xl p-8 border border-warm-border">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-8 h-8 text-warm-accent" />
            <h2 className="text-3xl font-bold font-display text-warm-text">Chess Is Hard</h2>
          </div>
          <div className="text-red-500">Unable to load chess data</div>
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
        className={`bg-white rounded-xl p-8 border border-warm-border ${
          onClick ? 'cursor-pointer hover:border-warm-accent/50 hover:shadow-md transition-all duration-300' : ''
        }`}
        onClick={onClick}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="section-number">06 //</span>
            <h2 className="text-3xl font-bold font-display text-warm-text flex items-center gap-3 glitch-hover" data-text="Chess Is Hard">
              <Trophy className="w-8 h-8 text-warm-accent" />
              Chess Is Hard
            </h2>
          </div>
          <div className="flex gap-3">
            <a
              href="https://chess.com/play/ipfsnut"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-warm-accent hover:bg-warm-accent-hover text-white rounded-lg transition-colors text-sm font-medium"
            >
              <Swords className="w-4 h-4" />
              Challenge Me
            </a>
            <a
              href="https://chess.com/member/ipfsnut"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-warm-bg hover:bg-warm-border/50 text-warm-text-secondary hover:text-warm-text rounded-lg transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              View Profile
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Bullet */}
          {bulletStats && (
            <div className="bg-warm-bg rounded-lg p-6 border border-warm-border">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-warm-accent" />
                <h3 className="text-xl font-bold text-warm-text">Bullet</h3>
                <span className="text-xs text-warm-text-secondary bg-white px-2 py-1 rounded">1+0</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-warm-text-secondary">Current:</span>
                  <span className="text-warm-text font-semibold">{bulletStats.last.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-text-secondary">Best:</span>
                  <span className="text-warm-accent font-semibold">{bulletStats.best.rating}</span>
                </div>
                {bulletStats.record && (
                  <div className="pt-2 border-t border-warm-border">
                    <div className="text-warm-text-secondary text-sm mb-1">Record:</div>
                    <div className="text-sm">
                      <span className="text-green-600">{bulletStats.record.win}W</span>
                      <span className="text-warm-text-secondary mx-1">•</span>
                      <span className="text-red-500">{bulletStats.record.loss}L</span>
                      <span className="text-warm-text-secondary mx-1">•</span>
                      <span className="text-warm-text-secondary">{bulletStats.record.draw}D</span>
                    </div>
                    <div className="text-xs text-warm-text-secondary mt-1">
                      {formatRecord(bulletStats.record).winRate}% win rate
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Blitz */}
          {blitzStats && (
            <div className="bg-warm-bg rounded-lg p-6 border border-warm-border">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-warm-accent" />
                <h3 className="text-xl font-bold text-warm-text">Blitz</h3>
                <span className="text-xs text-warm-text-secondary bg-white px-2 py-1 rounded">3+0, 5+0</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-warm-text-secondary">Current:</span>
                  <span className="text-warm-text font-semibold">{blitzStats.last.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-text-secondary">Best:</span>
                  <span className="text-warm-accent font-semibold">{blitzStats.best.rating}</span>
                </div>
                {blitzStats.record && (
                  <div className="pt-2 border-t border-warm-border">
                    <div className="text-warm-text-secondary text-sm mb-1">Record:</div>
                    <div className="text-sm">
                      <span className="text-green-600">{blitzStats.record.win}W</span>
                      <span className="text-warm-text-secondary mx-1">•</span>
                      <span className="text-red-500">{blitzStats.record.loss}L</span>
                      <span className="text-warm-text-secondary mx-1">•</span>
                      <span className="text-warm-text-secondary">{blitzStats.record.draw}D</span>
                    </div>
                    <div className="text-xs text-warm-text-secondary mt-1">
                      {formatRecord(blitzStats.record).winRate}% win rate
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Rapid */}
          {rapidStats && (
            <div className="bg-warm-bg rounded-lg p-6 border border-warm-border">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-warm-accent" />
                <h3 className="text-xl font-bold text-warm-text">Rapid</h3>
                <span className="text-xs text-warm-text-secondary bg-white px-2 py-1 rounded">10+0, 15+10</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-warm-text-secondary">Current:</span>
                  <span className="text-warm-text font-semibold">{rapidStats.last.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-text-secondary">Best:</span>
                  <span className="text-warm-accent font-semibold">{rapidStats.best.rating}</span>
                </div>
                {rapidStats.record && (
                  <div className="pt-2 border-t border-warm-border">
                    <div className="text-warm-text-secondary text-sm mb-1">Record:</div>
                    <div className="text-sm">
                      <span className="text-green-600">{rapidStats.record.win}W</span>
                      <span className="text-warm-text-secondary mx-1">•</span>
                      <span className="text-red-500">{rapidStats.record.loss}L</span>
                      <span className="text-warm-text-secondary mx-1">•</span>
                      <span className="text-warm-text-secondary">{rapidStats.record.draw}D</span>
                    </div>
                    <div className="text-xs text-warm-text-secondary mt-1">
                      {formatRecord(rapidStats.record).winRate}% win rate
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="mt-6 bg-warm-bg rounded-lg p-4 border border-warm-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-warm-accent">
                {bulletStats ? bulletStats.last.rating : '-'}
              </div>
              <div className="text-xs text-warm-text-secondary">Bullet Current</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-warm-accent">
                {blitzStats ? blitzStats.last.rating : '-'}
              </div>
              <div className="text-xs text-warm-text-secondary">Blitz Current</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-warm-accent">
                {rapidStats ? rapidStats.last.rating : '-'}
              </div>
              <div className="text-xs text-warm-text-secondary">Rapid Current</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-warm-accent">
                {bulletStats && blitzStats && rapidStats
                  ? Math.round((bulletStats.last.rating + blitzStats.last.rating + rapidStats.last.rating) / 3)
                  : '-'
                }
              </div>
              <div className="text-xs text-warm-text-secondary">Average Rating</div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center text-warm-text-secondary text-sm">
          Stats update daily via Chess.com API • Challenge me for a game!
        </div>

        {showViewMoreButton && (
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 text-warm-accent hover:text-warm-accent-hover transition-colors cursor-pointer">
              <span className="text-sm font-medium">Click anywhere to view my chess philosophy & more stats</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
