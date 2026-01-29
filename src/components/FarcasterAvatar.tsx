import React, { useState, useEffect } from 'react';

interface FarcasterAvatarProps {
  username: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLink?: boolean;
}

export const FarcasterAvatar: React.FC<FarcasterAvatarProps> = ({
  username,
  size = 'md',
  className = '',
  showLink = true
}) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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
          setAvatarUrl(data.user?.pfp_url || null);
        }
      } catch (error) {
        console.error(`Failed to fetch Farcaster avatar for @${username}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchAvatar();
  }, [username]);

  const warpcastUrl = `https://warpcast.com/${username}`;

  if (loading) {
    return (
      <div className={`${sizeClasses[size]} rounded-full bg-purple-900/50 animate-pulse ${className}`} />
    );
  }

  const image = avatarUrl ? (
    <img
      src={avatarUrl}
      alt={`@${username}`}
      className={`${sizeClasses[size]} rounded-full object-cover ${className}`}
    />
  ) : (
    <div className={`${sizeClasses[size]} rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold ${className}`}>
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
