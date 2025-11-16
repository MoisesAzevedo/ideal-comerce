/**
 * Types: Checkout Types
 * Responsabilidade única: Definir tipos para funcionalidades de checkout
 */

// Endereço de entrega
export interface DeliveryAddress {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  zipCode: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  isDefault?: boolean;
}

// Método de pagamento
export interface PaymentMethod {
  id: string;
  type: 'credit_card' | 'debit_card' | 'pix' | 'boleto';
  title: string;
  description?: string;
  icon?: string;
  installments?: PaymentInstallment[];
}

// Parcelas de pagamento
export interface PaymentInstallment {
  installments: number;
  amount: number;
  total: number;
  interestFree: boolean;
}

// Dados do checkout
export interface CheckoutData {
  deliveryAddress: DeliveryAddress | null;
  paymentMethod: PaymentMethod | null;
  selectedInstallments?: number;
  observations?: string;
  timestamp?: string;
}

// Estado de validação do formulário
export interface CheckoutValidation {
  deliveryAddress: boolean;
  paymentMethod: boolean;
  isValid: boolean;
}

// Item do pedido
export interface CheckoutOrderItem {
  productId: string;
  productName: string;
  productImage: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  size?: string;
  color?: string;
}

// Resumo do pedido
export interface OrderSummary {
  items: CheckoutOrderItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  itemsCount: number;
}

// Estados do checkout
export type CheckoutStep = 'delivery' | 'payment' | 'review' | 'success';

// Interface para persistência de dados
export interface CheckoutStorageData {
  checkoutData: CheckoutData;
  orderSummary: OrderSummary;
  lastUpdated: string;
}