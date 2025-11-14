import type { Product } from '../types';

/**
 * Responsabilidade única: Verificações de parcelamento de produtos
 */
export class InstallmentChecker {
  /**
   * Verifica se o produto pode ser parcelado
   */
  static hasInstallments(product: Product): boolean {
    return product.installmentCount > 1;
  }

  /**
   * Verifica se é pagamento à vista
   */
  static isCashPayment(product: Product): boolean {
    return product.installmentCount === 1;
  }

  /**
   * Obtém número máximo de parcelas
   */
  static getMaxInstallments(product: Product): number {
    return product.installmentCount;
  }

  /**
   * Obtém valor da parcela
   */
  static getInstallmentValue(product: Product): number {
    return product.installmentValue;
  }
}