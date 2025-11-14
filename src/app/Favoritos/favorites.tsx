'use client';
import React from 'react';

type FavoritesContextValue = {
  favoriteIds: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  clearFavorites: () => void;
};

const FavoritesContext = React.createContext<FavoritesContextValue | undefined>(
  undefined,
);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favoriteIds, setFavoriteIds] = React.useState<number[]>(() => {
    try {
      if (typeof window === 'undefined') return [];
      const raw = localStorage.getItem('favoriteIds');
      return raw ? JSON.parse(raw) : [];
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

  const addFavorite = (id: number) =>
    setFavoriteIds((s) => (s.includes(id) ? s : [...s, id]));
  const removeFavorite = (id: number) =>
    setFavoriteIds((s) => s.filter((x) => x !== id));
  const clearFavorites = () => setFavoriteIds([]);
  const isFavorite = (id: number) => favoriteIds.includes(id);

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
