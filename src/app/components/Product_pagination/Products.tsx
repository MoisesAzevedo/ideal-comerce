"use client";

import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import useProducts from "./hooks/useProducts";
import { useProductNavigation } from "./hooks/useProductNavigation";

const Products = () => {
  const { products, loading, error } = useProducts({ perPage: 16 });
  const { buyProduct } = useProductNavigation();

  // Exibe os produtos retornados pela API (já paginados)
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
      <h2 className="text-3xl font-bold mb-8 mt-8 uppercase pb-3 w-full text-center">
        PRODUTOS EM DESTAQUE
      </h2>

      {loading && (
        <div className="w-full text-center py-8 text-gray-500">Carregando produtos...</div>
      )}

      {error && (
        <div className="w-full text-center py-8 text-red-500">Erro ao carregar produtos: {error}</div>
      )}

      {!loading && !error && (
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
    </div>
  );
};

export default Products;
