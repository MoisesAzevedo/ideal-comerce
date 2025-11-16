'use client';

import { SizeOption } from '../../../../../db/types';
import { useFilters } from '../hooks';
import styles from '../Filters.module.scss';

interface SizeFilterProps {
  className?: string;
}

export function SizeFilter({ className = '' }: SizeFilterProps) {
  const { filterState, toggleSize } = useFilters();
  
  // Tamanhos fixos conforme solicitado
  const availableSizes: SizeOption[] = [
    { value: "pp", label: "PP", available: true },
    { value: "p", label: "P", available: true },
    { value: "m", label: "M", available: true },
    { value: "g", label: "G", available: true },
    { value: "gg", label: "GG", available: true },
    { value: "xg", label: "XG", available: true }
  ];

  const handleSizeToggle = (sizeValue: string) => {
    try {
      toggleSize(sizeValue);
    } catch (error) {
      console.error('❌ SizeFilter: Error in handleSizeToggle:', error);
    }
  };

  return (
    <div className={`${styles.filterSection} ${className}`} data-name="size-filter">
      <div className={styles.filterLabel} data-name="size-filter-label">
        <h3>Tamanho</h3>
      </div>
      
      <div className={styles.sizeGrid} data-name="size-options-grid">
        {availableSizes.map((size) => (
          <button
            key={size.value}
            className={`${styles.sizeButton} ${
              filterState.sizes.includes(size.value) ? styles.selected : ''
            } ${
              !size.available ? styles.unavailable : ''
            }`}
            onClick={() => handleSizeToggle(size.value)}
            disabled={!size.available}
            type="button"
            data-name={`size-option-${size.value}`}
            title={`${filterState.sizes.includes(size.value) ? 'Remover' : 'Adicionar'} tamanho ${size.label}`}
          >
            {size.label}
          </button>
        ))}
      </div>
    </div>
  );
}