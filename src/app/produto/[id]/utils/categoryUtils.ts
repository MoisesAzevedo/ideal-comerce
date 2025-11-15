// Responsabilidade: Utilitários para trabalhar com categorias na página de produto
import { categories } from '../../../../../db/data/categories';

/**
 * Busca o nome da categoria baseado no ID
 */
export function getCategoryNameById(categoryId: string): string | null {
  const category = categories.find(cat => cat.id === categoryId || cat.slug === categoryId);
  return category?.name || null;
}

/**
 * Busca o slug da categoria baseado no ID
 */
export function getCategorySlugById(categoryId: string): string | null {
  const category = categories.find(cat => cat.id === categoryId || cat.slug === categoryId);
  return category?.slug || null;
}

/**
 * Obtém informações completas da categoria para exibição
 */
export function getCategoryDisplayInfo(product: any): {
  categoryId: string;
  categoryName: string;
  categorySlug: string;
} | null {
  const categoryId = product.category_id || product.category;
  
  if (!categoryId) return null;

  const category = categories.find(cat => cat.id === categoryId || cat.slug === categoryId);
  
  if (!category) {
    // Fallback caso a categoria não seja encontrada
    return {
      categoryId,
      categoryName: categoryId,
      categorySlug: categoryId
    };
  }

  return {
    categoryId: category.id,
    categoryName: category.name,
    categorySlug: category.slug
  };
}