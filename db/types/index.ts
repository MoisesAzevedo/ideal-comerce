// Centralized type definitions for the mock database
// Responsibility: Define all data types used across the application

export interface Product {
  id: string; // UUID
  sku: string; // VARCHAR(50) UNIQUE - Código interno único
  name: string; // VARCHAR(255) - Nome do produto
  slug: string; // VARCHAR(255) UNIQUE - URL amigável
  description: string; // TEXT - Descrição completa
  brand_id?: string | null; // UUID/FK - Marca do produto
  category_id: string; // UUID/FK - Categoria principal
  cost_price: number; // DECIMAL(10,2) - Preço de custo
  sale_price: number; // DECIMAL(10,2) - Preço de venda
  discount_price?: number | null; // DECIMAL(10,2) NULL - Preço promocional
  currency: string; // VARCHAR(10) - Moeda (ex: BRL, USD)
  stock_quantity: number; // INT - Quantidade disponível
  width_cm?: number | null; // DECIMAL(10,2) - Largura
  height_cm?: number | null; // DECIMAL(10,2) - Altura
  length_cm?: number | null; // DECIMAL(10,2) - Comprimento
  images: string[]; // JSONB - Lista de URLs de imagem
  attributes?: Record<string, any> | null; // JSONB - Atributos dinâmicos (cor, tamanho, voltagem etc.)
  status: 'active' | 'inactive' | 'archived'; // ENUM - Status do produto
  created_at: Date; // TIMESTAMP - Data de criação
  updated_at: Date; // TIMESTAMP - Última atualização
  
  // Campos de compatibilidade (para não quebrar o código existente)
  category?: string;
  price?: number;
  oldPrice?: number | null;
  installmentCount?: number;
  installmentValue?: number;
  percentual_discount?: number | null;
}

export interface Category {
  id: string; // UUID
  name: string; // VARCHAR(100)
  slug: string; // VARCHAR(150) UNIQUE
  parent_id?: string | null; // UUID / NULL - para subcategorias
  description?: string | null; // TEXT - descrição opcional
  icon?: string | null; // VARCHAR(255) - ícone (URL ou nome da lib)
  image?: string | null; // VARCHAR(255) - imagem representativa
  is_active: boolean; // BOOLEAN - status
  sort_order: number; // INT - controle de ordenação
  created_at: Date; // TIMESTAMP - criação
  updated_at: Date; // TIMESTAMP - atualização
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

export interface CartItem {
  id: number;
  productId: string; // Changed to string to match Product.id
  quantity: number;
  price: number;
}

export interface Order {
  id: number;
  userId: number;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
}

// API Response types
export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}

export type ProductsResponse = PaginatedResponse<Product>;
export type CategoriesResponse = PaginatedResponse<Category>;