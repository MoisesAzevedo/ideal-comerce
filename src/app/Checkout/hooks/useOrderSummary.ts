/**
 * Hook: useOrderSummary
 * Responsabilidade única: Calcular e gerenciar o resumo do pedido
 */

import { useMemo } from 'react';
import { CheckoutOrderItem, OrderSummary } from '../types';
import { useCart } from '../../Carrinho/cart';
import { products } from '../../../../db';
import aggregateCart from '../../Carrinho/utils/cartHelpers';

export const useOrderSummary = () => {
  const { cartIds } = useCart();

  // Calcular resumo do pedido baseado no carrinho
  const orderSummary: OrderSummary = useMemo(() => {
    const cartItems = aggregateCart(cartIds, products);
    
    const items: CheckoutOrderItem[] = cartItems.map(item => {
      const price = item.product.price ?? item.product.sale_price;
      return {
        productId: item.product.id,
        productName: item.product.name,
        productImage: item.product.images[0] || '',
        quantity: item.qty,
        unitPrice: price,
        totalPrice: price * item.qty,
        size: item.product.sizes?.[0]?.value,
        color: item.product.colors?.[0]?.value,
      };
    });

    const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
    const shipping = subtotal > 200 ? 0 : 15.90; // Frete grátis acima de R$ 200
    const discount = 0; // Pode ser implementado futuramente
    const total = subtotal + shipping - discount;
    const itemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return {
      items,
      subtotal,
      shipping,
      discount,
      total,
      itemsCount,
    };
  }, [cartIds]);

  return {
    orderSummary,
    hasItems: orderSummary.items.length > 0,
    freeShippingThreshold: 200,
    remainingForFreeShipping: Math.max(0, 200 - orderSummary.subtotal),
  };
};