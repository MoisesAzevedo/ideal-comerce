import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductImageCarousel from '../components/ProductImageCarousel';

// Mock do embla-carousel-react
jest.mock('embla-carousel-react', () => ({
  __esModule: true,
  default: jest.fn(() => [
    { 
      scrollTo: jest.fn(),
      canScrollPrev: jest.fn(() => false),
      canScrollNext: jest.fn(() => true),
      on: jest.fn()
    },
    () => ({ current: null })
  ])
}));

// Mock de next/image
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }: any) {
    return <img src={src} alt={alt} {...props} />;
  };
});

const mockImages = [
  '/img/product-1.jpg',
  '/img/product-2.jpg',
  '/img/product-3.jpg'
];

describe('ProductImageCarousel', () => {
  const mockOnImageSelect = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render all product images', () => {
    render(
      <ProductImageCarousel 
        images={mockImages} 
        productName="Produto Teste" 
        onImageSelect={mockOnImageSelect}
        selectedIndex={0}
      />
    );
    
    // Verifica se todas as imagens estão presentes
    mockImages.forEach((image, index) => {
      const mainImg = screen.getByAltText(`Produto Teste - Imagem principal`);
      const thumbImg = screen.getByAltText(`Produto Teste - Miniatura ${index + 1}`);
      
      expect(mainImg).toBeInTheDocument();
      expect(thumbImg).toBeInTheDocument();
    });
  });

  it('should show navigation buttons when multiple images exist', () => {
    render(
      <ProductImageCarousel 
        images={mockImages} 
        productName="Produto Teste" 
        onImageSelect={mockOnImageSelect}
        selectedIndex={0}
      />
    );
    
    const prevButton = screen.getByLabelText('Imagem anterior');
    const nextButton = screen.getByLabelText('Próxima imagem');
    
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('should handle navigation button clicks', () => {
    const mockEmbla = {
      scrollTo: jest.fn(),
      canScrollPrev: jest.fn(() => true),
      canScrollNext: jest.fn(() => true),
      on: jest.fn()
    };
    
    require('embla-carousel-react').default.mockReturnValueOnce([
      mockEmbla,
      () => ({ current: null })
    ]);

    render(
      <ProductImageCarousel 
        images={mockImages} 
        productName="Produto Teste" 
        onImageSelect={mockOnImageSelect}
        selectedIndex={0}
      />
    );
    
    const nextButton = screen.getByLabelText('Próxima imagem');
    fireEvent.click(nextButton);
    
    expect(mockEmbla.scrollTo).toHaveBeenCalled();
  });

  it('should handle single image without navigation', () => {
    const singleImage = ['/img/single-product.jpg'];
    
    render(
      <ProductImageCarousel 
        images={singleImage} 
        productName="Produto Único" 
        onImageSelect={mockOnImageSelect}
        selectedIndex={0}
      />
    );
    
    const mainImg = screen.getByAltText('Produto Único - Imagem principal');
    expect(mainImg).toBeInTheDocument();
    
    // Não deve mostrar navegação para uma única imagem
    const prevButton = screen.queryByLabelText('Imagem anterior');
    const nextButton = screen.queryByLabelText('Próxima imagem');
    
    expect(prevButton).not.toBeInTheDocument();
    expect(nextButton).not.toBeInTheDocument();
  });

  it('should handle empty images array', () => {
    render(
      <ProductImageCarousel 
        images={[]} 
        productName="Produto Sem Imagem" 
        onImageSelect={mockOnImageSelect}
        selectedIndex={0}
      />
    );
    
    // Deve mostrar placeholder ou imagem padrão
    const container = screen.getByTestId('product-carousel');
    expect(container).toBeInTheDocument();
  });
});