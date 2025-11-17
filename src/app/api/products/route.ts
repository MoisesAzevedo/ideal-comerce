import { NextResponse } from "next/server";
import { MockDatabase, type ProductsResponse } from "../../../../db";

// Garantir que a rota API não seja exportada como HTML estático
export const dynamic = "force-dynamic";

// API Response interfaces (re-export from central types)
export type { ProductsResponse as ProductsApiResponse };

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
    const perPage = Math.max(1, Math.min(50, parseInt(searchParams.get("perPage") || "16")));
    const category = searchParams.get("category") || undefined;
    const size = searchParams.get("size") || undefined;
    const q = searchParams.get("q") || undefined;
    const minPriceStr = searchParams.get("minPrice");
    const maxPriceStr = searchParams.get("maxPrice");
    const minPrice = minPriceStr ? parseFloat(minPriceStr) : undefined;
    const maxPrice = maxPriceStr ? parseFloat(maxPriceStr) : undefined;

    console.log('🔍 API: /api/products called with:', { 
      category, size, q, minPriceStr, maxPriceStr, minPrice, maxPrice 
    });

    const response = await MockDatabase.getProducts({
      page,
      perPage,
      category,
      size,
      q,
      minPrice,
      maxPrice
    });

    console.log('🔍 API: Returning', response.data.length, 'products');

    return NextResponse.json(response, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
      }
    });
  } catch (error) {
    console.error('Products API error:', error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}