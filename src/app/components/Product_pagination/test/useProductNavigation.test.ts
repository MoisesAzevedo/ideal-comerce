/**
 * Testes para o hook de navegação de produtos
 * Responsabilidade única: Testar hook de navegação
 */

import { renderHook, act } from '@testing-library/react';
import { useProductNavigation } from '../hooks/useProductNavigation';

// Mock do useRouter
const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

// Mock do console.error para testes de erro
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalError;
});

describe('useProductNavigation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('goToProduct', () => {
    it('deve navegar para produto válido', () => {
      const { result } = renderHook(() => useProductNavigation());

      act(() => {
        result.current.goToProduct(123);
      });

      expect(mockPush).toHaveBeenCalledWith('/pages/produto/123');
      expect(mockPush).toHaveBeenCalledTimes(1);
    });

    it('não deve navegar para produto inválido', () => {
      const { result } = renderHook(() => useProductNavigation());

      act(() => {
        result.current.goToProduct(0);
      });

      expect(mockPush).not.toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledWith('ID de produto inválido:', 0);
    });

    it('deve tratar erros de navegação', () => {
      mockPush.mockImplementationOnce(() => {
        throw new Error('Erro de navegação');
      });

      const { result } = renderHook(() => useProductNavigation());

      act(() => {
        result.current.goToProduct(123);
      });

      expect(console.error).toHaveBeenCalledWith('Erro ao navegar para produto:', expect.any(Error));
    });
  });

  describe('buyProduct', () => {
    it('deve navegar para produto ao comprar', () => {
      const { result } = renderHook(() => useProductNavigation());

      act(() => {
        result.current.buyProduct(456);
      });

      expect(mockPush).toHaveBeenCalledWith('/pages/produto/456');
      expect(mockPush).toHaveBeenCalledTimes(1);
    });

    it('não deve navegar para produto inválido ao comprar', () => {
      const { result } = renderHook(() => useProductNavigation());

      act(() => {
        result.current.buyProduct(-1);
      });

      expect(mockPush).not.toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledWith('ID de produto inválido:', -1);
    });
  });

  describe('isValidProductId', () => {
    it('deve retornar função de validação', () => {
      const { result } = renderHook(() => useProductNavigation());

      expect(typeof result.current.isValidProductId).toBe('function');
      expect(result.current.isValidProductId(123)).toBe(true);
      expect(result.current.isValidProductId(0)).toBe(false);
    });
  });
});