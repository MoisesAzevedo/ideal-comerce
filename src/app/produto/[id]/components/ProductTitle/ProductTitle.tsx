/**
 * Component: ProductTitle
 * Responsabilidade única: Exibir título, SKU e categoria do produto
 */

'use client';

import styles from './ProductTitle.module.scss';

interface ProductTitleProps {
  name: string;
  sku: string;
  category?: string;
}

export function ProductTitle({ name, sku, category }: ProductTitleProps) {
  return (
    <div data-name="product-title-container" className={styles.container}>
      <h1 data-name="product-name" className={styles.title}>
        {name}
      </h1>
      
      <div data-name="product-meta" className={styles.metaContainer}>
        <span data-name="product-sku" className={styles.sku}>
          Código: {sku}
        </span>
        
        {category && (
          <>
            <span data-name="separator" className={styles.separator}>•</span>
            <span data-name="product-category" className={styles.category}>
              {category}
            </span>
          </>
        )}
      </div>
    </div>
  );
}