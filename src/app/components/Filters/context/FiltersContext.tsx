'use client';

import React, { createContext, useContext, useCallback, useEffect, useState } from 'react';
import type { FilterState } from '../types';

/**
 * Interface para o contexto de filtros
 * Responsabilidade: Definir a estrutura de dados e funções do contexto
 */
interface FiltersContextType {
  // Estado atual dos filtros
  filterState: FilterState;
  
  // Funções para atualizar filtros específicos
  updateCategories: (categories: string[]) => void;
  updateSizes: (sizes: string[]) => void;
  
  // Função para atualizar todo o estado dos filtros
  updateFilterState: (filterState: FilterState) => void;
  
  // Funções utilitárias
  clearFilters: () => void;
  clearCategories: () => void;
  clearSizes: () => void;
  
  // Estado de loading e funções de cache
  isLoading: boolean;
  saveToBrowserCache: () => void;
  loadFromBrowserCache: () => void;
}

/**
 * Contexto para gerenciamento centralizado de filtros
 */
const FiltersContext = createContext<FiltersContextType | null>(null);

/**
 * Chave para armazenamento no localStorage
 */
const FILTERS_CACHE_KEY = 'ideal-comerce-filters';

/**
 * Estado inicial padrão dos filtros
 */
const INITIAL_FILTER_STATE: FilterState = {
  categories: [],
  sizes: [],
};

/**
 * Provider do contexto de filtros
 * Responsabilidade: Gerenciar estado centralizado dos filtros com persistência
 */
export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filterState, setFilterState] = useState<FilterState>(INITIAL_FILTER_STATE);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Carrega filtros do cache do navegador
   */
  const loadFromBrowserCache = useCallback(() => {
    try {
      if (typeof window !== 'undefined') {
        const cached = localStorage.getItem(FILTERS_CACHE_KEY);
        if (cached) {
          const parsedFilters = JSON.parse(cached) as FilterState;
          setFilterState(parsedFilters);
          
          if (process.env.NODE_ENV === 'development') {
            console.log('🔄 Filtros carregados do cache:', parsedFilters);
          }
        }
      }
    } catch (error) {
      console.warn('⚠️ Erro ao carregar filtros do cache:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Salva filtros no cache do navegador
   */
  const saveToBrowserCache = useCallback(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(FILTERS_CACHE_KEY, JSON.stringify(filterState));
        
        if (process.env.NODE_ENV === 'development') {
          console.log('💾 Filtros salvos no cache:', filterState);
        }
      }
    } catch (error) {
      console.warn('⚠️ Erro ao salvar filtros no cache:', error);
    }
  }, [filterState]);

  /**
   * Atualiza categorias selecionadas
   */
  const updateCategories = useCallback((categories: string[]) => {
    setFilterState(prev => ({
      ...prev,
      categories,
    }));
  }, []);

  const updateSizes = useCallback((sizes: string[]) => {
    try {
      setFilterState(prev => ({
        ...prev,
        sizes,
      }));
    } catch (error) {
      console.error('❌ FiltersContext.updateSizes: Error updating sizes:', error);
    }
  }, []);

  /**
   * Atualiza todo o estado dos filtros
   */
  const updateFilterState = useCallback((newFilterState: FilterState) => {
    setFilterState(newFilterState);
  }, []);

  /**
   * Limpa todos os filtros
   */
  const clearFilters = useCallback(() => {
    setFilterState(INITIAL_FILTER_STATE);
  }, []);

  /**
   * Limpa apenas categorias
   */
  const clearCategories = useCallback(() => {
    setFilterState(prev => ({
      ...prev,
      categories: [],
    }));
  }, []);

  /**
   * Limpa apenas tamanhos
   */
  const clearSizes = useCallback(() => {
    setFilterState(prev => ({
      ...prev,
      sizes: [],
    }));
  }, []);

  /**
   * Carrega filtros do cache na inicialização
   */
  useEffect(() => {
    loadFromBrowserCache();
  }, [loadFromBrowserCache]);

  /**
   * Salva filtros no cache sempre que o estado muda
   */
  useEffect(() => {
    if (!isLoading) {
      saveToBrowserCache();
    }
  }, [filterState, isLoading, saveToBrowserCache]);

  const contextValue: FiltersContextType = {
    filterState,
    updateCategories,
    updateSizes,
    updateFilterState,
    clearFilters,
    clearCategories,
    clearSizes,
    isLoading,
    saveToBrowserCache,
    loadFromBrowserCache,
  };

  return (
    <FiltersContext.Provider value={contextValue}>
      {children}
    </FiltersContext.Provider>
  );
};

/**
 * Hook para usar o contexto de filtros
 * Responsabilidade: Fornecer acesso tipo-seguro ao contexto
 */
export const useFiltersContext = (): FiltersContextType => {
  const context = useContext(FiltersContext);
  
  if (!context) {
    throw new Error('useFiltersContext deve ser usado dentro de um FiltersProvider');
  }
  
  return context;
};