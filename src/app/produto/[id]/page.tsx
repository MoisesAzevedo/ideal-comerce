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
import { ProductImagesSection } from '../../components';
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
          <ProductImagesSection 
            images={product.images} 
            productName={product.name}
          />

          {/* Lado direito - Detalhes do produto */}
          <section data-name="product-details-section">
            <ProductDetails product={product} />
          </section>
        </div>

        {/* Descrição do produto - movida para fora do product-content */}
        <section data-name="product-description-section" className="mt-8 p-6 bg-gray-50 rounded-lg max-w-7xl mx-auto">
          <h3 data-name="description-title" className="text-lg font-semibold mb-3 text-gray-900">
            Descrição
          </h3>
          <p data-name="product-description" className="text-gray-700 leading-relaxed">
            {product.description}
          </p>
        </section>
        
        {/* Especificação técnica (atributos) - movida para fora do product-content */}
        {product.attributes && (
          <section data-name="product-attributes-section" className="mt-8 max-w-7xl mx-auto">
            <ProductAttributes attributes={product.attributes} />
          </section>
        )}
      </div>
    </SharedPageLayout>
  );
}