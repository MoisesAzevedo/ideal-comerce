'use client';
import React, { useState } from 'react';
import type { Product } from '../../../../../db/types';
import Image from 'next/image';
import { useCart } from '../../../Carrinho/cart';
import ConfirmationModal from '../../../Carrinho/Components/ModalConfirmation/ConfirmationModal';
import aggregateCart from '../../../Carrinho/utils/cartHelpers';
import { products as allProducts } from '../../../../../db';

export const ProductCard = ({
  product,
  onBuy,
}: {
  product: Product;
  onBuy?: (productId: number) => void;
}) => {
  const { addToCart, cartIds } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [lastSubtotal, setLastSubtotal] = useState<number | null>(null);

  const handleAdd = (productId: number) => {
    addToCart(productId);
    // compute new subtotal after adding this id
    const nextIds = [...cartIds, productId];
    const items = aggregateCart(nextIds, allProducts);
    const subtotal = items.reduce((s, it) => s + it.product.price * it.qty, 0);
    setLastSubtotal(subtotal);
    setShowConfirmation(true);
  };

  return (
    <div
      data-name={`product-${product.id}`}
      className="font-sans relative w-full max-w-[203px] h-auto flex flex-col items-start rounded shadow-sm p-2 phone:p-3 bg-black/[0.01]"
    >
      <div
        data-name={`product-image-${product.id}`}
        className="relative w-full aspect-[203/243] mb-2 phone:mb-3"
      >
        <Image
          className="absolute w-full h-full top-0 left-0 object-cover rounded"
          alt={product.name}
          src={product.images[0]}
          fill
          sizes="(max-width: 350px) 150px, (max-width: 480px) 180px, 203px"
          priority={true}
        />
      </div>

      <div
        data-name={`product-category-${product.id}`}
        className="w-full font-sans text-black/65 text-xs phone:text-sm mb-1"
      >
        {product.category}
      </div>

      <div
        data-name={`product-name-${product.id}`}
        className="w-full font-sans text-black text-base phone:text-lg lg:text-xl mb-1 phone:mb-2 whitespace-nowrap overflow-hidden text-ellipsis"
      >
        {product.name}
      </div>

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
            R$ {product.installmentValue.toFixed(2).replace('.', ',')}
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
        className="w-full mt-2 phone:mt-2 p-2 phone:p-3 bg-[#495949] text-white font-sans text-sm phone:text-base lg:text-lg border-none rounded-md cursor-pointer transition-colors tracking-wide shadow-sm hover:bg-[#b7c7b7] hover:text-[#222]"
        type="button"
        onClick={() => onBuy?.(product.id)}
        aria-label={`Comprar ${product.name}`}
      >
        Comprar
      </button>

      <button
        data-name={`product-addtocart-${product.id}`}
        className="w-full mt-2 phone:mt-2 p-2 phone:p-3 bg-[#b7c7b7] text-[#222] font-sans text-sm phone:text-base lg:text-lg border-none rounded-md cursor-pointer transition-colors tracking-wide shadow-sm hover:bg-[#495949] hover:text-white"
        type="button"
        onClick={() => handleAdd(product.id)}
      >
        Adicionar ao Carrinho
      </button>
      <ConfirmationModal
        open={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        productName={product.name}
        productPrice={product.price}
        subtotal={lastSubtotal ?? undefined}
      />
    </div>
  );
};
