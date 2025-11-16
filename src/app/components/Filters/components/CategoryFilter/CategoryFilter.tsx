'use client';

import { useState } from 'react';
import { useCategories, useFilters } from '../../hooks';
import { Dropdown } from '../Dropdown';
import { CategoryList } from '../CategoryList';
import styles from './CategoryFilter.module.scss';

interface CategoryFilterProps {
  className?: string;
}

/**
 * Category filter component
 * Responsibility: Handle category selection with dropdown interface
 * Now uses centralized filter context instead of props
 */
const CategoryFilter = ({
  className = ''
}: CategoryFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { categories, isLoading, error } = useCategories();
  const { filterState, updateCategories } = useFilters();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoriesChange = (newCategories: string[]) => {
    updateCategories(newCategories);
  };

  const getDropdownLabel = () => {
    if (filterState.categories.length === 0) {
      return 'Todos os produtos';
    }
    
    if (filterState.categories.length === 1) {
      const selectedCategory = categories.find(cat => cat.id === filterState.categories[0]);
      return selectedCategory?.name || 'Todos os produtos';
    }
    
    return `${filterState.categories.length} categorias`;
  };

  if (error) {
    return (
      <div className={styles.error} data-name="category-filter-error">
        Erro ao carregar categorias
      </div>
    );
  }

  return (
    <div className={`${styles.categoryFilter} ${className}`} data-name="category-filter">
      <Dropdown
        isOpen={isOpen}
        onToggle={handleToggle}
        label={getDropdownLabel()}
      >
        {isLoading ? (
          <div className={styles.loading} data-name="category-filter-loading">
            Carregando categorias...
          </div>
        ) : (
          <CategoryList
            categories={categories}
            selectedCategories={filterState.categories}
            onCategoriesChange={handleCategoriesChange}
          />
        )}
      </Dropdown>
    </div>
  );
};

export default CategoryFilter;