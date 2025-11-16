"use client";

import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { usePaginatedProducts } from "./hooks/usePaginatedProducts";
import { useProductNavigation } from "./hooks/useProductNavigation";
import { useResponsiveLayout } from "./hooks/useResponsiveLayout";
import { LoadMoreButton } from "./components/LoadMoreButton";
import { ProductsSkeleton } from "../ProductSkeleton";
import { useFilters } from "../Filters/hooks";

interface ProductsProps {
  searchQuery?: string;
  className?: string;
  /** Configuração específica para número de itens em páginas especiais (ex: /produto/[id] = 6) */
  pageSpecificItems?: number;
  /** Forçar um número específico de itens (sobrescreve responsividade) */
  forceItems?: number;
}

const Products = ({ 
  searchQuery, 
  className = '',
  pageSpecificItems,
  forceItems 
}: ProductsProps) => {
  // Get filter state from centralized context
  let getCategoryFilter, getSizeFilter;
  try {
    const filtersHook = useFilters();
    getCategoryFilter = filtersHook.getCategoryFilter;
    getSizeFilter = filtersHook.getSizeFilter;
  } catch (error) {
    console.error('❌ Products: Error accessing useFilters hook:', error);
    throw error;
  }
  
  // Get filters formatted for API
  let categoryFilter, sizeFilter;
  try {
    categoryFilter = getCategoryFilter();
    sizeFilter = getSizeFilter();
    console.log('🎯 Products: Filter values:', { categoryFilter, sizeFilter });
  } catch (error) {
    console.error('❌ Products: Error getting filter values:', error);
    categoryFilter = undefined;
    sizeFilter = undefined;
  }
  
  // State to track when filters are changing
  const [isFiltering, setIsFiltering] = React.useState(false);
  
  // Hook para determinar layout responsivo
  const { itemsPerRow, debugInfo } = useResponsiveLayout({
    pageSpecificItems,
    forceItems
  });
  
  const { 
    products, 
    loading, 
    error, 
    hasMore, 
    loadMore, 
    totalProducts,
    reset 
  } = usePaginatedProducts({ 
    perPage: 20,
    category: categoryFilter,
    size: sizeFilter,
    q: searchQuery 
  });
  
  console.log('🎯 Products: usePaginatedProducts params:', { 
    perPage: 20,
    category: categoryFilter,
    size: sizeFilter,
    q: searchQuery 
  });
  
  // Handle filter changes with smooth transition
  React.useEffect(() => {
    try {
      setIsFiltering(true);
      reset();
      
      const timer = setTimeout(() => {
        setIsFiltering(false);
      }, 100);
      
      return () => clearTimeout(timer);
    } catch (error) {
      console.error('❌ Products: Error in filter change effect:', error);
      setIsFiltering(false);
    }
  }, [categoryFilter, sizeFilter, searchQuery, reset]);
  
  const { buyProduct } = useProductNavigation();

  // Exibe todos os produtos acumulados (paginação incremental)
  const visibleProducts = products ?? [];

  const handleBuyProduct = (productId: string) => {
    buyProduct(productId);
  };

  return (
    <div className={`flex flex-col items-center w-full mt-16 min-h-[800px] ${className}`} data-name="products-container">

      {/* Estado de loading inicial ou filtering - Exibe skeleton */}
      {(loading && visibleProducts.length === 0) || isFiltering ? (
        <ProductsSkeleton rows={5} itemsPerRow={itemsPerRow} />
      ) : null}

      {/* Estado de erro */}
      {error && !isFiltering && (
        <div className="w-full text-center py-8 text-red-500">Erro ao carregar produtos: {error}</div>
      )}

      {/* Grid de produtos */}
      {!error && !isFiltering && visibleProducts.length > 0 && (
        <div className="w-full pb-8">
          <div 
            className="grid gap-6 w-full"
            style={{
              gridTemplateColumns: `repeat(${itemsPerRow}, minmax(0, 1fr))`
            }}
            data-name="products-grid"
          >
            {visibleProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onBuy={() => handleBuyProduct(product.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Botão "Ver mais" */}
      {!error && !isFiltering && visibleProducts.length > 0 && (
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
