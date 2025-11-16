// Centralized utility exports
// Responsibility: Export all utility classes and functions

import { PromotionChecker } from './promotionChecker';
import { InstallmentChecker } from './installmentChecker'; 
import { PriceFormatter } from './priceFormatter';
import type { Product, SizeOption } from '../types';

export { PromotionChecker, InstallmentChecker, PriceFormatter };

// Extract unique sizes from products
export function extractUniqueSizes(products: Product[]): SizeOption[] {
  const sizeMap = new Map<string, SizeOption>();
  
  products.forEach(product => {
    if (product.sizes) {
      product.sizes.forEach(size => {
        if (!sizeMap.has(size.value)) {
          sizeMap.set(size.value, { ...size });
        } else {
          // If size exists, update availability to true if any product has it available
          const existingSize = sizeMap.get(size.value)!;
          if (size.available) {
            existingSize.available = true;
          }
        }
      });
    }
  });
  
  return Array.from(sizeMap.values()).sort((a, b) => {
    const sizeOrder = ['pp', 'p', 'm', 'g', 'gg', 'xs', 's', 'l', 'xl', 'xxl'];
    const aIndex = sizeOrder.indexOf(a.value.toLowerCase());
    const bIndex = sizeOrder.indexOf(b.value.toLowerCase());
    
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    return a.value.localeCompare(b.value);
  });
}

// Convenience functions that combine multiple checkers
export function getProductDisplayInfo(product: import('../types').Product) {
  return {
    hasPromotion: PromotionChecker.hasPromotion(product),
    hasInstallments: InstallmentChecker.hasInstallments(product),
    formattedPrice: PriceFormatter.formatCurrency(product.price ?? product.sale_price),
    formattedOldPrice: product.oldPrice ? PriceFormatter.formatCurrency(product.oldPrice) : null,
    formattedDiscount: product.percentual_discount ? PriceFormatter.formatDiscountPercentage(product.percentual_discount) : null,
    formattedInstallment: InstallmentChecker.hasInstallments(product) && product.installmentCount && product.installmentValue
      ? `${product.installmentCount}x de R$ ${PriceFormatter.formatInstallmentValue(product.installmentValue)}`
      : null
  };
}