import React from 'react';
import Link from 'next/link';
import SharedPageLayout from './layouts/SharedPageLayout';
import styles from './not-found.module.scss';
import { getAssetPath } from '@/utils/paths';
import Image from 'next/image';

export default function NotFound() {
  return (
    <SharedPageLayout showTopFrame={false} showNavigation={false}>
      <div className={styles.notFoundContainer} data-name="not-found-page">
        <div className={styles.content} data-name="not-found-content">
          {/* Imagem 404 */}
          <div className={styles.imageContainer} data-name="404-image">
            <Image
              src={getAssetPath('/img/404.png')}
              alt="Página não encontrada"
              width={250}
              height={200}
              className={styles.illustration}
              priority
            />
          </div>

          {/* Título e Mensagem */}
          <div className={styles.textContent} data-name="404-text">
            <h1 className={styles.title} data-name="404-title">
              404
            </h1>
            <h2 className={styles.subtitle} data-name="404-subtitle">
              Ops! Página não encontrada
            </h2>
            <p className={styles.description} data-name="404-description">
              A página que você está procurando pode ter sido movida, excluída ou não existe.
            </p>
            <p className={styles.subDescription} data-name="404-sub-description">
              Não se preocupe, você pode continuar navegando em nossa loja.
            </p>
          </div>

          {/* Botão de Ação */}
          <div className={styles.actionContainer} data-name="404-actions">
            <Link 
              href="/" 
              className={styles.continueButton} 
              data-name="continue-shopping-button"
            >
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    </SharedPageLayout>
  );
}
