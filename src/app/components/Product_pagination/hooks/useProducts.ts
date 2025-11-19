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
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<UseProductsState['meta']>(null);
  const [isRequesting, setIsRequesting] = useState<boolean>(false);
  const requestTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // debug logs removed for production cleanliness

  const productsService = useMemo(() => createProductsService(), []);

  const fetchProducts = useCallback(async () => {
    // Previne múltiplas requisições simultâneas
    if (isRequesting) {
      return;
    }

    // Limpa timeout anterior se existir
    if (requestTimeoutRef.current) {
      clearTimeout(requestTimeoutRef.current);
    }

    // Debounce de 200ms para evitar múltiplas chamadas consecutivas
    requestTimeoutRef.current = setTimeout(async () => {
      // debug logs removed for production cleanliness
      
      try {
        setIsRequesting(true);
        setLoading(true);
        setError(null);
        
        const response = await productsService.getProducts(params);
        
        // debug logs removed for production cleanliness
        
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
    fetchProducts();

    // Cleanup ao desmontar
    return () => {
      if (requestTimeoutRef.current) {
        clearTimeout(requestTimeoutRef.current);
      }
    };
  }, [fetchProducts]); // Re-fetch when any parameter changes

  const refetch = () => {
    fetchProducts();
  };

  // debug logs removed for production cleanliness

  return {
    products,
    loading,
    error,
    meta,
    refetch,
  };
}

export default useProducts;