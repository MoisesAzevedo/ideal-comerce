// Centralized type definitions for the mock database
// Responsibility: Define all data types used across the application

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number | null;
  installmentCount: number;
  installmentValue: number;
  percentual_discount?: number | null;
  images: string[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

export interface CartItem {
  id: number;
  productId: number;
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