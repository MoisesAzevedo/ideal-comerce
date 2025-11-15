import type { Category } from '../types';

// Mock categories data - E-commerce civil (estrutura completa)
export const categories: Category[] = [
  // Categorias principais
  {
    id: "a1b2c3d0-0001-0000-0000-000000000001",
    name: "Vestimenta",
    slug: "vestimenta",
    parent_id: null,
    description: "Roupas e vestimentas para todas as ocasiões",
    icon: "clothing",
    image: "/img/categories/vestimenta.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-0002-0000-0000-000000000002",
    name: "Calçados",
    slug: "calcados",
    parent_id: null,
    description: "Sapatos, tênis, botas e sandálias para todos os estilos",
    icon: "shoe",
    image: "/img/categories/calcados.jpg",
    is_active: true,
    sort_order: 2,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-0003-0000-0000-000000000003",
    name: "Acessórios",
    slug: "acessorios",
    parent_id: null,
    description: "Bolsas, relógios, joias e outros acessórios",
    icon: "accessories",
    image: "/img/categories/acessorios.jpg",
    is_active: true,
    sort_order: 3,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-0004-0000-0000-000000000004",
    name: "Tecnologia",
    slug: "tecnologia",
    parent_id: null,
    description: "Eletrônicos, smartphones, computadores e gadgets",
    icon: "tech",
    image: "/img/categories/tecnologia.jpg",
    is_active: true,
    sort_order: 4,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-0005-0000-0000-000000000005",
    name: "Casa & Jardim",
    slug: "casa-jardim",
    parent_id: null,
    description: "Móveis, decoração e utensílios para casa",
    icon: "home",
    image: "/img/categories/casa-jardim.jpg",
    is_active: true,
    sort_order: 5,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-0006-0000-0000-000000000006",
    name: "Esporte & Lazer",
    slug: "esporte-lazer",
    parent_id: null,
    description: "Equipamentos esportivos e atividades de lazer",
    icon: "sports",
    image: "/img/categories/esporte-lazer.jpg",
    is_active: true,
    sort_order: 6,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-0007-0000-0000-000000000007",
    name: "Beleza & Cuidados",
    slug: "beleza-cuidados",
    parent_id: null,
    description: "Produtos de beleza, cuidados pessoais e cosméticos",
    icon: "beauty",
    image: "/img/categories/beleza-cuidados.jpg",
    is_active: true,
    sort_order: 7,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-0008-0000-0000-000000000008",
    name: "Ferramentas & Equipamentos",
    slug: "ferramentas-equipamentos",
    parent_id: null,
    description: "Ferramentas manuais, elétricas e equipamentos de trabalho",
    icon: "tools",
    image: "/img/categories/ferramentas.jpg",
    is_active: true,
    sort_order: 8,
    created_at: new Date("2024-01-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // SUBCATEGORIAS - VESTIMENTA
  {
    id: "a1b2c3d0-1001-0000-0000-000000000001",
    name: "Camisetas & Blusas",
    slug: "camisetas-blusas",
    parent_id: "a1b2c3d0-0001-0000-0000-000000000001",
    description: "Camisetas, blusas, regatas e tops",
    icon: "tshirt",
    image: "/img/categories/camisetas.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-1002-0000-0000-000000000002",
    name: "Calças & Shorts",
    slug: "calcas-shorts",
    parent_id: "a1b2c3d0-0001-0000-0000-000000000001",
    description: "Calças jeans, sociais, shorts e bermudas",
    icon: "pants",
    image: "/img/categories/calcas.jpg",
    is_active: true,
    sort_order: 2,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-1003-0000-0000-000000000003",
    name: "Jaquetas & Casacos",
    slug: "jaquetas-casacos",
    parent_id: "a1b2c3d0-0001-0000-0000-000000000001",
    description: "Jaquetas, casacos, moletons e blazers",
    icon: "jacket",
    image: "/img/categories/jaquetas.jpg",
    is_active: true,
    sort_order: 3,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-1004-0000-0000-000000000004",
    name: "Vestidos & Saias",
    slug: "vestidos-saias",
    parent_id: "a1b2c3d0-0001-0000-0000-000000000001",
    description: "Vestidos, saias e macacões femininos",
    icon: "dress",
    image: "/img/categories/vestidos.jpg",
    is_active: true,
    sort_order: 4,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // SUBCATEGORIAS - CALÇADOS
  {
    id: "a1b2c3d0-2001-0000-0000-000000000001",
    name: "Tênis",
    slug: "tenis",
    parent_id: "a1b2c3d0-0002-0000-0000-000000000002",
    description: "Tênis esportivos, casuais e de corrida",
    icon: "sneaker",
    image: "/img/categories/tenis.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-2002-0000-0000-000000000002",
    name: "Sapatos Sociais",
    slug: "sapatos-sociais",
    parent_id: "a1b2c3d0-0002-0000-0000-000000000002",
    description: "Sapatos sociais masculinos e femininos",
    icon: "formal-shoe",
    image: "/img/categories/sapatos-sociais.jpg",
    is_active: true,
    sort_order: 2,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-2003-0000-0000-000000000003",
    name: "Botas & Coturnos",
    slug: "botas-coturnos",
    parent_id: "a1b2c3d0-0002-0000-0000-000000000002",
    description: "Botas de couro, coturnos e botas de trabalho",
    icon: "boot",
    image: "/img/categories/botas.jpg",
    is_active: true,
    sort_order: 3,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-2004-0000-0000-000000000004",
    name: "Sandálias & Chinelos",
    slug: "sandalias-chinelos",
    parent_id: "a1b2c3d0-0002-0000-0000-000000000002",
    description: "Sandálias, chinelos e calçados abertos",
    icon: "sandal",
    image: "/img/categories/sandalias.jpg",
    is_active: true,
    sort_order: 4,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // SUBCATEGORIAS - ACESSÓRIOS
  {
    id: "a1b2c3d0-3001-0000-0000-000000000001",
    name: "Relógios",
    slug: "relogios",
    parent_id: "a1b2c3d0-0003-0000-0000-000000000003",
    description: "Relógios masculinos, femininos e smartwatches",
    icon: "watch",
    image: "/img/categories/relogios.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-3002-0000-0000-000000000002",
    name: "Bolsas & Mochilas",
    slug: "bolsas-mochilas",
    parent_id: "a1b2c3d0-0003-0000-0000-000000000003",
    description: "Bolsas, mochilas, carteiras e necessaires",
    icon: "bag",
    image: "/img/categories/bolsas.jpg",
    is_active: true,
    sort_order: 2,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-3003-0000-0000-000000000003",
    name: "Joias & Bijuterias",
    slug: "joias-bijuterias",
    parent_id: "a1b2c3d0-0003-0000-0000-000000000003",
    description: "Joias, bijuterias, anéis e colares",
    icon: "jewelry",
    image: "/img/categories/joias.jpg",
    is_active: true,
    sort_order: 3,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-3004-0000-0000-000000000004",
    name: "Óculos & Chapéus",
    slug: "oculos-chapeus",
    parent_id: "a1b2c3d0-0003-0000-0000-000000000003",
    description: "Óculos de sol, chapéus e bonés",
    icon: "sunglasses",
    image: "/img/categories/oculos.jpg",
    is_active: true,
    sort_order: 4,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // SUBCATEGORIAS - TECNOLOGIA
  {
    id: "a1b2c3d0-4001-0000-0000-000000000001",
    name: "Smartphones & Tablets",
    slug: "smartphones-tablets",
    parent_id: "a1b2c3d0-0004-0000-0000-000000000004",
    description: "Celulares, tablets e acessórios móveis",
    icon: "smartphone",
    image: "/img/categories/smartphones.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-4002-0000-0000-000000000002",
    name: "Computadores & Notebooks",
    slug: "computadores-notebooks",
    parent_id: "a1b2c3d0-0004-0000-0000-000000000004",
    description: "PCs, notebooks e componentes",
    icon: "laptop",
    image: "/img/categories/notebooks.jpg",
    is_active: true,
    sort_order: 2,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-4003-0000-0000-000000000003",
    name: "Áudio & TV",
    slug: "audio-tv",
    parent_id: "a1b2c3d0-0004-0000-0000-000000000004",
    description: "Fones de ouvido, TVs e equipamentos de som",
    icon: "headphones",
    image: "/img/categories/audio.jpg",
    is_active: true,
    sort_order: 3,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-4004-0000-0000-000000000004",
    name: "Gaming & Consoles",
    slug: "gaming-consoles",
    parent_id: "a1b2c3d0-0004-0000-0000-000000000004",
    description: "Consoles, jogos e acessórios gamer",
    icon: "gamepad",
    image: "/img/categories/gaming.jpg",
    is_active: true,
    sort_order: 4,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // SUBCATEGORIAS - CASA & JARDIM
  {
    id: "a1b2c3d0-5001-0000-0000-000000000001",
    name: "Móveis & Decoração",
    slug: "moveis-decoracao",
    parent_id: "a1b2c3d0-0005-0000-0000-000000000005",
    description: "Móveis, decoração e objetos para casa",
    icon: "sofa",
    image: "/img/categories/moveis.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-5002-0000-0000-000000000002",
    name: "Cozinha & Mesa",
    slug: "cozinha-mesa",
    parent_id: "a1b2c3d0-0005-0000-0000-000000000005",
    description: "Utensílios de cozinha, panelas e mesa",
    icon: "kitchen",
    image: "/img/categories/cozinha.jpg",
    is_active: true,
    sort_order: 2,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-5003-0000-0000-000000000003",
    name: "Jardim & Plantas",
    slug: "jardim-plantas",
    parent_id: "a1b2c3d0-0005-0000-0000-000000000005",
    description: "Plantas, ferramentas de jardim e vasos",
    icon: "plant",
    image: "/img/categories/jardim.jpg",
    is_active: true,
    sort_order: 3,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-5004-0000-0000-000000000004",
    name: "Limpeza & Organização",
    slug: "limpeza-organizacao",
    parent_id: "a1b2c3d0-0005-0000-0000-000000000005",
    description: "Produtos de limpeza e organização",
    icon: "cleaning",
    image: "/img/categories/limpeza.jpg",
    is_active: true,
    sort_order: 4,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // SUBCATEGORIAS - ESPORTE & LAZER
  {
    id: "a1b2c3d0-6001-0000-0000-000000000001",
    name: "Fitness & Academia",
    slug: "fitness-academia",
    parent_id: "a1b2c3d0-0006-0000-0000-000000000006",
    description: "Equipamentos de academia e fitness",
    icon: "dumbbell",
    image: "/img/categories/fitness.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-6002-0000-0000-000000000002",
    name: "Esportes Aquáticos",
    slug: "esportes-aquaticos",
    parent_id: "a1b2c3d0-0006-0000-0000-000000000006",
    description: "Natação, surf e esportes aquáticos",
    icon: "swimming",
    image: "/img/categories/aquaticos.jpg",
    is_active: true,
    sort_order: 2,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-6003-0000-0000-000000000003",
    name: "Camping & Aventura",
    slug: "camping-aventura",
    parent_id: "a1b2c3d0-0006-0000-0000-000000000006",
    description: "Equipamentos para camping e aventura",
    icon: "tent",
    image: "/img/categories/camping.jpg",
    is_active: true,
    sort_order: 3,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-6004-0000-0000-000000000004",
    name: "Futebol & Esportes",
    slug: "futebol-esportes",
    parent_id: "a1b2c3d0-0006-0000-0000-000000000006",
    description: "Bolas, chuteiras e equipamentos esportivos",
    icon: "soccer",
    image: "/img/categories/futebol.jpg",
    is_active: true,
    sort_order: 4,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // SUBCATEGORIAS - BELEZA & CUIDADOS
  {
    id: "a1b2c3d0-7001-0000-0000-000000000001",
    name: "Cuidados com a Pele",
    slug: "cuidados-pele",
    parent_id: "a1b2c3d0-0007-0000-0000-000000000007",
    description: "Cremes, hidratantes e produtos para pele",
    icon: "skincare",
    image: "/img/categories/skincare.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-7002-0000-0000-000000000002",
    name: "Cabelos",
    slug: "cabelos",
    parent_id: "a1b2c3d0-0007-0000-0000-000000000007",
    description: "Shampoos, condicionadores e tratamentos",
    icon: "hair",
    image: "/img/categories/cabelos.jpg",
    is_active: true,
    sort_order: 2,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-7003-0000-0000-000000000003",
    name: "Maquiagem",
    slug: "maquiagem",
    parent_id: "a1b2c3d0-0007-0000-0000-000000000007",
    description: "Bases, batons, sombras e pincéis",
    icon: "makeup",
    image: "/img/categories/maquiagem.jpg",
    is_active: true,
    sort_order: 3,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-7004-0000-0000-000000000004",
    name: "Perfumes & Fragrâncias",
    slug: "perfumes-fragrancias",
    parent_id: "a1b2c3d0-0007-0000-0000-000000000007",
    description: "Perfumes, colônias e desodorantes",
    icon: "perfume",
    image: "/img/categories/perfumes.jpg",
    is_active: true,
    sort_order: 4,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },

  // SUBCATEGORIAS - FERRAMENTAS & EQUIPAMENTOS
  {
    id: "a1b2c3d0-8001-0000-0000-000000000001",
    name: "Ferramentas Manuais",
    slug: "ferramentas-manuais",
    parent_id: "a1b2c3d0-0008-0000-0000-000000000008",
    description: "Chaves, alicates, martelos e ferramentas manuais",
    icon: "hammer",
    image: "/img/categories/ferramentas-manuais.jpg",
    is_active: true,
    sort_order: 1,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-8002-0000-0000-000000000002",
    name: "Ferramentas Elétricas",
    slug: "ferramentas-eletricas",
    parent_id: "a1b2c3d0-0008-0000-0000-000000000008",
    description: "Furadeiras, parafusadeiras e ferramentas elétricas",
    icon: "drill",
    image: "/img/categories/ferramentas-eletricas.jpg",
    is_active: true,
    sort_order: 2,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-8003-0000-0000-000000000003",
    name: "Segurança & EPI",
    slug: "seguranca-epi",
    parent_id: "a1b2c3d0-0008-0000-0000-000000000008",
    description: "Equipamentos de proteção individual e segurança",
    icon: "safety",
    image: "/img/categories/epi.jpg",
    is_active: true,
    sort_order: 3,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
  },
  {
    id: "a1b2c3d0-8004-0000-0000-000000000004",
    name: "Medição & Precisão",
    slug: "medicao-precisao",
    parent_id: "a1b2c3d0-0008-0000-0000-000000000008",
    description: "Trenas, níveis, esquadros e instrumentos de medição",
    icon: "ruler",
    image: "/img/categories/medicao.jpg",
    is_active: true,
    sort_order: 4,
    created_at: new Date("2024-02-01T08:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z")
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