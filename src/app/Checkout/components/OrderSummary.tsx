/**
 * Component: OrderSummary
 * Responsabilidade única: Exibir resumo detalhado do pedido
 */

import React from 'react';
import Image from 'next/image';
import { OrderSummary as OrderSummaryType } from '../types';
import { getAssetPath } from '@/utils/paths';

interface OrderSummaryProps {
  orderSummary: OrderSummaryType;
  showItemsList?: boolean;
  className?: string;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  orderSummary,
  showItemsList = true,
  className = '',
}) => {
  // Formatar valor monetário
  const formatCurrency = (value: number): string => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      <h3 className="text-lg font-semibold font-teko mb-4">Resumo do Pedido</h3>
      
      {/* Lista de itens */}
      {showItemsList && orderSummary.items.length > 0 && (
        <div className="space-y-4 mb-6">
          {orderSummary.items.map((item) => (
            <div key={`${item.productId}-${item.size}-${item.color}`} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg shadow-sm">
              {/* Imagem do produto */}
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image
                  src={getAssetPath(item.productImage)}
                  alt={item.productName}
                  fill
                  className="object-cover rounded"
                />
              </div>
              
              {/* Informações do produto */}
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm line-clamp-2">{item.productName}</h4>
                <div className="text-xs text-gray-600 mt-1">
                  {item.size && <span>Tamanho: {item.size}</span>}
                  {item.size && item.color && <span> • </span>}
                  {item.color && <span>Cor: {item.color}</span>}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  Qtd: {item.quantity} × {formatCurrency(item.unitPrice)}
                </div>
              </div>
              
              {/* Preço total do item */}
              <div className="text-sm font-medium">
                {formatCurrency(item.totalPrice)}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Resumo de valores */}
      <div className="space-y-2 border-t pt-4">
        <div className="flex justify-between text-sm">
          <span>Subtotal ({orderSummary.itemsCount} {orderSummary.itemsCount === 1 ? 'item' : 'itens'})</span>
          <span>{formatCurrency(orderSummary.subtotal)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span>Frete</span>
          <span className={orderSummary.shipping === 0 ? 'text-green-600 font-medium' : ''}>
            {orderSummary.shipping === 0 ? 'GRÁTIS' : formatCurrency(orderSummary.shipping)}
          </span>
        </div>
        
        {orderSummary.discount > 0 && (
          <div className="flex justify-between text-sm text-green-600">
            <span>Desconto</span>
            <span>-{formatCurrency(orderSummary.discount)}</span>
          </div>
        )}
        
        <div className="border-t pt-2 mt-3">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span className="text-[var(--color-primary-green)]">
              {formatCurrency(orderSummary.total)}
            </span>
          </div>
        </div>
      </div>

      {/* Informação sobre frete grátis conquistado */}
      {orderSummary.shipping === 0 && (
        <div className="mt-4 p-3 bg-green-50 rounded-lg shadow-sm">
          <div className="text-sm text-green-700">
            <span className="font-medium">🎉 Parabéns!</span> Você ganhou frete grátis!
          </div>
        </div>
      )}
    </div>
  );
};