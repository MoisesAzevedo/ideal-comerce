import type { Category } from '../types';

// Mock categories data - artigos militares (estrutura completa conforme spec)
export const categories: Category[] = [
  // Categorias principais
  {
    id: "a1b2c3d0-0001-0000-0000-000000000001",
    name: "Armamento",
    slug: "armamento",
    parent_id: null,
    description: "Armas e armamentos, incluindo armas de fogo e itens relacionados",
    icon: "rifle",
    image: "/img/categories/armamento.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-0002-0000-0000-000000000002",
    name: "Ammunition",
    slug: "municao",
    parent_id: null,
    description: "Munições de diversos calibres e aplicações táticas",
    icon: "ammo",
    image: "/img/categories/municao.jpg",
    is_active: true,
    sort_order: 2,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-0003-0000-0000-000000000003",
    name: "Vestimenta",
    slug: "vestimenta",
    parent_id: null,
    description: "Uniformes, roupas táticas e equipamentos de vestuário",
    icon: "uniform",
    image: "/img/categories/vestimenta.jpg",
    is_active: true,
    sort_order: 3,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-0004-0000-0000-000000000004",
    name: "Equipamento Tático",
    slug: "equipamento-tatico",
    parent_id: null,
    description: "Cintas, coletes, mochilas e acessórios táticos",
    icon: "tactical-vest",
    image: "/img/categories/equipamento-tatico.jpg",
    is_active: true,
    sort_order: 4,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-0005-0000-0000-000000000005",
    name: "Proteção",
    slug: "protecao",
    parent_id: null,
    description: "Equipamentos de proteção balística e EPI",
    icon: "helmet",
    image: "/img/categories/protecao.jpg",
    is_active: true,
    sort_order: 5,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-0006-0000-0000-000000000006",
    name: "Óptica & Eletrônica",
    slug: "optica-eletronica",
    parent_id: null,
    description: "Telescópios, red dots, NVG, lunetas e eletrônicos táticos",
    icon: "scope",
    image: "/img/categories/optica.jpg",
    is_active: true,
    sort_order: 6,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-0007-0000-0000-000000000007",
    name: "Comunicações",
    slug: "comunicacoes",
    parent_id: null,
    description: "Rádios, headsets e equipamentos de comunicação tática",
    icon: "radio",
    image: "/img/categories/comunicacoes.jpg",
    is_active: true,
    sort_order: 7,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-0008-0000-0000-000000000008",
    name: "Calçados",
    slug: "calcados-taticos",
    parent_id: null,
    description: "Botas e calçados táticos para operações",
    icon: "boot",
    image: "/img/categories/calcados-taticos.jpg",
    is_active: true,
    sort_order: 8,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // Subcategorias - Armamento
  {
    id: "a1b2c3d0-1001-0000-0000-000000000101",
    name: "Rifles",
    slug: "rifles",
    parent_id: "a1b2c3d0-0001-0000-0000-000000000001",
    description: "Rifles de assalto, precisão e carabinas",
    icon: "rifle",
    image: "/img/categories/rifles.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-1002-0000-0000-000000000102",
    name: "Pistolas",
    slug: "pistolas",
    parent_id: "a1b2c3d0-0001-0000-0000-000000000001",
    description: "Pistolas de serviço e defesa",
    icon: "pistol",
    image: "/img/categories/pistolas.jpg",
    is_active: true,
    sort_order: 2,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-1003-0000-0000-000000000103",
    name: "Espingardas",
    slug: "espingardas",
    parent_id: "a1b2c3d0-0001-0000-0000-000000000001",
    description: "Espingardas táticas e para caça",
    icon: "shotgun",
    image: "/img/categories/espingardas.jpg",
    is_active: true,
    sort_order: 3,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // Subcategorias - Munição
  {
    id: "a1b2c3d0-2001-0000-0000-000000000201",
    name: "Calibres Comuns",
    slug: "calibres-comuns",
    parent_id: "a1b2c3d0-0002-0000-0000-000000000002",
    description: "Munições calibres 9mm, .45, .223, 5.56, 7.62 etc.",
    icon: "bullet",
    image: "/img/categories/calibres.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-03-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // Subcategorias - Vestimenta
  {
    id: "a1b2c3d0-3001-0000-0000-000000000301",
    name: "Uniformes",
    slug: "uniformes",
    parent_id: "a1b2c3d0-0003-0000-0000-000000000003",
    description: "Uniformes de combate e de serviço",
    icon: "uniform",
    image: "/img/categories/uniformes.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-03-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-3002-0000-0000-000000000302",
    name: "Roupas para Clima Frio",
    slug: "clima-frio",
    parent_id: "a1b2c3d0-0003-0000-0000-000000000003",
    description: "Casacos, forros e roupas isolantes",
    icon: "snow-jacket",
    image: "/img/categories/clima-frio.jpg",
    is_active: true,
    sort_order: 2,
    created_at: new Date("2024-03-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // Subcategorias - Equipamento Tático
  {
    id: "a1b2c3d0-4001-0000-0000-000000000401",
    name: "Coletes Táticos",
    slug: "coletes-taticos",
    parent_id: "a1b2c3d0-0004-0000-0000-000000000004",
    description: "Coletes modulares e porta-cargas",
    icon: "vest",
    image: "/img/categories/coletes.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-04-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-4002-0000-0000-000000000402",
    name: "Mochilas Táticas",
    slug: "mochilas-taticas",
    parent_id: "a1b2c3d0-0004-0000-0000-000000000004",
    description: "Mochilas de campo e de assalto",
    icon: "backpack",
    image: "/img/categories/mochilas.jpg",
    is_active: true,
    sort_order: 2,
    created_at: new Date("2024-04-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // Subcategorias - Proteção
  {
    id: "a1b2c3d0-5001-0000-0000-000000000501",
    name: "Colete Balístico",
    slug: "colete-balistico",
    parent_id: "a1b2c3d0-0005-0000-0000-000000000005",
    description: "Proteção balística pessoal e placas",
    icon: "ballistic-vest",
    image: "/img/categories/colete-balistico.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-05-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // Subcategorias - Óptica & Eletrônica
  {
    id: "a1b2c3d0-6001-0000-0000-000000000601",
    name: "Lunetas e Scopes",
    slug: "lunetas-scopes",
    parent_id: "a1b2c3d0-0006-0000-0000-000000000006",
    description: "Lunetas de precisão e acessórios ópticos",
    icon: "scope",
    image: "/img/categories/lunetas.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-06-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // Subcategorias - Comunicações
  {
    id: "a1b2c3d0-7001-0000-0000-000000000701",
    name: "Rádios Portáteis",
    slug: "radios-portateis",
    parent_id: "a1b2c3d0-0007-0000-0000-000000000007",
    description: "Rádios táticos, acessórios e baterias",
    icon: "radio",
    image: "/img/categories/radios.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-07-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // Subcategorias - Calçados
  {
    id: "a1b2c3d0-8001-0000-0000-000000000801",
    name: "Botas de Combate",
    slug: "botas-de-combate",
    parent_id: "a1b2c3d0-0008-0000-0000-000000000008",
    description: "Botas duráveis para operações e terreno difícil",
    icon: "combat-boot",
    image: "/img/categories/botas.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-08-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // Knives & Tools
  {
    id: "a1b2c3d0-9001-0000-0000-000000000901",
    name: "Facas & Ferramentas",
    slug: "facas-ferramentas",
    parent_id: null,
    description: "Facas táticas, multi-ferramentas e ferramentas de campo",
    icon: "knife",
    image: "/img/categories/facas.jpg",
    is_active: true,
    sort_order: 9,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // Sobrevivência e primeiros socorros
  {
    id: "a1b2c3d0-a001-0000-0000-000000000a01",
    name: "Sobrevivência & Medicina",
    slug: "sobrevivencia-medicina",
    parent_id: null,
    description: "Kits de primeiros socorros, suprimentos de sobrevivência e ferramentas de emergência",
    icon: "first-aid",
    image: "/img/categories/sobrevivencia.jpg",
    is_active: true,
    sort_order: 10,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // Categoria inativa exemplo
  {
    id: "a1b2c3d0-ffff-0000-0000-00000000ffff",
    name: "Categoria Descontinuada",
    slug: "categoria-descontinuada",
    parent_id: null,
    description: "Categoria descontinuada (exemplo)",
    icon: "archive",
    image: null,
    is_active: false,
    sort_order: 999,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-10-01T08:00:00Z")
  }
];

// Utility functions for categories

// Buscar categoria por ID (UUID)
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

// Buscar categoria por slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

// Buscar categorias ativas apenas
export const getActiveCategories = (): Category[] => {
  return categories.filter(category => category.is_active);
};

// Buscar categorias principais (sem parent_id)
export const getMainCategories = (): Category[] => {
  return categories
    .filter(category => category.parent_id === null && category.is_active)
    .sort((a, b) => a.sort_order - b.sort_order);
};

// Buscar subcategorias por categoria pai
export const getSubcategoriesByParent = (parentId: string): Category[] => {
  return categories
    .filter(category => category.parent_id === parentId && category.is_active)
    .sort((a, b) => a.sort_order - b.sort_order);
};

// Buscar todas as subcategorias (que têm parent_id)
export const getAllSubcategories = (): Category[] => {
  return categories
    .filter(category => category.parent_id !== null && category.is_active)
    .sort((a, b) => a.sort_order - b.sort_order);
};

// Buscar hierarquia completa (categoria + subcategorias)
export const getCategoryHierarchy = (): Array<Category & { subcategories: Category[] }> => {
  const mainCategories = getMainCategories();
  return mainCategories.map(category => ({
    ...category,
    subcategories: getSubcategoriesByParent(category.id)
  }));
};

// Buscar categoria pai de uma subcategoria
export const getParentCategory = (categoryId: string): Category | undefined => {
  const category = getCategoryById(categoryId);
  if (!category || !category.parent_id) return undefined;
  return getCategoryById(category.parent_id);
};

// Buscar breadcrumb (caminho da categoria)
export const getCategoryBreadcrumb = (categoryId: string): Category[] => {
  const breadcrumb: Category[] = [];
  let currentCategory = getCategoryById(categoryId);
  
  while (currentCategory) {
    breadcrumb.unshift(currentCategory);
    if (currentCategory.parent_id) {
      currentCategory = getCategoryById(currentCategory.parent_id);
    } else {
      break;
    }
  }
  
  return breadcrumb;
};

// Contar subcategorias por categoria pai
export const countSubcategories = (parentId: string): number => {
  return getSubcategoriesByParent(parentId).length;
};

// Buscar categorias por termo de pesquisa
export const searchCategories = (searchTerm: string): Category[] => {
  const term = searchTerm.toLowerCase();
  return categories.filter(category => 
    category.is_active && (
      category.name.toLowerCase().includes(term) ||
      category.slug.toLowerCase().includes(term) ||
      category.description?.toLowerCase().includes(term)
    )
  );
};