/**
 * Componente client da página de produto
 * Responsabilidade única: Gerenciar estado client-side e layout da página produto
 */

'use client';

import React from 'react';
import { useProduct } from '../hooks/useProduct';
import ProductImageCarousel from './ProductImageCarousel';
import ProductDetails from './ProductDetails';

interface ProductPageClientProps {
  productId: string;
}

export default function ProductPageClient({ productId }: ProductPageClientProps) {
  const {
    product,
    loading,
    error,
    selectedImageIndex,
    quantity,
    purchasing,
    hasImages,
    selectImage,
    changeQuantity,
    handlePurchase,
    reloadProduct
  } = useProduct(productId);

  // Estado de carregamento
  if (loading) {
    return (
      <div data-name="product-loading" className="w-full">
        <div data-name="loading-skeleton" className="animate-pulse">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Skeleton do carrossel */}
            <div data-name="carousel-skeleton" className="w-full">
              <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
              <div className="flex gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-16 h-16 xs:w-20 xs:h-20 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
            
            {/* Skeleton dos detalhes */}
            <div data-name="details-skeleton" className="w-full space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-10 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              <div className="h-12 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Estado de erro
  if (error) {
    return (
      <div data-name="product-error" className="w-full text-center py-12">
        <div data-name="error-content" className="max-w-md mx-auto">
          <div data-name="error-icon" className="text-6xl text-gray-400 mb-4">
            ⚠️
          </div>
          <h2 data-name="error-title" className="text-xl font-semibold text-gray-900 mb-2">
            Produto não encontrado
          </h2>
          <p data-name="error-message" className="text-gray-600 mb-6">
            {error}
          </p>
          <div data-name="error-actions" className="space-y-3">
            <button
              data-name="retry-button"
              onClick={reloadProduct}
              className="w-full px-4 py-2 bg-[#495949] text-white rounded-md hover:bg-[#3a4539] transition-colors"
            >
              Tentar novamente
            </button>
            <a
              data-name="back-to-home"
              href="/"
              className="block w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-center"
            >
              Voltar ao início
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Produto não encontrado
  if (!product) {
    return (
      <div data-name="product-not-found" className="w-full text-center py-12">
        <div data-name="not-found-content" className="max-w-md mx-auto">
          <div data-name="not-found-icon" className="text-6xl text-gray-400 mb-4">
            📦
          </div>
          <h2 data-name="not-found-title" className="text-xl font-semibold text-gray-900 mb-2">
            Produto não encontrado
          </h2>
          <p data-name="not-found-message" className="text-gray-600 mb-6">
            O produto que você está procurando não existe ou foi removido.
          </p>
          <a
            data-name="back-to-products"
            href="/"
            className="inline-block px-6 py-3 bg-[#495949] text-white rounded-md hover:bg-[#3a4539] transition-colors"
          >
            Ver outros produtos
          </a>
        </div>
      </div>
    );
  }

  // Manipular ação de compra
  const handlePurchaseClick = async (productId: number, quantity: number) => {
    const result = await handlePurchase();
    
    if (result.success) {
      // Aqui poderia integrar com sistema de carrinho real
      console.log('Produto adicionado ao carrinho:', { productId, quantity });
    } else {
      console.error('Erro na compra:', result.message);
    }
  };

  return (
    <div data-name="product-page-content" className="w-full">
      {/* Layout principal: carrossel à esquerda, detalhes à direita */}
      <div data-name="product-layout" className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        
        {/* Carrossel de imagens */}
        <div data-name="product-images-section" className="w-full">
          {hasImages ? (
            <ProductImageCarousel
              images={product.images}
              productName={product.name}
              onImageSelect={selectImage}
              selectedIndex={selectedImageIndex}
            />
          ) : (
            <div 
              data-name="no-images-placeholder" 
              className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center"
            >
              <span data-name="no-images-text" className="text-gray-500">
                Sem imagens disponíveis
              </span>
            </div>
          )}
        </div>

        {/* Detalhes do produto */}
        <div data-name="product-details-section" className="w-full">
          <ProductDetails
            product={product}
            onPurchase={handlePurchaseClick}
            onQuantityChange={changeQuantity}
            quantity={quantity}
          />
        </div>
      </div>

      {/* Seção adicional para descrições futuras */}
      <div data-name="product-additional-sections" className="mt-12 pt-8 border-t">
        <div data-name="product-description-section" className="mb-8">
          <h3 data-name="description-title" className="text-xl font-semibold text-gray-900 mb-4">
            Descrição do Produto
          </h3>
          <div data-name="description-content" className="prose prose-gray max-w-none">
            <p data-name="description-text" className="text-gray-600 leading-relaxed">
              {product.name} da categoria {product.category}. 
              Produto de alta qualidade com excelente custo-benefício. 
              Ideal para quem busca praticidade e durabilidade no dia a dia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}