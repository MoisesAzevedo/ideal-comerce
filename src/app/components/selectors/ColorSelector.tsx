/**
 * Component: ColorSelector
 * Responsabilidade única: Seletor de cores global reutilizável
 */

'use client';

import styles from './ColorSelector.module.scss';

interface ColorOption {
  value: string;
  label: string;
  hex: string;
  available: boolean;
}

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColor?: string;
  onColorSelect: (color: string) => void;
  disabled?: boolean;
}

export function ColorSelector({ 
  colors, 
  selectedColor, 
  onColorSelect, 
  disabled = false 
}: ColorSelectorProps) {
  return (
    <div data-name="color-selector" className={styles.container}>
      <label className={styles.label}>Cor:</label>
      <div className={styles.colorGrid}>
        {colors.map((color) => (
          <button
            key={color.value}
            type="button"
            data-name={`color-option-${color.value}`}
            className={`
              ${styles.colorButton}
              ${selectedColor === color.value ? styles.selected : ''}
              ${!color.available || disabled ? styles.disabled : ''}
            `}
            onClick={() => color.available && !disabled && onColorSelect(color.value)}
            disabled={!color.available || disabled}
            aria-label={`Cor ${color.label} ${!color.available ? '- Indisponível' : ''}`}
            title={color.label}
          >
            <div 
              className={styles.colorSwatch}
              style={{ backgroundColor: color.hex }}
            />
            <span className={styles.colorName}>{color.label}</span>
          </button>
        ))}
      </div>
      {selectedColor && (
        <div className={styles.selectedInfo}>
          Cor selecionada: <strong>{colors.find(c => c.value === selectedColor)?.label}</strong>
        </div>
      )}
    </div>
  );
}