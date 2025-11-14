/**
 * Serviço de navegação para produtos
 * Responsabilidade única: Gerenciar navegação entre páginas de produtos
 */

'use client';

/**
 * Gera URL para página de produto
 * @param productId - ID do produto
 * @returns URL formatada para a página do produto
 */
export function generateProductPageUrl(productId: number): string {
  return `/pages/produto/${productId}`;
}

/**
 * Navega para página de produto
 * @param productId - ID do produto
 * @param router - Instância do router do Next.js
 */
export function navigateToProduct(productId: number, router: any): void {
  const url = generateProductPageUrl(productId);
  router.push(url);
}

/**
 * Valida se ID do produto é válido para navegação
 * @param productId - ID do produto
 * @returns true se válido, false caso contrário
 */
export function isValidProductIdForNavigation(productId: number): boolean {
  return !isNaN(productId) && productId > 0 && Number.isInteger(productId);
}