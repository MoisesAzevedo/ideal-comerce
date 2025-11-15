/**
 * Component: ProductDetails
 * Responsabilidade única: Exibir informações detalhadas do produto (título, preço, atributos, ações)
 */

'use client';

import { Product } from '../../../../../../db/types';
import { ProductTitle } from '../ProductTitle/ProductTitle';
import { ProductPrice } from '../ProductPrice/ProductPrice';
import { ProductActions } from '../ProductActions/ProductActions';
import { SizeSelector, ColorSelector } from '@/app/components';
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
          id={product.id}
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

      {/* Seletor de tamanhos */}
      {product.sizes && product.sizes.length > 0 && (
        <section data-name="product-size-section" className={styles.section}>
          <SizeSelector
            sizes={product.sizes}
            onSizeChange={(sizeValue) =>
              console.log('Tamanho selecionado:', sizeValue)
            }
          />
        </section>
      )}

      {/* Seletor de cores */}
      {product.colors && product.colors.length > 0 && (
        <section data-name="product-color-section" className={styles.section}>
          <ColorSelector
            colors={product.colors}
            onColorChange={(colorValue) =>
              console.log('Cor selecionada:', colorValue)
            }
          />
        </section>
      )}

      {/* Ações do produto (adicionar à mochila, favoritos, etc.) */}
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
              : 'Produto esgotado'}
          </span>
        </div>
      </section>
    </div>
  );
}
