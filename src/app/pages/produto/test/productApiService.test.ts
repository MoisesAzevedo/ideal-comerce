import { fetchProductById } from '../services';

// Mock global do fetch
global.fetch = jest.fn();

describe('ProductApiService', () => {
  const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const mockProduct = {
    id: '1',
    name: 'Produto Teste',
    price: 199.99,
    description: 'Descrição do produto',
    images: ['/img/test-product.jpg'],
    category: 'categoria-teste',
    brand: 'TestBrand'
  };

  it('should fetch product by ID successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, data: mockProduct })
    } as Response);

    const result = await fetchProductById('1');
    
    expect(mockFetch).toHaveBeenCalledWith('/api/products/1');
    expect(result).toEqual(mockProduct);
  });

  it('should handle API error response', async () => {
    const errorMessage = 'Produto não encontrado';
    
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ 
        success: false, 
        error: errorMessage 
      })
    } as Response);

    await expect(fetchProductById('999')).rejects.toThrow(errorMessage);
  });

  it('should handle network error', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    await expect(fetchProductById('1')).rejects.toThrow('Network error');
  });

  it('should handle invalid response format', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: false })
    } as Response);

    await expect(fetchProductById('1')).rejects.toThrow('Produto não encontrado');
  });

  it('should validate product ID parameter', async () => {
    await expect(fetchProductById('')).rejects.toThrow('ID do produto é obrigatório');
  });

  it('should handle malformed JSON response', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => {
        throw new SyntaxError('Unexpected token');
      }
    } as unknown as Response);

    await expect(fetchProductById('1')).rejects.toThrow('Erro ao processar resposta da API');
  });
});