import React, { useState, useEffect } from 'react';

interface FarcasterAvatarProps {
  username: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLink?: boolean;
}

// Fallback logos for known projects (in case API fails or rate limits)
const FALLBACK_LOGOS: Record<string, string> = {
  'abc-dao-dev': 'https://abc.epicdylan.com/ABC_DAO_LOGO.png',
  'arbme': 'https://arbme.epicdylan.com/arbie.png',
  'pagedao': 'https://pagedao.org/logo.svg',
  'pizzadao': 'https://cdn.prod.website-files.com/60651d01d383e4f482012c1d/6178ba2a48550201fd48936d_pizzadao-logo.svg',
};

export const FarcasterAvatar: React.FC<FarcasterAvatarProps> = ({
  username,
  size = 'md',
  className = '',
  showLink = true
}) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await fetch(
          `https://api.neynar.com/v2/farcaster/user/by_username?username=${username}`,
          {
            headers: {
              'accept': 'application/json',
              'api_key': 'NEYNAR_API_DOCS'
            }
          }
        );
        if (response.ok) {
          const data = await response.json();
          setAvatarUrl(data.user?.pfp_url || FALLBACK_LOGOS[username] || null);
        } else {
          // API failed, use fallback
          setAvatarUrl(FALLBACK_LOGOS[username] || null);
        }
      } catch (err) {
        console.error(`Failed to fetch Farcaster avatar for @${username}:`, err);
        setAvatarUrl(FALLBACK_LOGOS[username] || null);
      } finally {
        setLoading(false);
      }
    };

    fetchAvatar();
  }, [username]);

  // Handle image load errors
  const handleImageError = () => {
    if (FALLBACK_LOGOS[username] && avatarUrl !== FALLBACK_LOGOS[username]) {
      setAvatarUrl(FALLBACK_LOGOS[username]);
    } else {
      setError(true);
    }
  };

  const warpcastUrl = `https://warpcast.com/${username}`;

  if (loading) {
    return (
      <div className={`${sizeClasses[size]} rounded-full bg-warm-accent/20 animate-pulse ${className}`} />
    );
  }

  const image = (avatarUrl && !error) ? (
    <img
      src={avatarUrl}
      alt={`@${username}`}
      className={`${sizeClasses[size]} rounded-full object-cover ${className}`}
      onError={handleImageError}
    />
  ) : (
    <div className={`${sizeClasses[size]} rounded-full bg-warm-accent flex items-center justify-center text-white text-xs font-bold ${className}`}>
      {username.charAt(0).toUpperCase()}
    </div>
  );

  if (showLink) {
    return (
      <a
        href={warpcastUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
        title={`@${username} on Farcaster`}
      >
        {image}
      </a>
    );
  }

  return image;
};
