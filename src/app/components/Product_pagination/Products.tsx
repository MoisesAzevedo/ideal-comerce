"use client";

import React, { useMemo } from "react";
import { ProductCard } from "./components/ProductCard";
import useProducts from "./hooks/useProducts";

const Products = () => {
  // Memoize the options object to prevent recreation on every render
  const productOptions = useMemo(() => ({ perPage: 16 }), []);
  
  const { products, loading, error } = useProducts(productOptions);

  // Exibe os produtos retornados pela API (já paginados)
  const visibleProducts = products ?? [];

  return (
    <div data-name="products-section" className="font-sans flex flex-col items-center w-full mt-8 phone:mt-12 lg:mt-16 px-2 phone:px-4">
      <h2 data-name="products-title" className="font-sans text-lg phone:text-xl sm:text-2xl lg:text-3xl font-bold mb-4 phone:mb-6 lg:mb-8 mt-4 phone:mt-6 lg:mt-8 uppercase pb-2 phone:pb-3 w-full text-center">
        PRODUTOS EM DESTAQUE
      </h2>

      {loading && (
        <div className="w-full text-center py-4 phone:py-6 lg:py-8 text-gray-500">Carregando produtos...</div>
      )}

      {error && (
        <div className="w-full text-center py-4 phone:py-6 lg:py-8 text-red-500">Erro ao carregar produtos: {error}</div>
      )}

      {!loading && !error && (
        <div data-name="products-list" className="w-full max-w-7xl">
          <div data-name="products-grid" className="grid grid-cols-1 phone:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 phone:gap-4 sm:gap-6 lg:gap-8 pb-4 phone:pb-6 lg:pb-8">
            {visibleProducts.map((product) => (
              <div data-name={`product-card-${product.id}`} key={product.id} className="w-full">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
