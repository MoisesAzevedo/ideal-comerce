/**
 * Global Selectors - Barrel exports
 * Responsabilidade: Exportar todos os seletores globais
 */

export { SizeSelector } from './SizeSelector';
export { ColorSelector } from './ColorSelector';

// Types
export interface SizeOption {
  value: string;
  label: string;
  available: boolean;
}

export interface ColorOption {
  value: string;
  label: string;
  hex: string;
  available: boolean;
}