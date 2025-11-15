// Responsabilidade: Utilitários para trabalhar com categorias no CategoryProductCarousel
import { categories } from '../../../../../db/data/categories';

/**
 * Busca o nome da categoria baseado no ID
 */
export function getCategoryNameById(categoryId: string): string {
  const category = categories.find(cat => cat.id === categoryId || cat.slug === categoryId);
  return category?.name || categoryId;
}

/**
 * Busca o slug da categoria baseado no ID
 */
export function getCategorySlugById(categoryId: string): string {
  const category = categories.find(cat => cat.id === categoryId || cat.slug === categoryId);
  return category?.slug || categoryId;
}