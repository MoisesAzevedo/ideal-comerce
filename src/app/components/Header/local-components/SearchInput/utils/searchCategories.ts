import type { SearchCategory } from "../types";

// Mapa de categorias mockadas para pesquisa
// IDs correspondentes aos da base de dados db/data/categories.ts
export const searchCategories: SearchCategory[] = [
  { id: "a1b2c3d0-1001-0000-0000-000000000001", name: "Camisetas & Blusas" },
  { id: "a1b2c3d0-1002-0000-0000-000000000002", name: "Vestidos" },
  { id: "a1b2c3d0-1003-0000-0000-000000000003", name: "Calças" },
  { id: "a1b2c3d0-1004-0000-0000-000000000004", name: "Shorts" },
  { id: "a1b2c3d0-1005-0000-0000-000000000005", name: "Jaquetas & Casacos" },
  { id: "a1b2c3d0-1006-0000-0000-000000000006", name: "Lingerie" },
  { id: "a1b2c3d0-0002-0000-0000-000000000002", name: "Calçados" },
  { id: "a1b2c3d0-0003-0000-0000-000000000003", name: "Acessórios" },
  { id: "todas", name: "Todas as categorias" },
];

// Função para buscar categoria por ID
export const getCategoryById = (id: string): SearchCategory | undefined => {
  return searchCategories.find(category => category.id === id);
};

// Função para buscar categoria por nome
export const getCategoryByName = (name: string): SearchCategory | undefined => {
  return searchCategories.find(category => category.name === name);
};

// Categoria padrão
export const defaultCategory: SearchCategory = searchCategories[0];