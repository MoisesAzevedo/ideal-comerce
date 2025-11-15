/**
 * Types: ShippingCalculator
 * Responsabilidade única: Definir tipos e interfaces para cálculo de frete
 */

export interface ShippingOption {
  id: string;
  name: string;
  price: number;
  deliveryTime: string;
  description?: string;
}

export interface ShippingCalculatorProps {
  className?: string;
  onShippingCalculated?: (options: ShippingOption[]) => void;
  placeholder?: string;
  disabled?: boolean;
}

export interface ShippingCalculatorState {
  zipCode: string;
  isLoading: boolean;
  options: ShippingOption[];
  error: string | null;
  isCalculated: boolean;
}

export type ShippingCalculatorAction =
  | { type: 'SET_ZIP_CODE'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_OPTIONS'; payload: ShippingOption[] }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'RESET' };