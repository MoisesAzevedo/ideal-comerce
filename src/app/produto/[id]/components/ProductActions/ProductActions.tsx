/**
 * Component: ProductActions
 * Responsabilidade única: Ações do produto (adicionar à mochila, favoritos, compartilhar)
 */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '../../../../../../db/types';
import { getAssetPath } from '../../../../../utils/paths';
import { useCart } from '../../../../Carrinho/cart';
import ConfirmationModal from '../../../../Carrinho/Components/ModalConfirmation/ConfirmationModal';
import aggregateCart from '../../../../Carrinho/utils/cartHelpers';
import { products as allProducts } from '../../../../../../db';
import styles from './ProductActions.module.scss';

interface ProductActionsProps {
  product: Product;
  stockQuantity: number;
}

export function ProductActions({ product, stockQuantity }: ProductActionsProps) {
  const { addToCart, cartIds } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [lastSubtotal, setLastSubtotal] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);

  const isOutOfStock = stockQuantity <= 0;

  const handleAddToCart = () => {
    if (isOutOfStock) return;

    // Adicionar múltiplas vezes conforme a quantidade selecionada
    for (let i = 0; i < quantity; i++) {
      addToCart(product.id);
    }

    // Calcular novo subtotal
    const nextIds = [...cartIds, ...Array(quantity).fill(product.id)];
    const items = aggregateCart(nextIds, allProducts);
    const subtotal = items.reduce((s, it) => s + (it.product.price ?? it.product.sale_price) * it.qty, 0);
    setLastSubtotal(subtotal);
    setShowConfirmation(true);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= stockQuantity) {
      setQuantity(newQuantity);
    }
  };

  return (
    <>
      <div data-name="product-actions-container" className={styles.container}>
        {/* Seletor de quantidade */}
        {!isOutOfStock && (
          <div data-name="quantity-selector" className={styles.quantitySection}>
            <label data-name="quantity-label" className={styles.quantityLabel}>
              Quantidade:
            </label>
            <div data-name="quantity-controls" className={styles.quantityControls}>
              <button
                data-name="quantity-decrease"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
                className={styles.quantityButton}
                aria-label="Diminuir quantidade"
              >
                −
              </button>
              <span data-name="quantity-display" className={styles.quantityDisplay}>
                {quantity}
              </span>
              <button
                data-name="quantity-increase"
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={quantity >= stockQuantity}
                className={styles.quantityButton}
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>
          </div>
        )}

        {/* Botões de ação lado a lado */}
        <div data-name="action-buttons-container" className={styles.actionButtonsContainer}>
          {/* Botão comprar agora */}
          <button
            data-name="buy-now-button"
            className={`${styles.buyNowButton} ${
              isOutOfStock ? styles.disabledButton : ''
            }`}
            disabled={isOutOfStock}
          >
            {isOutOfStock ? 'Esgotado' : 'Comprar agora'}
          </button>

          {/* Botão adicionar à mochila */}
          <button
            data-name="add-to-cart-button"
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={`${styles.addToCartButton} ${
              isOutOfStock ? styles.disabledButton : ''
            }`}
          >
            <Image
              src={getAssetPath('/icons/bag.svg')}
              alt="Mochila"
              width={20}
              height={20}
            />
            {isOutOfStock ? 'Esgotado' : 'Adicionar à mochila'}
          </button>
        </div>
      </div>

      {/* Modal de confirmação */}
      {showConfirmation && (
        <ConfirmationModal
          open={showConfirmation}
          onClose={() => setShowConfirmation(false)}
          productName={product.name}
          subtotal={lastSubtotal || 0}
        />
      )}
    </>
  );
}