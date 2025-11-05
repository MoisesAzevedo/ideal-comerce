import type { Product } from "../../../../../db-mock-data/featured-products";

export interface ProductsApiResponse {
  data: Product[];
  meta: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}

// Responsabilidade única: chamar o endpoint /api/products e retornar dados tipados
export async function fetchFeaturedProducts(params?: {
  page?: number;
  perPage?: number;
  category?: string;
  q?: string;
}): Promise<ProductsApiResponse> {
  const url = new URL("/api/products", getBaseUrl());

  if (params) {
    if (params.page) url.searchParams.set("page", String(params.page));
    if (params.perPage) url.searchParams.set("perPage", String(params.perPage));
    if (params.category) url.searchParams.set("category", params.category);
    if (params.q) url.searchParams.set("q", params.q);
  }

  const res = await fetch(url.toString());

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText} ${text}`);
  }

  const json = (await res.json()) as ProductsApiResponse;
  return json;
}

function getBaseUrl() {
  // When called from client, relative URL is fine. If running in other environments adapt here.
  return typeof window !== "undefined" ? window.location.origin : "http://localhost:3000";
}

export default fetchFeaturedProducts;
