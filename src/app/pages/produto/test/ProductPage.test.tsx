import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductPage from '../[id]/page';
import type { ProductPageParams } from '../types';

// Mock dos componentes
jest.mock('../components/ProductPageClient', () => {
  return function MockProductPageClient({ productId }: { productId: string }) {
    return (
      <div data-testid="product-page-client">
        <h1>Produto {productId}</h1>
        <p>Carregando produto...</p>
      </div>
    );
  };
});

// Mock das dependências
jest.mock('../../../db', () => ({
  getProductById: jest.fn().mockReturnValue({
    id: 1,
    name: 'Produto Teste',
    price: 199.99,
    description: 'Descrição do produto teste'
  })
}));

jest.mock('../../components/Header/Header', () => {
  return function MockHeader() {
    return <div data-testid="header">Header Mock</div>;
  };
});

jest.mock('../../components/Footer/FooterMenusNew', () => {
  return function MockFooter() {
    return <div data-testid="footer">Footer Mock</div>;
  };
});

describe('ProductPage', () => {
  it('should render ProductPageClient with correct params', () => {
    const mockParams: ProductPageParams = { id: '1' };
    
    render(<ProductPage params={mockParams} />);
    
    const clientComponent = screen.getByTestId('product-page-client');
    expect(clientComponent).toBeInTheDocument();
    expect(screen.getByText('Produto 1')).toBeInTheDocument();
  });

  it('should render header and footer', () => {
    const mockParams: ProductPageParams = { id: '1' };
    
    render(<ProductPage params={mockParams} />);
    
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should render with valid numeric ID', () => {
    const mockParams: ProductPageParams = { id: '2' };
    
    render(<ProductPage params={mockParams} />);
    
    const clientComponent = screen.getByTestId('product-page-client');
    expect(clientComponent).toBeInTheDocument();
    expect(screen.getByText('Produto 2')).toBeInTheDocument();
  });
});