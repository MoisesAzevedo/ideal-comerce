/**
 * Component: SizeSelector
 * Responsabilidade única: Seletor de tamanhos global reutilizável
 */

'use client';

import { useState } from 'react';
import styles from './SizeSelector.module.scss';

interface SizeOption {
  value: string;
  label: string;
  available: boolean;
}

interface SizeSelectorProps {
  sizes: SizeOption[];
  selectedSize?: string;
  onSizeSelect: (size: string) => void;
  disabled?: boolean;
}

export function SizeSelector({ 
  sizes, 
  selectedSize, 
  onSizeSelect, 
  disabled = false 
}: SizeSelectorProps) {
  return (
    <div data-name="size-selector" className={styles.container}>
      <label className={styles.label}>Tamanho:</label>
      <div className={styles.sizeGrid}>
        {sizes.map((size) => (
          <button
            key={size.value}
            type="button"
            data-name={`size-option-${size.value}`}
            className={`
              ${styles.sizeButton}
              ${selectedSize === size.value ? styles.selected : ''}
              ${!size.available || disabled ? styles.disabled : ''}
            `}
            onClick={() => size.available && !disabled && onSizeSelect(size.value)}
            disabled={!size.available || disabled}
            aria-label={`Tamanho ${size.label} ${!size.available ? '- Indisponível' : ''}`}
          >
            {size.label}
          </button>
        ))}
      </div>
      {selectedSize && (
        <div className={styles.selectedInfo}>
          Tamanho selecionado: <strong>{sizes.find(s => s.value === selectedSize)?.label}</strong>
        </div>
      )}
    </div>
  );
}