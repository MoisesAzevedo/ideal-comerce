'use client';

import { useState, useCallback, useEffect } from 'react';

/**
 * Hook para gerenciar o estado da sidebar de filtros em dispositivos móveis
 */
export const useFilterSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // Fechar sidebar com tecla Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeSidebar();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeSidebar]);

  // Prevenir scroll do body quando sidebar estiver aberta
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return {
    isOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };
};