"use client";

import { useEffect, useState, useCallback } from "react";
import type { Product } from "../../../../../db";
import fetchFeaturedProducts, { ProductsApiResponse } from "../api/productsService";

// Hook com responsabilidade única: gerenciar fetch de produtos e expor estado
export function useProducts(options?: { page?: number; perPage?: number; category?: string; q?: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<ProductsApiResponse['meta'] | null>(null);


  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const res = await fetchFeaturedProducts(options);
      setProducts(res.data ?? []);
      setMeta(res.meta ?? null);
    } catch (err: any) {
      setError(err?.message ?? "Erro ao buscar produtos");
    } finally {
      setLoading(false);
    }
  }, [options?.page, options?.perPage, options?.category, options?.q]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { products, loading, error, meta } as const;
}

export default useProducts;
