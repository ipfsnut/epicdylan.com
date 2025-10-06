import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AppState, GitHubUser, GitHubRepo, FarcasterUser, ApiError } from '../types';
import { ApiService } from '../services/api';

interface AppContextType extends AppState {
  setGitHubData: (data: GitHubUser) => void;
  setRepos: (repos: GitHubRepo[]) => void;
  setFarcasterData: (data: FarcasterUser) => void;
  setLoading: (loading: boolean) => void;
  setError: (service: keyof ApiError, error: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppAction =
  | { type: 'SET_GITHUB_DATA'; payload: GitHubUser }
  | { type: 'SET_REPOS'; payload: GitHubRepo[] }
  | { type: 'SET_FARCASTER_DATA'; payload: FarcasterUser }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; service: keyof ApiError; error: string };

const initialState: AppState = {
  githubData: null,
  repos: [],
  farcasterData: null,
  loading: true,
  errors: {}
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_GITHUB_DATA':
      return { ...state, githubData: action.payload };
    case 'SET_REPOS':
      return { ...state, repos: action.payload };
    case 'SET_FARCASTER_DATA':
      return { ...state, farcasterData: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return {
        ...state,
        errors: { ...state.errors, [action.service]: action.error }
      };
    default:
      return state;
  }
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setGitHubData = (data: GitHubUser) => {
    dispatch({ type: 'SET_GITHUB_DATA', payload: data });
  };

  const setRepos = (repos: GitHubRepo[]) => {
    dispatch({ type: 'SET_REPOS', payload: repos });
  };

  const setFarcasterData = (data: FarcasterUser) => {
    dispatch({ type: 'SET_FARCASTER_DATA', payload: data });
  };

  const setLoading = (loading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const setError = (service: keyof ApiError, error: string) => {
    dispatch({ type: 'SET_ERROR', service, error });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await ApiService.fetchGitHubUser();
        setGitHubData(userData);

        const reposData = await ApiService.fetchGitHubRepos();
        setRepos(reposData);
      } catch (err) {
        setError('github', 'ERROR: GitHub data unavailable');
      }

      try {
        const fcData = await ApiService.fetchFarcasterUser();
        setFarcasterData(fcData);
      } catch (err) {
        setError('farcaster', 'ERROR: Farcaster data unavailable');
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const value: AppContextType = {
    ...state,
    setGitHubData,
    setRepos,
    setFarcasterData,
    setLoading,
    setError
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};