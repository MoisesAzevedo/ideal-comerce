'use client';

import { useState, useEffect } from 'react';
import type { Category } from '../../../../../db/types';
import { categories as mockCategories } from '../../../../../db/data/categories';

/**
 * Hook for fetching categories data
 * Responsibility: Handle category data fetching and provide loading states
 */
export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        
        // Simulate API call with mock data
        // In a real app, this would be an actual API call
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Filter only active categories and sort by sort_order
        const activeCategories = mockCategories
          .filter(category => category.is_active)
          .sort((a, b) => a.sort_order - b.sort_order);
          
        setCategories(activeCategories);
      } catch (err) {
        setError('Erro ao carregar categorias');
        console.error('Error fetching categories:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return {
    categories,
    isLoading,
    error,
  };
};