'use client';
import React from 'react';

type FavoritesContextValue = {
  favoriteIds: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  clearFavorites: () => void;
};

const FavoritesContext = React.createContext<FavoritesContextValue | undefined>(
  undefined,
);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favoriteIds, setFavoriteIds] = React.useState<string[]>(() => {
    try {
      if (typeof window === 'undefined') return [];
      const raw = localStorage.getItem('favoriteIds');
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      // normalize values to numbers for robustness (accept strings or numbers)
      return parsed
        .map((v: unknown) => {
          if (typeof v === 'string') return v;
          if (typeof v === 'number') return String(v);
          return null;
        })
        .filter((s: string | null): s is string => s !== null);
    } catch {
      return [];
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds));
    } catch {
      // ignore
    }
  }, [favoriteIds]);

  const addFavorite = (id: string) =>
    setFavoriteIds((s) => (s.includes(id) ? s : [...s, id]));
  const removeFavorite = (id: string) =>
    setFavoriteIds((s) => s.filter((x) => x !== id));
  const clearFavorites = () => setFavoriteIds([]);
  const isFavorite = (id: string) => favoriteIds.includes(id);

  return (
    <FavoritesContext.Provider
      value={{
        favoriteIds,
        addFavorite,
        removeFavorite,
        isFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = React.useContext(FavoritesContext);
  if (!ctx)
    throw new Error('useFavorites must be used within FavoritesProvider');
  return ctx;
}

export default FavoritesProvider;
