// Central mock database export - Single source of truth
// Responsibility: Export all data models and utilities

// Types
export * from './types';

// Data
export * from './data/products';
export * from './data/categories';

// Utils (NEW)
export * from './utils';

// Convenience re-exports with clear naming
export { featuredProducts as products } from './data/products';
export { categories } from './data/categories';

// Database simulation utilities
export class MockDatabase {
  static async getProducts(params?: {
    page?: number;
    perPage?: number;
    category?: string;
    size?: string;
    q?: string;
  }) {
    const { featuredProducts, getProductsByCategory, getProductsByCategories, searchProducts } = await import('./data/products');
    
    let filteredProducts = featuredProducts;

    // Apply category filter
    if (params?.category) {
      if (params.category.includes(',')) {
        filteredProducts = getProductsByCategories(params.category);
      } else {
        filteredProducts = getProductsByCategory(params.category);
      }
    }

    // Apply size filter
    if (params?.size) {
      console.log('🗃️ DB: Filtering by sizes:', params.size);
      const sizeFilters = params.size.split(',');
      const beforeFilter = filteredProducts.length;
      filteredProducts = filteredProducts.filter(product => 
        product.sizes && product.sizes.some(size => 
          sizeFilters.includes(size.value) && size.available
        )
      );
      console.log('🗃️ DB: After size filter:', filteredProducts.length, 'products (was', beforeFilter, ')');
    }
    
    // Apply search query
    if (params?.q) {
      filteredProducts = searchProducts(params.q, filteredProducts);
    }

    // Apply pagination
    const page = params?.page || 1;
    const perPage = params?.perPage || 16;
    const total = filteredProducts.length;
    const totalPages = Math.ceil(total / perPage);
    const offset = (page - 1) * perPage;
    const data = filteredProducts.slice(offset, offset + perPage);

    return {
      data,
      meta: { page, perPage, total, totalPages }
    };
  }

  static async getCategories() {
    const { categories } = await import('./data/categories');
    return {
      data: categories,
      meta: { page: 1, perPage: categories.length, total: categories.length, totalPages: 1 }
    };
  }
}