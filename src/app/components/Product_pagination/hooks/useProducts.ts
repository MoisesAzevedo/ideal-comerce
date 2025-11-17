"use client";

import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import type { Product } from "../../../../../db";
import type { ProductsQueryParams } from "../services/products-service";
import { createProductsService } from "../services/products-service";

// Hook state interface
export interface UseProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  meta: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  } | null;
}

// Hook return interface
export interface UseProductsReturn extends UseProductsState {
  refetch: () => void;
}

export function useProducts(params: ProductsQueryParams = {}): UseProductsReturn {
  if (process.env.NODE_ENV === 'development') {
    console.log('🎯 useProducts: HOOK INITIALIZED with params:', params);
  }
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<UseProductsState['meta']>(null);
  const [isRequesting, setIsRequesting] = useState<boolean>(false);
  const requestTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  if (process.env.NODE_ENV === 'development') {
    console.log('🎯 useProducts: State initialized, creating productsService...');
  }

  const productsService = useMemo(() => createProductsService(), []);

  const fetchProducts = useCallback(async () => {
    // Previne múltiplas requisições simultâneas
    if (isRequesting) {
      console.log('🚫 useProducts: Requisição já em andamento, ignorando...');
      return;
    }

    // Limpa timeout anterior se existir
    if (requestTimeoutRef.current) {
      clearTimeout(requestTimeoutRef.current);
    }

    // Debounce de 200ms para evitar múltiplas chamadas consecutivas
    requestTimeoutRef.current = setTimeout(async () => {
      if (process.env.NODE_ENV === 'development') {
        console.log('🎯 useProducts: Fetching products with:', params);
      }
      
      try {
        setIsRequesting(true);
        setLoading(true);
        setError(null);
        
        const response = await productsService.getProducts(params);
        
        if (process.env.NODE_ENV === 'development') {
          console.log('🎯 useProducts: Response received:', {
            dataLength: response.data.length,
            meta: response.meta
          });
        }
        
        setProducts(response.data);
        setMeta(response.meta);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
        console.error('❌ useProducts: Error:', err);
        setError(errorMessage);
        setProducts([]);
        setMeta(null);
      } finally {
        setLoading(false);
        setIsRequesting(false);
      }
    }, 200);
  }, [params.page, params.perPage, params.category, params.size, params.q, params.minPrice, params.maxPrice, productsService]); // Removido isRequesting das dependências

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('🎯 useProducts: useEffect TRIGGERED with params:', params);
    }
    
    fetchProducts();

    // Cleanup ao desmontar
    return () => {
      if (requestTimeoutRef.current) {
        clearTimeout(requestTimeoutRef.current);
      }
    };
  }, [fetchProducts]); // Re-fetch when any parameter changes

  const refetch = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('🎯 useProducts: Manual refetch called');
    }
    fetchProducts();
  };

  if (process.env.NODE_ENV === 'development') {
    console.log('🎯 useProducts: RETURNING state:', { 
      productsLength: products.length, 
      loading, 
      error,
      meta 
    });
  }

  return {
    products,
    loading,
    error,
    meta,
    refetch,
  };
}

export default useProducts;