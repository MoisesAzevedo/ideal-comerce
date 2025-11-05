"use client";

import { useEffect, useState, useCallback } from "react";
import type { Product } from "../../../../../db-mock-data/featured-products";
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

// Custom hook - Responsibility: Manage products state and lifecycle
export function useProducts(params: ProductsQueryParams = {}): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<UseProductsState['meta']>(null);

  // Create service instance (could be moved to context for DI)
  const productsService = createProductsService();

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await productsService.getProducts(params);
      
      setProducts(response.data);
      setMeta(response.meta);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMessage);
      setProducts([]);
      setMeta(null);
    } finally {
      setLoading(false);
    }
  }, [params, productsService]);

  useEffect(() => {
    let mounted = true;

    fetchProducts().then(() => {
      if (!mounted) {
        // Reset state if component unmounted during fetch
        setProducts([]);
        setLoading(false);
        setError(null);
        setMeta(null);
      }
    });

    return () => {
      mounted = false;
    };
  }, [fetchProducts]); // Re-fetch when fetchProducts changes

  const refetch = () => {
    fetchProducts();
  };

  return {
    products,
    loading,
    error,
    meta,
    refetch,
  };
}

export default useProducts;