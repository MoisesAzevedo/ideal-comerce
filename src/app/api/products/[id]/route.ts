/**
 * API Route: GET /api/products/[id]
 * Responsabilidade única: Buscar produto específico por ID
 */

import { NextResponse } from "next/server";

// Garantir que a rota API não seja exportada como HTML estático
export const dynamic = "force-dynamic";

// Mock data para desenvolvimento
const mockProduct = {
  id: 1,
  name: 'Produto Exemplo API',
  price: 199.99,
  description: 'Descrição do produto via API',
  images: ['/img/product-api.jpg'],
  category: 'categoria-api',
  brand: 'Marca API'
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const productId = parseInt(id, 10);

    // Validar ID
    if (isNaN(productId) || productId <= 0) {
      return NextResponse.json(
        { 
          success: false, 
          message: "ID do produto inválido",
          product: null 
        },
        { status: 400 }
      );
    }

    // Buscar produto - usando mock por enquanto
    const product = productId === 1 ? mockProduct : null;

    if (!product) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Produto não encontrado",
          product: null 
        },
        { status: 404 }
      );
    }

    // Retornar produto encontrado
    return NextResponse.json(
      {
        success: true,
        message: "Produto encontrado",
        product
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro na API de produto:", error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Erro interno do servidor",
        product: null 
      },
      { status: 500 }
    );
  }
}