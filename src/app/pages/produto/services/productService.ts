/**
 * Serviço para busca de produto por ID
 * Responsabilidade única: Gerenciar requisições da API de produtos individuais
 */

import type { ProductApiResponse } from '../types';

export class ProductService {
  private static readonly BASE_URL = '/api/products';

  /**
   * Busca produto por ID
   * @param id ID do produto
   * @returns Promise com dados do produto
   */
  static async getProductById(id: number): Promise<ProductApiResponse> {
    try {
      const response = await fetch(`${this.BASE_URL}/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      return {
        product: data.product,
        success: true,
        message: data.message
      };
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      
      return {
        product: null,
        success: false,
        message: error instanceof Error ? error.message : 'Erro desconhecido'
      };
    }
  }

  /**
   * Valida se um ID é válido
   * @param id ID para validar
   * @returns boolean indicando se é válido
   */
  static isValidProductId(id: string | number): boolean {
    const numId = typeof id === 'string' ? parseInt(id, 10) : id;
    return !isNaN(numId) && numId > 0;
  }

  /**
   * Simula operação de compra (mock)
   * @param productId ID do produto
   * @param quantity Quantidade
   * @returns Promise com resultado da operação
   */
  static async simulatePurchase(productId: number, quantity: number): Promise<{
    success: boolean;
    message: string;
    orderId?: string;
  }> {
    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (!this.isValidProductId(productId) || quantity <= 0) {
      return {
        success: false,
        message: 'Dados de compra inválidos'
      };
    }
    
    // Simular sucesso na compra
    return {
      success: true,
      message: 'Produto adicionado ao carrinho com sucesso!',
      orderId: `ORD-${Date.now()}-${productId}`
    };
  }
}