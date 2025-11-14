/**
 * Utilitários para produtos
 * Responsabilidade única: Funções auxiliares para validação, formatação e URLs de produtos
 */

// Interface básica para validação de produto
export interface ProductValidationData {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  brand: string;
}

/**
 * Valida dados de um produto
 * @param product - Dados do produto para validar
 * @returns true se válido, false caso contrário
 */
export function validateProductData(product: any): product is ProductValidationData {
  // Verifica se todos os campos obrigatórios existem
  if (!product || typeof product !== 'object') {
    return false;
  }

  // Valida ID
  if (!product.id || typeof product.id !== 'string' || product.id.trim() === '') {
    return false;
  }

  // Valida name
  if (!product.name || typeof product.name !== 'string' || product.name.trim() === '') {
    return false;
  }

  // Valida price
  if (typeof product.price !== 'number' || product.price < 0 || isNaN(product.price)) {
    return false;
  }

  // Valida description
  if (!product.description || typeof product.description !== 'string' || product.description.trim() === '') {
    return false;
  }

  // Valida images
  if (!Array.isArray(product.images) || product.images.length === 0) {
    return false;
  }

  // Valida category
  if (!product.category || typeof product.category !== 'string' || product.category.trim() === '') {
    return false;
  }

  // Valida brand
  if (!product.brand || typeof product.brand !== 'string' || product.brand.trim() === '') {
    return false;
  }

  return true;
}

/**
 * Formata preço para moeda brasileira
 * @param price - Preço a ser formatado
 * @returns Preço formatado em Real brasileiro
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
}

/**
 * Gera URL para página de produto
 * @param productId - ID do produto
 * @returns URL formatada para a página do produto
 */
export function generateProductUrl(productId: string): string {
  // Codifica caracteres especiais para URL segura
  const encodedId = encodeURIComponent(productId);
  return `/pages/produto/${encodedId}`;
}

/**
 * Extrai ID numérico de uma string
 * @param id - ID em formato string
 * @returns ID numérico ou null se inválido
 */
export function extractNumericId(id: string): number | null {
  const numericId = parseInt(id, 10);
  return isNaN(numericId) ? null : numericId;
}

/**
 * Valida se um ID de produto é válido
 * @param id - ID para validar
 * @returns true se válido, false caso contrário
 */
export function isValidProductId(id: string): boolean {
  if (!id || typeof id !== 'string') {
    return false;
  }

  const trimmedId = id.trim();
  if (trimmedId === '') {
    return false;
  }

  // Aceita IDs numéricos ou alfanuméricos com hífens
  const idPattern = /^[a-zA-Z0-9\-_]+$/;
  return idPattern.test(trimmedId);
}

/**
 * Gera slug para SEO baseado no nome do produto
 * @param productName - Nome do produto
 * @returns Slug formatado para URL
 */
export function generateProductSlug(productName: string): string {
  return productName
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
    .replace(/[\s_-]+/g, '-') // Substitui espaços e underscores por hífens
    .replace(/^-+|-+$/g, ''); // Remove hífens do início e fim
}