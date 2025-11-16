/**
 * Utils: Checkout Storage
 * Responsabilidade única: Gerenciar persistência dos dados do checkout no localStorage
 */

import { CheckoutStorageData, CheckoutData, OrderSummary } from '../types';

const CHECKOUT_STORAGE_KEY = 'ideal_commerce_checkout_data';

// Salvar dados do checkout no localStorage
export const saveCheckoutData = (checkoutData: CheckoutData, orderSummary: OrderSummary): void => {
  try {
    const storageData: CheckoutStorageData = {
      checkoutData,
      orderSummary,
      lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify(storageData));
  } catch (error) {
    console.error('Erro ao salvar dados do checkout:', error);
  }
};

// Recuperar dados do checkout do localStorage
export const getCheckoutData = (): CheckoutStorageData | null => {
  try {
    const stored = localStorage.getItem(CHECKOUT_STORAGE_KEY);
    if (!stored) return null;
    
    return JSON.parse(stored) as CheckoutStorageData;
  } catch (error) {
    console.error('Erro ao recuperar dados do checkout:', error);
    return null;
  }
};

// Limpar dados do checkout do localStorage
export const clearCheckoutData = (): void => {
  try {
    localStorage.removeItem(CHECKOUT_STORAGE_KEY);
  } catch (error) {
    console.error('Erro ao limpar dados do checkout:', error);
  }
};

// Verificar se existem dados salvos
export const hasCheckoutData = (): boolean => {
  try {
    return localStorage.getItem(CHECKOUT_STORAGE_KEY) !== null;
  } catch (error) {
    return false;
  }
};