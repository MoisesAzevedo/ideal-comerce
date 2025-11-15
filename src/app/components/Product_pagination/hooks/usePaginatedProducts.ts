/**
 * Hook: usePaginatedProducts
 * Responsabilidade única: Gerenciar paginação de produtos com estratégia "load more"
 */

'use client';

import React, { useState, useCallback } from 'react';
import { useProducts } from './useProducts'; // Importa o .ts que tem meta

interface UsePaginatedProductsParams {
  perPage?: number;
  category?: string;
  q?: string;
}

interface UsePaginatedProductsReturn {
  products: any[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadMore: () => void;
  totalProducts: number;
  currentPage: number;
  reset: () => void;
}

export function usePaginatedProducts({
  perPage = 20,
  category,
  q
}: UsePaginatedProductsParams = {}): UsePaginatedProductsReturn {
  const [currentPage, setCurrentPage] = useState(1);
  const [allProducts, setAllProducts] = useState<any[]>([]);

  // Hook que busca produtos da página atual
  const { products, loading, error, meta } = useProducts({
    page: currentPage,
    perPage,
    category,
    q
  });

  // Atualiza a lista acumulada quando novos produtos chegam
  React.useEffect(() => {
    if (products && products.length > 0) {
      if (currentPage === 1) {
        // Primeira página - substitui tudo
        setAllProducts(products);
      } else {
        // Páginas subsequentes - adiciona aos existentes
        setAllProducts(prev => {
          // Evita duplicatas comparando IDs
          const existingIds = new Set(prev.map(p => p.id));
          const newProducts = products.filter(p => !existingIds.has(p.id));
          return [...prev, ...newProducts];
        });
      }
    }
  }, [products, currentPage]);

  // Determina se há mais produtos para carregar
  const hasMore = meta ? currentPage < meta.totalPages : false;
  const totalProducts = meta?.total || 0;

  // Função para carregar mais produtos
  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      setCurrentPage(prev => prev + 1);
    }
  }, [loading, hasMore]);

  // Função para resetar paginação
  const reset = useCallback(() => {
    setCurrentPage(1);
    setAllProducts([]);
  }, []);

  return {
    products: allProducts,
    loading,
    error,
    hasMore,
    loadMore,
    totalProducts,
    currentPage,
    reset,
  };
}