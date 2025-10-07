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
  bio: {
    text: string;
  };
  pfp: {
    url: string;
  };
  follower_count: number;
  following_count: number;
}

export interface ApiError {
  github?: string;
  farcaster?: string;
}

export interface AppState {
  githubData: GitHubUser | null;
  repos: GitHubRepo[];
  farcasterData: FarcasterUser | null;
  loading: boolean;
  errors: ApiError;
}

export type PageType = 'home' | 'books' | 'consciousness' | 'cognitive-effort';