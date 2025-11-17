import type { Product } from "../../../../../../../db/types";

// Tipos específicos para o sistema de pesquisa
export interface SearchResult {
  id: string;
  name: string;
  price: number;
  image: string;
  categoryId: string;
}

export interface SearchQuery {
  term: string;
  categoryId: string;
}

export interface SearchFilters {
  categoryId?: string;
  priceRange?: {
    min: number;
    max: number;
  };
}

export interface SearchState {
  query: string;
  results: SearchResult[];
  isLoading: boolean;
  isOpen: boolean;
  selectedIndex: number;
}