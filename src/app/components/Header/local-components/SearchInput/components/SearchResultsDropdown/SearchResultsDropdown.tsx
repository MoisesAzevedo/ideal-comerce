"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import styles from "./SearchResultsDropdown.module.scss";
import type { SearchResultsDropdownProps } from "../../types/components";
import type { SearchResult } from "../../types/search";

/**
 * Responsabilidade: Exibir resultados da pesquisa em dropdown
 * Componente reutilizável para mostrar lista de produtos encontrados
 */
export default function SearchResultsDropdown({
  results,
  isOpen,
  isLoading,
  selectedIndex,
  onSelectResult,
  onClose
}: SearchResultsDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className={styles.dropdown}
      ref={dropdownRef}
      data-name="search-results-dropdown"
    >
      {isLoading ? (
        <div className={styles.loading} data-name="search-loading">
          <span data-name="loading-text">Buscando produtos...</span>
        </div>
      ) : results.length > 0 ? (
        <div className={styles.resultsList} data-name="search-results-list">
          {results.map((result, index) => (
            <SearchResultItem
              key={result.id}
              result={result}
              isSelected={index === selectedIndex}
              onClick={() => onSelectResult(result)}
            />
          ))}
        </div>
      ) : (
        <div className={styles.noResults} data-name="search-no-results">
          <span data-name="no-results-text">Nenhum produto encontrado</span>
        </div>
      )}
    </div>
  );
}

/**
 * Responsabilidade: Renderizar um item individual do resultado
 */
interface SearchResultItemProps {
  result: SearchResult;
  isSelected: boolean;
  onClick: () => void;
}

function SearchResultItem({ result, isSelected, onClick }: SearchResultItemProps) {
  return (
    <button
      className={`${styles.resultItem} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
      data-name="search-result-item"
    >
      <div className={styles.resultImage} data-name="result-image">
        <Image
          src={result.image}
          alt={result.name}
          width={40}
          height={40}
          className={styles.productImage}
          data-name="product-image"
        />
      </div>
      
      <div className={styles.resultInfo} data-name="result-info">
        <h4 className={styles.productName} data-name="product-name">
          {result.name}
        </h4>
        <span className={styles.productPrice} data-name="product-price">
          R$ {result.price.toFixed(2).replace('.', ',')}
        </span>
      </div>
    </button>
  );
}