// Centralized utility exports
// Responsibility: Export all utility classes and functions

import { PromotionChecker } from './promotionChecker';
import { InstallmentChecker } from './installmentChecker'; 
import { PriceFormatter } from './priceFormatter';

export { PromotionChecker, InstallmentChecker, PriceFormatter };

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