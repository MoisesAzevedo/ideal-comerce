/**
 * Utils: Price Formatter
 * Responsabilidade única: Formatação de preços para exibição
 */

export class PriceFormatter {
  /**
   * Formata valor para moeda brasileira
   */
  static toBRL(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  /**
   * Formata valor para exibição simples (sem símbolo de moeda)
   */
  static toNumber(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }
}