/**
 * Component: ColorSelector
 * Responsabilidade única: Seletor de cores do produto
 */

'use client';

import { useState } from 'react';
import { ColorOption } from '../../../db/types';
import styles from './ColorSelector.module.scss';

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColor?: string;
  onColorChange?: (colorId: string) => void;
  className?: string;
}

export function ColorSelector({ 
  colors, 
  selectedColor, 
  onColorChange,
  className = '' 
}: ColorSelectorProps) {
  const [selected, setSelected] = useState<string>(selectedColor || '');

  const handleColorClick = (colorValue: string, available: boolean) => {
    if (!available) return;
    
    setSelected(colorValue);
    onColorChange?.(colorValue);
  };

  return (
    <div data-name="color-selector-container" className={`${styles.container} ${className}`}>
      <div className={styles.labelRow}>
        <label data-name="color-selector-label" className={styles.label}>
          Cor:
        </label>
        {selected && (
          <span data-name="selected-color" className={styles.selectedInline}>
            {colors.find(c => c.value === selected)?.label}
          </span>
        )}
      </div>
      
      <div data-name="color-options" className={styles.optionsGrid}>
        {colors.map((color) => (
          <button
            key={color.value}
            data-name={`color-option-${color.value}`}
            className={`${styles.option} ${
              selected === color.value ? styles.selected : ''
            } ${
              !color.available ? styles.unavailable : ''
            }`}
            onClick={() => handleColorClick(color.value, color.available)}
            disabled={!color.available}
            type="button"
            title={color.label}
            style={{
              '--color-value': color.hex
            } as React.CSSProperties}
          >
            <span className={styles.colorSwatch} />
          </button>
        ))}
      </div>
    </div>
  );
}