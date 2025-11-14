/**
 * Componente de detalhes do produto
 * Responsabilidade única: Exibir informações detalhadas do produto e ações de compra
 */

'use client';

import React, { useState } from 'react';

// Tipo Product local
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  images: string[];
  category: string;
  brand?: string;
  stock?: number;
  rating?: number;
  reviews?: number;
}

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);

  // Manipular mudança de quantidade
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= Math.min(10, product.stock || 10)) {
      setQuantity(newQuantity);
    }
  };

  // Manipular compra
  const handleAddToCart = () => {
    console.log('Produto adicionado ao carrinho:', {
      productId: product.id.toString(),
      quantity: quantity
    });
  };

  // Manipular compra imediata
  const handleBuyNow = () => {
    console.log('Compra imediata:', {
      productId: product.id.toString(),
      quantity: quantity
    });
  };

  // Formatar preço
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const isOutOfStock = product.stock === 0;
  const maxQuantity = Math.min(10, product.stock || 10);

  return (
    <div className="flex flex-col space-y-6">
      {/* Título do produto */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          {product.name}
        </h1>
        {product.brand && (
          <p className="text-lg text-gray-600 mt-1">{product.brand}</p>
        )}
      </div>

      {/* Preço */}
      <div className="text-3xl font-bold text-green-600">
        {formatPrice(product.price)}
      </div>

      {/* Avaliações (se disponíveis) */}
      {product.rating && product.reviews && (
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold">{product.rating}</span>
          <span className="text-gray-600">({product.reviews} avaliações)</span>
        </div>
      )}

      {/* Descrição */}
      {product.description && (
        <div className="text-gray-700">
          <p>{product.description}</p>
        </div>
      )}

      {/* Status do estoque */}
      <div className="text-sm">
        {isOutOfStock ? (
          <span className="text-red-600 font-semibold">Produto esgotado</span>
        ) : (
          <span className="text-green-600">
            Em estoque ({product.stock || 0} unidades)
          </span>
        )}
      </div>

      {/* Seletor de quantidade */}
      {!isOutOfStock && (
        <div className="space-y-2">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantidade
          </label>
          <select
            id="quantity"
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
            className="block w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            {Array.from({ length: maxQuantity }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Botões de ação */}
      <div className="space-y-3">
        <button
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Adicionar ao Carrinho
        </button>
        
        <button
          onClick={handleBuyNow}
          disabled={isOutOfStock}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Comprar Agora
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;