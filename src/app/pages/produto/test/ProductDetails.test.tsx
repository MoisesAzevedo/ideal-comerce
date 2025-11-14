import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductDetails } from '../components/ProductDetails';

// Tipo Product para o teste
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  images: string[];
  category: string;
  brand?: string;
  stock?: number;
  rating?: number;
  reviews?: number;
}

// Mock de next/router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn()
  })
}));

const mockProduct: Product = {
  id: 1,
  name: 'Smartphone XYZ',
  price: 1299.99,
  description: 'Um smartphone moderno com ótima qualidade.',
  images: ['/img/smartphone-1.jpg'],
  category: 'eletronicos',
  brand: 'TechBrand',
  stock: 10,
  rating: 4.5,
  reviews: 125
};

describe('ProductDetails', () => {
  it('should render product information correctly', () => {
    render(<ProductDetails product={mockProduct} />);
    
    expect(screen.getByText('Smartphone XYZ')).toBeInTheDocument();
    expect(screen.getByText('R$ 1.299,99')).toBeInTheDocument();
    expect(screen.getByText('Um smartphone moderno com ótima qualidade.')).toBeInTheDocument();
    expect(screen.getByText('TechBrand')).toBeInTheDocument();
    expect(screen.getByText('Em estoque (10 unidades)')).toBeInTheDocument();
  });

  it('should display rating and reviews when available', () => {
    render(<ProductDetails product={mockProduct} />);
    
    expect(screen.getByText('4.5')).toBeInTheDocument();
    expect(screen.getByText('(125 avaliações)')).toBeInTheDocument();
  });

  it('should handle quantity selection', () => {
    render(<ProductDetails product={mockProduct} />);
    
    const quantitySelect = screen.getByLabelText('Quantidade');
    fireEvent.change(quantitySelect, { target: { value: '3' } });
    
    expect(quantitySelect).toHaveValue('3');
  });

  it('should handle add to cart action', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    
    render(<ProductDetails product={mockProduct} />);
    
    const addToCartButton = screen.getByText('Adicionar ao Carrinho');
    fireEvent.click(addToCartButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('Produto adicionado ao carrinho:', {
      productId: '1',
      quantity: 1
    });
    
    consoleSpy.mockRestore();
  });

  it('should handle buy now action', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    
    render(<ProductDetails product={mockProduct} />);
    
    const buyNowButton = screen.getByText('Comprar Agora');
    fireEvent.click(buyNowButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('Compra imediata:', {
      productId: '1',
      quantity: 1
    });
    
    consoleSpy.mockRestore();
  });

  it('should display out of stock message when stock is 0', () => {
    const outOfStockProduct = { ...mockProduct, stock: 0 };
    
    render(<ProductDetails product={outOfStockProduct} />);
    
    expect(screen.getByText('Produto esgotado')).toBeInTheDocument();
    
    const addToCartButton = screen.getByText('Adicionar ao Carrinho');
    expect(addToCartButton).toBeDisabled();
  });

  it('should limit quantity selection to available stock', () => {
    const limitedStockProduct = { ...mockProduct, stock: 3 };
    
    render(<ProductDetails product={limitedStockProduct} />);
    
    const quantitySelect = screen.getByLabelText('Quantidade');
    const options = screen.getAllByRole('option');
    
    // Deve ter no máximo 3 opções (1, 2, 3)
    expect(options).toHaveLength(3);
    expect(options[2]).toHaveTextContent('3');
  });
});