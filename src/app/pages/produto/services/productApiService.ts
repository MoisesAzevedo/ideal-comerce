/**
 * Serviço de API para produtos
 * Responsabilidade única: Comunicação com API de produtos
 */

export interface ProductApiResponse {
  success: boolean;
  data?: any;
  error?: string;
  message?: string;
}

/**
 * Busca um produto por ID via API
 * @param productId - ID do produto
 * @returns Promise com os dados do produto
 */
export async function fetchProductById(productId: string): Promise<any> {
  // Validar ID do produto
  if (!productId || productId.trim() === '') {
    throw new Error('ID do produto é obrigatório');
  }

  try {
    const response = await fetch(`/api/products/${productId}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || errorData.message || 'Erro na requisição');
    }

    const data: ProductApiResponse = await response.json();
    
    if (!data.success || !data.data) {
      throw new Error(data.error || data.message || 'Produto não encontrado');
    }

    return data.data;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error('Erro ao processar resposta da API');
    }
    throw error;
  }
}

/**
 * Busca produtos por categoria
 * @param category - Categoria dos produtos
 * @param page - Página da busca
 * @param limit - Limite de itens por página
 * @returns Promise com a lista de produtos
 */
export async function fetchProductsByCategory(
  category: string,
  page: number = 1,
  limit: number = 12
): Promise<any> {
  try {
    const params = new URLSearchParams({
      category,
      page: page.toString(),
      perPage: limit.toString()
    });

    const response = await fetch(`/api/products?${params}`);
    
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos por categoria');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Erro ao buscar produtos por categoria');
  }
}

/**
 * Busca produtos por termo de pesquisa
 * @param searchTerm - Termo de pesquisa
 * @param page - Página da busca
 * @param limit - Limite de itens por página
 * @returns Promise com a lista de produtos
 */
export async function searchProducts(
  searchTerm: string,
  page: number = 1,
  limit: number = 12
): Promise<any> {
  try {
    const params = new URLSearchParams({
      q: searchTerm,
      page: page.toString(),
      perPage: limit.toString()
    });

    const response = await fetch(`/api/products?${params}`);
    
    if (!response.ok) {
      throw new Error('Erro na busca de produtos');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Erro na busca de produtos');
  }
}

/**
 * Valida resposta da API
 * @param response - Resposta da API
 * @returns true se válida, false caso contrário
 */
export function validateApiResponse(response: any): boolean {
  return (
    response &&
    typeof response === 'object' &&
    typeof response.success === 'boolean'
  );
}

/**
 * Formata erro de API para exibição
 * @param error - Erro capturado
 * @returns Mensagem de erro formatada
 */
export function formatApiError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  
  if (typeof error === 'string') {
    return error;
  }
  
  return 'Erro desconhecido na API';
}