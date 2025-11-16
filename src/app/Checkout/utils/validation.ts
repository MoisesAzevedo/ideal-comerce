/**
 * Utils: Checkout Validation
 * Responsabilidade única: Validação de dados do checkout
 */

import { DeliveryAddress, PaymentMethod, CheckoutValidation } from '../types';

// Validar endereço de entrega
export const validateDeliveryAddress = (address: DeliveryAddress | null): boolean => {
  if (!address) return false;
  
  return !!(
    address.fullName?.trim() &&
    address.email?.trim() &&
    validateEmail(address.email) &&
    address.phone?.trim() &&
    address.zipCode?.trim() &&
    address.street?.trim() &&
    address.number?.trim() &&
    address.neighborhood?.trim() &&
    address.city?.trim() &&
    address.state?.trim()
  );
};

// Validar método de pagamento
export const validatePaymentMethod = (paymentMethod: PaymentMethod | null): boolean => {
  return !!(paymentMethod && paymentMethod.id && paymentMethod.type);
};

// Validar checkout completo
export const validateCheckout = (
  address: DeliveryAddress | null, 
  payment: PaymentMethod | null
): CheckoutValidation => {
  const deliveryAddress = validateDeliveryAddress(address);
  const paymentMethod = validatePaymentMethod(payment);
  
  return {
    deliveryAddress,
    paymentMethod,
    isValid: deliveryAddress && paymentMethod
  };
};

// Validar email
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validar CEP
export const validateZipCode = (zipCode: string): boolean => {
  const cleanZipCode = zipCode.replace(/\D/g, '');
  return cleanZipCode.length === 8;
};

// Validar telefone
export const validatePhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/\D/g, '');
  return cleanPhone.length >= 10 && cleanPhone.length <= 11;
};