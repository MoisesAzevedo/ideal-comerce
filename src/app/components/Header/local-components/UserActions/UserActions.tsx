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
    <div className={styles.userActions} data-name="user-actions-root">
      {/* Conta */}
      <button className={styles.actionButton} data-name="action-account">
        <Image
          src={getAssetPath('/icons/military-user.svg')}
          alt="Conta"
          width={20}
          height={20}
          className={styles.actionIcon}
          data-name="icon-account"
        />
        <span className={styles.actionLabel} data-name="label-account">Entrar</span>
        <span className={styles.actionArrow} data-name="arrow-account">
          <SelectArrow color="#f8f8f8" />
        </span>
      </button>
      {/* Favoritos */}
      <Link href="/Favoritos" data-name="link-favoritos">
        <button className={styles.actionButton} data-name="action-favoritos">
          <Image
            src={getAssetPath('/icons/medal.svg')}
            alt="Favoritos"
            width={20}
            height={20}
            className={styles.actionIcon}
            data-name="icon-favoritos"
          />
          <span className={styles.actionLabel} data-name="label-favoritos">Favoritos</span>
        </button>
      </Link>
      {/* Carrinho */}
      <Link href="/Carrinho" data-name="link-carrinho">
        <button
          className={styles.actionButton}
          data-name="action-carrinho"
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
            data-name="icon-carrinho"
          />
          <span className={styles.cartBadge} data-name="cart-badge">{cartCount}</span>
        </button>
      </Link>
      {/* Tooltip apenas para o carrinho */}
      <Tooltip
        id="carrinho-tooltip"
        place="bottom"
        isOpen={activeTooltip === 'carrinho'}
        data-name="tooltip-carrinho"
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
