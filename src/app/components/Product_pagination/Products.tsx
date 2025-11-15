"use client";

import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { usePaginatedProducts } from "./hooks/usePaginatedProducts";
import { useProductNavigation } from "./hooks/useProductNavigation";
import { LoadMoreButton } from "./components/LoadMoreButton";

const Products = () => {
  const { 
    products, 
    loading, 
    error, 
    hasMore, 
    loadMore, 
    totalProducts 
  } = usePaginatedProducts({ perPage: 20 });
  
  const { buyProduct } = useProductNavigation();

  // Exibe todos os produtos acumulados (paginação incremental)
  const visibleProducts = products ?? [];

  // Divide em linhas de 4 produtos
  const rows: typeof visibleProducts[] = [];
  for (let i = 0; i < visibleProducts.length; i += 4) {
    rows.push(visibleProducts.slice(i, i + 4));
  }

  const handleBuyProduct = (productId: string) => {
    buyProduct(productId);
  };

  return (
    <div className="flex flex-col items-center w-full mt-16">

      {/* Estado de loading inicial */}
      {loading && visibleProducts.length === 0 && (
        <div className="w-full text-center py-8 text-gray-500">Carregando produtos...</div>
      )}

      {/* Estado de erro */}
      {error && (
        <div className="w-full text-center py-8 text-red-500">Erro ao carregar produtos: {error}</div>
      )}

      {/* Grid de produtos */}
      {!error && visibleProducts.length > 0 && (
        <div className="flex flex-col gap-8 justify-center w-full pb-8">
          {rows.map((row, idx) => (
            <div key={idx} className="flex flex-row gap-8 justify-center w-full">
              {row.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onBuy={() => handleBuyProduct(product.id)}
                />
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Botão "Ver mais" */}
      {!error && visibleProducts.length > 0 && (
        <LoadMoreButton
          onClick={loadMore}
          loading={loading}
          hasMore={hasMore}
          totalProducts={totalProducts}
          currentProducts={visibleProducts.length}
        />
      )}
    </div>
  );
};

export default Products;
