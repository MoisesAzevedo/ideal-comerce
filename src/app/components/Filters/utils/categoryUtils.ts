import type { Category } from '../../../../../db/types';

/**
 * Get category name by ID
 * Responsibility: Utility function to find category name by ID
 */
export const getCategoryById = (categories: Category[], categoryId: string): Category | undefined => {
  return categories.find(category => category.id === categoryId);
};

/**
 * Get multiple categories by IDs
 * Responsibility: Utility function to find multiple categories by their IDs
 */
export const getCategoriesByIds = (categories: Category[], categoryIds: string[]): Category[] => {
  return categories.filter(category => categoryIds.includes(category.id));
};

/**
 * Generate page title based on selected categories
 * Responsibility: Business logic for determining page title
 */
export const generatePageTitle = (selectedCategories: string[], allCategories: Category[]): string => {
  if (selectedCategories.length === 0) {
    return 'Todos os produtos';
  }
  
  if (selectedCategories.length === 1) {
    const category = getCategoryById(allCategories, selectedCategories[0]);
    return category?.name || 'Produtos';
  }
  
  return 'Produtos';
};