/**
 * Service: productService
 * Responsabilidade única: Gerenciar requisições relacionadas a produtos individuais
 */

import { Product } from '../../../../../db/types';

export interface ProductApiResponse {
  success: boolean;
  message: string;
  product: Product | null;
}

/**
 * Buscar produto por ID
 */
export async function fetchProductById(id: string): Promise<ProductApiResponse> {
  try {
    const response = await fetch(`/api/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ProductApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      product: null
    };
  }
}