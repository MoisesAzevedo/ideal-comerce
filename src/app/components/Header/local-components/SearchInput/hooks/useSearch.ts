import { useState, useCallback, useRef, useEffect } from 'react';
import type { SearchState, SearchQuery } from '../types/search';
import { ProductSearchService } from '../services/ProductSearchService';

/**
 * Responsabilidade: Gerenciar estado e lógica da pesquisa
 * Hook customizado para centralizar a funcionalidade de pesquisa
 */
export const useSearch = () => {
  const [searchState, setSearchState] = useState<SearchState>({
    query: '',
    results: [],
    isLoading: false,
    isOpen: false,
    selectedIndex: -1
  });

  const searchService = useRef(new ProductSearchService());
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  /**
   * Executa a pesquisa com debounce
   */
  const performSearch = useCallback((query: SearchQuery) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    setSearchState(prev => ({ ...prev, isLoading: true }));

    debounceTimeout.current = setTimeout(() => {
      try {
        const results = searchService.current.searchProducts(query);
        // Log temporário para debug: mostrar query e resultados
        // Remova este log em produção
        // eslint-disable-next-line no-console
        console.log('[useSearch] performSearch', { query, results });
        setSearchState(prev => ({
          ...prev,
          results,
          isLoading: false,
          isOpen: results.length > 0,
          selectedIndex: -1
        }));
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('[useSearch] performSearch error', err);
        setSearchState(prev => ({ ...prev, results: [], isLoading: false, isOpen: false }));
      }
    }, 300);
  }, []);

  /**
   * Executa a pesquisa imediatamente (sem debounce)
   */
  const searchNow = useCallback((query: SearchQuery) => {
    setSearchState(prev => ({ ...prev, isLoading: true }));
    try {
      const results = searchService.current.searchProducts(query);
      // eslint-disable-next-line no-console
      console.log('[useSearch] searchNow', { query, results });
      setSearchState(prev => ({
        ...prev,
        results,
        isLoading: false,
        isOpen: results.length > 0,
        selectedIndex: -1
      }));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('[useSearch] searchNow error', err);
      setSearchState(prev => ({ ...prev, results: [], isLoading: false, isOpen: false }));
    }
  }, []);

  /**
   * Atualiza o termo de pesquisa
   */
  const updateQuery = useCallback((query: string) => {
    setSearchState(prev => ({ ...prev, query }));
  }, []);

  /**
   * Abre/fecha o dropdown de resultados
   */
  const setIsOpen = useCallback((isOpen: boolean) => {
    setSearchState(prev => ({ ...prev, isOpen, selectedIndex: -1 }));
  }, []);

  /**
   * Navega pelos resultados com teclado
   */
  const navigateResults = useCallback((direction: 'up' | 'down') => {
    setSearchState(prev => {
      const maxIndex = prev.results.length - 1;
      let newIndex = prev.selectedIndex;

      if (direction === 'down') {
        newIndex = newIndex < maxIndex ? newIndex + 1 : 0;
      } else {
        newIndex = newIndex > 0 ? newIndex - 1 : maxIndex;
      }

      return { ...prev, selectedIndex: newIndex };
    });
  }, []);

  /**
   * Limpa os resultados da pesquisa
   */
  const clearResults = useCallback(() => {
    setSearchState(prev => ({
      ...prev,
      results: [],
      isOpen: false,
      selectedIndex: -1
    }));
  }, []);

  /**
   * Limpa o debounce na desmontagem
   */
  useEffect(() => {
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  return {
    searchState,
    performSearch,
    searchNow,
    updateQuery,
    setIsOpen,
    navigateResults,
    clearResults
  };
};