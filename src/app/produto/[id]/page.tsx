/**
 * Page: /produto/[id]
 * Responsabilidade única: Exibir detalhes completos de um produto específico
 */

'use client';

import { useProduct } from './hooks/useProduct';
import { ProductImageGallery } from './components/ProductImageGallery/ProductImageGallery';
import { ProductDetails } from './components/ProductDetails/ProductDetails';
import { ProductNotFound } from './components/ProductNotFound/ProductNotFound';
import { ProductLoading } from './components/ProductLoading/ProductLoading';
import SharedPageLayout from '../../layouts/SharedPageLayout';

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
      <div data-name="product-page" className="container mx-auto px-4 py-8">
        <div 
          data-name="product-content" 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {/* Lado esquerdo - Imagens do produto */}
          <section data-name="product-images-section">
            <ProductImageGallery 
              images={product.images} 
              productName={product.name}
            />
          </section>

          {/* Lado direito - Detalhes do produto */}
          <section data-name="product-details-section">
            <ProductDetails product={product} />
          </section>
        </div>
      </div>
    </SharedPageLayout>
  );
}