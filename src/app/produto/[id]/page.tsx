/**
 * Page: /produto/[id]
 * Responsabilidade única: Exibir detalhes completos de um produto específico
 */

'use client';

import { useProduct } from './hooks/useProduct';
import { useRelatedProducts } from './hooks/useRelatedProducts';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import { ProductAttributes } from './components/ProductAttributes/ProductAttributes';
import { ProductNotFound } from './components/ProductNotFound/ProductNotFound';
import { ProductLoading } from './components/ProductLoading/ProductLoading';
import { ThumbCarouselEmbla } from '../../components/ThumbCarouselEmbla';
import { CategoryProductCarousel } from '../../components/CategoryProductCarousel';
import Products from '../../components/Product_pagination/Products';
import { getCategoryDisplayInfo } from './utils/categoryUtils';
import SharedPageLayout from '../../layouts/SharedPageLayout';
import styles from './ProductPage.module.scss';
import '../../components/ThumbCarouselEmbla/css/embla.css';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { product, loading, error } = useProduct(params);

  // Hook para verificar se há produtos suficientes para exibir o carrossel
  const { shouldShowCarousel, isLoading: relatedLoading } = useRelatedProducts({
    category: product?.category_id || product?.category || '',
    excludeProductId: product?.id || '',
    minProductsToShow: 2 // Mínimo de 2 produtos para exibir o carrossel
  });

  // Obter informações da categoria para exibição
  const categoryInfo = product ? getCategoryDisplayInfo(product) : null;

  // Debug logs
  console.log('🔍 DEBUG - Produto:', {
    id: product?.id,
    name: product?.name,
    category_id: product?.category_id,
    category: product?.category,
    categoryInfo
  });

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

        {/* Carrossel de produtos relacionados da mesma categoria */}
        {(product.category_id || product.category) && shouldShowCarousel && !relatedLoading && (
          <section data-name="related-products-section" className="mt-12">
            <CategoryProductCarousel 
              category={product.category_id || product.category || ''}
              title={categoryInfo ? `Mais produtos em ${categoryInfo.categoryName}` : 'Você Também Pode Gostar'}
              maxProducts={12}
              excludeProductId={product.id}
              showViewMoreLink={true}
              viewMoreUrl={categoryInfo ? `/categoria/${categoryInfo.categorySlug}` : '/produtos'}
              className="bg-white rounded-lg shadow-sm p-6"
            />
          </section>
        )}

        {/* Produtos em destaque - sempre exibido, independente do carrossel de categoria */}
        <section data-name="featured-products-section" className="mt-12">
          <Products />
        </section>
      </div>
    </SharedPageLayout>
  );
}