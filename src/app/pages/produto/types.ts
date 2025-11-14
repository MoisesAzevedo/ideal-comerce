/**
 * Tipos específicos da página de produto
 * Responsabilidade única: Definir interfaces para dados e estado da página produto
 */

import type { Product } from '../../../../db/types';

// Estado do produto na página
export interface ProductPageState {
  product: Product | null;
  loading: boolean;
  error: string | null;
  selectedImageIndex: number;
  quantity: number;
}

// Props para componentes de produto
export interface ProductDetailsProps {
  product: Product;
  onPurchase?: (productId: number, quantity: number) => void;
  onQuantityChange?: (quantity: number) => { isValid: boolean; message?: string };
  quantity?: number;
}

export interface ProductCarouselProps {
  images: string[];
  productName: string;
  onImageSelect: (index: number) => void;
  selectedIndex: number;
}

// Parâmetros da página
export interface ProductPageParams {
  id: string;
}

// Resposta da API de produto
export interface ProductApiResponse {
  product: Product | null;
  success: boolean;
  message?: string;
}

// Estado do carrossel
export interface CarouselState {
  selectedIndex: number;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

// Ações de compra
export interface PurchaseAction {
  productId: number;
  quantity: number;
  timestamp: Date;
}

// Configurações do carrossel
export interface CarouselOptions {
  loop: boolean;
  align: 'start' | 'center' | 'end';
  containScroll: 'trimSnaps' | 'keepSnaps' | false;
}