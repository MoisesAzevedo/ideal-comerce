'use client';

import { useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { useFilters } from './useFilters';

/**
 * Hook para sincronizar filtros com parâmetros de URL
 * Responsabilidade: Ler parâmetros da URL e aplicar filtros automaticamente
 */
export const useUrlParams = () => {
  const searchParams = useSearchParams();
  const { updateCategories, updateSizes, updatePriceRange } = useFilters();

  /**
   * Aplica filtros a partir dos parâmetros de URL
   */
  const applyFiltersFromUrl = useCallback(() => {
    try {
      // Ler parâmetro de categorias
      const categoriesParam = searchParams.get('categories');
      if (categoriesParam) {
        const categoryIds = categoriesParam.split(',').filter(Boolean);
        if (categoryIds.length > 0) {
          console.log('🔗 URL Params: Applying categories from URL:', categoryIds);
          updateCategories(categoryIds);
        }
      }

      // Ler parâmetro de tamanhos
      const sizesParam = searchParams.get('sizes');
      if (sizesParam) {
        const sizes = sizesParam.split(',').filter(Boolean);
        if (sizes.length > 0) {
          console.log('🔗 URL Params: Applying sizes from URL:', sizes);
          updateSizes(sizes);
        }
      }

      // Ler parâmetros de preço
      const minPriceParam = searchParams.get('minPrice');
      const maxPriceParam = searchParams.get('maxPrice');
      if (minPriceParam || maxPriceParam) {
        const priceRange = {
          min: minPriceParam ? parseFloat(minPriceParam) : undefined,
          max: maxPriceParam ? parseFloat(maxPriceParam) : undefined,
        };
        console.log('🔗 URL Params: Applying price range from URL:', priceRange);
        updatePriceRange(priceRange);
      }
    } catch (error) {
      console.error('❌ URL Params: Error applying filters from URL:', error);
    }
  }, [searchParams, updateCategories, updateSizes, updatePriceRange]);

  /**
   * Aplica filtros quando a URL muda
   */
  useEffect(() => {
    applyFiltersFromUrl();
  }, [applyFiltersFromUrl]);

  return {
    applyFiltersFromUrl,
  };
};