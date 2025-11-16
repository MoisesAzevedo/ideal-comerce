'use client';

import type { CategoryBadgeProps } from '../../types';
import styles from './CategoryBadge.module.scss';

/**
 * Category badge component for selected categories
 * Responsibility: Display selected category with remove functionality
 */
const CategoryBadge = ({ category, onRemove }: CategoryBadgeProps) => {
  const handleRemove = () => {
    onRemove(category.id);
  };

  return (
    <div className={styles.badge} data-name="category-badge">
      <span className={styles.name} data-name="category-badge-name">
        {category.name}
      </span>
      <button
        type="button"
        onClick={handleRemove}
        className={styles.removeButton}
        data-name="category-badge-remove"
        aria-label={`Remover filtro ${category.name}`}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-name="remove-icon"
        >
          <path
            d="M9 3L3 9M3 3L9 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default CategoryBadge;