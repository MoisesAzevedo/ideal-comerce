import { NextResponse } from "next/server";
import { featuredProducts, type Product } from "../../../../db-mock-data/featured-products";

// Garantir que a rota API não seja exportada como HTML estático
export const dynamic = "force-dynamic";

// API Response interfaces
export interface ProductsApiResponse {
  data: Product[];
  meta: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}

// REST endpoint for products - Responsibility: Handle HTTP requests for products data
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
    const perPage = Math.max(1, Math.min(50, parseInt(searchParams.get("perPage") || "16")));
    const category = searchParams.get("category");
    const search = searchParams.get("q");

    // Filter products based on query parameters
    let filteredProducts = featuredProducts;
    
    if (category) {
      filteredProducts = filteredProducts.filter(
        (product: Product) => product.category.toLowerCase().includes(category.toLowerCase())
      );
    }
    
    if (search) {
      filteredProducts = filteredProducts.filter(
        (product: Product) => product.name.toLowerCase().includes(search.toLowerCase()) ||
                   product.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Calculate pagination
    const total = filteredProducts.length;
    const totalPages = Math.ceil(total / perPage);
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    const response: ProductsApiResponse = {
      data: paginatedProducts,
      meta: {
        page,
        perPage,
        total,
        totalPages,
      },
    };

    return NextResponse.json(response, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}