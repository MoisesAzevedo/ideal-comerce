/**
 * Page: Checkout
 * Responsabilidade única: Página principal do processo de checkout
 */

"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SharedPageLayout from '../layouts/SharedPageLayout';
import { Breadcrumb, useBreadcrumb } from '../components';
import { useCart } from '../Carrinho/cart';
import { useOrderSummary } from './hooks/useOrderSummary';
import { useCheckoutData } from './hooks/useCheckoutData';
import {
  DeliveryAddressForm,
  PaymentMethodSelector,
  OrderSummary,
  CheckoutStepper,
} from './components';
import { CheckoutStep } from './types';

export default function CheckoutPage() {
  const router = useRouter();
  const { cartIds, clearCart } = useCart();
  const { orderSummary, hasItems } = useOrderSummary();
  const {
    checkoutData,
    validation,
    updateDeliveryAddress,
    updatePaymentMethod,
    updateObservations,
    updateOrderSummary,
    resetCheckout,
  } = useCheckoutData();

  const [currentStep, setCurrentStep] = useState<CheckoutStep>('delivery');
  const [completedSteps, setCompletedSteps] = useState<CheckoutStep[]>([]);
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);

  const breadcrumbItems = useBreadcrumb();

  // Redirecionar se não há itens no carrinho
  useEffect(() => {
    if (!hasItems) {
      router.push('/Carrinho');
    }
  }, [hasItems, router]);

  // Atualizar resumo do pedido quando carrinho mudar
  useEffect(() => {
    if (hasItems) {
      updateOrderSummary(orderSummary);
    }
  }, [orderSummary, updateOrderSummary, hasItems]);

  // Gerenciar progresso dos passos
  useEffect(() => {
    const newCompletedSteps: CheckoutStep[] = [];

    if (validation.deliveryAddress) {
      newCompletedSteps.push('delivery');
    }

    if (validation.paymentMethod && validation.deliveryAddress) {
      newCompletedSteps.push('payment');
    }

    setCompletedSteps(newCompletedSteps);

    // Auto-avançar para próximo passo
    if (currentStep === 'delivery' && validation.deliveryAddress) {
      setCurrentStep('payment');
    }
  }, [validation, currentStep]);

  // Processar pedido
  const handleOrderSubmit = async () => {
    if (!validation.isValid) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsProcessingOrder(true);

    try {
      // Simular processamento do pedido
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Em um cenário real, aqui seria feita a chamada para API
      console.log('Pedido processado:', {
        checkoutData,
        orderSummary,
      });

      // Limpar carrinho e dados do checkout
      clearCart();
      resetCheckout();

      // Navegar para página de sucesso
      setCurrentStep('success');
      setCompletedSteps(['delivery', 'payment', 'review', 'success']);
    } catch (error) {
      console.error('Erro ao processar pedido:', error);
      alert('Erro ao processar pedido. Tente novamente.');
    } finally {
      setIsProcessingOrder(false);
    }
  };

  // Navegar entre passos
  const goToStep = (step: CheckoutStep) => {
    // Só permite navegar para passos anteriores ou se o atual estiver completo
    if (step === 'delivery') {
      setCurrentStep(step);
    } else if (step === 'payment' && validation.deliveryAddress) {
      setCurrentStep(step);
    } else if (step === 'review' && validation.isValid) {
      setCurrentStep(step);
    }
  };

  const breadcrumbComponent = (
    <Breadcrumb items={breadcrumbItems} className="max-w-container mx-auto" />
  );

  if (!hasItems) {
    return null; // Componente será redirecionado
  }

  // Página de sucesso
  if (currentStep === 'success') {
    return (
      <SharedPageLayout showNavigation={false} breadcrumb={breadcrumbComponent}>
        <div className="min-h-screen bg-gray-50">
          <div className="container mx-auto py-8 px-4 phone:px-6">
            <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckoutStepper
                currentStep={currentStep}
                completedSteps={completedSteps}
              />
            </div>

            <div className="bg-green-50 rounded-lg shadow-sm p-8 mb-6">
              <div className="text-6xl mb-4">🎉</div>
              <h1 className="text-2xl font-bold text-green-800 mb-2">
                Pedido Realizado com Sucesso!
              </h1>
              <p className="text-green-700">
                Seu pedido foi processado e você receberá um e-mail de confirmação em breve.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => router.push('/')}
                className="w-full px-6 py-3 bg-[var(--color-primary-green)] text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Continuar Comprando
              </button>
              
              <button
                onClick={() => router.push('/pedidos')}
                className="w-full px-6 py-3 bg-white shadow-sm border border-[var(--color-primary-green)] text-[var(--color-primary-green)] rounded-lg hover:bg-green-50 transition-colors"
              >
                Meus Pedidos
              </button>
            </div>
            </div>
          </div>
        </div>
      </SharedPageLayout>
    );
  }

  return (
    <SharedPageLayout showNavigation={false} breadcrumb={breadcrumbComponent}>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto py-8 px-4 phone:px-6">
          {/* Stepper */}
        <div className="mb-8">
          <CheckoutStepper
            currentStep={currentStep}
            completedSteps={completedSteps}
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Formulários */}
          <div className="xl:col-span-2 space-y-8">
            {/* Endereço de Entrega */}
            <div
              className={`transition-opacity duration-300 ${
                currentStep === 'delivery' ? 'opacity-100' : 'opacity-60'
              }`}
            >
              <DeliveryAddressForm
                address={checkoutData.deliveryAddress}
                onAddressChange={updateDeliveryAddress}
              />
              {validation.deliveryAddress && currentStep === 'delivery' && (
                <button
                  onClick={() => setCurrentStep('payment')}
                  className="mt-4 px-6 py-2 bg-[var(--color-primary-green)] text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Continuar para Pagamento
                </button>
              )}
            </div>

            {/* Método de Pagamento */}
            {(currentStep === 'payment' || validation.deliveryAddress) && (
              <div
                className={`transition-opacity duration-300 ${
                  currentStep === 'payment' ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <PaymentMethodSelector
                  selectedMethod={checkoutData.paymentMethod}
                  selectedInstallments={checkoutData.selectedInstallments}
                  onPaymentMethodChange={updatePaymentMethod}
                  orderTotal={orderSummary.total}
                />
                {validation.isValid && currentStep === 'payment' && (
                  <button
                    onClick={() => setCurrentStep('review')}
                    className="mt-4 px-6 py-2 bg-[var(--color-primary-green)] text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Revisar Pedido
                  </button>
                )}
              </div>
            )}

            {/* Observações */}
            {(currentStep === 'review' || validation.isValid) && (
              <div
                className={`bg-white rounded-lg shadow-sm p-6 transition-opacity duration-300 ${
                  currentStep === 'review' ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <h3 className="text-lg font-semibold font-teko mb-4">
                  Observações (opcional)
                </h3>
                <textarea
                  value={checkoutData.observations || ''}
                  onChange={(e) => updateObservations(e.target.value)}
                  placeholder="Deixe aqui alguma observação sobre seu pedido..."
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-green)] focus:bg-white transition-colors"
                  rows={4}
                />
              </div>
            )}

            {/* Botões de ação */}
            <div className="flex flex-col tablet:flex-row gap-4">
              <button
                onClick={() => router.push('/Carrinho')}
                className="px-6 py-3 bg-white shadow-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Voltar ao Carrinho
              </button>

              {currentStep === 'review' && (
                <button
                  onClick={handleOrderSubmit}
                  disabled={!validation.isValid || isProcessingOrder}
                  className="flex-1 px-6 py-3 bg-[var(--color-primary-green)] text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isProcessingOrder ? (
                    <>
                      <span className="inline-block animate-spin mr-2">⏳</span>
                      Processando...
                    </>
                  ) : (
                    'Finalizar Pedido'
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Resumo do Pedido */}
          <div className="xl:col-span-1">
            <div className="sticky top-4">
              <OrderSummary
                orderSummary={orderSummary}
                showItemsList={true}
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </SharedPageLayout>
  );
}