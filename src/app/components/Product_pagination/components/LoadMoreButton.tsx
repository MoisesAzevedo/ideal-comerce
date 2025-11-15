/**
 * Component: LoadMoreButton
 * Responsabilidade única: Botão para carregar mais produtos com paginação
 */

'use client';

import React from 'react';
import styles from './LoadMoreButton.module.scss';

interface LoadMoreButtonProps {
  onClick: () => void;
  loading?: boolean;
  hasMore?: boolean;
  totalProducts?: number;
  currentProducts?: number;
}

export function LoadMoreButton({ 
  onClick, 
  loading = false, 
  hasMore = true,
  totalProducts,
  currentProducts 
}: LoadMoreButtonProps) {
  if (!hasMore) {
    return null;
  }

  return (
    <div className={styles.container}>
      <button
        onClick={onClick}
        disabled={loading}
        className={styles.loadMoreButton}
        data-name="load-more-button"
      >
        <span className={styles.buttonText}>
          {loading ? 'Carregando...' : 'Ver mais'}
        </span>
        {!loading && (
          <svg 
            className={styles.arrow}
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <polyline points="6,9 12,15 18,9" />
          </svg>
        )}
      </button>
      
      {totalProducts && currentProducts && (
        <p className={styles.counter}>
          Mostrando {currentProducts} de {totalProducts} produtos
        </p>
      )}
    </div>
  );
}