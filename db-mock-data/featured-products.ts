// Mock data simulating the featured products table in database
// Responsibility: Define product data structure and seed data for development

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  installment: string;
  discount?: string;
  image: string;
};

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Camisa Colegio Tiradentes",
    category: "Camisetas",
    price: 199,
    oldPrice: 230,
    installment: "10x de R$ 89,90",
    discount: "-10%",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Camiseta Militar",
    category: "Camisetas",
    price: 149,
    oldPrice: 180,
    installment: "10x de R$ 69,90",
    discount: "-17%",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Calça Tática",
    category: "Calças",
    price: 299,
    oldPrice: 350,
    installment: "10x de R$ 109,90",
    discount: "-15%",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Jaqueta Adventure",
    category: "Jaquetas",
    price: 399,
    oldPrice: 450,
    installment: "10x de R$ 129,90",
    discount: "-11%",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    name: "Bermuda Cargo",
    category: "Bermudas",
    price: 99,
    oldPrice: 120,
    installment: "10x de R$ 49,90",
    discount: "-18%",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    name: "Camiseta DryFit",
    category: "Camisetas",
    price: 89,
    oldPrice: 110,
    installment: "10x de R$ 39,90",
    discount: "-19%",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 7,
    name: "Calça Cargo",
    category: "Calças",
    price: 189,
    oldPrice: 210,
    installment: "10x de R$ 79,90",
    discount: "-10%",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 8,
    name: "Jaqueta Corta Vento",
    category: "Jaquetas",
    price: 259,
    oldPrice: 299,
    installment: "10x de R$ 99,90",
    discount: "-13%",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 9,
    name: "Produto Fictício 1",
    category: "Camisetas",
    price: 100,
    oldPrice: 120,
    installment: "10x de R$ 10,00",
    discount: "-10%",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 10,
    name: "Produto Fictício 2",
    category: "Calças",
    price: 110,
    oldPrice: 130,
    installment: "10x de R$ 11,00",
    discount: "-11%",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 11,
    name: "Produto Fictício 3",
    category: "Jaquetas",
    price: 120,
    oldPrice: 140,
    installment: "10x de R$ 12,00",
    discount: "-12%",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 12,
    name: "Produto Fictício 4",
    category: "Bermudas",
    price: 130,
    oldPrice: 150,
    installment: "10x de R$ 13,00",
    discount: "-13%",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 13,
    name: "Produto Fictício 5",
    category: "Camisetas",
    price: 140,
    oldPrice: 160,
    installment: "10x de R$ 14,00",
    discount: "-14%",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 14,
    name: "Produto Fictício 6",
    category: "Calças",
    price: 150,
    oldPrice: 170,
    installment: "10x de R$ 15,00",
    discount: "-15%",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 15,
    name: "Produto Fictício 7",
    category: "Jaquetas",
    price: 160,
    oldPrice: 180,
    installment: "10x de R$ 16,00",
    discount: "-16%",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 16,
    name: "Produto Fictício 8",
    category: "Bermudas",
    price: 170,
    oldPrice: 190,
    installment: "10x de R$ 17,00",
    discount: "-17%",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
  }
];