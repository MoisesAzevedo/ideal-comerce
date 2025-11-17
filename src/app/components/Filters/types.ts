import type { Category } from '../../../../db/types';

// Filter state types
export interface FilterState {
  categories: string[];
  sizes: string[];
  priceRange?: {
    min?: number;
    max?: number;
  };
}

export interface PriceRange {
  min?: number;
  max?: number;
}

export interface PriceFilterProps {
  className?: string;
}

export interface CategoryFilterProps {
  selectedCategories: string[];
  onCategoriesChange: (categories: string[]) => void;
  className?: string;
}

// Dropdown component props
export interface DropdownProps {
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  label: string;
}

// Category list props
export interface CategoryListProps {
  categories: Category[];
  selectedCategories: string[];
  onCategoriesChange: (categories: string[]) => void;
}

// Badge props for selected categories
export interface CategoryBadgeProps {
  category: Category;
  onRemove: (categoryId: string) => void;
}

// Main filter context type
export interface FiltersContextType {
  filterState: FilterState;
  updateCategories: (categories: string[]) => void;
  clearFilters: () => void;
}