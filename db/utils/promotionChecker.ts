import type { Product } from '../types';

/**
 * Responsabilidade única: Verificações de promoção de produtos
 */
export class PromotionChecker {
  /**
   * Verifica se o produto tem promoção ativa
   */
  static hasPromotion(product: Product): boolean {
    return !!(product.oldPrice && product.percentual_discount);
  }

  /**
   * Verifica se o produto tem preço antigo válido
   */
  static hasOldPrice(product: Product): boolean {
    return product.oldPrice !== null && product.oldPrice !== undefined && product.oldPrice > 0;
  }

  /**
   * Verifica se o produto tem desconto válido
   */
  static hasDiscount(product: Product): boolean {
    return product.percentual_discount !== null && 
           product.percentual_discount !== undefined && 
           product.percentual_discount > 0;
  }
}