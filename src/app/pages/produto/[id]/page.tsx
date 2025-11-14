/**
 * Página de produto individual
 * Responsabilidade única: Exibir detalhes de um produto específico
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/app/components/Header/Header';
import FooterMenus from '@/app/components/Footer/FooterMenusNew';
import ProductPageClient from '../components/ProductPageClient';
import { ProductFormatter } from '../utils/productFormatters';
import type { ProductPageParams } from '../types';

// Mock data para desenvolvimento - substituir pela API real
const mockProduct = {
  id: 1,
  name: 'Produto Exemplo',
  price: 199.99,
  description: 'Descrição do produto exemplo',
  images: ['/img/product-example.jpg'],
  category: 'categoria-exemplo',
  brand: 'Marca Exemplo',
  installmentCount: 3,
  installmentValue: 66.66
};

// Função auxiliar para buscar produto
function getProductById(id: number) {
  // Por enquanto retorna mock - integrar com API real depois
  return id > 0 ? mockProduct : null;
}

// Gerar metadata dinâmica para SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<ProductPageParams>
}): Promise<Metadata> {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id, 10);
  
  if (isNaN(productId)) {
    return {
      title: 'Produto não encontrado | Ideal E-commerce',
      description: 'O produto solicitado não foi encontrado.'
    };
  }

  const product = getProductById(productId);
  
  if (!product) {
    return {
      title: 'Produto não encontrado | Ideal E-commerce',
      description: 'O produto solicitado não foi encontrado.'
    };
  }

  return {
    title: ProductFormatter.formatPageTitle(product.name),
    description: ProductFormatter.formatPageDescription(product),
    openGraph: {
      title: product.name,
      description: ProductFormatter.formatPageDescription(product),
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 800,
          alt: product.name
        }
      ]
    }
  };
}

export default async function ProductPage({ params }: { params: Promise<ProductPageParams> }) {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id, 10);

  // Validar ID do produto
  if (isNaN(productId) || productId <= 0) {
    notFound();
  }

  // Verificar se produto existe (para SSG)
  const product = getProductById(productId);
  if (!product) {
    notFound();
  }

  return (
    <main data-name="product-page" className="min-h-screen bg-white">
      {/* Header */}
      <div data-name="header-wrapper">
        <Header />
      </div>

      {/* Conteúdo principal */}
      <div data-name="product-content" className="pt-4">
        <div data-name="product-container" className="mx-auto max-w-7xl px-4 phone:px-6 lg:px-8 py-6 phone:py-8">
          <ProductPageClient productId={resolvedParams.id} />
        </div>
      </div>

      {/* Footer */}
      <div data-name="footer-wrapper">
        <FooterMenus />
      </div>
    </main>
  );
}