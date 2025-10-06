import { GitHubUser, GitHubRepo, FarcasterUser } from '../types';

const GITHUB_USERNAME = 'ipfsnut';
const FARCASTER_USERNAME = 'epicdylan';

export class ApiService {
  static async fetchGitHubUser(): Promise<GitHubUser> {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub user data');
    }
    return response.json();
  }

  static async fetchGitHubRepos(): Promise<GitHubRepo[]> {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repositories');
    }
    return response.json();
  }

  static async fetchFarcasterUser(): Promise<FarcasterUser> {
    const response = await fetch(
      `https://api.neynar.com/v2/farcaster/user/by_username?username=${FARCASTER_USERNAME}`,
      {
        headers: {
          'accept': 'application/json',
          'api_key': 'NEYNAR_API_DOCS'
        }
      }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch Farcaster user data');
    }
    const data = await response.json();
    return data.user;
  }
}