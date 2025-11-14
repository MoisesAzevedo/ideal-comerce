'use client';
import Image from 'next/image';
import React from 'react';
import type { AggregatedItem } from '../utils/cartHelpers';
import { useCart } from '../cart';
import { formatBRL } from '../utils/format';

export default function CartItemRow({ product, qty }: AggregatedItem) {
  const { addToCart, removeOne, removeAll } = useCart();

  return (
    <div className="flex items-center gap-4 py-3 border-b last:border-b-0">
      <div className="w-20 h-20 relative flex-shrink-0">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover rounded"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="font-semibold text-sm phone:text-base">
          {product.name}
        </div>
        <div className="text-xs text-[#666]">{product.category}</div>
        <div className="text-sm font-medium mt-2">
          {formatBRL(product.price)}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          aria-label={`Remover 1 ${product.name}`}
          className="px-2 py-1 bg-gray-100 rounded"
          onClick={() => removeOne(product.id)}
        >
          -
        </button>
        <div className="w-8 text-center">{qty}</div>
        <button
          aria-label={`Adicionar 1 ${product.name}`}
          className="px-2 py-1 bg-gray-100 rounded"
          onClick={() => addToCart(product.id)}
        >
          +
        </button>
      </div>

      <div className="w-24 text-right">
        <div className="font-semibold">{formatBRL(product.price * qty)}</div>
        <button
          className="text-xs text-red-600 mt-1"
          onClick={() => removeAll(product.id)}
        >
          Remover
        </button>
      </div>
    </div>
  );
}
