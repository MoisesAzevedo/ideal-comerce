import type { ProductsApiResponse } from "../../../api/products/route";

// Service interface - Responsibility: Define contract for products API communication
export interface ProductsService {
  getProducts(params?: ProductsQueryParams): Promise<ProductsApiResponse>;
}

// Query parameters interface
export interface ProductsQueryParams {
  page?: number;
  perPage?: number;
  category?: string;
  q?: string;
}

// HTTP service implementation - Responsibility: Handle HTTP communication with products API
export class HttpProductsService implements ProductsService {
  private baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl.replace(/\/$/, ''); // Remove trailing slash
  }

  async getProducts(params: ProductsQueryParams = {}): Promise<ProductsApiResponse> {
    const searchParams = new URLSearchParams();
    
    // Build query string from parameters
    if (params.page) searchParams.set('page', params.page.toString());
    if (params.perPage) searchParams.set('perPage', params.perPage.toString());
    if (params.category) searchParams.set('category', params.category);
    if (params.q) searchParams.set('q', params.q);

    const url = `${this.baseUrl}/products${searchParams.toString() ? `?${searchParams}` : ''}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }
}

// Factory function - Responsibility: Create service instances
export function createProductsService(): ProductsService {
  return new HttpProductsService();
}

// Default export for convenience
export default createProductsService;