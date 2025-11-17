import type { SearchCategory } from "../types";
import { categories as dbCategories } from '../../../../../../../db/data/categories';

// Adapter: expõe uma lista mínima de categorias para o UI (id + name)
export const searchCategories: SearchCategory[] = dbCategories
  .filter((c) => c.is_active)
  .map((c) => ({ id: c.id, name: c.name }));

// Opção "todas" (fallback) — colocada no início da lista para conveniência
export const ALL_CATEGORIES_ID = 'todas';
export const searchCategoriesWithAll: SearchCategory[] = [
  { id: ALL_CATEGORIES_ID, name: 'Todas as categorias' },
  ...searchCategories,
];

export const getCategoryById = (id: string): SearchCategory | undefined => {
  if (id === ALL_CATEGORIES_ID) return { id: ALL_CATEGORIES_ID, name: 'Todas as categorias' };
  return searchCategories.find((category) => category.id === id);
};

export const getCategoryByName = (name: string): SearchCategory | undefined => {
  return searchCategories.find((category) => category.name === name);
};

export const defaultCategory: SearchCategory = searchCategoriesWithAll[0];