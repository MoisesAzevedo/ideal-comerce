'use client';

import Filters from './Filters';
import { FilterToggleButton, FilterSidebar } from './components';
import { useFilterSidebar } from './hooks';
import styles from './ResponsiveFilters.module.scss';

interface ResponsiveFiltersProps {
  className?: string;
}

/**
 * Wrapper responsivo para filtros que gerencia a exibição em desktop e mobile
 * No longer requires filter state props - uses centralized context
 */
const ResponsiveFilters = ({ 
  className = '' 
}: ResponsiveFiltersProps) => {
  const { isOpen, openSidebar, closeSidebar } = useFilterSidebar();

  return (
    <>
      {/* Botão para abrir filtros (apenas mobile) */}
      <div className={styles.toggleButtonContainer}>
        <FilterToggleButton onClick={openSidebar} />
      </div>

      {/* Filtros em desktop */}
      <div className={`${styles.desktopFilters} ${className}`}>
        <Filters />
      </div>

      {/* Sidebar para mobile */}
      <FilterSidebar isOpen={isOpen} onClose={closeSidebar}>
        <Filters className={styles.mobileFilters} />
      </FilterSidebar>
    </>
  );
};

export default ResponsiveFilters;