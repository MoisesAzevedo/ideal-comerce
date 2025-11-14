/**
 * Testes para o serviço de navegação de produtos
 * Responsabilidade única: Testar funcionalidades de navegação
 */

import { generateProductPageUrl, isValidProductIdForNavigation, navigateToProduct } from '../services/navigationService';

// Mock do router do Next.js
const mockRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
  prefetch: jest.fn(),
};

describe('navigationService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('generateProductPageUrl', () => {
    it('deve gerar URL correta para produto válido', () => {
      const url = generateProductPageUrl(123);
      expect(url).toBe('/pages/produto/123');
    });

    it('deve gerar URL correta para produto com ID 1', () => {
      const url = generateProductPageUrl(1);
      expect(url).toBe('/pages/produto/1');
    });

    it('deve gerar URL correta para produto com ID grande', () => {
      const url = generateProductPageUrl(999999);
      expect(url).toBe('/pages/produto/999999');
    });
  });

  describe('isValidProductIdForNavigation', () => {
    it('deve retornar true para IDs válidos', () => {
      expect(isValidProductIdForNavigation(1)).toBe(true);
      expect(isValidProductIdForNavigation(123)).toBe(true);
      expect(isValidProductIdForNavigation(999999)).toBe(true);
    });

    it('deve retornar false para IDs inválidos', () => {
      expect(isValidProductIdForNavigation(0)).toBe(false);
      expect(isValidProductIdForNavigation(-1)).toBe(false);
      expect(isValidProductIdForNavigation(-999)).toBe(false);
    });

    it('deve retornar false para valores não numéricos', () => {
      expect(isValidProductIdForNavigation(NaN)).toBe(false);
      expect(isValidProductIdForNavigation(Infinity)).toBe(false);
      expect(isValidProductIdForNavigation(-Infinity)).toBe(false);
    });
  });

  describe('navigateToProduct', () => {
    it('deve navegar para produto válido', () => {
      navigateToProduct(123, mockRouter);
      expect(mockRouter.push).toHaveBeenCalledWith('/pages/produto/123');
      expect(mockRouter.push).toHaveBeenCalledTimes(1);
    });

    it('deve lançar erro para ID inválido', () => {
      expect(() => {
        navigateToProduct(0, mockRouter);
      }).toThrow('ID de produto inválido para navegação');

      expect(() => {
        navigateToProduct(-1, mockRouter);
      }).toThrow('ID de produto inválido para navegação');

      expect(mockRouter.push).not.toHaveBeenCalled();
    });

    it('deve lançar erro se router não for fornecido', () => {
      expect(() => {
        navigateToProduct(123, null as any);
      }).toThrow('Router é obrigatório para navegação');

      expect(() => {
        navigateToProduct(123, undefined as any);
      }).toThrow('Router é obrigatório para navegação');
    });
  });
});