import { renderHook } from '@testing-library/react';
import { useBreadcrumb } from '../hooks/useBreadcrumb';

// Mock do Next.js usePathname
import * as nextNavigation from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn()
}));

const mockUsePathname = nextNavigation.usePathname as jest.Mock;

describe('useBreadcrumb Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns empty array for root path', () => {
    mockUsePathname.mockReturnValue('/');
    
    const { result } = renderHook(() => useBreadcrumb());
    
    expect(result.current).toEqual([]);
  });

  it('generates breadcrumb for simple product path', () => {
    mockUsePathname.mockReturnValue('/produtos/sapatos');
    
    const { result } = renderHook(() => useBreadcrumb());
    
    expect(result.current).toEqual([
      { label: 'Produtos', href: '/produtos' },
      { label: 'Sapatos', href: '/produtos/sapatos' }
    ]);
  });

  it('generates breadcrumb with product name', () => {
    mockUsePathname.mockReturnValue('/produtos/sapatos/123');
    
    const { result } = renderHook(() => 
      useBreadcrumb({ productName: 'Nike Air Max 90' })
    );
    
    expect(result.current).toEqual([
      { label: 'Produtos', href: '/produtos' },
      { label: 'Sapatos', href: '/produtos/sapatos' },
      { label: 'Nike Air Max 90', href: '/produtos/sapatos/123' }
    ]);
  });

  it('uses custom labels', () => {
    mockUsePathname.mockReturnValue('/produtos/calcados');
    
    const { result } = renderHook(() => 
      useBreadcrumb({ 
        customLabels: { 
          'calcados': 'Calçados Personalizados' 
        }
      })
    );
    
    expect(result.current).toEqual([
      { label: 'Produtos', href: '/produtos' },
      { label: 'Calçados Personalizados', href: '/produtos/calcados' }
    ]);
  });

  it('excludes specified segments', () => {
    mockUsePathname.mockReturnValue('/produtos/categoria/especial/item');
    
    const { result } = renderHook(() => 
      useBreadcrumb({ 
        excludeSegments: ['especial'] 
      })
    );
    
    expect(result.current).toEqual([
      { label: 'Produtos', href: '/produtos' },
      { label: 'Categoria', href: '/produtos/categoria' },
      { label: 'Item', href: '/produtos/categoria/item' }
    ]);
  });

  it('handles UUID product IDs correctly', () => {
    const uuid = '550e8400-e29b-41d4-a716-446655440000';
    mockUsePathname.mockReturnValue(`/produto/${uuid}`);
    
    const { result } = renderHook(() => 
      useBreadcrumb({ productName: 'Produto Específico' })
    );
    
    expect(result.current).toEqual([
      { label: 'Produto', href: '/produto' },
      { label: 'Produto Específico', href: `/produto/${uuid}` }
    ]);
  });

  it('generates breadcrumb with custom category and subcategory', () => {
    mockUsePathname.mockReturnValue('/produtos');
    
    const { result } = renderHook(() => 
      useBreadcrumb({ 
        customCategory: 'Calçados Esportivos',
        customSubcategory: 'Tênis de Corrida'
      })
    );
    
    expect(result.current).toEqual([
      { label: 'Produtos', href: '/produtos' },
      { label: 'Calçados Esportivos', href: '/produtos' },
      { label: 'Tênis de Corrida', href: '/produtos' }
    ]);
  });

  it('handles deep nested paths', () => {
    mockUsePathname.mockReturnValue('/produtos/roupas/masculino/camisetas');
    
    const { result } = renderHook(() => useBreadcrumb());
    
    expect(result.current).toEqual([
      { label: 'Produtos', href: '/produtos' },
      { label: 'Roupas', href: '/produtos/roupas' },
      { label: 'Masculino', href: '/produtos/roupas/masculino' },
      { label: 'Camisetas', href: '/produtos/roupas/masculino/camisetas' }
    ]);
  });

  it('capitalizes unknown segments', () => {
    mockUsePathname.mockReturnValue('/nova-categoria/subcategoria');
    
    const { result } = renderHook(() => useBreadcrumb());
    
    expect(result.current).toEqual([
      { label: 'Nova-categoria', href: '/nova-categoria' },
      { label: 'Subcategoria', href: '/nova-categoria/subcategoria' }
    ]);
  });

  it('handles special pages', () => {
    mockUsePathname.mockReturnValue('/fale-conosco');
    
    const { result } = renderHook(() => useBreadcrumb());
    
    expect(result.current).toEqual([
      { label: 'Fale Conosco', href: '/fale-conosco' }
    ]);
  });
});