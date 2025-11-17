export { default as SearchInput } from './SearchInput';
export { searchCategories, getCategoryById, getCategoryByName, defaultCategory } from './utils/searchCategories';
export { useSearch } from './hooks/useSearch';
export { ProductSearchService } from './services/ProductSearchService';
export { SearchResultsDropdown } from './components/SearchResultsDropdown';
export type { 
  SearchCategory, 
  SearchFormData, 
  SearchInputProps,
  SearchResult,
  SearchQuery,
  SearchFilters,
  SearchState,
  SearchResultsDropdownProps
} from './types';