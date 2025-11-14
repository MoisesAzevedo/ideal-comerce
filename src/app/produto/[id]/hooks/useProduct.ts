/**
 * Hook: useProduct
 * Responsabilidade única: Gerenciar estado e carregamento de um produto específico
 */

'use client';

import { useState, useEffect } from 'react';
import { Product } from '../../../../../db/types';
import { fetchProductById } from '../services/productService';

interface UseProductState {
  product: Product | null;
  loading: boolean;
  error: string | null;
}

export function useProduct(params: Promise<{ id: string }>) {
  const [state, setState] = useState<UseProductState>({
    product: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;

    const loadProduct = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        
        const { id } = await params;
        
        if (!id) {
          setState(prev => ({ 
            ...prev, 
            loading: false, 
            error: 'ID do produto não fornecido' 
          }));
          return;
        }

        const response = await fetchProductById(id);

        if (!isMounted) return;

        if (response.success && response.product) {
          setState({
            product: response.product,
            loading: false,
            error: null
          });
        } else {
          setState({
            product: null,
            loading: false,
            error: response.message || 'Produto não encontrado'
          });
        }
      } catch (error) {
        if (!isMounted) return;
        
        setState({
          product: null,
          loading: false,
          error: error instanceof Error ? error.message : 'Erro ao carregar produto'
        });
      }
    };

    loadProduct();

    return () => {
      isMounted = false;
    };
  }, [params]);

  return state;
}