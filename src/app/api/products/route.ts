import { NextResponse } from "next/server";
import { MockDatabase, type Product, type ProductsResponse } from "../../../../db";

// Garantir que a rota API não seja exportada como HTML estático
export const dynamic = "force-dynamic";

// API Response interfaces (re-export from central types)
export type { ProductsResponse as ProductsApiResponse };

// REST endpoint for products - Responsibility: Handle HTTP requests for products data
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
    const perPage = Math.max(1, Math.min(50, parseInt(searchParams.get("perPage") || "16")));
    const category = searchParams.get("category") || undefined;
    const q = searchParams.get("q") || undefined;

    // Use centralized database
    const response = await MockDatabase.getProducts({
      page,
      perPage,
      category,
      q
    });

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