'use client';

import type { ProductSkeletonProps } from '../../types';
import styles from './ProductSkeleton.module.scss';

/**
 * Individual product skeleton component
 * Responsibility: Display loading skeleton for a single product card
 */
const ProductSkeleton = ({ className = '' }: ProductSkeletonProps) => {
  return (
    <div 
      className={`${styles.productSkeleton} ${className}`} 
      data-name="product-skeleton"
    >
      {/* Image skeleton */}
      <div className={styles.imageSkeleton} data-name="image-skeleton">
        <div className={styles.shimmer}></div>
      </div>

      {/* Content skeleton */}
      <div className={styles.contentSkeleton} data-name="content-skeleton">
        {/* Title skeleton */}
        <div className={styles.titleSkeleton} data-name="title-skeleton">
          <div className={styles.shimmer}></div>
        </div>

        {/* Price skeleton */}
        <div className={styles.priceSkeleton} data-name="price-skeleton">
          <div className={`${styles.shimmer} ${styles.priceShimmer}`}></div>
        </div>

        {/* Installment skeleton */}
        <div className={styles.installmentSkeleton} data-name="installment-skeleton">
          <div className={`${styles.shimmer} ${styles.installmentShimmer}`}></div>
        </div>

        {/* Button skeleton */}
        <div className={styles.buttonSkeleton} data-name="button-skeleton">
          <div className={styles.shimmer}></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;