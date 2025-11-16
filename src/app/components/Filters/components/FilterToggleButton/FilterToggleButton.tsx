'use client';

import styles from './FilterToggleButton.module.scss';

interface FilterToggleButtonProps {
  onClick: () => void;
  className?: string;
}

/**
 * Botão para abrir/fechar filtros em dispositivos móveis
 */
const FilterToggleButton = ({ onClick, className = '' }: FilterToggleButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.toggleButton} ${className}`}
      onClick={onClick}
      aria-label="Abrir filtros"
    >
      <svg 
        className={styles.icon} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" 
        />
      </svg>
      <span className={styles.text}>Filtros</span>
    </button>
  );
};

export default FilterToggleButton;