/**
 * Component: ProductImagesSection
 * Responsabilidade única: Seção reutilizável para exibir imagens do produto
 */

'use client';

import { ProductImageGallery } from '../../../produto/[id]/components/ProductImageGallery/ProductImageGallery';
import styles from './ProductImagesSection.module.scss';

interface ProductImagesSectionProps {
  images: string[];
  productName: string;
  className?: string;
}

export function ProductImagesSection({ images, productName, className = '' }: ProductImagesSectionProps) {
  return (
    <section 
      data-name="product-images-section" 
      className={`${styles.productImagesSection} ${className}`}
    >
      <ProductImageGallery 
        images={images} 
        productName={productName}
      />
    </section>
  );
}