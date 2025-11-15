'use client';
import React from 'react';
import type { Product } from '../../../../db/types';
import Image from 'next/image';
import Link from 'next/link';
// botão de adicionar removido — imports relacionados ao carrinho removidos
import styles from './ProductCard.module.scss';

export const ProductCard = ({
  product,
  onBuy,
}: {
  product: Product;
  onBuy?: (productId: string) => void;
}) => {
  // botão de adicionar foi removido — ações de carrinho delegadas a páginas/ações específicas

  return (
    <div
      data-name={`product-${product.id}`}
      className="font-sans relative w-[203px] h-auto flex flex-col items-start rounded p-2 phone:p-3 bg-black/[0.01] shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      {/* Link para página do produto cobrindo a imagem e informações principais */}
      <Link 
        data-name={`product-link-${product.id}`}
        href={`/produto/${product.id}`}
        className="w-full block group"
      >
        <div
          data-name={`product-image-${product.id}`}
          className="relative w-full aspect-[203/243] mb-2 phone:mb-3 overflow-hidden rounded"
        >
          <Image
            className="absolute w-full h-full top-0 left-0 object-cover transition-transform duration-300 group-hover:scale-105"
            alt={product.name}
            src={product.images[0]}
            fill
            sizes="(max-width: 350px) 150px, (max-width: 480px) 180px, 203px"
            priority={true}
          />
        </div>

        <div
          data-name={`product-category-${product.id}`}
          className="w-full font-sans text-black/65 text-xs phone:text-sm mb-1 group-hover:text-black/80 transition-colors"
        >
          {product.category}
        </div>

        <div
          data-name={`product-name-${product.id}`}
          className={`font-sans text-black text-base phone:text-lg lg:text-xl mb-1 phone:mb-2 group-hover:text-blue-600 transition-colors ${styles.productNameTruncate}`}
        >
          {product.name}
        </div>
      </Link>

      <div
        data-name={`product-pricing-${product.id}`}
        className="w-full flex items-end gap-1 phone:gap-2 mb-1 phone:mb-2"
      >
        <span
          data-name={`product-price-${product.id}`}
          className="font-sans text-black text-base phone:text-lg lg:text-xl"
        >
          R$ {product.price}
        </span>
        {product.oldPrice && (
          <span
            data-name={`product-oldprice-${product.id}`}
            className="font-sans text-[#848484] text-xs phone:text-sm lg:text-[15px] line-through"
          >
            R$ {product.oldPrice}
          </span>
        )}
      </div>

      <div
        data-name={`product-installment-${product.id}`}
        className="w-full flex items-center justify-between font-sans text-xs phone:text-sm mb-2 phone:mb-3"
      >
        <div className="flex-1 min-w-0">
          <span className="text-[#848484]">ou </span>
          <span className="text-black">
            {product.installmentCount}x de{' '}
          </span>
          <span className="text-[#848484]">
            R$ {(product.installmentValue ?? 0).toFixed(2).replace('.', ',')}
          </span>
        </div>
        {product.percentual_discount && (
          <span
            data-name={`product-discount-${product.id}`}
            className="ml-1 phone:ml-2 bg-[#495949] text-white rounded px-1 phone:px-2 py-0.5 text-xs font-sans flex-shrink-0"
          >
            {product.percentual_discount}% OFF
          </span>
        )}
      </div>

      <button
        data-name={`product-buy-${product.id}`}
        className="w-full mt-2 phone:mt-2 p-2 phone:p-3 bg-[#495949] text-white font-sans text-sm phone:text-base lg:text-lg border-none rounded-md cursor-pointer transition-colors tracking-wide hover:bg-[#b7c7b7] hover:text-[#222]"
        type="button"
        onClick={() => window.location.href = `/produto/${product.id}`}
        aria-label={`Ver detalhes de ${product.name}`}
      >
        Ver Detalhes
      </button>

      {/* botão de adicionar removido conforme solicitado */}
    </div>
  );
};
