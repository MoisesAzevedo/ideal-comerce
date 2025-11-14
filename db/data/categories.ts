import type { Category } from '../types';

// Mock categories data - simulating database table  
export const categories: Category[] = [
  { id: 1, name: "Camisetas", slug: "camisetas" },
  { id: 2, name: "Calças", slug: "calcas" },
  { id: 3, name: "Jaquetas", slug: "jaquetas" },
  { id: 4, name: "Bermudas", slug: "bermudas" },
  { id: 5, name: "Acessórios", slug: "acessorios" },
];

// Utility functions for categories
export const getCategoryById = (id: number): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};