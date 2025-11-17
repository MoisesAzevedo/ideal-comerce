"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation';
import styles from "./SearchInput.module.scss";
import { getAssetPath } from "@/utils/paths";
import { searchCategoriesWithAll as searchCategories, defaultCategory } from "./utils/searchCategories";
import { useSearch } from "./hooks/useSearch";
import { SearchResultsDropdown } from "./components/SearchResultsDropdown";
import type { SearchCategory, SearchInputProps, SearchResult } from "./types";

export default function SearchInput({ 
  onSearch, 
  onSelectProduct,
  placeholder = "Buscar produtos" 
}: SearchInputProps = {}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<SearchCategory>(defaultCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const { searchState, performSearch, searchNow, updateQuery, setIsOpen: setSearchResultsOpen, clearResults } = useSearch();

  // Fechar dropdowns ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Verifica se clicou fora do dropdown de categorias
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsDropdownOpen(false);
      }
      
      // Verifica se clicou fora da área de pesquisa
      if (searchRef.current && !searchRef.current.contains(target)) {
        setSearchResultsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setSearchResultsOpen]);

  // Executar pesquisa quando query ou categoria mudam
  useEffect(() => {
    if (searchQuery.trim()) {
      updateQuery(searchQuery);
      performSearch({
        term: searchQuery,
        categoryId: selectedCategory.id
      });
    } else {
      clearResults();
    }
  }, [searchQuery, selectedCategory.id, updateQuery, performSearch, clearResults]);

  const handleCategoryClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (category: SearchCategory) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      return;
    }

    const searchData = {
      query: searchQuery,
      categoryId: selectedCategory.id
    };

    if (onSearch) {
      onSearch(searchData);
    } else {
      // Implementação padrão de navegação
      const searchParams = new URLSearchParams({
        q: searchQuery,
        category: selectedCategory.id
      });
      console.log('Navegando para:', `/produtos?${searchParams.toString()}`);
    }

    // Executa a pesquisa imediatamente e abre o dropdown de resultados
    // use searchNow to bypass debounce for immediate submit
    if (typeof searchNow === 'function') {
      searchNow({ term: searchQuery, categoryId: selectedCategory.id });
    } else {
      performSearch({ term: searchQuery, categoryId: selectedCategory.id });
    }
    setSearchResultsOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSelectProduct = (result: SearchResult) => {
    if (onSelectProduct) {
      onSelectProduct(result.id);
    } else {
      // Navega para a página do produto no client
      try {
        router.push(`/produto/${result.id}`);
      } catch (err) {
        // Fallback simples
        window.location.href = `/produto/${result.id}`;
      }
    }

    // Limpar pesquisa e fechar dropdown
    setSearchQuery("");
    clearResults();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!searchState.isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        // navigationResults será implementado no useSearch se necessário
        break;
      case 'ArrowUp':
        e.preventDefault();
        // navigationResults será implementado no useSearch se necessário  
        break;
      case 'Enter':
        if (searchState.selectedIndex >= 0 && searchState.results[searchState.selectedIndex]) {
          e.preventDefault();
          handleSelectProduct(searchState.results[searchState.selectedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setSearchResultsOpen(false);
        break;
    }
  };

  return (
    <div className={styles.searchContainer} ref={searchRef} data-name="search-container">
      <form className={styles.searchForm} data-name="search-form" onSubmit={handleSearch}>
        {/* Botão de Submit Pesquisa */}
        <button type="submit" className={styles.searchButton} data-name="search-submit">
          <Image
            src={getAssetPath("/icons/search.svg")}
            alt="Search"
            width={25}
            height={25}
            className={styles.searchIcon}
            data-name="icon-search"
          />
        </button>

        {/* Botão Em Camisetas com Dropdown */}
        <div className={styles.categoryWrapper} ref={dropdownRef} data-name="category-wrapper">
          <button 
            type="button" 
            className={styles.categoryButton} 
            data-name="category-button"
            onClick={handleCategoryClick}
          >
            <span data-name="category-label">Em {selectedCategory.name}</span>
            <Image
              src={getAssetPath("/icons/select--arrow.svg")}
              alt="Select Arrow"
              width={9}
              height={10}
              className={`${styles.selectArrow} ${isDropdownOpen ? styles.arrowRotated : ''}`}
              data-name="icon-select-arrow"
            />
          </button>

          {/* Dropdown de Categorias */}
          {isDropdownOpen && (
            <div className={styles.dropdown} data-name="category-dropdown">
              {searchCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={styles.dropdownItem}
                  onClick={() => handleCategorySelect(category)}
                  data-name="category-option"
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input de Pesquisa */}
        <input
          type="text"
          placeholder={placeholder}
          className={styles.searchInput}
          data-name="search-input"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </form>

      {/* Dropdown de Resultados da Pesquisa */}
      <SearchResultsDropdown
        results={searchState.results}
        isOpen={searchState.isOpen}
        isLoading={searchState.isLoading}
        selectedIndex={searchState.selectedIndex}
        onSelectResult={handleSelectProduct}
        onClose={() => setSearchResultsOpen(false)}
      />
    </div>
  );
}
