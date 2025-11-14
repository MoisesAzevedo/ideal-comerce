/**
 * Utility: priceFormatter
 * Responsabilidade única: Formatar valores monetários
 */

export function formatPrice(value: number, currency: string = 'BRL'): string {
  if (typeof value !== 'number' || isNaN(value)) {
    return 'R$ 0,00';
  }

  if (currency === 'BRL') {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  }

  // Fallback para outras moedas
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}