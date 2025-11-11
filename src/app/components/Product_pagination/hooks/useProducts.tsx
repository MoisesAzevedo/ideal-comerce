"use client";

import { useEffect, useState, useMemo } from "react";
import type { Product } from "../../../../../db-mock-data/featured-products";
import fetchFeaturedProducts, { ProductsApiResponse } from "../api/productsService";

// Hook com responsabilidade única: gerenciar fetch de produtos e expor estado
export function useProducts(options?: { page?: number; perPage?: number; category?: string; q?: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Memoize options by destructuring individual values to prevent unnecessary re-renders
  const memoizedOptions = useMemo(() => options, [
    options?.page,
    options?.perPage,
    options?.category,
    options?.q
  ]);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    fetchFeaturedProducts(memoizedOptions)
      .then((res: ProductsApiResponse) => {
        if (!mounted) return;
        setProducts(res.data ?? []);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err?.message ?? "Erro ao buscar produtos");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [memoizedOptions]);

  return { products, loading, error } as const;
}

export default useProducts;
