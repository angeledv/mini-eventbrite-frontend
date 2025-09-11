import { useCallback } from 'react';
const KEY = 'quickpass-last-path';

export default function useLastVisited() {
  const setLastPath = useCallback((path) => {
    try {
      localStorage.setItem(KEY, path);
    } catch (e) {}
  }, []);

  const getLastPath = useCallback(() => {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }, []);

  return { setLastPath, getLastPath };
}