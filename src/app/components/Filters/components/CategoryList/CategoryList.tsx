'use client';

import type { CategoryListProps } from '../../types';
import styles from './CategoryList.module.scss';

/**
 * Category list component for dropdown
 * Responsibility: Display categories in a 2-column grid with checkboxes
 */
const CategoryList = ({ categories, selectedCategories, onCategoriesChange }: CategoryListProps) => {
  const handleCategoryToggle = (categoryId: string) => {
    const isSelected = selectedCategories.includes(categoryId);
    
    if (isSelected) {
      onCategoriesChange(selectedCategories.filter(id => id !== categoryId));
    } else {
      onCategoriesChange([...selectedCategories, categoryId]);
    }
  };

  return (
    <div className={styles.categoryList} data-name="category-list">
      <div className={styles.categoryGrid} data-name="category-grid">
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category.id);
          
          return (
            <label
              key={category.id}
              className={`${styles.categoryItem} ${isSelected ? styles.selected : ''}`}
              data-name="category-item"
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleCategoryToggle(category.id)}
                className={styles.checkbox}
                data-name="category-checkbox"
              />
              <span className={styles.categoryName} data-name="category-name">
                {category.name}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;