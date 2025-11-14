/**
 * Hook para gerenciar dados e estado do produto
 * Responsabilidade única: Lógica de estado e dados da página produto
 */

'use client';

import { useState, useEffect, useCallback } from 'react';
import type { ProductPageState } from '../types';
import { ProductService } from '../services/productService';
import { ProductValidator } from '../utils/productFormatters';

export function useProduct(productId: string) {
  const [state, setState] = useState<ProductPageState>({
    product: null,
    loading: true,
    error: null,
    selectedImageIndex: 0,
    quantity: 1
  });

  const [purchasing, setPurchasing] = useState(false);

  // Carregar dados do produto
  const loadProduct = useCallback(async () => {
    if (!ProductService.isValidProductId(productId)) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'ID do produto inválido'
      }));
      return;
    }

    setState(prev => ({
      ...prev,
      loading: true,
      error: null
    }));

    try {
      const response = await ProductService.getProductById(parseInt(productId, 10));
      
      if (!response.success || !response.product) {
        setState(prev => ({
          ...prev,
          loading: false,
          error: response.message || 'Produto não encontrado'
        }));
        return;
      }

      const validation = ProductValidator.validateProductData(response.product);
      if (!validation.isValid) {
        setState(prev => ({
          ...prev,
          loading: false,
          error: `Dados do produto inválidos: ${validation.errors.join(', ')}`
        }));
        return;
      }

      setState(prev => ({
        ...prev,
        product: response.product,
        loading: false,
        error: null
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Erro ao carregar produto'
      }));
    }
  }, [productId]);

  // Selecionar imagem no carrossel
  const selectImage = useCallback((index: number) => {
    setState(prev => {
      if (!prev.product || index < 0 || index >= prev.product.images.length) {
        return prev;
      }
      
      return {
        ...prev,
        selectedImageIndex: index
      };
    });
  }, []);

  // Alterar quantidade
  const changeQuantity = useCallback((newQuantity: number) => {
    const validation = ProductValidator.validateQuantity(newQuantity);
    
    if (validation.isValid) {
      setState(prev => ({
        ...prev,
        quantity: newQuantity
      }));
    }
    
    return validation;
  }, []);

  // Executar compra
  const handlePurchase = useCallback(async (): Promise<{
    success: boolean;
    message: string;
  }> => {
    if (!state.product) {
      return {
        success: false,
        message: 'Produto não encontrado'
      };
    }

    const quantityValidation = ProductValidator.validateQuantity(state.quantity);
    if (!quantityValidation.isValid) {
      return {
        success: false,
        message: quantityValidation.message || 'Quantidade inválida'
      };
    }

    setPurchasing(true);

    try {
      const purchaseResult = await ProductService.simulatePurchase(
        state.product.id,
        state.quantity
      );

      setPurchasing(false);
      return purchaseResult;
    } catch (error) {
      setPurchasing(false);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Erro na compra'
      };
    }
  }, [state.product, state.quantity]);

  // Recarregar produto
  const reloadProduct = useCallback(() => {
    loadProduct();
  }, [loadProduct]);

  // Carregar produto na inicialização
  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  return {
    // Estado
    ...state,
    purchasing,
    
    // Ações
    selectImage,
    changeQuantity,
    handlePurchase,
    reloadProduct,
    
    // Computadas
    hasImages: state.product ? state.product.images.length > 0 : false,
    hasMultipleImages: state.product ? state.product.images.length > 1 : false,
    isValidQuantity: ProductValidator.validateQuantity(state.quantity).isValid
  };
}