/**
 * Hook: useCheckoutData
 * Responsabilidade única: Gerenciar estado e persistência dos dados do checkout
 */

import { useState, useEffect, useCallback } from 'react';
import { CheckoutData, OrderSummary, CheckoutValidation } from '../types';
import { saveCheckoutData, getCheckoutData, clearCheckoutData } from '../utils/storage';
import { validateCheckout } from '../utils/validation';

export const useCheckoutData = () => {
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({
    deliveryAddress: null,
    paymentMethod: null,
    selectedInstallments: 1,
    observations: '',
  });

  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    items: [],
    subtotal: 0,
    shipping: 0,
    discount: 0,
    total: 0,
    itemsCount: 0,
  });

  const [validation, setValidation] = useState<CheckoutValidation>({
    deliveryAddress: false,
    paymentMethod: false,
    isValid: false,
  });

  const [isLoading, setIsLoading] = useState(true);

  // Carregar dados salvos do localStorage na inicialização
  useEffect(() => {
    const savedData = getCheckoutData();
    if (savedData) {
      setCheckoutData(savedData.checkoutData);
      setOrderSummary(savedData.orderSummary);
    }
    setIsLoading(false);
  }, []);

  // Atualizar validação sempre que os dados mudarem
  useEffect(() => {
    const newValidation = validateCheckout(
      checkoutData.deliveryAddress,
      checkoutData.paymentMethod
    );
    setValidation(newValidation);
  }, [checkoutData.deliveryAddress, checkoutData.paymentMethod]);

  // Salvar dados no localStorage sempre que houver mudanças
  useEffect(() => {
    if (!isLoading) {
      saveCheckoutData(checkoutData, orderSummary);
    }
  }, [checkoutData, orderSummary, isLoading]);

  // Atualizar endereço de entrega
  const updateDeliveryAddress = useCallback((address: CheckoutData['deliveryAddress']) => {
    setCheckoutData(prev => ({
      ...prev,
      deliveryAddress: address,
      timestamp: new Date().toISOString(),
    }));
  }, []);

  // Atualizar método de pagamento
  const updatePaymentMethod = useCallback((
    paymentMethod: CheckoutData['paymentMethod'],
    installments?: number
  ) => {
    setCheckoutData(prev => ({
      ...prev,
      paymentMethod,
      selectedInstallments: installments || 1,
      timestamp: new Date().toISOString(),
    }));
  }, []);

  // Atualizar observações
  const updateObservations = useCallback((observations: string) => {
    setCheckoutData(prev => ({
      ...prev,
      observations,
      timestamp: new Date().toISOString(),
    }));
  }, []);

  // Atualizar resumo do pedido
  const updateOrderSummary = useCallback((summary: OrderSummary) => {
    setOrderSummary(summary);
  }, []);

  // Limpar todos os dados
  const resetCheckout = useCallback(() => {
    setCheckoutData({
      deliveryAddress: null,
      paymentMethod: null,
      selectedInstallments: 1,
      observations: '',
    });
    setOrderSummary({
      items: [],
      subtotal: 0,
      shipping: 0,
      discount: 0,
      total: 0,
      itemsCount: 0,
    });
    clearCheckoutData();
  }, []);

  return {
    checkoutData,
    orderSummary,
    validation,
    isLoading,
    updateDeliveryAddress,
    updatePaymentMethod,
    updateObservations,
    updateOrderSummary,
    resetCheckout,
  };
};