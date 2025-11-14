import { 
  validateProductData, 
  formatPrice, 
  generateProductUrl, 
  extractNumericId, 
  isValidProductId, 
  generateProductSlug 
} from '../utils';

describe('ProductUtils', () => {
  describe('validateProductData', () => {
    const validProduct = {
      id: '1',
      name: 'Produto Válido',
      price: 199.99,
      description: 'Descrição válida',
      images: ['/img/product.jpg'],
      category: 'categoria',
      brand: 'Marca'
    };

    it('should validate correct product data', () => {
      expect(validateProductData(validProduct)).toBe(true);
    });

    it('should reject product without required fields', () => {
      const invalidProduct: any = { ...validProduct };
      delete invalidProduct.name;
      
      expect(validateProductData(invalidProduct)).toBe(false);
    });

    it('should reject product with invalid price', () => {
      const invalidProduct = { ...validProduct, price: -10 };
      
      expect(validateProductData(invalidProduct)).toBe(false);
    });

    it('should reject product with empty images array', () => {
      const invalidProduct = { ...validProduct, images: [] };
      
      expect(validateProductData(invalidProduct)).toBe(false);
    });

    it('should reject product with invalid ID format', () => {
      const invalidProduct = { ...validProduct, id: '' };
      
      expect(validateProductData(invalidProduct)).toBe(false);
    });
  });

  describe('formatPrice', () => {
    it('should format price correctly in Brazilian Real', () => {
      expect(formatPrice(199.99)).toBe('R$ 199,99');
      expect(formatPrice(1299.5)).toBe('R$ 1.299,50');
      expect(formatPrice(0)).toBe('R$ 0,00');
    });

    it('should handle decimal precision', () => {
      expect(formatPrice(199.996)).toBe('R$ 200,00');
      expect(formatPrice(199.994)).toBe('R$ 199,99');
    });

    it('should handle large numbers', () => {
      expect(formatPrice(1999999.99)).toBe('R$ 1.999.999,99');
    });
  });

  describe('generateProductUrl', () => {
    it('should generate correct product URL', () => {
      expect(generateProductUrl('1')).toBe('/pages/produto/1');
    });

    it('should handle special characters in ID', () => {
      expect(generateProductUrl('prod-123-xyz')).toBe('/pages/produto/prod-123-xyz');
    });

    it('should handle empty ID', () => {
      expect(generateProductUrl('')).toBe('/pages/produto/');
    });

    it('should encode special characters', () => {
      expect(generateProductUrl('prod@123')).toBe('/pages/produto/prod%40123');
    });
  });

  describe('extractNumericId', () => {
    it('should extract numeric ID from string', () => {
      expect(extractNumericId('123')).toBe(123);
      expect(extractNumericId('456')).toBe(456);
    });

    it('should return null for invalid numeric ID', () => {
      expect(extractNumericId('abc')).toBe(null);
      expect(extractNumericId('')).toBe(null);
      expect(extractNumericId('12abc')).toBe(12);
    });

    it('should handle leading zeros', () => {
      expect(extractNumericId('007')).toBe(7);
      expect(extractNumericId('0123')).toBe(123);
    });
  });

  describe('isValidProductId', () => {
    it('should validate alphanumeric IDs', () => {
      expect(isValidProductId('123')).toBe(true);
      expect(isValidProductId('abc')).toBe(true);
      expect(isValidProductId('prod-123')).toBe(true);
      expect(isValidProductId('item_456')).toBe(true);
    });

    it('should reject invalid IDs', () => {
      expect(isValidProductId('')).toBe(false);
      expect(isValidProductId('   ')).toBe(false);
      expect(isValidProductId('prod@123')).toBe(false);
      expect(isValidProductId('item#456')).toBe(false);
    });

    it('should handle edge cases', () => {
      expect(isValidProductId(null as any)).toBe(false);
      expect(isValidProductId(undefined as any)).toBe(false);
      expect(isValidProductId(123 as any)).toBe(false);
    });
  });

  describe('generateProductSlug', () => {
    it('should generate URL-friendly slugs', () => {
      expect(generateProductSlug('Smartphone XYZ')).toBe('smartphone-xyz');
      expect(generateProductSlug('Produto Especial')).toBe('produto-especial');
    });

    it('should handle special characters', () => {
      expect(generateProductSlug('Produto & Acessórios!')).toBe('produto-acessrios');
      expect(generateProductSlug('Item (2024) - Novo')).toBe('item-2024-novo');
    });

    it('should handle multiple spaces and hyphens', () => {
      expect(generateProductSlug('Produto    com    espaços')).toBe('produto-com-espaos');
      expect(generateProductSlug('Item--com--hifens')).toBe('item-com-hifens');
    });

    it('should handle empty and whitespace strings', () => {
      expect(generateProductSlug('')).toBe('');
      expect(generateProductSlug('   ')).toBe('');
    });
  });
});