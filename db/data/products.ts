import type { Product } from '../types';

// Mock products data - simulating database table
// Responsibility: Product catalog data with complete information
export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Camisa Colegio Tiradentes",
    category: "Camisetas",
    price: 199,
    oldPrice: null,
    installmentCount: 1,
    installmentValue: 199.00,
    percentual_discount: null,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 2,
    name: "Camiseta Militar",
    category: "Camisetas",
    price: 149,
    oldPrice: 180,
    installmentCount: 10,
    installmentValue: 69.90,
    percentual_discount: 17,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 3,
    name: "Calça Tática",
    category: "Calças",
    price: 299,
    oldPrice: null,
    installmentCount: 3,
    installmentValue: 99.67,
    percentual_discount: null,
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 4,
    name: "Jaqueta Adventure",
    category: "Jaquetas",
    price: 399,
    oldPrice: 450,
    installmentCount: 10,
    installmentValue: 129.90,
    percentual_discount: 11,
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 5,
    name: "Bermuda Cargo",
    category: "Bermudas",
    price: 99,
    oldPrice: 120,
    installmentCount: 10,
    installmentValue: 49.90,
    percentual_discount: 18,
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 6,
    name: "Camiseta DryFit",
    category: "Camisetas",
    price: 89,
    oldPrice: null,
    installmentCount: 1,
    installmentValue: 89.00,
    percentual_discount: null,
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 7,
    name: "Calça Cargo",
    category: "Calças",
    price: 189,
    oldPrice: 210,
    installmentCount: 10,
    installmentValue: 79.90,
    percentual_discount: 10,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 8,
    name: "Jaqueta Corta Vento",
    category: "Jaquetas",
    price: 259,
    oldPrice: null,
    installmentCount: 5,
    installmentValue: 51.80,
    percentual_discount: null,
    images: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 9,
    name: "Produto Fictício 1",
    category: "Camisetas",
    price: 100,
    oldPrice: 120,
    installmentCount: 10,
    installmentValue: 10.00,
    percentual_discount: 10,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 10,
    name: "Produto Fictício 2",
    category: "Calças",
    price: 110,
    oldPrice: null,
    installmentCount: 2,
    installmentValue: 55.00,
    percentual_discount: null,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 11,
    name: "Produto Fictício 3",
    category: "Jaquetas",
    price: 120,
    oldPrice: 140,
    installmentCount: 10,
    installmentValue: 12.00,
    percentual_discount: 12,
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 12,
    name: "Produto Fictício 4",
    category: "Bermudas",
    price: 130,
    oldPrice: 150,
    installmentCount: 10,
    installmentValue: 13.00,
    percentual_discount: 13,
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 13,
    name: "Produto Fictício 5",
    category: "Camisetas",
    price: 140,
    oldPrice: null,
    installmentCount: 1,
    installmentValue: 140.00,
    percentual_discount: null,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 14,
    name: "Produto Fictício 6",
    category: "Calças",
    price: 150,
    oldPrice: 170,
    installmentCount: 10,
    installmentValue: 15.00,
    percentual_discount: 15,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 15,
    name: "Produto Fictício 7",
    category: "Jaquetas",
    price: 160,
    oldPrice: 180,
    installmentCount: 10,
    installmentValue: 16.00,
    percentual_discount: 16,
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 16,
    name: "Produto Fictício 8",
    category: "Bermudas",
    price: 170,
    oldPrice: null,
    installmentCount: 4,
    installmentValue: 42.50,
    percentual_discount: null,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

// Utility functions for products
export const getProductById = (id: number): Product | undefined => {
  return featuredProducts.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return featuredProducts.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return featuredProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
};