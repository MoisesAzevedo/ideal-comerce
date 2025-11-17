'use client';

import { useFiltersContext } from '../context/FiltersContext';

/**
 * Hook simplificado para acessar e manipular filtros
 * Responsabilidade: Fornecer interface simplificada para o contexto de filtros
 */
export const useFilters = () => {
  const {
    filterState,
    updateCategories,
    updateSizes,
    updatePriceRange,
    updateFilterState,
    clearFilters,
    clearCategories,
    clearSizes,
    isLoading,
  } = useFiltersContext();

  /**
   * Remove uma categoria específica dos filtros
   */
  const removeCategory = (categoryId: string) => {
    const newCategories = filterState.categories.filter(id => id !== categoryId);
    updateCategories(newCategories);
  };

  /**
   * Remove um tamanho específico dos filtros
   */
  const removeSize = (size: string) => {
    const newSizes = filterState.sizes.filter(s => s !== size);
    updateSizes(newSizes);
  };

  /**
   * Limpa filtro de preço
   */
  const clearPriceRange = () => {
    updatePriceRange(undefined);
  };

  /**
   * Adiciona uma categoria se não existir
   */
  const addCategory = (categoryId: string) => {
    if (!filterState.categories.includes(categoryId)) {
      updateCategories([...filterState.categories, categoryId]);
    }
  };

  /**
   * Adiciona um tamanho se não existir
   */
  const addSize = (size: string) => {
    if (!filterState.sizes.includes(size)) {
      updateSizes([...filterState.sizes, size]);
    }
  };

  /**
   * Alterna uma categoria (adiciona se não existir, remove se existir)
   */
  const toggleCategory = (categoryId: string) => {
    const exists = filterState.categories.includes(categoryId);
    if (exists) {
      removeCategory(categoryId);
    } else {
      addCategory(categoryId);
    }
  };

  /**
   * Alterna um tamanho (adiciona se não existir, remove se existir)
   */
  const toggleSize = (size: string) => {
    const currentSizes = filterState.sizes;
    const exists = currentSizes.includes(size);

    if (exists) {
      const newSizes = currentSizes.filter(s => s !== size);
      updateSizes(newSizes);
    } else {
      const newSizes = [...currentSizes, size];
      updateSizes(newSizes);
    }
  };

  /**
   * Verifica se há filtros ativos
   */
  const hasActiveFilters = filterState.categories.length > 0 || 
                          filterState.sizes.length > 0 || 
                          (filterState.priceRange && (filterState.priceRange.min !== undefined || filterState.priceRange.max !== undefined));

  const getCategoryFilter = () => {
    return filterState.categories.length > 0 ? filterState.categories.join(',') : undefined;
  };

  const getSizeFilter = () => {
    return filterState.sizes.length > 0 ? filterState.sizes.join(',') : undefined;
  };

  const getPriceFilter = () => {
    return filterState.priceRange;
  };

  return {
    // Estado atual
    filterState,
    isLoading,
    hasActiveFilters,
    
    // Funções de atualização
    updateCategories,
    updateSizes,
    updatePriceRange,
    updateFilterState,
    
    // Funções de limpeza
    clearFilters,
    clearCategories,
    clearSizes,
    clearPriceRange,
    
    // Funções para manipular items individuais
    addCategory,
    removeCategory,
    toggleCategory,
    addSize,
    removeSize,
    toggleSize,
    
    // Funções utilitárias para API
    getCategoryFilter,
    getSizeFilter,
    getPriceFilter,
  };
};