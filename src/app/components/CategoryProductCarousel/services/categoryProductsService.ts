// Responsabilidade: Buscar produtos por categoria utilizando API existente
import { fetchFeaturedProducts } from '../../Product_pagination/api/productsService';
import type { Product } from '../../../../../db/types';

export interface FetchProductsByCategoryParams {
  category: string;
  maxProducts?: number;
  page?: number;
  excludeProductId?: string; // Para excluir produto atual na página de produto
}

export interface FetchProductsByCategoryResponse {
  products: Product[];
  hasMore: boolean;
  total: number;
}

/**
 * Busca produtos de uma categoria específica
 * Reutiliza o serviço existente fetchFeaturedProducts
 */
export async function fetchProductsByCategory(
  params: FetchProductsByCategoryParams
): Promise<FetchProductsByCategoryResponse> {
  const { category, maxProducts = 10, page = 1, excludeProductId } = params;

  try {
    const response = await fetchFeaturedProducts({
      category,
      page,
      perPage: excludeProductId ? maxProducts + 1 : maxProducts, // Pega um a mais se for excluir
    });

    let products = response.data;
    
    // Remove o produto atual se especificado (para produtos relacionados)
    if (excludeProductId) {
      products = products.filter(product => product.id !== excludeProductId);
      // Garante que não exceda o limite após exclusão
      products = products.slice(0, maxProducts);
    }

    return {
      products,
      hasMore: response.meta.page < response.meta.totalPages,
      total: response.meta.total,
    };
  } catch (error) {
    throw new Error(
      `Erro ao buscar produtos da categoria "${category}": ${
        error instanceof Error ? error.message : 'Erro desconhecido'
      }`
    );
  }
}