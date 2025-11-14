import { renderHook, waitFor } from '@testing-library/react';
import { useProduct } from '../hooks/useProduct';

// Mock do serviço da API
jest.mock('../services/productApiService', () => ({
  fetchProductById: jest.fn()
}));

// Mock de dados para teste
const mockProduct = {
  id: '1',
  name: 'Produto Teste',
  price: 299.99,
  description: 'Descrição do produto teste',
  images: [
    '/img/product-1.jpg',
    '/img/product-2.jpg'
  ],
  category: 'eletronicos',
  brand: 'TestBrand'
};

describe('ProductPageClient', () => {
  const mockFetchProductById = require('../services/productApiService').fetchProductById;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('useProduct hook', () => {
    it('should fetch product data successfully', async () => {
      mockFetchProductById.mockResolvedValueOnce(mockProduct);
      
      const { result } = renderHook(() => useProduct('1'));

      expect(result.current.loading).toBe(true);
      expect(result.current.product).toBe(null);
      expect(result.current.error).toBe(null);

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
        expect(result.current.product).toEqual(mockProduct);
        expect(result.current.error).toBe(null);
      });
    });

    it('should handle product fetch error', async () => {
      const errorMessage = 'Produto não encontrado';
      mockFetchProductById.mockRejectedValueOnce(new Error(errorMessage));
      
      const { result } = renderHook(() => useProduct('999'));

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
        expect(result.current.product).toBe(null);
        expect(result.current.error).toBe(errorMessage);
      });
    });

    it('should not fetch without product ID', () => {
      const { result } = renderHook(() => useProduct(''));

      expect(result.current.loading).toBe(false);
      expect(result.current.product).toBe(null);
      expect(result.current.error).toBe(null);
      expect(mockFetchProductById).not.toHaveBeenCalled();
    });
  });
});