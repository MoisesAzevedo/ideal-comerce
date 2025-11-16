'use client';

import type { DropdownProps } from '../../types';
import { useClickOutside } from '../../hooks';
import styles from './Dropdown.module.scss';

/**
 * Generic dropdown component
 * Responsibility: Provide reusable dropdown functionality with open/close state
 */
const Dropdown = ({ isOpen, onToggle, children, label }: DropdownProps) => {
  // Handle click outside to close dropdown
  const dropdownRef = useClickOutside(() => {
    if (isOpen) {
      onToggle();
    }
  });

  return (
    <div className={styles.dropdown} data-name="filter-dropdown" ref={dropdownRef}>
      <button
        type="button"
        onClick={onToggle}
        className={`${styles.dropdownTrigger} ${isOpen ? styles.open : ''}`}
        data-name="dropdown-trigger"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={styles.label} data-name="dropdown-label">
          {label}
        </span>
        <svg 
          className={styles.arrow} 
          data-name="dropdown-arrow"
          width="12" 
          height="8" 
          viewBox="0 0 12 8" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M1 1.5L6 6.5L11 1.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className={styles.dropdownContent} data-name="dropdown-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;