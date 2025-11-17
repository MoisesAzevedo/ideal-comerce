import { featuredProducts } from "../../../../../../../db/data/products";
import type { Product } from "../../../../../../../db/types";
import type { SearchResult, SearchQuery, SearchFilters } from "../types/search";

/**
 * Responsabilidade: Buscar produtos na base de dados
 * Função única: Filtrar produtos por termo de pesquisa e categoria
 */
export class ProductSearchService {
  private products: Product[] = featuredProducts;

  /**
   * Busca produtos por termo e categoria
   */
  searchProducts(query: SearchQuery, filters?: SearchFilters): SearchResult[] {
    if (!query.term.trim()) {
      return [];
    }

    const searchTerm = query.term.toLowerCase().trim();
    
    return this.products
      .filter(product => this.matchesCategory(product, query.categoryId))
      .filter(product => this.matchesSearchTerm(product, searchTerm))
      .filter(product => this.matchesFilters(product, filters))
      .slice(0, 10) // Limita a 10 resultados
      .map(product => this.transformToSearchResult(product));
  }

  /**
   * Verifica se o produto pertence à categoria selecionada
   */
  private matchesCategory(product: Product, categoryId: string): boolean {
    if (!categoryId || categoryId === 'todas') {
      return true;
    }
    return product.category_id === categoryId;
  }

  /**
   * Verifica se o produto corresponde ao termo de pesquisa
   */
  private matchesSearchTerm(product: Product, searchTerm: string): boolean {
    const fields = [
      product.name,
      product.description,
      product.sku
    ];

    return fields.some(field => 
      field?.toLowerCase().includes(searchTerm)
    );
  }

  /**
   * Aplica filtros adicionais
   */
  private matchesFilters(product: Product, filters?: SearchFilters): boolean {
    if (!filters) return true;

    if (filters.priceRange) {
      const price = product.discount_price || product.sale_price;
      if (price < filters.priceRange.min || price > filters.priceRange.max) {
        return false;
      }
    }

    return true;
  }

  /**
   * Transforma um Product em SearchResult
   */
  private transformToSearchResult(product: Product): SearchResult {
    return {
      id: product.id,
      name: product.name,
      price: product.discount_price || product.sale_price,
      image: product.images[0] || '',
      categoryId: product.category_id
    };
  }
}