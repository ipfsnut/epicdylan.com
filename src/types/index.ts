export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

export interface FarcasterUser {
  fid: number;
  username: string;
  display_name: string;
  profile?: {
    bio?: {
      text: string;
    };
  };
  pfp_url: string;
  follower_count: number;
  following_count: number;
}

export interface ChessStats {
  last: {
    rating: number;
    date: number;
  };
  best: {
    rating: number;
    date: number;
  };
  record: {
    win: number;
    loss: number;
    draw: number;
  };
}

export interface ChessPlayerStats {
  chess_rapid?: ChessStats;
  chess_bullet?: ChessStats;
  chess_blitz?: ChessStats;
  tactics?: {
    highest: {
      rating: number;
      date: number;
    };
    lowest: {
      rating: number;
      date: number;
    };
  };
}

export interface ApiError {
  github?: string;
  farcaster?: string;
  chess?: string;
}

export interface AppState {
  githubData: GitHubUser | null;
  repos: GitHubRepo[];
  farcasterData: FarcasterUser | null;
  chessData: ChessPlayerStats | null;
  loading: boolean;
  errors: ApiError;
}

export type PageType = 'home' | 'books' | 'consciousness' | 'cognitive-effort' | 'cv';