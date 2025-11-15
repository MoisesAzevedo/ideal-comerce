import { useMemo } from 'react';
import type { Product } from '../../../../../db';
import { PromotionChecker, InstallmentChecker, PriceFormatter } from '../../../../../db';

/**
 * Responsabilidade única: Lógica de display de produtos
 * Hook que prepara dados de produtos para exibição
 */
export function useProductDisplay(product: Product) {
  return useMemo(() => {
    const hasPromotion = PromotionChecker.hasPromotion(product);
    const hasInstallments = InstallmentChecker.hasInstallments(product);
    const hasOldPrice = PromotionChecker.hasOldPrice(product);
    const hasDiscount = PromotionChecker.hasDiscount(product);

    return {
      // Estado do produto
      hasPromotion,
      hasInstallments,
      hasOldPrice,
      hasDiscount,
      isCashPayment: InstallmentChecker.isCashPayment(product),
      
      // Valores formatados
      formattedPrice: PriceFormatter.formatCurrency(product.price ?? product.sale_price),
      formattedOldPrice: hasOldPrice ? PriceFormatter.formatCurrency(product.oldPrice!) : null,
      formattedDiscount: hasDiscount ? PriceFormatter.formatDiscountPercentage(product.percentual_discount!) : null,
      formattedInstallmentValue: PriceFormatter.formatInstallmentValue(product.installmentValue ?? 0),
      
      // Textos de exibição
      installmentText: hasInstallments && product.installmentCount && product.installmentValue
        ? `${product.installmentCount}x de R$ ${PriceFormatter.formatInstallmentValue(product.installmentValue)}`
        : 'Pagamento à vista',
      
      // Dados originais (para casos específicos)
      originalProduct: product
    };
  }, [product]);
}