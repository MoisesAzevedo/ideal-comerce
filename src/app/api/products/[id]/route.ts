/**
 * API Route: GET /api/products/[id]
 * Responsabilidade única: Buscar produto específico por ID
 */

import { NextResponse } from "next/server";
import { products } from '../../../../../db';

// Garantir que a rota API não seja exportada como HTML estático
export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Buscar produto na lista de produtos
    const product = products.find(p => p.id === id);

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