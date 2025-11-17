/**
 * Component: ProductTitle
 * Responsabilidade única: Exibir título do produto com ícone de favoritos
 */

'use client';

import React, { useState } from 'react';
import styles from './ProductTitle.module.scss';
import { useFavorites } from '@/app/Favoritos/favorites';
import FavoriteConfirmationModal from '@/app/Favoritos/Components/FavoriteConfirmationModal';

interface ProductTitleProps {
  id?: string;
  name: string;
  sku: string;
  category?: string;
}

export function ProductTitle({ id, name }: ProductTitleProps) {
  const { addFavorite, isFavorite } = useFavorites();
  const [showFavoriteModal, setShowFavoriteModal] = useState(false);

  const handleAddFavorite = () => {
    if (!id) return;
    addFavorite(id);
    setShowFavoriteModal(true);
  };

  return (
    <div data-name="product-title-container" className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1 data-name="product-name" className={styles.title}>
          {name}
        </h1>

        <button
          data-name="add-to-favorites-icon"
          className={styles.favoriteButton}
          aria-label="Adicionar aos favoritos"
          title="Adicionar aos favoritos"
          onClick={handleAddFavorite}
          aria-pressed={id ? isFavorite(id) : undefined}
        >
          <svg
            className={styles.favoriteIcon}
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2535 14.9448V18.0306L14.732 18.646V14.1361C14.2676 14.4546 13.7723 14.7255 13.2535 14.9448ZM5.26785 14.1361V18.6152L6.74632 17.9998V14.9448C6.22759 14.7256 5.73226 14.4546 5.26785 14.1361ZM9.99991 15.6013C9.30176 15.6016 8.60631 15.5148 7.92972 15.3426V20L9.99991 19.1384L12.0701 20V15.3426C11.3935 15.5147 10.6981 15.6016 9.99991 15.6013ZM9.99991 0C6.02492 0 2.79102 3.2339 2.79102 7.20893C2.79102 11.184 6.02492 14.4178 9.99991 14.4178C13.9749 14.4178 17.2088 11.1839 17.2088 7.20889C17.2088 3.23386 13.9749 0 9.99991 0ZM9.99991 12.8945C6.84862 12.8945 4.28484 10.3307 4.28484 7.17944C4.28484 4.02812 6.84862 1.46433 9.99991 1.46433C13.1512 1.46433 15.715 4.02812 15.715 7.17944C15.715 10.3308 13.1512 12.8945 9.99991 12.8945ZM9.99991 2.64773C7.50116 2.64773 5.46824 4.68062 5.46824 7.17944C5.46824 9.67826 7.50116 11.7111 9.99991 11.7111C12.4987 11.7111 14.5316 9.67818 14.5316 7.1794C14.5316 4.68062 12.4987 2.64773 9.99991 2.64773ZM11.8624 9.8242L9.99991 8.84502L8.13741 9.8242L8.49311 7.7503L6.98632 6.28155L9.0687 5.97893L9.99991 4.09198L10.9312 5.97893L13.0135 6.28155L11.5067 7.7503L11.8624 9.8242Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <hr data-name="title-divider" className={styles.divider} />

      <FavoriteConfirmationModal
        open={showFavoriteModal}
        onClose={() => setShowFavoriteModal(false)}
        productName={name}
      />
    </div>
  );
}
