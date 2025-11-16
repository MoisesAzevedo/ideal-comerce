'use client';

import { ReactNode, useEffect, useRef } from 'react';
import styles from './FilterSidebar.module.scss';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

/**
 * Sidebar para exibir filtros em dispositivos móveis
 */
const FilterSidebar = ({ isOpen, onClose, children }: FilterSidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Focar no primeiro elemento focável quando a sidebar abrir
  useEffect(() => {
    if (isOpen && sidebarRef.current) {
      const focusableElement = sidebarRef.current.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement;
      
      if (focusableElement) {
        focusableElement.focus();
      }
    }
  }, [isOpen]);

  // Manipular clique no overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Gerenciar trap de foco
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Tab' && sidebarRef.current) {
      const focusableElements = sidebarRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
        onClick={handleOverlayClick}
        aria-hidden={!isOpen}
      />
      
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}
        aria-label="Filtros"
        role="dialog"
        aria-modal="true"
        onKeyDown={handleKeyDown}
      >
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Filtros</h2>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Fechar filtros"
          >
            <svg 
              width="24" 
              height="24" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {children}
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;