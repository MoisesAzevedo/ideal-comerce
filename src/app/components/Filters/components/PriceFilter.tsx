'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Search } from 'lucide-react';
import { useFilters } from '../hooks';
import styles from '../Filters.module.scss';
import type { PriceFilterProps } from '../types';

export function PriceFilter({ className = '' }: PriceFilterProps) {
  const { filterState, updatePriceRange } = useFilters();
  const [minValue, setMinValue] = useState<string>('');
  const [maxValue, setMaxValue] = useState<string>('');
  const [isApplying, setIsApplying] = useState<boolean>(false);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Função para verificar se uma faixa está selecionada
  const isPriceRangeSelected = (min?: number, max?: number) => {
    if (!filterState.priceRange) return false;
    
    const currentMin = filterState.priceRange.min;
    const currentMax = filterState.priceRange.max;
    
    return currentMin === min && currentMax === max;
  };

  // Função para toggle de faixas predefinidas
  const handlePriceRangeToggle = (min?: number, max?: number) => {
    console.log('🔍 PriceFilter: Toggling range:', { min, max });
    
    if (isPriceRangeSelected(min, max)) {
      // Se já está selecionado, limpa
      updatePriceRange(undefined);
      console.log('✅ PriceFilter: Range cleared');
    } else {
      // Se não está selecionado, aplica
      updatePriceRange({ min, max });
      console.log('✅ PriceFilter: Range applied:', { min, max });
    }
  };

  // Sincronizar valores locais com o estado global
  useEffect(() => {
    if (filterState.priceRange) {
      setMinValue(filterState.priceRange.min?.toString() || '');
      setMaxValue(filterState.priceRange.max?.toString() || '');
    } else {
      setMinValue('');
      setMaxValue('');
    }
  }, [filterState.priceRange]);

  const handleApplyFilter = useCallback(() => {
    // Previne múltiplas aplicações simultâneas
    if (isApplying) {
      console.log('🚫 PriceFilter: Aplicação já em andamento, ignorando...');
      return;
    }

    // Limpa timeout anterior se existir
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Debounce de 300ms para evitar múltiplas chamadas
    debounceTimeoutRef.current = setTimeout(() => {
      try {
        setIsApplying(true);
        const min = minValue ? parseFloat(minValue.replace(',', '.')) : undefined;
        const max = maxValue ? parseFloat(maxValue.replace(',', '.')) : undefined;

        console.log('🔍 PriceFilter: Applying filter:', { min, max, minValue, maxValue });

        // Validar valores
        if (min !== undefined && min < 0) {
          console.log('🚫 PriceFilter: Valor mínimo inválido');
          return;
        }
        if (max !== undefined && max < 0) {
          console.log('🚫 PriceFilter: Valor máximo inválido');
          return;
        }
        if (min !== undefined && max !== undefined && min > max) {
          console.log('🚫 PriceFilter: Valor mínimo maior que máximo');
          return;
        }

        updatePriceRange({ min, max });
        console.log('✅ PriceFilter: Filter applied successfully');
      } catch (error) {
        console.error('❌ PriceFilter: Error in handleApplyFilter:', error);
      } finally {
        // Reset flag após um pequeno delay para prevenir cliques muito rápidos
        setTimeout(() => setIsApplying(false), 500);
      }
    }, 300);
  }, [isApplying, minValue, maxValue, updatePriceRange]);

  const formatCurrency = (value: string) => {
    // Remove caracteres não numéricos exceto vírgula e ponto
    const cleanValue = value.replace(/[^\d.,]/g, '');
    
    // Converter para número e formatar
    const numericValue = parseFloat(cleanValue.replace(',', '.'));
    if (isNaN(numericValue)) return '';
    
    return numericValue.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Permitir apenas números, vírgula e ponto
    if (/^[\d.,]*$/.test(value)) {
      setMinValue(value);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Permitir apenas números, vírgula e ponto
    if (/^[\d.,]*$/.test(value)) {
      setMaxValue(value);
    }
  };

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    // Previne Enter se já está aplicando filtro
    if (e.key === 'Enter' && !isApplying) {
      e.preventDefault(); // Previne submit duplo do form
      handleApplyFilter();
    }
  }, [isApplying, handleApplyFilter]);

  // Cleanup do timeout ao desmontar componente
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`${styles.filterSection} ${className}`} data-name="price-filter">
      <div className={styles.filterLabel} data-name="price-filter-label">
        <h3>Preço</h3>
      </div>
      
      {/* Faixas de preço predefinidas */}
      <div className={styles.priceRanges} data-name="price-ranges">
        <button
          className={`${styles.priceRangeButton} ${
            isPriceRangeSelected(0, 100) ? styles.selected : ''
          }`}
          onClick={() => handlePriceRangeToggle(0, 100)}
          type="button"
          data-name="price-range-0-100"
        >
          Até R$ 100,00 (876)
        </button>
        <button
          className={`${styles.priceRangeButton} ${
            isPriceRangeSelected(100, 200) ? styles.selected : ''
          }`}
          onClick={() => handlePriceRangeToggle(100, 200)}
          type="button"
          data-name="price-range-100-200"
        >
          Até R$ 200,00 (1.205)
        </button>
        <button
          className={`${styles.priceRangeButton} ${
            isPriceRangeSelected(200, 999999) ? styles.selected : ''
          }`}
          onClick={() => handlePriceRangeToggle(200, 999999)}
          type="button"
          data-name="price-range-200-plus"
        >
          Mais de R$ 200,00 (5.523)
        </button>
      </div>

      {/* Inputs personalizados */}
      <div className={styles.priceInputs} data-name="price-inputs">
        <div className={styles.priceInputGroup}>
          <label htmlFor="price-min">Mínimo</label>
          <input
            id="price-min"
            type="text"
            value={minValue}
            onChange={handleMinChange}
            onKeyPress={handleKeyPress}
            placeholder="0,00"
            className={styles.priceInput}
            data-name="price-min-input"
          />
        </div>
        
        <span className={styles.priceSeparator}>—</span>
        
        <div className={styles.priceInputGroup}>
          <label htmlFor="price-max">Máximo</label>
          <div className={styles.priceInputWithButton}>
            <input
              id="price-max"
              type="text"
              value={maxValue}
              onChange={handleMaxChange}
              onKeyPress={handleKeyPress}
              placeholder="1.000,00"
              className={styles.priceInput}
              data-name="price-max-input"
            />
            <button
              type="button"
              onClick={handleApplyFilter}
              className={styles.priceApplyButton}
              data-name="price-apply-button"
              title="Aplicar filtro de preço"
              disabled={isApplying}
            >
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}