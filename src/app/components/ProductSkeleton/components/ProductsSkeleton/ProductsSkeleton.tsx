'use client';

import { ProductSkeleton } from '../ProductSkeleton';
import type { ProductsSkeletonProps } from '../../types';
import styles from './ProductsSkeleton.module.scss';

/**
 * Products skeleton grid component
 * Responsibility: Display loading skeleton grid matching the Products component layout
 */
const ProductsSkeleton = ({ 
  itemsPerRow = 4, 
  rows = 5, 
  className = '' 
}: ProductsSkeletonProps) => {
  // Generate total skeleton items
  const totalItems = rows * itemsPerRow;
  const skeletonItems = [];
  
  for (let i = 0; i < totalItems; i++) {
    skeletonItems.push(
      <ProductSkeleton key={`skeleton-${i}`} />
    );
  }

  return (
    <div 
      className={`${styles.productsSkeleton} ${className}`} 
      data-name="products-skeleton"
    >
      <div 
        className={styles.skeletonGrid} 
        style={{
          gridTemplateColumns: `repeat(${itemsPerRow}, minmax(0, 1fr))`
        }}
        data-name="skeleton-grid"
      >
        {skeletonItems}
      </div>
    </div>
  );
};

export default ProductsSkeleton;