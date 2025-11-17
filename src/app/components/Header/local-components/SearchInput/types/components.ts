import type { SearchResult } from "../types/search";

/**
 * Responsabilidade: Props do componente SearchResultsDropdown
 */
export interface SearchResultsDropdownProps {
  results: SearchResult[];
  isOpen: boolean;
  isLoading: boolean;
  selectedIndex: number;
  onSelectResult: (result: SearchResult) => void;
  onClose: () => void;
}