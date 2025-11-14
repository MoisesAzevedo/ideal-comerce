/**
 * Component: ProductDetails
 * Responsabilidade única: Exibir informações detalhadas do produto (título, preço, atributos, ações)
 */

'use client';

import { Product } from '../../../../../../db/types';
import { ProductTitle } from '../ProductTitle/ProductTitle';
import { ProductPrice } from '../ProductPrice/ProductPrice';
import { ProductAttributes } from '../ProductAttributes/ProductAttributes';
import { ProductActions } from '../ProductActions/ProductActions';
import styles from './ProductDetails.module.scss';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div data-name="product-details" className={styles.detailsContainer}>
      {/* Título do produto */}
      <section data-name="product-title-section" className={styles.section}>
        <ProductTitle 
          name={product.name}
          sku={product.sku}
          category={product.category}
        />
      </section>

      {/* Preço do produto */}
      <section data-name="product-price-section" className={styles.section}>
        <ProductPrice 
          salePrice={product.sale_price}
          discountPrice={product.discount_price}
          oldPrice={product.oldPrice}
          installmentCount={product.installmentCount}
          installmentValue={product.installmentValue}
          percentualDiscount={product.percentual_discount}
          currency={product.currency}
        />
      </section>

      {/* Descrição do produto */}
      <section data-name="product-description-section" className={styles.section}>
        <h3 data-name="description-title" className={styles.sectionTitle}>
          Descrição
        </h3>
        <p data-name="product-description" className={styles.description}>
          {product.description}
        </p>
      </section>

      {/* Atributos do produto */}
      {product.attributes && (
        <section data-name="product-attributes-section" className={styles.section}>
          <ProductAttributes attributes={product.attributes} />
        </section>
      )}

      {/* Ações do produto (adicionar ao carrinho, favoritos, etc.) */}
      <section data-name="product-actions-section" className={styles.section}>
        <ProductActions 
          product={product}
          stockQuantity={product.stock_quantity}
        />
      </section>

      {/* Informações de estoque */}
      <section data-name="product-stock-section" className={styles.section}>
        <div data-name="stock-info" className={styles.stockInfo}>
          <span 
            data-name="stock-quantity" 
            className={`${styles.stockText} ${
              product.stock_quantity > 0 ? styles.inStock : styles.outOfStock
            }`}
          >
            {product.stock_quantity > 0 
              ? `${product.stock_quantity} unidades em estoque` 
              : 'Produto esgotado'
            }
          </span>
        </div>
      </section>
    </div>
  );
}