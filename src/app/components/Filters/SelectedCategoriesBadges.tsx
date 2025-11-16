'use client';

import { CategoryBadge } from './components';
import { useFilters, useCategories } from './hooks';
import styles from './SelectedCategoriesBadges.module.scss';

interface SelectedCategoriesBadgesProps {
  className?: string;
}

/**
 * Component to display selected categories as badges
 * Responsibility: Display and manage selected category badges using centralized context
 */
const SelectedCategoriesBadges = ({
  className = ''
}: SelectedCategoriesBadgesProps) => {
  const { filterState, removeCategory } = useFilters();
  const { categories } = useCategories();

  if (filterState.categories.length === 0) {
    return null;
  }

  const selectedCategoryObjects = categories.filter(category =>
    filterState.categories.includes(category.id)
  );

  return (
    <div className={`${styles.badgesContainer} ${className}`} data-name="selected-categories-badges">
      <div className={styles.badgesList} data-name="badges-list">
        {selectedCategoryObjects.map((category) => (
          <CategoryBadge
            key={category.id}
            category={category}
            onRemove={removeCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedCategoriesBadges;