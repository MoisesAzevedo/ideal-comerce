"use client";
import React from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/utils/paths';
import { useCart } from './cart';
import { products } from '../../../db';
import aggregateCart from './utils/cartHelpers';
import CartItemRow from './Components/CartItemRow';
import Link from 'next/link';
import { formatBRL } from './utils/format';
import SharedPageLayout from '../layouts/SharedPageLayout';

export default function CartPage() {
  const { cartIds, clearCart } = useCart();

  const items = React.useMemo(
    () => aggregateCart(cartIds, products),
    [cartIds],
  );

  const subtotal = items.reduce((s, it) => s + (it.product.price ?? it.product.sale_price) * it.qty, 0);

  return (
    <SharedPageLayout showNavigation={false}>
      <div className="container mx-auto py-8 px-4 phone:px-6">
        <h1 className="text-2xl phone:text-3xl font-bold mb-6">Sua Mochila</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <div className="flex flex-col items-center gap-4 mb-4">
              <div className="w-36 h-36 relative mx-auto">
                <Image
                  src={getAssetPath('/img/bag-vazia.png')}
                  alt="Mochila vazia"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mb-4">Sua mochila está vazia.</p>
            </div>
            <Link
              href="/"
              className="inline-block px-4 py-2 bg-[#495949] text-white rounded"
            >
              Continuar comprando
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-4 rounded shadow-sm">
              {items.map((it) => (
                <CartItemRow
                  key={it.product.id}
                  product={it.product}
                  qty={it.qty}
                />
              ))}
            </div>

            <aside className="bg-white p-4 rounded shadow-sm">
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-xl"> Produtos </h3>
                <div className="flex flex-col gap-2 mb-3">
                  {items.map((it) => (
                    <div
                      key={it.product.id}
                      className="flex justify-between text-base text-[#333]"
                    >
                      <div className="min-w-0">
                        <div className="truncate">
                          {it.product.name}{' '}
                          <span className="text-base text-[#666]">
                            (x{it.qty})
                          </span>
                        </div>
                        <div className="text-base text-[#666]">
                          {formatBRL(it.product.price ?? it.product.sale_price)} cada
                        </div>
                      </div>
                      <div className="pl-2 font-medium">
                        {formatBRL((it.product.price ?? it.product.sale_price) * it.qty)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between text-lg text-[#666]">
                  <span>
                    <strong>Subtotal</strong>
                  </span>
                  <span>
                    <strong>{formatBRL(subtotal)}</strong>
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <button className="w-full px-4 py-3 bg-[#495949] text-white rounded">
                  Ir para pagamento
                </button>
                <button
                  onClick={() => clearCart()}
                  className="w-full px-4 py-3 border rounded"
                >
                  Limpar mochila
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </SharedPageLayout>
  );
}
