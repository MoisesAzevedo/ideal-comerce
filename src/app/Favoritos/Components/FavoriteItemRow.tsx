'use client';
import Image from 'next/image';
import React from 'react';
import type { Product } from '../../../../db/types';
import { useFavorites } from '../favorites';
import { useCart } from '@/app/Carrinho/cart';
import { formatBRL } from '../../Carrinho/utils/format';

export default function FavoriteItemRow({ product }: { product: Product }) {
  const { removeFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();

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
      </div>

      <div className="text-right mr-2">
        <div className="font-semibold">{formatBRL(product.price)}</div>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="px-3 py-2 bg-[#495949] text-white rounded text-sm"
          onClick={() => addToCart(product.id)}
        >
          Adicionar ao carrinho
        </button>

        <button
          className="px-3 py-2 border rounded text-sm text-red-600"
          onClick={() => removeFavorite(product.id)}
          aria-pressed={isFavorite(product.id)}
        >
          Remover
        </button>
      </div>
    </div>
  );
}
