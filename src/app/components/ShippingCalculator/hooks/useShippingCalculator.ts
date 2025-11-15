/**
 * Hook: useShippingCalculator
 * Responsabilidade única: Gerenciar estado e lógica do cálculo de frete
 */

'use client';

import { useReducer, useCallback } from 'react';
import { ShippingCalculatorState, ShippingCalculatorAction } from '../types';
import { ShippingCalculatorService } from '../services';
import { ZipCodeValidator } from '../utils';

const initialState: ShippingCalculatorState = {
  zipCode: '',
  isLoading: false,
  options: [],
  error: null,
  isCalculated: false,
};

function shippingCalculatorReducer(
  state: ShippingCalculatorState,
  action: ShippingCalculatorAction
): ShippingCalculatorState {
  switch (action.type) {
    case 'SET_ZIP_CODE':
      return {
        ...state,
        zipCode: action.payload,
        error: null,
        isCalculated: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_OPTIONS':
      return {
        ...state,
        options: action.payload,
        isLoading: false,
        error: null,
        isCalculated: true,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        options: [],
        isCalculated: false,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function useShippingCalculator() {
  const [state, dispatch] = useReducer(shippingCalculatorReducer, initialState);

  const setZipCode = useCallback((value: string) => {
    const maskedValue = ZipCodeValidator.applyMask(value);
    dispatch({ type: 'SET_ZIP_CODE', payload: maskedValue });
  }, []);

  const calculateShipping = useCallback(async () => {
    if (!ZipCodeValidator.isValid(state.zipCode)) {
      dispatch({ type: 'SET_ERROR', payload: 'CEP inválido. Use o formato 00000-000.' });
      return;
    }

    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      const options = await ShippingCalculatorService.calculateShipping(state.zipCode);
      dispatch({ type: 'SET_OPTIONS', payload: options });
    } catch (error) {
      dispatch({ 
        type: 'SET_ERROR', 
        payload: 'Erro ao calcular frete. Tente novamente.' 
      });
    }
  }, [state.zipCode]);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  return {
    ...state,
    setZipCode,
    calculateShipping,
    reset,
    isValidZipCode: ZipCodeValidator.isValid(state.zipCode),
  };
}