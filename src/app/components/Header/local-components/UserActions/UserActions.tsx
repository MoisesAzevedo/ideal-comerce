'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './UserActions.module.scss';
import { getAssetPath } from '@/utils/paths';
import { Tooltip } from 'react-tooltip';
import SelectArrow from '../../local-components/Navigation/SelectArrow';
import { useCart } from '@/app/Carrinho/cart';
import Link from 'next/link';

export default function UserActions() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const { cartIds } = useCart();
  const cartCount = cartIds.length;

  return (
    <div className={styles.userActions}>
      {/* Conta */}
      <button className={styles.actionButton}>
        <Image
          src={getAssetPath('/icons/military-user.svg')}
          alt="Conta"
          width={20}
          height={20}
          className={styles.actionIcon}
        />
        <span className={styles.actionLabel}>Entrar</span>
        <span className={styles.actionArrow}>
          <SelectArrow color="#f8f8f8" />
        </span>
      </button>
      {/* Favoritos */}
      <Link href="/Favoritos">
        <button className={styles.actionButton}>
          <Image
            src={getAssetPath('/icons/medal.svg')}
            alt="Favoritos"
            width={20}
            height={20}
            className={styles.actionIcon}
          />
          <span className={styles.actionLabel}>Favoritos</span>
        </button>
      </Link>
      {/* Carrinho */}
      <Link href="/Carrinho">
        <button
          className={styles.actionButton}
          onMouseEnter={() => setActiveTooltip('carrinho')}
          onMouseLeave={() => setActiveTooltip(null)}
          data-tooltip-id="carrinho-tooltip"
          data-tooltip-content="Carrinho"
          style={{ position: 'relative' }}
        >
          <Image
            src={getAssetPath('/icons/bag.svg')}
            alt="Carrinho"
            width={20}
            height={20}
            className={styles.actionIcon}
          />
          <span className={styles.cartBadge}>{cartCount}</span>
        </button>
      </Link>
      {/* Tooltip apenas para o carrinho */}
      <Tooltip
        id="carrinho-tooltip"
        place="bottom"
        isOpen={activeTooltip === 'carrinho'}
        style={{
          backgroundColor: 'rgba(0, 0, 0)',
          color: 'white',
          fontSize: '12px',
          padding: '6px 10px',
          borderRadius: '4px',
          zIndex: 2000,
        }}
      />
    </div>
  );
}
