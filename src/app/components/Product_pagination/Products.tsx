"use client";

import React from "react";
import { products } from "./data/products";
import { ProductCard } from "./components/ProductCard";

const Products = () => {
  // Exibe os 16 primeiros produtos
  const visibleProducts = products.slice(0, 16);

  // Divide em linhas de 4 produtos
  const rows = [];
  for (let i = 0; i < visibleProducts.length; i += 4) {
    rows.push(visibleProducts.slice(i, i + 4));
  }

  return (
    <div className="flex flex-col items-center w-full mt-16">
      <h2 className="text-3xl font-bold mb-8 mt-8 uppercase pb-3 w-full text-center">
        PRODUTOS EM DESTAQUE
      </h2>
      <div className="flex flex-col gap-8 justify-center w-full pb-8">
        {rows.map((row, idx) => (
          <div key={idx} className="flex flex-row gap-8 justify-center w-full">
            {row.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
