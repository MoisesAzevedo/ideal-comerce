'use client';

import { CategoryFilter, SizeFilter, PriceFilter } from './components';
import styles from './Filters.module.scss';

interface FiltersProps {
  className?: string;
}

/**
 * Main filters component
 * Responsibility: Orchestrate all filter components using centralized state
 * No longer requires filter state or change handlers as props
 */
const Filters = ({ className = '' }: FiltersProps) => {
  return (
    <div className={`${styles.filters} ${styles.filtersContainer} ${className}`} data-name="filters-container">
      <div className={styles.filterGroup} data-name="filter-group">
        <CategoryFilter />
        <SizeFilter />
        <PriceFilter />
      </div>
    </div>
  );
};

export default Filters;