/**
 * Hook para navegação de produtos
 * Responsabilidade única: Fornecer funcionalidades de navegação para produtos
 */

'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { navigateToProduct, isValidProductIdForNavigation } from '../services/navigationService';

export function useProductNavigation() {
  const router = useRouter();

  /**
   * Navega para página de produto
   * @param productId - ID do produto
   */
  const goToProduct = useCallback((productId: number) => {
    if (!isValidProductIdForNavigation(productId)) {
      console.error('ID de produto inválido:', productId);
      return;
    }

    try {
      navigateToProduct(productId, router);
    } catch (error) {
      console.error('Erro ao navegar para produto:', error);
    }
  }, [router]);

  /**
   * Navega para página de produto e adiciona ao histórico
   * @param productId - ID do produto
   */
  const buyProduct = useCallback((productId: number) => {
    goToProduct(productId);
  }, [goToProduct]);

  return {
    goToProduct,
    buyProduct,
    isValidProductId: isValidProductIdForNavigation,
  };
}