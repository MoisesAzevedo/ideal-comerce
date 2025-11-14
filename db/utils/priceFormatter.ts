import type { Product } from '../types';

/**
 * Responsabilidade única: Formatação de valores monetários
 */
export class PriceFormatter {
  /**
   * Formata valor para Real brasileiro
   */
  static formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }

  /**
   * Formata valor da parcela com vírgula decimal
   */
  static formatInstallmentValue(value: number): string {
    return value.toFixed(2).replace('.', ',');
  }

  /**
   * Formata percentual de desconto
   */
  static formatDiscountPercentage(percentage: number): string {
    return `-${percentage}%`;
  }
}