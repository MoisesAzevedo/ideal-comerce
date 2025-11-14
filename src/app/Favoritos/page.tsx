'use client';
import React from 'react';
import SharedPageLayout from '../layouts/SharedPageLayout';
import { useFavorites } from './favorites';
import { products } from '../../../db';
import FavoriteItemRow from './Components/FavoriteItemRow';
import Link from 'next/link';

export default function FavoritesPage() {
  const { favoriteIds, clearFavorites } = useFavorites();

  const favoriteProducts = React.useMemo(
    () => products.filter((p) => favoriteIds.includes(p.id)),
    [favoriteIds],
  );

  return (
    <SharedPageLayout>
      <div className="container mx-auto py-8 px-4 phone:px-6">
        <h1 className="text-2xl phone:text-3xl font-bold mb-6">
          Seus Favoritos
        </h1>

        {favoriteProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="mb-4">Você ainda não adicionou favoritos.</p>
            <Link
              href="/"
              className="inline-block px-4 py-2 bg-[#495949] text-white rounded"
            >
              Explorar produtos
            </Link>
          </div>
        ) : (
          <div className="bg-white p-4 rounded shadow-sm">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => clearFavorites()}
                className="px-3 py-2 border rounded text-sm"
              >
                Limpar favoritos
              </button>
            </div>

            <div className="flex flex-col">
              {favoriteProducts.map((p) => (
                <FavoriteItemRow key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </SharedPageLayout>
  );
}
