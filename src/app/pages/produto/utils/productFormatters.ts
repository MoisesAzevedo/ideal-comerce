/**
 * Utilitários para formatação de dados da página produto
 * Responsabilidade única: Funções de formatação e validação específicas da página produto
 */

import type { Product } from '../../../../../db/types';

export class ProductFormatter {
  /**
   * Formata o título da página com o nome do produto
   * @param productName Nome do produto
   * @returns Título formatado
   */
  static formatPageTitle(productName: string): string {
    return `${productName} | Ideal E-commerce`;
  }

  /**
   * Formata a descrição da página para SEO
   * @param product Dados do produto
   * @returns Descrição formatada
   */
  static formatPageDescription(product: Product): string {
    const price = `R$ ${product.price}`;
    const category = product.category;
    return `${product.name} - ${category} por ${price}. Compre com segurança na Ideal E-commerce.`;
  }

  /**
   * Formata informações de disponibilidade
   * @param product Dados do produto
   * @returns Status de disponibilidade
   */
  static formatAvailabilityStatus(product: Product): {
    available: boolean;
    message: string;
    class: string;
  } {
    // Por enquanto todos os produtos estão disponíveis
    // Futuramente pode incluir lógica de estoque
    return {
      available: true,
      message: 'Em estoque',
      class: 'text-green-600'
    };
  }

  /**
   * Gera breadcrumb para a página
   * @param product Dados do produto
   * @returns Array com itens do breadcrumb
   */
  static generateBreadcrumb(product: Product): Array<{
    label: string;
    href?: string;
  }> {
    return [
      { label: 'Início', href: '/' },
      { label: 'Produtos', href: '/produtos' },
      { label: product.category, href: `/categoria/${product.category.toLowerCase()}` },
      { label: product.name }
    ];
  }
}

export class ProductValidator {
  /**
   * Valida se um produto possui todas as informações necessárias
   * @param product Dados do produto
   * @returns Resultado da validação
   */
  static validateProductData(product: Product | null): {
    isValid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    if (!product) {
      errors.push('Produto não encontrado');
      return { isValid: false, errors };
    }

    if (!product.name || product.name.trim().length === 0) {
      errors.push('Nome do produto é obrigatório');
    }

    if (!product.images || product.images.length === 0) {
      errors.push('Produto deve ter pelo menos uma imagem');
    }

    if (product.price <= 0) {
      errors.push('Preço do produto deve ser maior que zero');
    }

    if (!product.category || product.category.trim().length === 0) {
      errors.push('Categoria do produto é obrigatória');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Valida quantidade selecionada
   * @param quantity Quantidade
   * @returns Se a quantidade é válida
   */
  static validateQuantity(quantity: number): {
    isValid: boolean;
    message?: string;
  } {
    if (quantity < 1) {
      return {
        isValid: false,
        message: 'Quantidade deve ser pelo menos 1'
      };
    }

    if (quantity > 10) {
      return {
        isValid: false,
        message: 'Quantidade máxima é 10 por compra'
      };
    }

    return { isValid: true };
  }
}

export class ProductImageUtils {
  /**
   * Gera texto alternativo para imagens
   * @param productName Nome do produto
   * @param imageIndex Índice da imagem
   * @returns Texto alternativo
   */
  static generateImageAlt(productName: string, imageIndex: number): string {
    return `${productName} - Imagem ${imageIndex + 1}`;
  }

  /**
   * Gera configuração de sizes para imagens responsivas
   * @param isMainImage Se é a imagem principal
   * @returns String de sizes
   */
  static generateImageSizes(isMainImage: boolean = false): string {
    if (isMainImage) {
      return '(max-width: 350px) 300px, (max-width: 480px) 400px, (max-width: 768px) 500px, 600px';
    }
    
    return '(max-width: 350px) 60px, (max-width: 480px) 80px, 100px';
  }

  /**
   * Valida se uma URL de imagem é válida
   * @param imageUrl URL da imagem
   * @returns Se a URL é válida
   */
  static isValidImageUrl(imageUrl: string): boolean {
    try {
      const url = new URL(imageUrl);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      return false;
    }
  }
}