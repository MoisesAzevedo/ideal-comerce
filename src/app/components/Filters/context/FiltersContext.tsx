'use client';

import React, { createContext, useContext, useCallback, useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
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
  updatePriceRange: (priceRange?: { min?: number; max?: number }) => void;
  
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
  priceRange: undefined,
};

/**
 * Provider do contexto de filtros
 * Responsabilidade: Gerenciar estado centralizado dos filtros com persistência
 */
export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filterState, setFilterState] = useState<FilterState>(INITIAL_FILTER_STATE);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasInitializedFromUrl, setHasInitializedFromUrl] = useState<boolean>(false);
  const updateTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchParams = useSearchParams();

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
    }
  }, []);

  /**
   * Aplica filtros a partir dos parâmetros de URL
   */
  const applyFiltersFromUrl = useCallback(() => {
    try {
      let hasUrlFilters = false;
      const newFilterState: FilterState = { ...INITIAL_FILTER_STATE };
      
      // Ler parâmetro de categorias
      const categoriesParam = searchParams.get('categories');
      if (categoriesParam) {
        const categoryIds = categoriesParam.split(',').filter(Boolean);
        if (categoryIds.length > 0) {
          console.log('🔗 URL Params: Applying categories from URL:', categoryIds);
          newFilterState.categories = categoryIds;
          hasUrlFilters = true;
        }
      }

      // Ler parâmetro de tamanhos
      const sizesParam = searchParams.get('sizes');
      if (sizesParam) {
        const sizes = sizesParam.split(',').filter(Boolean);
        if (sizes.length > 0) {
          console.log('🔗 URL Params: Applying sizes from URL:', sizes);
          newFilterState.sizes = sizes;
          hasUrlFilters = true;
        }
      }

      // Ler parâmetros de preço
      const minPriceParam = searchParams.get('minPrice');
      const maxPriceParam = searchParams.get('maxPrice');
      if (minPriceParam || maxPriceParam) {
        const priceRange = {
          min: minPriceParam ? parseFloat(minPriceParam) : undefined,
          max: maxPriceParam ? parseFloat(maxPriceParam) : undefined,
        };
        console.log('🔗 URL Params: Applying price range from URL:', priceRange);
        newFilterState.priceRange = priceRange;
        hasUrlFilters = true;
      }
      
      if (hasUrlFilters) {
        setFilterState(newFilterState);
        console.log('✅ URL Params: Filters applied from URL:', newFilterState);
      } else if (!hasInitializedFromUrl) {
        // Se não há parâmetros na URL e ainda não inicializamos, carrega do cache
        loadFromBrowserCache();
      }
      
      setHasInitializedFromUrl(true);
    } catch (error) {
      console.error('❌ URL Params: Error applying filters from URL:', error);
      setHasInitializedFromUrl(true);
    } finally {
      setIsLoading(false);
    }
  }, [searchParams, hasInitializedFromUrl, loadFromBrowserCache]);

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
   * Atualiza a faixa de preço selecionada
   */
  const updatePriceRange = useCallback((priceRange?: { min?: number; max?: number }) => {
    try {
      console.log('🔄 FiltersContext: Updating price range:', priceRange);
      
      // Limpa timeout anterior se existir para evitar atualizações duplas
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current);
      }

      // Debounce de 100ms para prevenir atualizações muito rápidas
      updateTimeoutRef.current = setTimeout(() => {
        setFilterState(prev => {
          // Verifica se realmente há mudança para evitar re-renders desnecessários
          const hasChanged = JSON.stringify(prev.priceRange) !== JSON.stringify(priceRange);
          if (!hasChanged) {
            console.log('🔄 FiltersContext: Price range unchanged, skipping update');
            return prev;
          }

          console.log('✅ FiltersContext: Price range updated successfully');
          return {
            ...prev,
            priceRange,
          };
        });
      }, 100);
    } catch (error) {
      console.error('❌ FiltersContext.updatePriceRange: Error updating price range:', error);
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
   * Carrega filtros na inicialização - prioriza URL sobre cache
   * Recarrega sempre que a URL muda, mesmo já estando na página
   */
  useEffect(() => {
    // Reset estado para forçar reaplicação
    setHasInitializedFromUrl(false);
    setIsLoading(true);
    
    // Primeiro tenta aplicar filtros da URL
    if (searchParams.toString()) {
      console.log('🔄 URL mudou, reaplicando filtros da URL:', searchParams.toString());
      applyFiltersFromUrl();
    } else {
      // Se não há parâmetros de URL, carrega do cache
      loadFromBrowserCache();
      setIsLoading(false);
    }
  }, [searchParams.toString()]); // Usa toString() para detectar mudanças nos parâmetros

  /**
   * Salva filtros no cache sempre que o estado muda
   * Mas não salva se os filtros vieram diretamente da URL
   */
  useEffect(() => {
    if (!isLoading && hasInitializedFromUrl) {
      // Só salva no cache se não há parâmetros ativos na URL
      const hasUrlParams = searchParams.get('categories') || 
                          searchParams.get('sizes') || 
                          searchParams.get('minPrice') || 
                          searchParams.get('maxPrice');
      
      if (!hasUrlParams) {
        saveToBrowserCache();
      }
    }
  }, [filterState, isLoading, hasInitializedFromUrl, saveToBrowserCache, searchParams]);

  /**
   * Cleanup ao desmontar componente
   */
  useEffect(() => {
    return () => {
      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current);
      }
    };
  }, []);

  const contextValue: FiltersContextType = {
    filterState,
    updateCategories,
    updateSizes,
    updatePriceRange,
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