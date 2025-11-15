/**
 * Page: /produto/[id]
 * Responsabilidade única: Exibir detalhes completos de um produto específico
 */

'use client';

import { useProduct } from './hooks/useProduct';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import { ProductAttributes } from './components/ProductAttributes/ProductAttributes';
import { ProductNotFound } from './components/ProductNotFound/ProductNotFound';
import { ProductLoading } from './components/ProductLoading/ProductLoading';
import { ThumbCarouselEmbla } from '../../components/ThumbCarouselEmbla';
import SharedPageLayout from '../../layouts/SharedPageLayout';
import styles from './ProductPage.module.scss';
import '../../components/ThumbCarouselEmbla/css/embla.css';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { product, loading, error } = useProduct(params);

  if (loading) {
    return (
      <SharedPageLayout>
        <ProductLoading />
      </SharedPageLayout>
    );
  }

  if (error || !product) {
    return (
      <SharedPageLayout>
        <ProductNotFound />
      </SharedPageLayout>
    );
  }

  return (
    <SharedPageLayout>
      <div data-name="product-page" className="py-8">
        <div 
          data-name="product-content" 
          className={styles.productContent}
        >
          {/* Lado esquerdo - Imagens do produto */}
          <section className={styles.productImagesSection}>
            <ThumbCarouselEmbla 
              images={product.images} 
              options={{ loop: true }}
            />
          </section>

          {/* Lado direito - Detalhes do produto */}
          <section data-name="product-details-section" className={styles.productDetailsSection}>
            <ProductDetails product={product} />
          </section>
        </div>

        {/* Descrição do produto - movida para fora do product-content */}
        <section data-name="product-description-section" className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 data-name="description-title" className="text-lg font-semibold mb-3 text-gray-900">
            Descrição
          </h3>
          <p data-name="product-description" className="text-gray-700 leading-relaxed">
            {product.description}
          </p>
        </section>
        
        {/* Especificação técnica (atributos) - movida para fora do product-content */}
        {product.attributes && (
          <section data-name="product-attributes-section" className="mt-8">
            <ProductAttributes attributes={product.attributes} />
          </section>
        )}
      </div>
    </SharedPageLayout>
  );
}