'use client';

import React from 'react';
import { Breadcrumb } from '../Breadcrumb';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import { BreadcrumbItem } from '../types';
import { getProductById } from '../../../../../db/data/products';

/**
 * Exemplo de uso do componente Breadcrumb
 */
export const BreadcrumbExample: React.FC = () => {
  // Exemplo 1: Breadcrumb estático
  const staticItems: BreadcrumbItem[] = [
    { label: 'Produtos', href: '/produtos' },
    { label: 'Sapatos', href: '/produtos/sapatos' },
    { label: 'Nike Air Max 90', href: '/produtos/sapatos/nike-air-max-90' }
  ];

  // Exemplo 2: Breadcrumb dinâmico usando hook
  const dynamicItems = useBreadcrumb();

  // Exemplo 3: Breadcrumb com produto específico
  const productBreadcrumb = useBreadcrumb({
    productName: 'Tênis Nike Air Force 1',
    customCategory: 'Calçados Esportivos',
    customSubcategory: 'Tênis de Basquete'
  });

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-bold mb-4">Exemplos de Breadcrumb</h2>
      
      {/* Exemplo 1: Básico */}
      <div>
        <h3 className="text-lg font-semibold mb-2">1. Breadcrumb Estático</h3>
        <Breadcrumb items={staticItems} />
      </div>
      
      {/* Exemplo 2: Dinâmico */}
      <div>
        <h3 className="text-lg font-semibold mb-2">2. Breadcrumb Dinâmico (baseado na URL)</h3>
        <Breadcrumb items={dynamicItems} />
      </div>
      
      {/* Exemplo 3: Com separador personalizado */}
      <div>
        <h3 className="text-lg font-semibold mb-2">3. Com Separador Personalizado</h3>
        <Breadcrumb items={staticItems} separator=">" />
      </div>
      
      {/* Exemplo 4: Sem ícone de casa */}
      <div>
        <h3 className="text-lg font-semibold mb-2">4. Sem Ícone de Casa</h3>
        <Breadcrumb items={staticItems} showHome={false} />
      </div>
      
      {/* Exemplo 5: Com limite de itens */}
      <div>
        <h3 className="text-lg font-semibold mb-2">5. Com Limite de Itens</h3>
        <Breadcrumb items={productBreadcrumb} maxItems={3} />
      </div>
      
      {/* Exemplo 6: Casa personalizada */}
      <div>
        <h3 className="text-lg font-semibold mb-2">6. Casa Personalizada</h3>
        <Breadcrumb 
          items={staticItems} 
          homeLabel="Loja" 
          homeHref="/loja"
        />
      </div>
    </div>
  );
};

export default BreadcrumbExample;

/**
 * Exemplo de uso em uma página de produto
 */
export const ProductPageBreadcrumb: React.FC<{
  productId: string;
  productName: string;
  categoryName?: string;
  subcategoryName?: string;
}> = ({ productId, productName, categoryName, subcategoryName }) => {
  // Busca o produto pelo ID
  const product = getProductById(productId);
  const displayName = product?.name || productName || 'Produto';
  
  const breadcrumbItems = [
    { label: 'Produtos', href: '/produtos', isActive: false },
    { label: displayName, href: `/produto/${productId}`, isActive: false }
  ];

  return (
    <Breadcrumb 
      items={breadcrumbItems}
      className="mb-4"
    />
  );
};

/**
 * Exemplo de uso em uma página de categoria
 */
export const CategoryPageBreadcrumb: React.FC<{
  categoryName: string;
  subcategoryName?: string;
}> = ({ categoryName, subcategoryName }) => {
  const breadcrumbItems = useBreadcrumb({
    customCategory: categoryName,
    customSubcategory: subcategoryName
  });

  return (
    <Breadcrumb 
      items={breadcrumbItems}
      className="mb-6"
    />
  );
};