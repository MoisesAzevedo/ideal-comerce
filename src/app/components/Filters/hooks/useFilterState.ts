'use client';

import { useState, useCallback } from 'react';
import type { FilterState } from '../types';

/**
 * Hook for managing filter state
 * Responsibility: Handle filter state logic and provide state update functions
 */
export const useFilterState = (initialState?: Partial<FilterState>) => {
  const [filterState, setFilterState] = useState<FilterState>({
    categories: [],
    sizes: [],
    ...initialState,
  });

  const updateCategories = useCallback((categories: string[]) => {
    setFilterState(prev => ({
      ...prev,
      categories,
    }));
  }, []);

  const updateSizes = useCallback((sizes: string[]) => {
    setFilterState(prev => ({
      ...prev,
      sizes,
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilterState({
      categories: [],
      sizes: [],
    });
  }, []);

  return {
    filterState,
    updateCategories,
    updateSizes,
    clearFilters,
  };
};