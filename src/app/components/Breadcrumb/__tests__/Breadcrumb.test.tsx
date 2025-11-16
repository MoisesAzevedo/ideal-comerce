import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Breadcrumb } from '../Breadcrumb';
import { BreadcrumbItem } from '../types';

// Mock do Next.js Link
jest.mock('next/link', () => {
  return function MockedLink({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: any;
  }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

describe('Breadcrumb Component', () => {
  const mockItems: BreadcrumbItem[] = [
    { label: 'Produtos', href: '/produtos' },
    { label: 'Sapatos', href: '/produtos/sapatos' },
    { label: 'Nike Air Max', href: '/produtos/sapatos/nike-air-max' }
  ];

  it('renders breadcrumb with all items', () => {
    render(<Breadcrumb items={mockItems} />);
    
    // Procura pelo ícone de casa em vez do texto "Início"
    expect(screen.getByTitle('Navegar para Início')).toBeInTheDocument();
    expect(screen.getByText('Produtos')).toBeInTheDocument();
    expect(screen.getByText('Sapatos')).toBeInTheDocument();
    expect(screen.getByText('Nike Air Max')).toBeInTheDocument();
  });

  it('renders with custom separator', () => {
    render(<Breadcrumb items={mockItems} separator=">" />);
    
    const separators = screen.getAllByText('>');
    expect(separators).toHaveLength(3); // Home > Produtos > Sapatos > (último item não tem separador)
  });

  it('renders without home when showHome is false', () => {
    render(<Breadcrumb items={mockItems} showHome={false} />);
    
    expect(screen.queryByTitle('Navegar para Início')).not.toBeInTheDocument();
    expect(screen.getByText('Produtos')).toBeInTheDocument();
  });

  it('renders with custom home label and href', () => {
    render(
      <Breadcrumb 
        items={mockItems} 
        homeLabel="Home" 
        homeHref="/home"
      />
    );
    
    const homeLink = screen.getByTitle('Navegar para Home').closest('a');
    expect(homeLink).toHaveAttribute('href', '/home');
  });

  it('marks the last item as active', () => {
    render(<Breadcrumb items={mockItems} />);
    
    const lastItem = screen.getByText('Nike Air Max');
    expect(lastItem).toHaveAttribute('aria-current', 'page');
  });

  it('renders ellipsis when maxItems is exceeded', () => {
    const manyItems: BreadcrumbItem[] = [
      { label: 'Categoria 1', href: '/cat1' },
      { label: 'Categoria 2', href: '/cat2' },
      { label: 'Categoria 3', href: '/cat3' },
      { label: 'Categoria 4', href: '/cat4' },
      { label: 'Categoria 5', href: '/cat5' },
      { label: 'Produto Final', href: '/produto' }
    ];
    
    render(<Breadcrumb items={manyItems} maxItems={4} />);
    
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.getByText('Produto Final')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Breadcrumb items={mockItems} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');
  });

  it('renders links with proper href attributes', () => {
    render(<Breadcrumb items={mockItems} />);
    
    const produtosLink = screen.getByText('Produtos').closest('a');
    expect(produtosLink).toHaveAttribute('href', '/produtos');
    
    const sapatosLink = screen.getByText('Sapatos').closest('a');
    expect(sapatosLink).toHaveAttribute('href', '/produtos/sapatos');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Breadcrumb items={mockItems} className="custom-breadcrumb" />
    );
    
    const breadcrumb = container.querySelector('nav');
    expect(breadcrumb).toHaveClass('custom-breadcrumb');
  });

  it('handles empty items array', () => {
    render(<Breadcrumb items={[]} />);
    
    // Quando há apenas o item home, ele deve estar marcado como ativo
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    // Verifica se há um ícone de casa ativo
    const homeIcon = screen.getByRole('navigation').querySelector('svg');
    expect(homeIcon).toBeInTheDocument();
  });

  it('renders home text when not first item', () => {
    // Testa quando showHome=false inicialmente e depois adicionamos itens customizados
    const customItems: BreadcrumbItem[] = [
      { label: 'Início', href: '/' },
      { label: 'Produtos', href: '/produtos' }
    ];
    
    render(<Breadcrumb items={customItems} showHome={false} />);
    
    expect(screen.getByText('Início')).toBeInTheDocument();
    expect(screen.getByText('Produtos')).toBeInTheDocument();
  });
});