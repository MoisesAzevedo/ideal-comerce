/**
 * Component: CheckoutStepper
 * Responsabilidade única: Exibir progresso do checkout
 */

import React from 'react';
import { CheckoutStep } from '../types';

interface CheckoutStepperProps {
  currentStep: CheckoutStep;
  completedSteps: CheckoutStep[];
  className?: string;
}

interface Step {
  id: CheckoutStep;
  title: string;
  description: string;
}

export const CheckoutStepper: React.FC<CheckoutStepperProps> = ({
  currentStep,
  completedSteps,
  className = '',
}) => {
  const steps: Step[] = [
    {
      id: 'delivery',
      title: 'Entrega',
      description: 'Endereço de entrega',
    },
    {
      id: 'payment',
      title: 'Pagamento',
      description: 'Forma de pagamento',
    },
    {
      id: 'review',
      title: 'Revisão',
      description: 'Confirmar pedido',
    },
    {
      id: 'success',
      title: 'Concluído',
      description: 'Pedido realizado',
    },
  ];

  const getStepStatus = (stepId: CheckoutStep): 'completed' | 'current' | 'upcoming' => {
    if (completedSteps.includes(stepId)) return 'completed';
    if (stepId === currentStep) return 'current';
    return 'upcoming';
  };

  const getStepNumber = (stepId: CheckoutStep): number => {
    return steps.findIndex(step => step.id === stepId) + 1;
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => {
          const status = getStepStatus(step.id);
          const stepNumber = getStepNumber(step.id);
          const isLast = index === steps.length - 1;

          return (
            <div key={step.id} className="flex flex-col items-center relative">
              {/* Linha conectora */}
              {!isLast && (
                <div className="absolute left-1/2 top-6 w-full h-0.5 bg-gray-200 transform -translate-y-1/2 hidden tablet:block">
                  <div
                    className={`h-full transition-all duration-300 ${
                      status === 'completed' || (status === 'current' && index < steps.length - 1)
                        ? 'bg-[var(--color-primary-green)]'
                        : 'bg-gray-200'
                    }`}
                    style={{
                      width: status === 'completed' ? '100%' : '0%',
                    }}
                  />
                </div>
              )}

              {/* Círculo do passo */}
              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    status === 'completed'
                      ? 'bg-[var(--color-primary-green)] border-[var(--color-primary-green)] text-white'
                      : status === 'current'
                      ? 'bg-white border-[var(--color-primary-green)] text-[var(--color-primary-green)]'
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
                >
                  {status === 'completed' ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-sm font-semibold">{stepNumber}</span>
                  )}
                </div>
              </div>

              {/* Informações do passo */}
              <div className="mt-3 text-center">
                <div
                  className={`text-sm font-medium transition-colors duration-300 ${
                    status === 'completed' || status === 'current'
                      ? 'text-[var(--color-primary-green)]'
                      : 'text-gray-400'
                  }`}
                >
                  {step.title}
                </div>
                <div className="text-xs text-gray-500 mt-1 hidden tablet:block">
                  {step.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};