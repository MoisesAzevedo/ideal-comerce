/**
 * Component: ProductPrice
 * Responsabilidade única: Exibir preços, desconto e parcelas do produto
 */

'use client';

import { formatPrice } from '../../utils/priceFormatter';
import styles from './ProductPrice.module.scss';

interface ProductPriceProps {
  salePrice: number;
  discountPrice?: number | null;
  oldPrice?: number | null;
  installmentCount?: number;
  installmentValue?: number;
  percentualDiscount?: number | null;
  currency: string;
}

export function ProductPrice({
  salePrice,
  discountPrice,
  oldPrice,
  installmentCount,
  installmentValue,
  percentualDiscount,
  currency
}: ProductPriceProps) {
  const currentPrice = discountPrice || salePrice;
  const hasDiscount = discountPrice && discountPrice < salePrice;

  return (
    <div data-name="product-price-container" className={styles.container}>
      {/* Linha principal com todos os elementos de preço */}
      <div className={styles.mainPriceRow}>
        {/* Preço atual */}
        <div data-name="current-price" className={styles.currentPrice}>
          {formatPrice(currentPrice, currency)}
        </div>

        {/* Preço original (se houver desconto) */}
        {hasDiscount && (
          <div data-name="original-price" className={styles.originalPrice}>
            {formatPrice(salePrice, currency)}
          </div>
        )}

        {/* Badge de desconto */}
        {hasDiscount && percentualDiscount && (
          <div data-name="discount-badge" className={styles.discountBadge}>
            -{percentualDiscount}% OFF
          </div>
        )}
      </div>

      {/* Informações de parcelamento */}
      {installmentCount && installmentValue && (
        <div data-name="installment-info" className={styles.installmentInfo}>
          ou {installmentCount}x de {formatPrice(installmentValue, currency)} sem juros
        </div>
      )}

      {/* Economia (se houver desconto) */}
      {hasDiscount && (
        <div data-name="savings" className={styles.savings}>
          Você economiza {formatPrice(salePrice - currentPrice, currency)}
        </div>
      )}
    </div>
  );
}