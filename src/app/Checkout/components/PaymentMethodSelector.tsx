/**
 * Component: PaymentMethodSelector
 * Responsabilidade única: Seleção de método de pagamento e parcelas
 */

import React, { useState } from 'react';
import { PaymentMethod, PaymentInstallment } from '../types';

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethod | null;
  selectedInstallments?: number;
  onPaymentMethodChange: (method: PaymentMethod | null, installments?: number) => void;
  orderTotal: number;
  className?: string;
}

export const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  selectedMethod,
  selectedInstallments = 1,
  onPaymentMethodChange,
  orderTotal,
  className = '',
}) => {
  // Métodos de pagamento disponíveis
  const paymentMethods: PaymentMethod[] = [
    {
      id: 'credit_card',
      type: 'credit_card',
      title: 'Cartão de Crédito',
      description: 'Parcele em até 12x sem juros',
      icon: '💳',
      installments: generateInstallments(orderTotal),
    },
    {
      id: 'debit_card',
      type: 'debit_card',
      title: 'Cartão de Débito',
      description: 'À vista com desconto de 5%',
      icon: '💳',
    },
    {
      id: 'pix',
      type: 'pix',
      title: 'PIX',
      description: 'À vista com desconto de 10%',
      icon: '📱',
    },
    {
      id: 'boleto',
      type: 'boleto',
      title: 'Boleto Bancário',
      description: 'À vista com desconto de 5%',
      icon: '🧾',
    },
  ];

  const [showInstallments, setShowInstallments] = useState(false);

  // Gerar opções de parcelas
  function generateInstallments(total: number): PaymentInstallment[] {
    const installments: PaymentInstallment[] = [];
    
    for (let i = 1; i <= 12; i++) {
      const amount = total / i;
      const interestFree = i <= 10; // Até 10x sem juros
      const finalAmount = interestFree ? amount : amount * 1.0299; // 2.99% a.m. para mais de 10x
      
      installments.push({
        installments: i,
        amount: finalAmount,
        total: finalAmount * i,
        interestFree,
      });
    }
    
    return installments;
  }

  // Formatar valor monetário
  const formatCurrency = (value: number): string => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  // Calcular valor com desconto
  const getDiscountedValue = (method: PaymentMethod): number => {
    switch (method.type) {
      case 'pix':
        return orderTotal * 0.9; // 10% de desconto
      case 'debit_card':
      case 'boleto':
        return orderTotal * 0.95; // 5% de desconto
      default:
        return orderTotal;
    }
  };

  // Selecionar método de pagamento
  const handleMethodSelect = (method: PaymentMethod) => {
    if (method.type === 'credit_card') {
      setShowInstallments(true);
      onPaymentMethodChange(method, selectedInstallments);
    } else {
      setShowInstallments(false);
      onPaymentMethodChange(method, 1);
    }
  };

  // Selecionar parcelas
  const handleInstallmentSelect = (installments: number) => {
    if (selectedMethod) {
      onPaymentMethodChange(selectedMethod, installments);
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      <h3 className="text-lg font-semibold font-teko mb-4">Forma de Pagamento</h3>
      
      <div className="space-y-3">
        {paymentMethods.map((method) => (
          <div key={method.id} className="relative">
            <button
              onClick={() => handleMethodSelect(method)}
              className={`w-full p-4 rounded-lg text-left transition-all shadow-sm ${
                selectedMethod?.id === method.id
                  ? 'bg-green-50 ring-2 ring-[var(--color-primary-green)]'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{method.icon}</span>
                  <div>
                    <div className="font-medium">{method.title}</div>
                    <div className="text-sm text-gray-600">{method.description}</div>
                    {method.type !== 'credit_card' && (
                      <div className="text-sm font-medium text-green-600">
                        {formatCurrency(getDiscountedValue(method))}
                      </div>
                    )}
                  </div>
                </div>
                <div className={`w-4 h-4 rounded-full ${
                  selectedMethod?.id === method.id
                    ? 'bg-[var(--color-primary-green)]'
                    : 'bg-gray-300'
                }`}>
                  {selectedMethod?.id === method.id && (
                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                  )}
                </div>
              </div>
            </button>
            
            {/* Opções de parcelas para cartão de crédito */}
            {selectedMethod?.id === method.id && method.type === 'credit_card' && showInstallments && (
                <div className="mt-3 p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-medium mb-3">Escolha o número de parcelas:</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {method.installments?.map((installment) => (
                      <button
                        key={installment.installments}
                        onClick={() => handleInstallmentSelect(installment.installments)}
                        className={`w-full p-2 text-left rounded transition-colors shadow-sm ${
                          selectedInstallments === installment.installments
                            ? 'bg-green-50 ring-2 ring-[var(--color-primary-green)]'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                      <div className="flex justify-between items-center">
                        <span>
                          {installment.installments}x de {formatCurrency(installment.amount)}
                        </span>
                        <div className="text-sm text-gray-600">
                          {installment.interestFree ? (
                            <span className="text-green-600 font-medium">sem juros</span>
                          ) : (
                            <span className="text-orange-600">com juros</span>
                          )}
                        </div>
                      </div>
                      {!installment.interestFree && (
                        <div className="text-sm text-gray-500">
                          Total: {formatCurrency(installment.total)}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Resumo do pagamento selecionado */}
      {selectedMethod && (
        <div className="p-4 bg-green-50 rounded-lg shadow-sm">
          <h4 className="font-medium text-green-800 mb-2">Resumo do Pagamento</h4>
          <div className="text-green-700">
            <div className="flex justify-between">
              <span>Método:</span>
              <span className="font-medium">{selectedMethod.title}</span>
            </div>
            {selectedMethod.type === 'credit_card' ? (
              <>
                <div className="flex justify-between">
                  <span>Parcelas:</span>
                  <span className="font-medium">
                    {selectedInstallments}x de {formatCurrency(orderTotal / selectedInstallments)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span className="font-medium">{formatCurrency(orderTotal)}</span>
                </div>
              </>
            ) : (
              <div className="flex justify-between">
                <span>Total:</span>
                <span className="font-medium">{formatCurrency(getDiscountedValue(selectedMethod))}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};