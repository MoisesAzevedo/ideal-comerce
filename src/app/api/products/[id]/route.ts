/**
 * API Route: GET /api/products/[id]
 * Responsabilidade única: Buscar produto específico por ID
 */

import { NextResponse } from "next/server";
import { featuredProducts } from "../../../../db/data/products";
import type { Product } from "../../../../db/types";

// Garantir que a rota API não seja exportada como HTML estático
export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const productId = parseInt(resolvedParams.id, 10);

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

    // Buscar produto nos dados mockados
    const product = featuredProducts.find(p => p.id === productId);

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