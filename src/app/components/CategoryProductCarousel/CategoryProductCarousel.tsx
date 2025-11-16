// Responsabilidade: Componente principal CategoryProductCarousel
'use client';

import React from 'react';
import Link from 'next/link';
import { ProductCard } from '../ProductCard/ProductCard';
import { useCategoryProductCarousel } from './hooks/useCategoryProductCarousel';
import { useProductNavigation } from '../Product_pagination/hooks/useProductNavigation';
import { getCategoryNameById } from './utils/categoryUtils';
import type { CategoryProductCarouselProps } from './types';
import styles from './CategoryProductCarousel.module.scss';

/**
 * Carrossel de produtos por categoria
 * Exibe produtos de uma categoria específica em um carrossel navegável
 */
export function CategoryProductCarousel({
  category,
  title,
  maxProducts = 10,
  excludeProductId,
  showViewMoreLink = true,
  viewMoreUrl,
  className = '',
}: CategoryProductCarouselProps) {
  const { buyProduct } = useProductNavigation();
  const {
    products,
    isLoading,
    error,
    emblaRef,
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
  } = useCategoryProductCarousel({
    category,
    maxProducts,
    excludeProductId,
    carouselOptions: {
      align: 'start',
      slidesToScroll: 1,
      containScroll: 'keepSnaps',
      dragFree: false,
      skipSnaps: false,
      breakpoints: {
        '(max-width: 349px)': { slidesToScroll: 1 },
        '(min-width: 350px) and (max-width: 767px)': { slidesToScroll: 1 },
        '(min-width: 768px)': { slidesToScroll: 1 },
      },
    },
  });

  // Debug logs
  console.log('🎯 CategoryProductCarousel Debug:', {
    category,
    productsFound: products?.length || 0,
    isLoading,
    error,
    excludeProductId
  });

  // Get category name for display
  const categoryName = getCategoryNameById(category);

  // Estados de loading e erro
  if (isLoading) {
    return (
      <div 
        className={`${styles.categoryCarousel} ${className}`}
        data-name={`category-carousel-${category}`}
      >
        <div className={styles.categoryCarousel__loading}>
          <p>Carregando produtos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div 
        className={`${styles.categoryCarousel} ${className}`}
        data-name={`category-carousel-${category}`}
      >
        <div className={styles.categoryCarousel__error}>
          <h3>Erro ao carregar produtos</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div 
        className={`${styles.categoryCarousel} ${className}`}
        data-name={`category-carousel-${category}`}
      >
        <div className={styles.categoryCarousel__empty}>
          <p>Nenhum produto encontrado para a categoria &quot;{categoryName}&quot; (ID: {category})</p>
        </div>
      </div>
    );
  }

  const finalViewMoreUrl = viewMoreUrl || `/categoria/${category}`;
  let displayTitle = title || `Produtos em ${category}`;

  // For a specific category ID, always show the fixed marketing title
  if (category === 'a1b2c3d0-1002-0000-0000-000000000002') {
    displayTitle = 'Você também pode gostar';
  }

  return (
    <section 
      className={`${styles.categoryCarousel} ${className}`}
      data-name={`category-carousel-${category}`}
    >
      {/* Cabeçalho com título e link "Ver mais" */}
      <header className={styles.categoryCarousel__header}>
        <h2 
          className={styles.categoryCarousel__title}
          data-name={`category-carousel-title-${category}`}
        >
          {displayTitle}
        </h2>
        
        {showViewMoreLink && (
          <Link 
            href={finalViewMoreUrl}
            className={styles.categoryCarousel__viewMore}
            data-name={`category-carousel-view-more-${category}`}
          >
            Ver mais
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </Link>
        )}
      </header>

      {/* Container do carrossel */}
      <div className={styles.categoryCarousel__container}>
        {/* Botão anterior */}
        {canScrollPrev && (
          <button
            type="button"
            className={`${styles.categoryCarousel__navigation} ${styles['categoryCarousel__navigation--prev']} ${styles.categoryCarousel__navButton}`}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            data-name={`category-carousel-prev-${category}`}
            aria-label="Produto anterior"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>
        )}

        {/* Viewport do carrossel */}
        <div 
          className={styles.categoryCarousel__viewport} 
          ref={emblaRef}
          data-name={`category-carousel-viewport-${category}`}
        >
          <div className={styles.categoryCarousel__container_inner}>
            {products.map((product) => (
              <div 
                key={product.id} 
                className={styles.categoryCarousel__slide}
                data-name={`category-carousel-slide-${category}-${product.id}`}
              >
                <ProductCard 
                  product={product}
                  onBuy={(productId) => {
                    buyProduct(productId);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Botão próximo */}
        {canScrollNext && (
          <button
            type="button"
            className={`${styles.categoryCarousel__navigation} ${styles['categoryCarousel__navigation--next']} ${styles.categoryCarousel__navButton}`}
            onClick={scrollNext}
            disabled={!canScrollNext}
            data-name={`category-carousel-next-${category}`}
            aria-label="Próximo produto"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>
        )}
      </div>
      
      {/* Linha divisória para separar do conteúdo abaixo */}
      <hr 
        className={styles.categoryCarousel__divider}
        data-name={`category-carousel-divider-${category}`}
      />
    </section>
  );
}