/**
 * Hook: useRelatedProducts
 * Responsabilidade única: Verificar se há produtos suficientes para exibir o carrossel de relacionados
 */

'use client';

import { useState, useEffect } from 'react';
import { fetchProductsByCategory } from '../../../components/CategoryProductCarousel/services/categoryProductsService';

interface UseRelatedProductsParams {
  category: string;
  excludeProductId: string;
  minProductsToShow?: number;
}

interface UseRelatedProductsReturn {
  shouldShowCarousel: boolean;
  isLoading: boolean;
  productsCount: number;
}

export function useRelatedProducts({ 
  category, 
  excludeProductId, 
  minProductsToShow = 2 
}: UseRelatedProductsParams): UseRelatedProductsReturn {
  const [shouldShowCarousel, setShouldShowCarousel] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    const checkProducts = async () => {
      if (!category || !excludeProductId) {
        setIsLoading(false);
        setShouldShowCarousel(false);
        return;
      }

      try {
        setIsLoading(true);
        
        // Buscar produtos da categoria excluindo o produto atual
        const response = await fetchProductsByCategory({
          category,
          maxProducts: 20, // Buscar mais para ter certeza da contagem
          excludeProductId,
        });

        const count = response.products.length;
        setProductsCount(count);
        
        // Só exibir carrossel se houver produtos suficientes
        setShouldShowCarousel(count >= minProductsToShow);
        
        console.log('🎯 useRelatedProducts Debug:', {
          category,
          excludeProductId,
          productsFound: count,
          minRequired: minProductsToShow,
          shouldShow: count >= minProductsToShow
        });
        
      } catch (error) {
        console.error('Erro ao verificar produtos relacionados:', error);
        setShouldShowCarousel(false);
        setProductsCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    checkProducts();
  }, [category, excludeProductId, minProductsToShow]);

  return {
    shouldShowCarousel,
    isLoading,
    productsCount,
  };
}