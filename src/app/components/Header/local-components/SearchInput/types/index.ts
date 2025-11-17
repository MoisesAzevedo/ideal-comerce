export interface SearchCategory {
  id: string;
  name: string;
}

export interface SearchFormData {
  query: string;
  categoryId: string;
}

export interface SearchInputProps {
  onSearch?: (data: SearchFormData) => void;
  onSelectProduct?: (productId: string) => void;
  placeholder?: string;
  defaultCategory?: SearchCategory;
}

// Re-exportar tipos específicos de pesquisa
export type { SearchResult, SearchQuery, SearchFilters, SearchState } from './search';
export type { SearchResultsDropdownProps } from './components';