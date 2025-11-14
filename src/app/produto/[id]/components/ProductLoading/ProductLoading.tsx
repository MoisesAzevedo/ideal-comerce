/**
 * Component: ProductLoading
 * Responsabilidade única: Exibir estado de carregamento da página de produto
 */

'use client';

import styles from './ProductLoading.module.scss';

export function ProductLoading() {
  return (
    <main data-name="product-loading-page" className="container mx-auto px-4 py-8">
      <div 
        data-name="product-loading-content" 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
      >
        {/* Skeleton da seção de imagens */}
        <section data-name="image-loading-section">
          <div data-name="main-image-skeleton" className={styles.mainImageSkeleton}></div>
          <div data-name="thumbnails-skeleton" className={styles.thumbnailsSkeleton}>
            {[...Array(4)].map((_, index) => (
              <div 
                key={index} 
                data-name={`thumbnail-skeleton-${index}`} 
                className={styles.thumbnailSkeleton}
              ></div>
            ))}
          </div>
        </section>

        {/* Skeleton da seção de detalhes */}
        <section data-name="details-loading-section" className={styles.detailsSection}>
          {/* Título */}
          <div data-name="title-skeleton" className={styles.titleSkeleton}></div>
          <div data-name="subtitle-skeleton" className={styles.subtitleSkeleton}></div>
          
          {/* Preço */}
          <div data-name="price-skeleton" className={styles.priceSkeleton}></div>
          <div data-name="installment-skeleton" className={styles.installmentSkeleton}></div>
          
          {/* Descrição */}
          <div data-name="description-skeleton" className={styles.descriptionSkeleton}>
            <div className={styles.descriptionLine}></div>
            <div className={styles.descriptionLine}></div>
            <div className={styles.descriptionLine}></div>
          </div>
          
          {/* Ações */}
          <div data-name="actions-skeleton" className={styles.actionsSkeleton}></div>
        </section>
      </div>
    </main>
  );
}