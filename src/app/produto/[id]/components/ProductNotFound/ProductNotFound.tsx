/**
 * Component: ProductNotFound
 * Responsabilidade única: Exibir estado de produto não encontrado
 */

'use client';

import Link from 'next/link';
import styles from './ProductNotFound.module.scss';

export function ProductNotFound() {
  return (
    <main data-name="product-not-found-page" className={styles.container}>
      <div data-name="not-found-content" className={styles.content}>
        {/* Ícone de produto não encontrado */}
        <div data-name="not-found-icon" className={styles.icon}>
          📦
        </div>
        
        {/* Título */}
        <h1 data-name="not-found-title" className={styles.title}>
          Produto não encontrado
        </h1>
        
        {/* Mensagem */}
        <p data-name="not-found-message" className={styles.message}>
          O produto que você está procurando não existe ou pode ter sido removido.
        </p>
        
        {/* Ações */}
        <div data-name="not-found-actions" className={styles.actions}>
          <Link 
            data-name="back-to-home-link"
            href="/" 
            className={styles.primaryButton}
          >
            Voltar ao início
          </Link>
          
          <Link 
            data-name="view-all-products-link"
            href="/produtos" 
            className={styles.secondaryButton}
          >
            Ver todos os produtos
          </Link>
        </div>
      </div>
    </main>
  );
}