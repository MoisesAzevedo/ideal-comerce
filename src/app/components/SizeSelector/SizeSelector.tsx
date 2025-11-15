/**
 * Component: SizeSelector
 * Responsabilidade única: Seletor de tamanhos do produto
 */

'use client';

import { useState } from 'react';
import { SizeOption } from '../../../../db/types';
import styles from './SizeSelector.module.scss';

interface SizeSelectorProps {
  sizes: SizeOption[];
  selectedSize?: string;
  onSizeChange?: (sizeId: string) => void;
  className?: string;
}

export function SizeSelector({ 
  sizes, 
  selectedSize, 
  onSizeChange,
  className = '' 
}: SizeSelectorProps) {
  const [selected, setSelected] = useState<string>(selectedSize || '');

  const handleSizeClick = (sizeValue: string, available: boolean) => {
    if (!available) return;
    
    setSelected(sizeValue);
    onSizeChange?.(sizeValue);
  };

  return (
    <div data-name="size-selector-container" className={`${styles.container} ${className}`}>
      <div className={styles.labelRow}>
        <label data-name="size-selector-label" className={styles.label}>
          Tamanho:
        </label>
        {selected && (
          <span data-name="selected-size" className={styles.selectedInline}>
            {sizes.find(s => s.value === selected)?.label}
          </span>
        )}
      </div>
      
      <div data-name="size-options" className={styles.optionsGrid}>
        {sizes.map((size) => (
          <button
            key={size.value}
            data-name={`size-option-${size.value}`}
            className={`${styles.option} ${
              selected === size.value ? styles.selected : ''
            } ${
              !size.available ? styles.unavailable : ''
            }`}
            onClick={() => handleSizeClick(size.value, size.available)}
            disabled={!size.available}
            type="button"
          >
            {size.label}
          </button>
        ))}
      </div>
    </div>
  );
}