import type { Product, SizeOption, ColorOption } from '../types';

// Mock products data - Artigos militares (estrutura completa)
export const featuredProducts: Product[] = [
  // PRODUTOS PARA CAMISETAS & BLUSAS
  {
    id: "p1b2c3d0-0001-0000-0000-000000000001",
    sku: "CAM-ALG-001",
    name: "Camiseta Básica 100% Algodão",
    slug: "camiseta-basica-algodao",
    description: "Camiseta básica masculina em algodão 100%, corte tradicional, ideal para o dia a dia. Tecido macio e respirável, durabilidade garantida.",
    brand_id: null,
    category_id: "a1b2c3d0-1001-0000-0000-000000000001", // Camisetas & Blusas
    cost_price: 25.00,
    sale_price: 49.90,
    discount_price: 39.90,
    currency: "BRL",
    stock_quantity: 150,
    width_cm: 25.0,
    height_cm: 2.0,
    length_cm: 35.0,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=800&q=80",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
       "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
      "https://images.unsplash.com/photo-1594938291221-94f18fb5bef8?w=800&q=80",
         "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80"
    ],
    attributes: {
      material: "100% Algodão",
      corte: "Regular",
      gola: "Redonda",
      estilo: "Casual"
    },
    sizes: [
      { value: "pp", label: "PP", available: true },
      { value: "p", label: "P", available: true },
      { value: "m", label: "M", available: true },
      { value: "g", label: "G", available: true },
      { value: "gg", label: "GG", available: true }
    ],
    colors: [
      { value: "branco", label: "Branco", hex: "#ffffff", available: true },
      { value: "preto", label: "Preto", hex: "#000000", available: true },
      { value: "azul-marinho", label: "Azul Marinho", hex: "#001f3f", available: true },
      { value: "cinza", label: "Cinza", hex: "#808080", available: true }
    ],
    status: "active",
    created_at: new Date("2024-01-15T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Camisetas & Blusas",
    price: 49.90,
    oldPrice: 59.90,
    installmentCount: 3,
    installmentValue: 16.63,
    percentual_discount: 20.0
  },
  // PRODUTOS PARA CALÇAS & SHORTS
  {
    id: "p1b2c3d0-0009-0000-0000-000000000009",
    sku: "CAL-JNS-002",
    name: "Calça Jeans Masculina Slim Fit",
    slug: "calca-jeans-masculina-slim-fit",
    description: "Calça jeans masculina com corte slim fit, lavagem escura, bolsos funcionais e tecido elástico para maior conforto e mobilidade.",
    brand_id: null,
    category_id: "a1b2c3d0-1002-0000-0000-000000000002", // Calças & Shorts
    cost_price: 45.00,
    sale_price: 89.90,
    discount_price: 79.90,
    currency: "BRL",
    stock_quantity: 120,
    width_cm: 30.0,
    height_cm: 3.0,
    length_cm: 40.0,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
         "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80"
    ],
    attributes: {
      material: "98% Algodão, 2% Elastano",
      corte: "Slim Fit",
      lavagem: "Escura",
      estilo: "Casual"
    },
    sizes: [
      { value: "38", label: "38", available: true },
      { value: "40", label: "40", available: true },
      { value: "42", label: "42", available: true },
      { value: "44", label: "44", available: true },
      { value: "46", label: "46", available: false }
    ],
    colors: [
      { value: "azul-escuro", label: "Azul Escuro", hex: "#1a237e", available: true },
      { value: "preto", label: "Preto", hex: "#212121", available: true },
      { value: "azul-medio", label: "Azul Médio", hex: "#1976d2", available: true }
    ],
    status: "active",
    created_at: new Date("2024-01-20T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Calças & Shorts",
    price: 89.90,
    oldPrice: 99.90,
    installmentCount: 4,
    installmentValue: 19.98,
    percentual_discount: 11.1
  },
  {
    id: "p1b2c3d0-0020-0000-0000-000000000020",
    sku: "SHC-CRG-010",
    name: "Short Cargo Masculino",
    slug: "short-cargo-masculino",
    description: "Short cargo masculino com múltiplos bolsos, fechamento em botão e zíper, tecido resistente e secagem rápida.",
    brand_id: null,
    category_id: "a1b2c3d0-1002-0000-0000-000000000002", // Calças & Shorts
    cost_price: 35.00,
    sale_price: 69.90,
    discount_price: 59.90,
    currency: "BRL",
    stock_quantity: 140,
    width_cm: 28.0,
    height_cm: 2.5,
    length_cm: 36.0,
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80"
    ],
    attributes: {
      material: "100% Poliéster",
      tipo: "Cargo",
      bolsos: 4,
      estilo: "Casual/Tático"
    },
    sizes: [
      { value: "38", label: "38", available: true },
      { value: "40", label: "40", available: true },
      { value: "42", label: "42", available: true },
      { value: "44", label: "44", available: true }
    ],
    colors: [
      { value: "verde-oliva", label: "Verde Oliva", hex: "#556b2f", available: true },
      { value: "preto", label: "Preto", hex: "#212121", available: true }
    ],
    status: "active",
    created_at: new Date("2024-03-10T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Calças & Shorts",
    price: 69.90,
    oldPrice: 79.90,
    installmentCount: 3,
    installmentValue: 23.30,
    percentual_discount: 12.6
  },
  {
    id: "p1b2c3d0-0021-0000-0000-000000000021",
    sku: "BRM-JNS-011",
    name: "Bermuda Jeans Masculina",
    slug: "bermuda-jeans-masculina",
    description: "Bermuda jeans masculina com corte reto, lavagem média e acabamento reforçado nos bolsos.",
    brand_id: null,
    category_id: "a1b2c3d0-1002-0000-0000-000000000002", // Calças & Shorts
    cost_price: 30.00,
    sale_price: 59.90,
    discount_price: 49.90,
    currency: "BRL",
    stock_quantity: 100,
    width_cm: 26.0,
    height_cm: 2.5,
    length_cm: 34.0,
    images: [
      "https://images.unsplash.com/photo-1520975917722-6f7b6d0c6f3a?w=800&q=80",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&q=80"
    ],
    attributes: {
      material: "99% Algodão, 1% Elastano",
      corte: "Reto",
      lavagem: "Média",
      estilo: "Casual"
    },
    sizes: [
      { value: "38", label: "38", available: true },
      { value: "40", label: "40", available: true },
      { value: "42", label: "42", available: true },
      { value: "44", label: "44", available: true }
    ],
    colors: [
      { value: "azul-claro", label: "Azul Claro", hex: "#1976d2", available: true },
      { value: "bege", label: "Bege", hex: "#d2b48c", available: true }
    ],
    status: "active",
    created_at: new Date("2024-04-05T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Calças & Shorts",
    price: 59.90,
    oldPrice: 69.90,
    installmentCount: 3,
    installmentValue: 19.97,
    percentual_discount: 14.3
  },
  {
    id: "p1b2c3d0-0022-0000-0000-000000000022",
    sku: "CAL-MOL-012",
    name: "Calça de Moletom Slim",
    slug: "calca-moletom-slim",
    description: "Calça de moletom slim com cós elástico e cordão, forro macio e corte moderno.",
    brand_id: null,
    category_id: "a1b2c3d0-1002-0000-0000-000000000002", // Calças & Shorts
    cost_price: 25.00,
    sale_price: 59.90,
    discount_price: 49.90,
    currency: "BRL",
    stock_quantity: 90,
    width_cm: 27.0,
    height_cm: 3.0,
    length_cm: 39.0,
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80"
    ],
    attributes: {
      material: "80% Algodão, 20% Poliéster",
      tipo: "Moletom",
      forro: "Macio",
      estilo: "Casual"
    },
    sizes: [
      { value: "pp", label: "PP", available: true },
      { value: "p", label: "P", available: true },
      { value: "m", label: "M", available: true },
      { value: "g", label: "G", available: true },
      { value: "gg", label: "GG", available: false }
    ],
    colors: [
      { value: "cinza-mescla", label: "Cinza Mescla", hex: "#9e9e9e", available: true },
      { value: "preto", label: "Preto", hex: "#212121", available: true }
    ],
    status: "active",
    created_at: new Date("2024-05-02T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Calças & Shorts",
    price: 59.90,
    oldPrice: 69.90,
    installmentCount: 3,
    installmentValue: 19.97,
    percentual_discount: 14.3
  },
  {
    id: "p1b2c3d0-0023-0000-0000-000000000023",
    sku: "SHC-TAC-013",
    name: "Short Tático",
    slug: "short-tatico",
    description: "Short tático com tecido respirável, bolsos reforçados e corte confortável para atividades ao ar livre.",
    brand_id: null,
    category_id: "a1b2c3d0-1002-0000-0000-000000000002", // Calças & Shorts
    cost_price: 28.00,
    sale_price: 64.90,
    discount_price: 54.90,
    currency: "BRL",
    stock_quantity: 120,
    width_cm: 27.0,
    height_cm: 2.5,
    length_cm: 35.0,
    images: [
      "https://images.unsplash.com/photo-1520975917722-6f7b6d0c6f3a?w=800&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80"
    ],
    attributes: {
      material: "Poliéster Dry-Fit",
      tipo: "Tático",
      respiravel: true
    },
    sizes: [
      { value: "p", label: "P", available: true },
      { value: "m", label: "M", available: true },
      { value: "g", label: "G", available: true },
      { value: "gg", label: "GG", available: true }
    ],
    colors: [
      { value: "verde-oliva", label: "Verde Oliva", hex: "#556b2f", available: true },
      { value: "preto", label: "Preto", hex: "#212121", available: true }
    ],
    status: "active",
    created_at: new Date("2024-06-18T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Calças & Shorts",
    price: 64.90,
    oldPrice: 74.90,
    installmentCount: 4,
    installmentValue: 16.23,
    percentual_discount: 13.4
  },
  {
    id: "p1b2c3d0-0024-0000-0000-000000000024",
    sku: "CAL-CHN-014",
    name: "Calça Chino Slim Masculina",
    slug: "calca-chino-slim-masculina",
    description: "Calça chino slim com acabamento interno, corte moderno e tecido com leve elasticidade para conforto.",
    brand_id: null,
    category_id: "a1b2c3d0-1002-0000-0000-000000000002", // Calças & Shorts
    cost_price: 40.00,
    sale_price: 99.90,
    discount_price: 89.90,
    currency: "BRL",
    stock_quantity: 70,
    width_cm: 32.0,
    height_cm: 3.5,
    length_cm: 42.0,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80"
    ],
    attributes: {
      material: "98% Algodão, 2% Elastano",
      corte: "Slim",
      estilo: "Social/Casual"
    },
    sizes: [
      { value: "38", label: "38", available: true },
      { value: "40", label: "40", available: true },
      { value: "42", label: "42", available: true },
      { value: "44", label: "44", available: true },
      { value: "46", label: "46", available: false }
    ],
    colors: [
      { value: "bege", label: "Bege", hex: "#d2b48c", available: true },
      { value: "marrom", label: "Marrom", hex: "#6d4c41", available: true },
      { value: "preto", label: "Preto", hex: "#212121", available: true }
    ],
    status: "active",
    created_at: new Date("2024-07-20T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Calças & Shorts",
    price: 99.90,
    oldPrice: 119.90,
    installmentCount: 5,
    installmentValue: 19.98,
    percentual_discount: 16.7
  },
  {
    id: "p1b2c3d0-0014-0000-0000-000000000114",
    sku: "JQT-MOL-003",
    name: "Moletom Com Capuz Unissex",
    slug: "moletom-capuz-unissex",
    description: "Moletom com capuz unissex em algodão misto, forro interno macio, bolso canguru frontal, ideal para dias frios e look casual.",
    brand_id: null,
    category_id: "a1b2c3d0-1003-0000-0000-000000000003", // Jaquetas & Casacos
    cost_price: 35.00,
    sale_price: 69.90,
    discount_price: 59.90,
    currency: "BRL",
    stock_quantity: 85,
    width_cm: 28.0,
    height_cm: 4.0,
    length_cm: 38.0,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a9fbc86339e?w=800&q=80",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800&q=80",
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=800&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&q=80"
    ],
    attributes: {
      material: "80% Algodão, 20% Poliéster",
      tipo: "Moletom com Capuz",
      bolso: "Canguru",
      forro: "Interno Macio"
    },
    sizes: [
      { value: "pp", label: "PP", available: true },
      { value: "p", label: "P", available: true },
      { value: "m", label: "M", available: true },
      { value: "g", label: "G", available: true },
      { value: "gg", label: "GG", available: true }
    ],
    colors: [
      { value: "cinza-mescla", label: "Cinza Mescla", hex: "#9e9e9e", available: true },
      { value: "preto", label: "Preto", hex: "#212121", available: true },
      { value: "azul-marinho", label: "Azul Marinho", hex: "#1a237e", available: true },
      { value: "vinho", label: "Vinho", hex: "#880e4f", available: false }
    ],
    status: "active",
    created_at: new Date("2024-01-25T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Jaquetas & Casacos",
    price: 69.90,
    oldPrice: 79.90,
    installmentCount: 3,
    installmentValue: 19.97,
    percentual_discount: 14.3
  },
  {
    id: "p1b2c3d0-0015-0000-0000-000000000115",
    sku: "VST-FLO-004",
    name: "Vestido Floral Midi Feminino",
    slug: "vestido-floral-midi-feminino",
    description: "Vestido midi feminino com estampa floral, tecido viscose, decote em V, manga 3/4, modelagem evasê que valoriza a silhueta feminina.",
    brand_id: null,
    category_id: "a1b2c3d0-1004-0000-0000-000000000004", // Vestidos & Saias
    cost_price: 55.00,
    sale_price: 119.90,
    discount_price: 99.90,
    currency: "BRL",
    stock_quantity: 65,
    width_cm: 25.0,
    height_cm: 2.5,
    length_cm: 35.0,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      "https://images.unsplash.com/photo-1566479179817-c98c3dd2c319?w=800&q=80",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80"
    ],
    attributes: {
      material: "100% Viscose",
      comprimento: "Midi",
      decote: "V",
      manga: "3/4",
      modelagem: "Evasê"
    },
    sizes: [
      { value: "pp", label: "PP", available: true },
      { value: "p", label: "P", available: true },
      { value: "m", label: "M", available: true },
      { value: "g", label: "G", available: true },
      { value: "gg", label: "GG", available: false }
    ],
    colors: [
      { value: "floral-azul", label: "Floral Azul", hex: "#1565c0", available: true },
      { value: "floral-rosa", label: "Floral Rosa", hex: "#e91e63", available: true },
      { value: "floral-verde", label: "Floral Verde", hex: "#2e7d32", available: false }
    ],
    status: "active",
    created_at: new Date("2024-02-01T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Vestidos & Saias",
    price: 119.90,
    oldPrice: 139.90,
    installmentCount: 5,
    installmentValue: 19.98,
    percentual_discount: 16.7
  },
  // PRODUTOS PARA CALÇADOS
  {
    id: "p1b2c3d0-0016-0000-0000-000000000116",
    sku: "TNS-SPT-005",
    name: "Tênis Esportivo Running Pro",
    slug: "tenis-esportivo-running-pro",
    description: "Tênis esportivo para corrida com tecnologia de amortecimento, solado antiderrapante, cabedal respirável em mesh e palmilha anatômica.",
    brand_id: null,
    category_id: "a1b2c3d0-2001-0000-0000-000000000001", // Tênis
    cost_price: 80.00,
    sale_price: 159.90,
    discount_price: 139.90,
    currency: "BRL",
    stock_quantity: 95,
    width_cm: null,
    height_cm: null,
    length_cm: null,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
    ],
    attributes: {
      tipo: "Running",
      amortecimento: "EVA",
      cabedal: "Mesh Respirável",
      solado: "Borracha Antiderrapante"
    },
    sizes: [
      { value: "36", label: "36", available: true },
      { value: "38", label: "38", available: true },
      { value: "40", label: "40", available: true },
      { value: "42", label: "42", available: true },
      { value: "44", label: "44", available: false }
    ],
    colors: [
      { value: "preto-branco", label: "Preto/Branco", hex: "#212121", available: true },
      { value: "azul-laranja", label: "Azul/Laranja", hex: "#1976d2", available: true },
      { value: "cinza-verde", label: "Cinza/Verde", hex: "#616161", available: true }
    ],
    status: "active",
    created_at: new Date("2024-02-05T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Tênis",
    price: 159.90,
    oldPrice: 179.90,
    installmentCount: 6,
    installmentValue: 23.32,
    percentual_discount: 12.5
  },
  {
    id: "p1b2c3d0-0017-0000-0000-000000000117",
    sku: "SAP-SOC-006",
    name: "Sapato Social Masculino Couro",
    slug: "sapato-social-masculino-couro",
    description: "Sapato social masculino em couro legítimo, solado de couro, bico arredondado, design clássico para ocasiões formais e trabalho.",
    brand_id: null,
    category_id: "a1b2c3d0-2002-0000-0000-000000000002", // Sapatos Sociais
    cost_price: 90.00,
    sale_price: 189.90,
    discount_price: null,
    currency: "BRL",
    stock_quantity: 55,
    width_cm: null,
    height_cm: null,
    length_cm: null,
    images: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
      "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=800&q=80",
      "https://images.unsplash.com/photo-1608667508764-6e0ec90fa9c3?w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1617606002779-51d3e5d12bab?w=800&q=80",
      "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&q=80"
    ],
    attributes: {
      material: "Couro Legítimo",
      solado: "Couro",
      bico: "Arredondado",
      ocasiao: "Formal"
    },
    sizes: [
      { value: "38", label: "38", available: true },
      { value: "39", label: "39", available: true },
      { value: "40", label: "40", available: true },
      { value: "41", label: "41", available: true },
      { value: "42", label: "42", available: true },
      { value: "43", label: "43", available: false }
    ],
    colors: [
      { value: "preto", label: "Preto", hex: "#212121", available: true },
      { value: "marrom", label: "Marrom", hex: "#5d4037", available: true },
      { value: "vinho", label: "Vinho", hex: "#880e4f", available: false }
    ],
    status: "active",
    created_at: new Date("2024-02-10T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Sapatos Sociais",
    price: 189.90,
    oldPrice: null,
    installmentCount: 7,
    installmentValue: 27.13,
    percentual_discount: null
  },
    {
      id: "p1b2c3d0-0018-0000-0000-000000000118",
      sku: "SAP-SOC-007",
      name: "Sapato Social Masculino Verniz",
      slug: "sapato-social-masculino-verniz",
      description: "Sapato social masculino em couro verniz, solado de borracha, bico fino, ideal para festas e eventos de gala.",
      brand_id: null,
      category_id: "a1b2c3d0-2002-0000-0000-000000000002",
      cost_price: 95.00,
      sale_price: 199.90,
      discount_price: 179.90,
      currency: "BRL",
      stock_quantity: 40,
      width_cm: null,
      height_cm: null,
      length_cm: null,
      images: [
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=800&q=80",
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=800&q=80"
      ],
      attributes: {
        material: "Couro Verniz",
        solado: "Borracha",
        bico: "Fino",
        ocasiao: "Gala"
      },
      sizes: [
        { value: "38", label: "38", available: true },
        { value: "39", label: "39", available: true },
        { value: "40", label: "40", available: true },
        { value: "41", label: "41", available: true },
        { value: "42", label: "42", available: true }
      ],
      colors: [
        { value: "preto", label: "Preto", hex: "#212121", available: true }
      ],
      status: "active",
      created_at: new Date("2024-03-01T10:00:00Z"),
      updated_at: new Date("2025-11-14T08:00:00Z"),
      category: "Sapatos Sociais",
      price: 199.90,
      oldPrice: 219.90,
      installmentCount: 6,
      installmentValue: 33.32,
      percentual_discount: 10.0
    },
    {
      id: "p1b2c3d0-0015-0000-0000-000000000015",
      sku: "SAP-SOC-008",
      name: "Sapato Social Feminino Salto Médio",
      slug: "sapato-social-feminino-salto-medio",
      description: "Sapato social feminino em couro sintético, salto médio, palmilha acolchoada, ideal para escritório e eventos.",
      brand_id: null,
      category_id: "a1b2c3d0-2002-0000-0000-000000000002",
      cost_price: 80.00,
      sale_price: 159.90,
      discount_price: 139.90,
      currency: "BRL",
      stock_quantity: 60,
      width_cm: null,
      height_cm: null,
      length_cm: null,
      images: [
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=800&q=80",
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=800&q=80"
      ],
      attributes: {
        material: "Couro Sintético",
        salto: "Médio",
        palmilha: "Acolchoada",
        ocasiao: "Escritório"
      },
      sizes: [
        { value: "35", label: "35", available: true },
        { value: "36", label: "36", available: true },
        { value: "37", label: "37", available: true },
        { value: "38", label: "38", available: true },
        { value: "39", label: "39", available: true }
      ],
      colors: [
        { value: "bege", label: "Bege", hex: "#f5f5dc", available: true },
        { value: "preto", label: "Preto", hex: "#212121", available: true }
      ],
      status: "active",
      created_at: new Date("2024-03-05T10:00:00Z"),
      updated_at: new Date("2025-11-14T08:00:00Z"),
      category: "Sapatos Sociais",
      price: 159.90,
      oldPrice: 179.90,
      installmentCount: 6,
      installmentValue: 26.65,
      percentual_discount: 12.5
    },
    {
      id: "p1b2c3d0-0016-0000-0000-000000000016",
      sku: "SAP-SOC-009",
      name: "Sapato Social Masculino Monk Strap",
      slug: "sapato-social-masculino-monk-strap",
      description: "Sapato social masculino tipo monk strap, couro legítimo, fivela lateral, estilo moderno para trabalho e eventos.",
      brand_id: null,
      category_id: "a1b2c3d0-2002-0000-0000-000000000002",
      cost_price: 110.00,
      sale_price: 219.90,
      discount_price: 199.90,
      currency: "BRL",
      stock_quantity: 35,
      width_cm: null,
      height_cm: null,
      length_cm: null,
      images: [
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=800&q=80",
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=800&q=80"
      ],
      attributes: {
        material: "Couro Legítimo",
        fechamento: "Fivela",
        estilo: "Monk Strap",
        ocasiao: "Trabalho"
      },
      sizes: [
        { value: "39", label: "39", available: true },
        { value: "40", label: "40", available: true },
        { value: "41", label: "41", available: true },
        { value: "42", label: "42", available: true }
      ],
      colors: [
        { value: "marrom", label: "Marrom", hex: "#6b4f2a", available: true },
        { value: "preto", label: "Preto", hex: "#212121", available: true }
      ],
      status: "active",
      created_at: new Date("2024-03-10T10:00:00Z"),
      updated_at: new Date("2025-11-14T08:00:00Z"),
      category: "Sapatos Sociais",
      price: 219.90,
      oldPrice: 239.90,
      installmentCount: 6,
      installmentValue: 36.65,
      percentual_discount: 9.1
    },
    {
      id: "p1b2c3d0-0017-0000-0000-000000000017",
      sku: "SAP-SOC-010",
      name: "Sapato Social Masculino Brogue",
      slug: "sapato-social-masculino-brogue",
      description: "Sapato social masculino estilo brogue, couro legítimo, detalhes perfurados, ideal para ocasiões formais.",
      brand_id: null,
      category_id: "a1b2c3d0-2002-0000-0000-000000000002",
      cost_price: 105.00,
      sale_price: 209.90,
      discount_price: 189.90,
      currency: "BRL",
      stock_quantity: 50,
      width_cm: null,
      height_cm: null,
      length_cm: null,
      images: [
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=800&q=80",
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=800&q=80"
      ],
      attributes: {
        material: "Couro Legítimo",
        detalhes: "Brogue",
        estilo: "Formal",
        ocasiao: "Evento"
      },
      sizes: [
        { value: "38", label: "38", available: true },
        { value: "39", label: "39", available: true },
        { value: "40", label: "40", available: true },
        { value: "41", label: "41", available: true }
      ],
      colors: [
        { value: "marrom", label: "Marrom", hex: "#6b4f2a", available: true },
        { value: "preto", label: "Preto", hex: "#212121", available: true }
      ],
      status: "active",
      created_at: new Date("2024-03-15T10:00:00Z"),
      updated_at: new Date("2025-11-14T08:00:00Z"),
      category: "Sapatos Sociais",
      price: 209.90,
      oldPrice: 229.90,
      installmentCount: 6,
      installmentValue: 34.98,
      percentual_discount: 9.5
    },
    {
      id: "p1b2c3d0-0018-0000-0000-000000000018",
      sku: "SAP-SOC-011",
      name: "Sapato Social Feminino Bico Fino",
      slug: "sapato-social-feminino-bico-fino",
      description: "Sapato social feminino bico fino, couro sintético, salto alto, ideal para festas e eventos formais.",
      brand_id: null,
      category_id: "a1b2c3d0-2002-0000-0000-000000000002",
      cost_price: 85.00,
      sale_price: 179.90,
      discount_price: 159.90,
      currency: "BRL",
      stock_quantity: 45,
      width_cm: null,
      height_cm: null,
      length_cm: null,
      images: [
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=800&q=80",
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=800&q=80"
      ],
      attributes: {
        material: "Couro Sintético",
        salto: "Alto",
        bico: "Fino",
        ocasiao: "Festa"
      },
      sizes: [
        { value: "35", label: "35", available: true },
        { value: "36", label: "36", available: true },
        { value: "37", label: "37", available: true },
        { value: "38", label: "38", available: true }
      ],
      colors: [
        { value: "vermelho", label: "Vermelho", hex: "#b22222", available: true },
        { value: "preto", label: "Preto", hex: "#212121", available: true }
      ],
      status: "active",
      created_at: new Date("2024-03-20T10:00:00Z"),
      updated_at: new Date("2025-11-14T08:00:00Z"),
      category: "Sapatos Sociais",
      price: 179.90,
      oldPrice: 199.90,
      installmentCount: 6,
      installmentValue: 29.98,
      percentual_discount: 11.1
    },
  {
    id: "p1b2c3d0-0014-0000-0000-000000000014",
    sku: "BOT-COT-007",
    name: "Bota Coturno Unissex Couro",
    slug: "bota-coturno-unissex-couro",
    description: "Bota coturno unissex em couro legítimo, cano médio, cadarço resistente, solado tratorado, estilo urbano e resistente ao desgaste.",
    brand_id: null,
    category_id: "a1b2c3d0-2003-0000-0000-000000000003", // Botas & Coturnos
    cost_price: 70.00,
    sale_price: 149.90,
    discount_price: 129.90,
    currency: "BRL",
    stock_quantity: 40,
    width_cm: null,
    height_cm: null,
    length_cm: null,
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=800&q=80",
      "https://images.unsplash.com/photo-1608667508764-6e0ec90fa9c3?w=800&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80"
    ],
    attributes: {
      material: "Couro Legítimo",
      cano: "Médio",
      solado: "Tratorado",
      estilo: "Urbano"
    },
    sizes: [
      { value: "36", label: "36", available: true },
      { value: "38", label: "38", available: true },
      { value: "40", label: "40", available: true },
      { value: "42", label: "42", available: true },
      { value: "44", label: "44", available: false }
    ],
    colors: [
      { value: "preto", label: "Preto", hex: "#212121", available: true },
      { value: "marrom-escuro", label: "Marrom Escuro", hex: "#3e2723", available: true },
      { value: "caramelo", label: "Caramelo", hex: "#8d6e63", available: false }
    ],
    status: "active",
    created_at: new Date("2024-02-15T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Botas & Coturnos",
    price: 149.90,
    oldPrice: 169.90,
    installmentCount: 6,
    installmentValue: 21.65,
    percentual_discount: 13.3
  },
  // PRODUTOS PARA ACESSÓRIOS
  {
    id: "p1b2c3d0-0015-0000-0000-000000000120",
    sku: "REL-DIG-008",
    name: "Relógio Digital Smartwatch",
    slug: "relogio-digital-smartwatch",
    description: "Smartwatch com monitor cardíaco, GPS, resistente à água, tela OLED, notificações inteligentes, bateria de longa duração.",
    brand_id: null,
    category_id: "a1b2c3d0-3001-0000-0000-000000000001", // Relógios
    cost_price: 150.00,
    sale_price: 299.90,
    discount_price: 259.90,
    currency: "BRL",
    stock_quantity: 35,
    width_cm: 15.0,
    height_cm: 3.0,
    length_cm: 20.0,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80",
      "https://images.unsplash.com/photo-1586068060678-3a4ae7a19e8e?w=800&q=80",
      "https://images.unsplash.com/photo-1607742854374-e2d9b6c7bb7c?w=800&q=80",
      "https://images.unsplash.com/photo-1593787707297-97c0e9090633?w=800&q=80"
    ],
    attributes: {
      tipo: "Smartwatch",
      monitor_cardiaco: true,
      gps: true,
      resistencia_agua: "IP68",
      tela: "OLED"
    },
    colors: [
      { value: "preto", label: "Preto", hex: "#212121", available: true },
      { value: "prata", label: "Prata", hex: "#9e9e9e", available: true },
      { value: "azul", label: "Azul", hex: "#1976d2", available: false }
    ],
    status: "active",
    created_at: new Date("2024-02-20T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Relógios",
    price: 299.90,
    oldPrice: 349.90,
    installmentCount: 10,
    installmentValue: 25.99,
    percentual_discount: 13.3
  },
  {
    id: "p1b2c3d0-0016-0000-0000-000000000121",
    sku: "BOL-FEM-009",
    name: "Bolsa Feminina Couro Sintético",
    slug: "bolsa-feminina-couro-sintetico",
    description: "Bolsa feminina em couro sintético, design elegante, compartimentos organizadores, alça ajustável, ideal para o dia a dia.",
    brand_id: null,
    category_id: "a1b2c3d0-3002-0000-0000-000000000002", // Bolsas & Mochilas
    cost_price: 40.00,
    sale_price: 89.90,
    discount_price: 79.90,
    currency: "BRL",
    stock_quantity: 75,
    width_cm: 35.0,
    height_cm: 25.0,
    length_cm: 15.0,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80"
    ],
    attributes: {
      material: "Couro Sintético",
      compartimentos: 3,
      alca: "Ajustável",
      fecho: "Zíper"
    },
    colors: [
      { value: "preto", label: "Preto", hex: "#212121", available: true },
      { value: "caramelo", label: "Caramelo", hex: "#8d6e63", available: true },
      { value: "vinho", label: "Vinho", hex: "#880e4f", available: true },
      { value: "bege", label: "Bege", hex: "#a1887f", available: false }
    ],
    status: "active",
    created_at: new Date("2024-02-25T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Bolsas & Mochilas",
    price: 89.90,
    oldPrice: 99.90,
    installmentCount: 4,
    installmentValue: 19.98,
    percentual_discount: 11.1
  },
  {
    id: "p1b2c3d0-0017-0000-0000-000000000119",
    sku: "OCL-SOL-010",
    name: "Óculos de Sol Polarizado UV400",
    slug: "oculos-sol-polarizado-uv400",
    description: "Óculos de sol com lentes polarizadas, proteção UV400, armação em acetato, estilo moderno e confortável para uso diário.",
    brand_id: null,
    category_id: "a1b2c3d0-3004-0000-0000-000000000004", // Óculos & Chapéus
    cost_price: 25.00,
    sale_price: 59.90,
    discount_price: 49.90,
    currency: "BRL",
    stock_quantity: 90,
    width_cm: 15.0,
    height_cm: 6.0,
    length_cm: 18.0,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
      "https://images.unsplash.com/photo-1576073718792-0948082de633?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      "https://images.unsplash.com/photo-1586240629147-3e15b3b78f3b?w=800&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      "https://images.unsplash.com/photo-1609602993095-b1b3c5bea303?w=800&q=80"
    ],
    attributes: {
      lente: "Polarizada",
      protecao_uv: "UV400",
      armacao: "Acetato",
      estilo: "Moderno"
    },
    colors: [
      { value: "preto", label: "Preto", hex: "#212121", available: true },
      { value: "tartaruga", label: "Tartaruga", hex: "#8d6e63", available: true },
      { value: "azul", label: "Azul", hex: "#1976d2", available: false }
    ],
    status: "active",
    created_at: new Date("2024-03-01T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Óculos & Chapéus",
    price: 59.90,
    oldPrice: 69.90,
    installmentCount: 3,
    installmentValue: 16.63,
    percentual_discount: 16.7
  },
  // PRODUTOS PARA TECNOLOGIA
  {
    id: "p1b2c3d0-0018-0000-0000-00000000118",
    sku: "SMT-AND-011",
    name: "Smartphone Android 128GB",
    slug: "smartphone-android-128gb",
    description: "Smartphone Android com 6GB RAM, 128GB armazenamento, câmera tripla 48MP, tela 6.5\" Full HD, bateria 4000mAh, processador octa-core.",
    brand_id: null,
    category_id: "a1b2c3d0-4001-0000-0000-000000000001", // Smartphones & Tablets
    cost_price: 450.00,
    sale_price: 899.90,
    discount_price: 799.90,
    currency: "BRL",
    stock_quantity: 25,
    width_cm: 8.0,
    height_cm: 1.0,
    length_cm: 16.0,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80",
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80"
    ],
    attributes: {
      sistema: "Android",
      ram: "6GB",
      armazenamento: "128GB",
      tela: "6.5\" Full HD",
      camera: "48MP Tripla",
      bateria: "4000mAh"
    },
    colors: [
      { value: "preto", label: "Preto", hex: "#212121", available: true },
      { value: "azul", label: "Azul", hex: "#1976d2", available: true },
      { value: "branco", label: "Branco", hex: "#fafafa", available: false }
    ],
    status: "active",
    created_at: new Date("2024-03-05T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Smartphones & Tablets",
    price: 899.90,
    oldPrice: 999.90,
    installmentCount: 12,
    installmentValue: 66.66,
    percentual_discount: 11.1
  },
  {
    id: "p1b2c3d0-0019-0000-0000-000000000019",
    sku: "NBK-I5-012",
    name: "Notebook Intel Core i5 8GB",
    slug: "notebook-intel-core-i5-8gb",
    description: "Notebook com processador Intel Core i5, 8GB RAM, SSD 256GB, tela 15.6\" Full HD, placa de vídeo integrada, ideal para trabalho e estudos.",
    brand_id: null,
    category_id: "a1b2c3d0-4002-0000-0000-000000000002", // Computadores & Notebooks
    cost_price: 1200.00,
    sale_price: 2399.90,
    discount_price: 2199.90,
    currency: "BRL",
    stock_quantity: 15,
    width_cm: 36.0,
    height_cm: 2.5,
    length_cm: 25.0,
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&q=80"
    ],
    attributes: {
      processador: "Intel Core i5",
      ram: "8GB",
      armazenamento: "SSD 256GB",
      tela: "15.6\" Full HD",
      placa_video: "Integrada"
    },
    colors: [
      { value: "prata", label: "Prata", hex: "#9e9e9e", available: true },
      { value: "preto", label: "Preto", hex: "#212121", available: true }
    ],
    status: "active",
    created_at: new Date("2024-03-10T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Computadores & Notebooks",
    price: 2399.90,
    oldPrice: 2699.90,
    installmentCount: 12,
    installmentValue: 183.33,
    percentual_discount: 8.3
  },
  {
    id: "p1b2c3d0-0020-0000-0000-000000000020",
    sku: "FON-BLU-013",
    name: "Fone Bluetooth Noise Cancelling",
    slug: "fone-bluetooth-noise-cancelling",
    description: "Fone de ouvido Bluetooth com cancelamento de ruído ativo, driver 40mm, bateria 30h, conexão multiponto, controles touch.",
    brand_id: null,
    category_id: "a1b2c3d0-4003-0000-0000-000000000003", // Áudio & TV
    cost_price: 120.00,
    sale_price: 249.90,
    discount_price: 199.90,
    currency: "BRL",
    stock_quantity: 45,
    width_cm: 20.0,
    height_cm: 8.0,
    length_cm: 18.0,
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80",
      "https://images.unsplash.com/photo-1621481564893-bb5c1ca3dec2?w=800&q=80"
    ],
    attributes: {
      conexao: "Bluetooth 5.0",
      cancelamento_ruido: true,
      driver: "40mm",
      bateria: "30 horas",
      controle: "Touch"
    },
    colors: [
      { value: "preto", label: "Preto", hex: "#212121", available: true },
      { value: "branco", label: "Branco", hex: "#fafafa", available: true },
      { value: "azul", label: "Azul", hex: "#1976d2", available: false }
    ],
    status: "active",
    created_at: new Date("2024-03-15T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Áudio & TV",
    price: 249.90,
    oldPrice: 299.90,
    installmentCount: 8,
    installmentValue: 24.99,
    percentual_discount: 20.0
  },
  // PRODUTOS PARA CASA & JARDIM
  {
    id: "p1b2c3d0-0021-0000-0000-000000000021",
    sku: "SOF-2LG-014",
    name: "Sofá 2 Lugares Tecido Suede",
    slug: "sofa-2-lugares-tecido-suede",
    description: "Sofá 2 lugares em tecido suede, estrutura em madeira maciça, espuma D33, design moderno e confortável para sala de estar.",
    brand_id: null,
    category_id: "a1b2c3d0-5001-0000-0000-000000000001", // Móveis & Decoração
    cost_price: 350.00,
    sale_price: 699.90,
    discount_price: 599.90,
    currency: "BRL",
    stock_quantity: 20,
    width_cm: 140.0,
    height_cm: 85.0,
    length_cm: 90.0,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80"
    ],
    attributes: {
      material: "Tecido Suede",
      estrutura: "Madeira Maciça",
      espuma: "D33",
      lugares: 2,
      estilo: "Moderno"
    },
    colors: [
      { value: "cinza", label: "Cinza", hex: "#616161", available: true },
      { value: "bege", label: "Bege", hex: "#a1887f", available: true },
      { value: "azul-marinho", label: "Azul Marinho", hex: "#1a237e", available: false }
    ],
    status: "active",
    created_at: new Date("2024-03-20T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Móveis & Decoração",
    price: 699.90,
    oldPrice: 799.90,
    installmentCount: 10,
    installmentValue: 59.99,
    percentual_discount: 14.3
  },
  {
      id: "mil-vest-001",
      sku: "CAM-TAC-001",
      name: "Camiseta Tática Militar Dry-Fit",
      slug: "camiseta-tatica-militar-dry-fit",
      description: "Camiseta tática militar em tecido dry-fit, respirável, ideal para operações e treinamentos ao ar livre.",
      brand_id: null,
      category_id: "a1b2c3d0-0001-0000-0000-000000000001",
      cost_price: 35.00,
      sale_price: 69.90,
      discount_price: 59.90,
      currency: "BRL",
      stock_quantity: 100,
      width_cm: 30.0,
      height_cm: 2.0,
      length_cm: 40.0,
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80",
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80"
      ],
      attributes: {
        material: "Poliéster Dry-Fit",
        tipo: "Tática",
        respiravel: true
      },
      sizes: [
        { value: "p", label: "P", available: true },
        { value: "m", label: "M", available: true },
        { value: "g", label: "G", available: true },
        { value: "gg", label: "GG", available: true }
      ],
      colors: [
        { value: "verde-oliva", label: "Verde Oliva", hex: "#556b2f", available: true },
        { value: "preto", label: "Preto", hex: "#212121", available: true }
      ],
      status: "active",
      created_at: new Date("2025-11-14T10:00:00Z"),
      updated_at: new Date("2025-11-14T10:00:00Z"),
      category: "Vestimenta"
    },
    {
      id: "mil-vest-002",
      sku: "CAL-CARGO-002",
      name: "Calça Cargo Militar Ripstop",
      slug: "calca-cargo-militar-ripstop",
      description: "Calça cargo militar em tecido ripstop, bolsos múltiplos, reforço nos joelhos, ideal para campo e patrulha.",
      brand_id: null,
      category_id: "a1b2c3d0-0001-0000-0000-000000000001",
      cost_price: 59.00,
      sale_price: 129.90,
      discount_price: 109.90,
      currency: "BRL",
      stock_quantity: 80,
      width_cm: 35.0,
      height_cm: 4.0,
      length_cm: 45.0,
      images: [
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=800&q=80",
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3c5a?w=800&q=80",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80"
      ],
      attributes: {
        material: "Ripstop Algodão",
        bolsos: 6,
        reforco_joelho: true
      },
      sizes: [
        { value: "p", label: "P", available: true },
        { value: "m", label: "M", available: true },
        { value: "g", label: "G", available: true },
        { value: "gg", label: "GG", available: true }
      ],
      colors: [
        { value: "camuflado", label: "Camuflado", hex: "#78866b", available: true },
        { value: "verde-oliva", label: "Verde Oliva", hex: "#556b2f", available: true }
      ],
      status: "active",
      created_at: new Date("2025-11-14T10:00:00Z"),
      updated_at: new Date("2025-11-14T10:00:00Z"),
      category: "Vestimenta"
    },
    {
      id: "mil-vest-003",
      sku: "JAQ-TAC-003",
      name: "Jaqueta Militar Impermeável",
      slug: "jaqueta-militar-impermeavel",
      description: "Jaqueta militar impermeável, capuz embutido, bolsos frontais, proteção contra vento e chuva, ideal para operações táticas.",
      brand_id: null,
      category_id: "a1b2c3d0-0001-0000-0000-000000000001",
      cost_price: 89.00,
      sale_price: 199.90,
      discount_price: 179.90,
      currency: "BRL",
      stock_quantity: 60,
      width_cm: 40.0,
      height_cm: 6.0,
      length_cm: 50.0,
      images: [
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3c5a?w=800&q=80",
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=800&q=80",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80",
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80",
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80"
      ],
      attributes: {
        material: "Poliéster Impermeável",
        capuz: true,
        bolsos: 4
      },
      sizes: [
        { value: "p", label: "P", available: true },
        { value: "m", label: "M", available: true },
        { value: "g", label: "G", available: true },
        { value: "gg", label: "GG", available: true }
      ],
      colors: [
        { value: "preto", label: "Preto", hex: "#212121", available: true },
        { value: "camuflado", label: "Camuflado", hex: "#78866b", available: true }
      ],
      status: "active",
      created_at: new Date("2025-11-14T10:00:00Z"),
      updated_at: new Date("2025-11-14T10:00:00Z"),
      category: "Vestimenta"
    },
  {
    id: "p1b2c3d0-0023-0000-0000-000000000023",
    sku: "VSO-CER-016",
    name: "Vaso de Plantas Cerâmica Decorativo",
    slug: "vaso-plantas-ceramica-decorativo",
    description: "Vaso decorativo em cerâmica esmaltada, design moderno, sistema de drenagem, ideal para plantas de médio porte, resistente e elegante.",
    brand_id: null,
    category_id: "a1b2c3d0-5003-0000-0000-000000000003", // Jardim & Plantas
    cost_price: 15.00,
    sale_price: 39.90,
    discount_price: 34.90,
    currency: "BRL",
    stock_quantity: 120,
    width_cm: 25.0,
    height_cm: 30.0,
    length_cm: 25.0,
    images: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&q=80",
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=800&q=80",
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=800&q=80",
      "https://images.unsplash.com/photo-1616627505796-7b6100e70024?w=800&q=80",
      "https://images.unsplash.com/photo-1600298882974-6ace4aa2668c?w=800&q=80"
    ],
    attributes: {
      material: "Cerâmica Esmaltada",
      tamanho: "Médio",
      drenagem: "Sistema de Drenagem",
      estilo: "Moderno",
      uso: "Interno/Externo"
    },
    colors: [
      { value: "branco", label: "Branco", hex: "#fafafa", available: true },
      { value: "terracota", label: "Terracota", hex: "#8d6e63", available: true },
      { value: "azul", label: "Azul", hex: "#1976d2", available: true },
      { value: "verde", label: "Verde", hex: "#2e7d32", available: false }
    ],
    status: "active",
    created_at: new Date("2024-03-30T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Jardim & Plantas",
    price: 39.90,
    oldPrice: 44.90,
    installmentCount: 2,
    installmentValue: 17.45,
    percentual_discount: 12.5
  },
  // PRODUTOS PARA ESPORTE & LAZER
  {
    id: "p1b2c3d0-0024-0000-0000-000000000024",
    sku: "HAL-ADJ-017",
    name: "Halteres Ajustáveis 2 x 10kg",
    slug: "halteres-ajustaveis-2x10kg",
    description: "Par de halteres ajustáveis com peso variável até 10kg cada, sistema de encaixe rápido, pegada ergonômica, ideais para treino em casa.",
    brand_id: null,
    category_id: "a1b2c3d0-6001-0000-0000-000000000001", // Fitness & Academia
    cost_price: 120.00,
    sale_price: 249.90,
    discount_price: 219.90,
    currency: "BRL",
    stock_quantity: 30,
    width_cm: 40.0,
    height_cm: 20.0,
    length_cm: 20.0,
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80",
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=800&q=80"
    ],
    attributes: {
      peso_maximo: "10kg cada",
      sistema: "Encaixe Rápido",
      pegada: "Ergonômica",
      ajustavel: true,
      quantidade: "2 unidades"
    },
    colors: [
      { value: "preto-prata", label: "Preto/Prata", hex: "#424242", available: true },
      { value: "azul-prata", label: "Azul/Prata", hex: "#1976d2", available: false }
    ],
    status: "active",
    created_at: new Date("2024-04-01T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Fitness & Academia",
    price: 249.90,
    oldPrice: 279.90,
    installmentCount: 8,
    installmentValue: 27.49,
    percentual_discount: 12.0
  },
  {
    id: "p1b2c3d0-0025-0000-0000-000000000025",
    sku: "PRN-INF-018",
    name: "Prancha Inflável Stand Up Paddle",
    slug: "prancha-inflavel-stand-up-paddle",
    description: "Prancha de SUP inflável com bomba manual, remo ajustável, kit reparo, bolsa de transporte, ideal para iniciantes e águas calmas.",
    brand_id: null,
    category_id: "a1b2c3d0-6002-0000-0000-000000000002", // Esportes Aquáticos
    cost_price: 200.00,
    sale_price: 399.90,
    discount_price: 359.90,
    currency: "BRL",
    stock_quantity: 18,
    width_cm: 80.0,
    height_cm: 15.0,
    length_cm: 320.0,
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80",
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=800&q=80"
    ],
    attributes: {
      tipo: "Inflável",
      comprimento: "3.2m",
      largura: "80cm",
      espessura: "15cm",
      acessorios: "Bomba, Remo, Kit Reparo"
    },
    colors: [
      { value: "azul", label: "Azul", hex: "#1976d2", available: true },
      { value: "verde", label: "Verde", hex: "#2e7d32", available: true },
      { value: "laranja", label: "Laranja", hex: "#f57c00", available: false }
    ],
    status: "active",
    created_at: new Date("2024-04-05T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Esportes Aquáticos",
    price: 399.90,
    oldPrice: 449.90,
    installmentCount: 10,
    installmentValue: 35.99,
    percentual_discount: 10.0
  },
  {
    id: "p1b2c3d0-0026-0000-0000-000000000026",
    sku: "BOL-FUT-019",
    name: "Bola de Futebol Campo Oficial",
    slug: "bola-futebol-campo-oficial",
    description: "Bola de futebol oficial tamanho 5, couro sintético PU, câmara de borracha, costuras reforçadas, ideal para jogos e treinos profissionais.",
    brand_id: null,
    category_id: "a1b2c3d0-6004-0000-0000-000000000004", // Futebol & Esportes
    cost_price: 30.00,
    sale_price: 69.90,
    discount_price: 59.90,
    currency: "BRL",
    stock_quantity: 80,
    width_cm: 22.0,
    height_cm: 22.0,
    length_cm: 22.0,
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80",
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=800&q=80",
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=800&q=80"
    ],
    attributes: {
      tamanho: "5 (Oficial)",
      material: "Couro Sintético PU",
      camara: "Borracha",
      costuras: "Reforçadas",
      uso: "Profissional"
    },
    colors: [
      { value: "branco-preto", label: "Branco/Preto", hex: "#fafafa", available: true },
      { value: "amarelo-azul", label: "Amarelo/Azul", hex: "#fbc02d", available: true },
      { value: "verde-branco", label: "Verde/Branco", hex: "#2e7d32", available: false }
    ],
    status: "active",
    created_at: new Date("2024-04-10T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Futebol & Esportes",
    price: 69.90,
    oldPrice: 79.90,
    installmentCount: 3,
    installmentValue: 19.97,
    percentual_discount: 14.3
  },

  // NOVOS PRODUTOS - VESTIMENTA
  {
    id: "p1b2c3d0-0027-0000-0000-000000000027",
    sku: "BLU-MOL-001",
    name: "Blusa Moletom Feminina Com Capuz",
    slug: "blusa-moletom-feminina-capuz",
    description: "Blusa moletom feminina com capuz, tecido macio e confortável, bolso canguru, ideal para dias frios e looks casuais.",
    brand_id: null,
    category_id: "a1b2c3d0-1001-0000-0000-000000000001", // Camisetas & Blusas
    cost_price: 35.00,
    sale_price: 79.90,
    discount_price: 69.90,
    currency: "BRL",
    stock_quantity: 80,
    width_cm: null,
    height_cm: null,
    length_cm: null,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5b?w=800&q=80"
    ],
    attributes: {
      tamanhos: ["PP", "P", "M", "G", "GG"],
      cores: [
        { value: "rosa", label: "Rosa", hex: "#ffc0cb", available: true },
        { value: "cinza", label: "Cinza", hex: "#808080", available: true },
        { value: "preto", label: "Preto", hex: "#000000", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-01T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Camisetas & Blusas",
    price: 79.90,
    oldPrice: 89.90,
    installmentCount: 4,
    installmentValue: 17.48,
    percentual_discount: 12.5
  },
  {
    id: "p1b2c3d0-0028-0000-0000-000000000028",
    sku: "CAM-POL-002",
    name: "Camisa Polo Masculina Piquet",
    slug: "camisa-polo-masculina-piquet",
    description: "Camisa polo masculina em tecido piquet, gola e punhos em ribana, corte tradicional, ideal para trabalho e lazer.",
    brand_id: null,
    category_id: "a1b2c3d0-1001-0000-0000-000000000001", // Camisetas & Blusas
    cost_price: 40.00,
    sale_price: 89.90,
    discount_price: null,
    currency: "BRL",
    stock_quantity: 120,
    width_cm: null,
    height_cm: null,
    length_cm: null,
    images: [
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80"
    ],
    attributes: {
      tamanhos: ["P", "M", "G", "GG", "XG"],
      cores: [
        { value: "branco", label: "Branco", hex: "#ffffff", available: true },
        { value: "azul-marinho", label: "Azul Marinho", hex: "#001f3f", available: true },
        { value: "preto", label: "Preto", hex: "#000000", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-02T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Camisetas & Blusas",
    price: 89.90,
    oldPrice: null,
    installmentCount: 4,
    installmentValue: 22.48,
    percentual_discount: 0
  },
  {
    id: "p1b2c3d0-0029-0000-0000-000000000029",
    sku: "REG-FEM-003",
    name: "Regata Feminina Fitness Dry Fit",
    slug: "regata-feminina-fitness-dry-fit",
    description: "Regata feminina para academia em tecido dry fit, tecnologia que afasta o suor, corte anatômico, perfeita para treinos.",
    brand_id: null,
    category_id: "a1b2c3d0-1001-0000-0000-000000000001", // Camisetas & Blusas
    cost_price: 25.00,
    sale_price: 59.90,
    discount_price: 49.90,
    currency: "BRL",
    stock_quantity: 90,
    width_cm: null,
    height_cm: null,
    length_cm: null,
    images: [
      "https://images.unsplash.com/photo-1506629905607-45ff0c7f9c2b?w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
    ],
    attributes: {
      tamanhos: ["PP", "P", "M", "G"],
      cores: [
        { value: "rosa", label: "Rosa", hex: "#ff69b4", available: true },
        { value: "azul", label: "Azul", hex: "#0066cc", available: true },
        { value: "roxo", label: "Roxo", hex: "#800080", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-03T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Camisetas & Blusas",
    price: 59.90,
    oldPrice: 69.90,
    installmentCount: 3,
    installmentValue: 16.63,
    percentual_discount: 16.7
  },

  // NOVOS PRODUTOS - CALÇADOS
  {
    id: "p1b2c3d0-0030-0000-0000-000000000030",
    sku: "TEN-COR-004",
    name: "Tênis de Corrida Masculino Performance",
    slug: "tenis-corrida-masculino-performance",
    description: "Tênis masculino para corrida com tecnologia de amortecimento avançado, solado antiderrapante, cabedal respirável.",
    brand_id: null,
    category_id: "a1b2c3d0-2001-0000-0000-000000000001", // Tênis
    cost_price: 120.00,
    sale_price: 249.90,
    discount_price: 199.90,
    currency: "BRL",
    stock_quantity: 45,
    width_cm: null,
    height_cm: null,
    length_cm: null,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
    ],
    attributes: {
      tamanhos: ["38", "39", "40", "41", "42", "43", "44"],
      cores: [
        { value: "preto-verde", label: "Preto/Verde", hex: "#000000", available: true },
        { value: "cinza-azul", label: "Cinza/Azul", hex: "#808080", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-04T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Tênis",
    price: 249.90,
    oldPrice: 299.90,
    installmentCount: 8,
    installmentValue: 24.99,
    percentual_discount: 20.0
  },
  {
    id: "p1b2c3d0-0031-0000-0000-000000000031",
    sku: "SAN-FEM-005",
    name: "Sandália Feminina Plataforma Couro",
    slug: "sandalia-feminina-plataforma-couro",
    description: "Sandália feminina em couro legítimo com plataforma, tiras ajustáveis, conforto garantido para uso prolongado.",
    brand_id: null,
    category_id: "a1b2c3d0-2004-0000-0000-000000000004", // Sandálias & Chinelos
    cost_price: 85.00,
    sale_price: 179.90,
    discount_price: 149.90,
    currency: "BRL",
    stock_quantity: 60,
    width_cm: null,
    height_cm: null,
    length_cm: null,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
    ],
    attributes: {
      tamanhos: ["34", "35", "36", "37", "38", "39"],
      cores: [
        { value: "caramelo", label: "Caramelo", hex: "#d2691e", available: true },
        { value: "preto", label: "Preto", hex: "#000000", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-05T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Sandálias & Chinelos",
    price: 179.90,
    oldPrice: 199.90,
    installmentCount: 6,
    installmentValue: 24.98,
    percentual_discount: 16.7
  },
  {
    id: "p1b2c3d0-0032-0000-0000-000000000032",
    sku: "BOT-TRA-006",
    name: "Bota de Trabalho Bico de Aço",
    slug: "bota-trabalho-bico-aco",
    description: "Bota de segurança com bico de aço, solado antiderrapante, couro resistente, ideal para trabalhos pesados e construção.",
    brand_id: null,
    category_id: "a1b2c3d0-2003-0000-0000-000000000003", // Botas & Coturnos
    cost_price: 150.00,
    sale_price: 299.90,
    discount_price: 259.90,
    currency: "BRL",
    stock_quantity: 30,
    width_cm: null,
    height_cm: null,
    length_cm: null,
    images: [
      "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=800&q=80",
      "https://images.unsplash.com/photo-1448824913935-59a10b8d2000?w=800&q=80"
    ],
    attributes: {
      tamanhos: ["38", "39", "40", "41", "42", "43", "44", "45"],
      cores: [
        { value: "marrom", label: "Marrom", hex: "#8b4513", available: true },
        { value: "preto", label: "Preto", hex: "#000000", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-06T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Botas & Coturnos",
    price: 299.90,
    oldPrice: 349.90,
    installmentCount: 10,
    installmentValue: 25.99,
    percentual_discount: 13.3
  },

  // NOVOS PRODUTOS - ACESSÓRIOS
  {
    id: "p1b2c3d0-0033-0000-0000-000000000033",
    sku: "COL-COU-007",
    name: "Colar Feminino Corrente Dourada",
    slug: "colar-feminino-corrente-dourada",
    description: "Colar feminino em corrente dourada delicada, pingente coração, folheado a ouro, hipoalergênico, elegante e moderno.",
    brand_id: null,
    category_id: "a1b2c3d0-3003-0000-0000-000000000003", // Joias & Bijuterias
    cost_price: 20.00,
    sale_price: 49.90,
    discount_price: 39.90,
    currency: "BRL",
    stock_quantity: 150,
    width_cm: null,
    height_cm: null,
    length_cm: null,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&q=80"
    ],
    attributes: {
      cores: [
        { value: "dourado", label: "Dourado", hex: "#ffd700", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-07T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Joias & Bijuterias",
    price: 49.90,
    oldPrice: 59.90,
    installmentCount: 2,
    installmentValue: 19.95,
    percentual_discount: 20.0
  },
  {
    id: "p1b2c3d0-0034-0000-0000-000000000034",
    sku: "CHA-SOL-008",
    name: "Chapéu de Sol Palha Natural",
    slug: "chapeu-sol-palha-natural",
    description: "Chapéu de sol em palha natural trançada, aba larga para proteção UV, design clássico e atemporal, unissex.",
    brand_id: null,
    category_id: "a1b2c3d0-3004-0000-0000-000000000004", // Óculos & Chapéus
    cost_price: 25.00,
    sale_price: 69.90,
    discount_price: 59.90,
    currency: "BRL",
    stock_quantity: 40,
    width_cm: null,
    height_cm: null,
    length_cm: null,
    images: [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80"
    ],
    attributes: {
      tamanhos: ["M", "G"],
      cores: [
        { value: "natural", label: "Natural", hex: "#daa520", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-08T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Óculos & Chapéus",
    price: 69.90,
    oldPrice: 79.90,
    installmentCount: 3,
    installmentValue: 19.97,
    percentual_discount: 14.3
  },
  {
    id: "p1b2c3d0-0035-0000-0000-000000000035",
    sku: "MOC-ESC-009",
    name: "Mochila Escolar Estampada",
    slug: "mochila-escolar-estampada",
    description: "Mochila escolar com compartimentos organizadores, alças acolchoadas, material resistente à água, estampa moderna.",
    brand_id: null,
    category_id: "a1b2c3d0-3002-0000-0000-000000000002", // Bolsas & Mochilas
    cost_price: 45.00,
    sale_price: 99.90,
    discount_price: 79.90,
    currency: "BRL",
    stock_quantity: 85,
    width_cm: 30.0,
    height_cm: 45.0,
    length_cm: 20.0,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800&q=80"
    ],
    attributes: {
      cores: [
        { value: "azul-estrelas", label: "Azul com Estrelas", hex: "#4169e1", available: true },
        { value: "rosa-flores", label: "Rosa com Flores", hex: "#ff1493", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-09T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Bolsas & Mochilas",
    price: 99.90,
    oldPrice: 119.90,
    installmentCount: 4,
    installmentValue: 19.98,
    percentual_discount: 20.0
  },

  // NOVOS PRODUTOS - TECNOLOGIA
  {
    id: "p1b2c3d0-0036-0000-0000-000000000036",
    sku: "FON-BLU-010",
    name: "Fone Bluetooth Sem Fio Esportivo",
    slug: "fone-bluetooth-sem-fio-esportivo",
    description: "Fone de ouvido Bluetooth à prova de suor, cancelamento de ruído, bateria 8h, ideal para esportes e academia.",
    brand_id: null,
    category_id: "a1b2c3d0-4003-0000-0000-000000000003", // Áudio & TV
    cost_price: 80.00,
    sale_price: 179.90,
    discount_price: 149.90,
    currency: "BRL",
    stock_quantity: 70,
    width_cm: 15.0,
    height_cm: 5.0,
    length_cm: 20.0,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80"
    ],
    attributes: {
      conectividade: "Bluetooth 5.0",
      bateria: "8 horas",
      cores: [
        { value: "preto", label: "Preto", hex: "#000000", available: true },
        { value: "branco", label: "Branco", hex: "#ffffff", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-10T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Áudio & TV",
    price: 179.90,
    oldPrice: 199.90,
    installmentCount: 6,
    installmentValue: 24.98,
    percentual_discount: 16.7
  },
  {
    id: "p1b2c3d0-0037-0000-0000-000000000037",
    sku: "TAB-AND-011",
    name: "Tablet Android 10 Polegadas 64GB",
    slug: "tablet-android-10-polegadas-64gb",
    description: "Tablet Android com tela 10 polegadas Full HD, processador quad-core, 4GB RAM, 64GB storage, WiFi, ideal para estudos.",
    brand_id: null,
    category_id: "a1b2c3d0-4001-0000-0000-000000000001", // Smartphones & Tablets
    cost_price: 350.00,
    sale_price: 699.90,
    discount_price: 599.90,
    currency: "BRL",
    stock_quantity: 25,
    width_cm: 25.0,
    height_cm: 1.0,
    length_cm: 17.0,
    images: [
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&q=80",
      "https://images.unsplash.com/photo-1509593142389-23f11f95f555?w=800&q=80"
    ],
    attributes: {
      tela: "10 polegadas Full HD",
      sistema: "Android 12",
      armazenamento: "64GB",
      cores: [
        { value: "preto", label: "Preto", hex: "#000000", available: true },
        { value: "prata", label: "Prata", hex: "#c0c0c0", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-11T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Smartphones & Tablets",
    price: 699.90,
    oldPrice: 799.90,
    installmentCount: 12,
    installmentValue: 49.99,
    percentual_discount: 14.3
  },
  {
    id: "p1b2c3d0-0038-0000-0000-000000000038",
    sku: "CAR-USB-012",
    name: "Carregador Portátil USB-C 20000mAh",
    slug: "carregador-portatil-usb-c-20000mah",
    description: "Power bank com capacidade 20000mAh, carregamento rápido USB-C, display LED, múltiplas portas, compatível com smartphones.",
    brand_id: null,
    category_id: "a1b2c3d0-4004-0000-0000-000000000004", // Acessórios Tech
    cost_price: 60.00,
    sale_price: 129.90,
    discount_price: 99.90,
    currency: "BRL",
    stock_quantity: 120,
    width_cm: 15.0,
    height_cm: 3.0,
    length_cm: 7.0,
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80"
    ],
    attributes: {
      capacidade: "20000mAh",
      portas: "USB-C, USB-A",
      cores: [
        { value: "preto", label: "Preto", hex: "#000000", available: true },
        { value: "azul", label: "Azul", hex: "#0066cc", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-12T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Acessórios Tech",
    price: 129.90,
    oldPrice: 149.90,
    installmentCount: 5,
    installmentValue: 19.98,
    percentual_discount: 23.1
  },

  // NOVOS PRODUTOS - CASA & JARDIM
  {
    id: "p1b2c3d0-0039-0000-0000-000000000039",
    sku: "LUM-LED-013",
    name: "Luminária LED de Mesa Articulada",
    slug: "luminaria-led-mesa-articulada",
    description: "Luminária LED de mesa com braço articulado, 3 níveis de intensidade, luz branca fria, ideal para escritório e estudo.",
    brand_id: null,
    category_id: "a1b2c3d0-5001-0000-0000-000000000001", // Móveis & Decoração
    cost_price: 45.00,
    sale_price: 99.90,
    discount_price: 79.90,
    currency: "BRL",
    stock_quantity: 50,
    width_cm: 20.0,
    height_cm: 60.0,
    length_cm: 20.0,
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
    ],
    attributes: {
      tipo_luz: "LED Branca Fria",
      potencia: "12W",
      cores: [
        { value: "preto", label: "Preto", hex: "#000000", available: true },
        { value: "branco", label: "Branco", hex: "#ffffff", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-13T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Móveis & Decoração",
    price: 99.90,
    oldPrice: 119.90,
    installmentCount: 4,
    installmentValue: 19.98,
    percentual_discount: 20.0
  },
  {
    id: "p1b2c3d0-0040-0000-0000-000000000040",
    sku: "JOG-PRA-014",
    name: "Jogo de Pratos Porcelana 6 Peças",
    slug: "jogo-pratos-porcelana-6-pecas",
    description: "Conjunto de 6 pratos rasos em porcelana branca, design clássico e elegante, resistente e durável, microondas safe.",
    brand_id: null,
    category_id: "a1b2c3d0-5002-0000-0000-000000000002", // Cozinha & Mesa
    cost_price: 80.00,
    sale_price: 159.90,
    discount_price: 129.90,
    currency: "BRL",
    stock_quantity: 35,
    width_cm: 27.0,
    height_cm: 15.0,
    length_cm: 27.0,
    images: [
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
    ],
    attributes: {
      material: "Porcelana",
      quantidade: "6 pratos",
      cores: [
        { value: "branco", label: "Branco", hex: "#ffffff", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-14T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Cozinha & Mesa",
    price: 159.90,
    oldPrice: 189.90,
    installmentCount: 6,
    installmentValue: 21.65,
    percentual_discount: 18.7
  },
  {
    id: "p1b2c3d0-0041-0000-0000-000000000041",
    sku: "VAS-DEC-015",
    name: "Vaso Decorativo Cerâmica Moderna",
    slug: "vaso-decorativo-ceramica-moderna",
    description: "Vaso decorativo em cerâmica com design moderno e minimalista, perfeito para plantas pequenas ou como peça decorativa.",
    brand_id: null,
    category_id: "a1b2c3d0-5003-0000-0000-000000000003", // Jardim & Plantas
    cost_price: 30.00,
    sale_price: 69.90,
    discount_price: 59.90,
    currency: "BRL",
    stock_quantity: 80,
    width_cm: 15.0,
    height_cm: 20.0,
    length_cm: 15.0,
    images: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&q=80"
    ],
    attributes: {
      material: "Cerâmica",
      cores: [
        { value: "branco", label: "Branco", hex: "#ffffff", available: true },
        { value: "cinza", label: "Cinza", hex: "#808080", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-15T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Jardim & Plantas",
    price: 69.90,
    oldPrice: 79.90,
    installmentCount: 3,
    installmentValue: 19.97,
    percentual_discount: 14.3
  },

  // NOVOS PRODUTOS - ESPORTE & LAZER
  {
    id: "p1b2c3d0-0042-0000-0000-000000000042",
    sku: "YOG-TAP-016",
    name: "Tapete de Yoga Antiderrapante",
    slug: "tapete-yoga-antiderrapante",
    description: "Tapete para yoga em material PVC ecológico, superfície antiderrapante, espessura 6mm, com alça para transporte.",
    brand_id: null,
    category_id: "a1b2c3d0-6001-0000-0000-000000000001", // Fitness & Academia
    cost_price: 40.00,
    sale_price: 89.90,
    discount_price: 69.90,
    currency: "BRL",
    stock_quantity: 60,
    width_cm: 60.0,
    height_cm: 0.6,
    length_cm: 180.0,
    images: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80"
    ],
    attributes: {
      material: "PVC Ecológico",
      espessura: "6mm",
      cores: [
        { value: "roxo", label: "Roxo", hex: "#800080", available: true },
        { value: "azul", label: "Azul", hex: "#0066cc", available: true },
        { value: "verde", label: "Verde", hex: "#008000", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-16T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Fitness & Academia",
    price: 89.90,
    oldPrice: 109.90,
    installmentCount: 4,
    installmentValue: 17.48,
    percentual_discount: 22.2
  },
  {
    id: "p1b2c3d0-0043-0000-0000-000000000043",
    sku: "BIC-MON-017",
    name: "Bicicleta Mountain Bike Aro 29",
    slug: "bicicleta-mountain-bike-aro-29",
    description: "Bicicleta mountain bike aro 29, quadro em alumínio, 21 marchas, freios a disco, suspensão dianteira, ideal para trilhas.",
    brand_id: null,
    category_id: "a1b2c3d0-6003-0000-0000-000000000003", // Ciclismo
    cost_price: 800.00,
    sale_price: 1599.90,
    discount_price: 1299.90,
    currency: "BRL",
    stock_quantity: 15,
    width_cm: 180.0,
    height_cm: 110.0,
    length_cm: 70.0,
    images: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80"
    ],
    attributes: {
      aro: "29",
      material_quadro: "Alumínio",
      marchas: "21 velocidades",
      cores: [
        { value: "preto-verde", label: "Preto/Verde", hex: "#000000", available: true },
        { value: "azul-branco", label: "Azul/Branco", hex: "#0066cc", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-17T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Ciclismo",
    price: 1599.90,
    oldPrice: 1899.90,
    installmentCount: 12,
    installmentValue: 108.33,
    percentual_discount: 18.7
  },
  {
    id: "p1b2c3d0-0044-0000-0000-000000000044",
    sku: "KIT-PES-018",
    name: "Kit de Pesca Completo Iniciante",
    slug: "kit-pesca-completo-iniciante",
    description: "Kit completo para iniciantes na pesca, vara telescópica, molinete, iscas variadas, linha e acessórios essenciais.",
    brand_id: null,
    category_id: "a1b2c3d0-6005-0000-0000-000000000005", // Pesca & Caça
    cost_price: 120.00,
    sale_price: 249.90,
    discount_price: 199.90,
    currency: "BRL",
    stock_quantity: 40,
    width_cm: 150.0,
    height_cm: 20.0,
    length_cm: 30.0,
    images: [
      "https://images.unsplash.com/photo-1527004760525-5f9d0b1bf2a6?w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
    ],
    attributes: {
      tipo_vara: "Telescópica",
      tamanho_vara: "2.1m",
      itens_inclusos: "Vara, molinete, iscas, linha",
      cores: [
        { value: "preto", label: "Preto", hex: "#000000", available: true }
      ]
    },
    status: "active",
    created_at: new Date("2024-05-18T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Pesca & Caça",
    price: 249.90,
    oldPrice: 299.90,
    installmentCount: 8,
    installmentValue: 24.99,
    percentual_discount: 20.0
  },

  // NOVOS PRODUTOS - BELEZA & CUIDADOS
  {
    id: "p1b2c3d0-0045-0000-0000-000000000045",
    sku: "SER-HID-019",
    name: "Sérum Facial Hidratante Vitamina C",
    slug: "serum-facial-hidratante-vitamina-c",
    description: "Sérum facial com vitamina C concentrada, ação antioxidante, hidratação profunda, combate o envelhecimento precoce.",
    brand_id: null,
    category_id: "a1b2c3d0-7001-0000-0000-000000000001", // Cuidados Faciais
    cost_price: 35.00,
    sale_price: 79.90,
    discount_price: 59.90,
    currency: "BRL",
    stock_quantity: 100,
    width_cm: 5.0,
    height_cm: 12.0,
    length_cm: 5.0,
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
      "https://images.unsplash.com/photo-1570194065650-d99c79543f25?w=800&q=80"
    ],
    attributes: {
      volume: "30ml",
      tipo_pele: "Todos os tipos",
      ingrediente_ativo: "Vitamina C 20%"
    },
    status: "active",
    created_at: new Date("2024-05-19T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Cuidados Faciais",
    price: 79.90,
    oldPrice: 99.90,
    installmentCount: 3,
    installmentValue: 19.97,
    percentual_discount: 25.0
  },
  {
    id: "p1b2c3d0-0046-0000-0000-000000000046",
    sku: "SHA-KER-020",
    name: "Shampoo e Condicionador Kit Reparador",
    slug: "shampoo-condicionador-kit-reparador",
    description: "Kit reparador com shampoo e condicionador para cabelos danificados, fórmula com óleos naturais e queratina.",
    brand_id: null,
    category_id: "a1b2c3d0-7002-0000-0000-000000000002", // Cuidados Cabelo
    cost_price: 45.00,
    sale_price: 99.90,
    discount_price: 79.90,
    currency: "BRL",
    stock_quantity: 75,
    width_cm: 15.0,
    height_cm: 25.0,
    length_cm: 8.0,
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80"
    ],
    attributes: {
      volume: "400ml cada",
      tipo_cabelo: "Cabelos danificados",
      ingredientes: "Queratina e óleos naturais"
    },
    status: "active",
    created_at: new Date("2024-05-20T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Cuidados Cabelo",
    price: 99.90,
    oldPrice: 119.90,
    installmentCount: 4,
    installmentValue: 19.98,
    percentual_discount: 20.0
  },
  {
    id: "p1b2c3d0-0047-0000-0000-000000000047",
    sku: "PER-FEM-021",
    name: "Perfume Feminino Floral 100ml",
    slug: "perfume-feminino-floral-100ml",
    description: "Perfume feminino com notas florais delicadas, fragrância duradoura, frasco elegante, ideal para o dia a dia.",
    brand_id: null,
    category_id: "a1b2c3d0-7003-0000-0000-000000000003", // Perfumes & Fragrâncias
    cost_price: 80.00,
    sale_price: 179.90,
    discount_price: 149.90,
    currency: "BRL",
    stock_quantity: 40,
    width_cm: 8.0,
    height_cm: 15.0,
    length_cm: 8.0,
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80"
    ],
    attributes: {
      volume: "100ml",
      familia_olfativa: "Floral",
      fixacao: "8 horas"
    },
    status: "active",
    created_at: new Date("2024-05-21T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Perfumes & Fragrâncias",
    price: 179.90,
    oldPrice: 199.90,
    installmentCount: 6,
    installmentValue: 24.98,
    percentual_discount: 16.7
  },

  // NOVOS PRODUTOS - FERRAMENTAS & EQUIPAMENTOS
  {
    id: "p1b2c3d0-0048-0000-0000-000000000048",
    sku: "FUR-ELE-022",
    name: "Furadeira Elétrica 550W com Maleta",
    slug: "furadeira-eletrica-550w-maleta",
    description: "Furadeira elétrica 550W com mandril de 13mm, velocidade variável, reversível, acompanha maleta com brocas variadas.",
    brand_id: null,
    category_id: "a1b2c3d0-8001-0000-0000-000000000001", // Ferramentas Elétricas
    cost_price: 180.00,
    sale_price: 359.90,
    discount_price: 299.90,
    currency: "BRL",
    stock_quantity: 25,
    width_cm: 35.0,
    height_cm: 25.0,
    length_cm: 12.0,
    images: [
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80"
    ],
    attributes: {
      potencia: "550W",
      mandril: "13mm",
      velocidade: "Variável",
      acessorios: "Maleta com brocas"
    },
    status: "active",
    created_at: new Date("2024-05-22T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Ferramentas Elétricas",
    price: 359.90,
    oldPrice: 399.90,
    installmentCount: 10,
    installmentValue: 29.99,
    percentual_discount: 16.7
  },
  {
    id: "p1b2c3d0-0049-0000-0000-000000000049",
    sku: "CHA-FEN-023",
    name: "Chave de Fenda e Phillips Kit 12 Peças",
    slug: "chave-fenda-phillips-kit-12-pecas",
    description: "Kit com 12 chaves de fenda e phillips em tamanhos variados, cabo ergonômico, ponteiras magnéticas, estojo organizador.",
    brand_id: null,
    category_id: "a1b2c3d0-8002-0000-0000-000000000002", // Ferramentas Manuais
    cost_price: 25.00,
    sale_price: 59.90,
    discount_price: 49.90,
    currency: "BRL",
    stock_quantity: 80,
    width_cm: 25.0,
    height_cm: 15.0,
    length_cm: 5.0,
    images: [
      "https://images.unsplash.com/photo-1609156094455-6c7de4b5c7e2?w=800&q=80",
      "https://images.unsplash.com/photo-1610551896169-5ca8b3bbde06?w=800&q=80"
    ],
    attributes: {
      quantidade: "12 peças",
      tipos: "Fenda e Phillips",
      cabo: "Ergonômico",
      ponteiras: "Magnéticas"
    },
    status: "active",
    created_at: new Date("2024-05-23T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Ferramentas Manuais",
    price: 59.90,
    oldPrice: 69.90,
    installmentCount: 3,
    installmentValue: 16.63,
    percentual_discount: 16.7
  },
  {
    id: "p1b2c3d0-0050-0000-0000-000000000050",
    sku: "TRA-MET-024",
    name: "Trena Métrica 5 Metros Profissional",
    slug: "trena-metrica-5-metros-profissional",
    description: "Trena métrica profissional de 5 metros, fita aço inoxidável, trava automática, caixa resistente a impactos.",
    brand_id: null,
    category_id: "a1b2c3d0-8003-0000-0000-000000000003", // Medição & Nivelamento
    cost_price: 20.00,
    sale_price: 49.90,
    discount_price: 39.90,
    currency: "BRL",
    stock_quantity: 100,
    width_cm: 8.0,
    height_cm: 8.0,
    length_cm: 3.0,
    images: [
      "https://images.unsplash.com/photo-1609831774411-27a67fd6b5ec?w=800&q=80",
      "https://images.unsplash.com/photo-1611274341645-1dd5598c9e2b?w=800&q=80"
    ],
    attributes: {
      comprimento: "5 metros",
      material_fita: "Aço inoxidável",
      trava: "Automática",
      graduacao: "mm e polegadas"
    },
    status: "active",
    created_at: new Date("2024-05-24T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Medição & Nivelamento",
    price: 49.90,
    oldPrice: 59.90,
    installmentCount: 2,
    installmentValue: 19.95,
    percentual_discount: 20.0
  },

  // NOVOS PRODUTOS - LIVROS & EDUCAÇÃO
  {
    id: "p1b2c3d0-0051-0000-0000-000000000051",
    sku: "LIV-FIC-025",
    name: "Livro Ficção Científica Best-Seller",
    slug: "livro-ficcao-cientifica-best-seller",
    description: "Romance de ficção científica aclamado pela crítica, narrativa envolvente sobre viagens no tempo e realidades paralelas.",
    brand_id: null,
    category_id: "a1b2c3d0-9001-0000-0000-000000000001", // Literatura & Ficção
    cost_price: 15.00,
    sale_price: 39.90,
    discount_price: 29.90,
    currency: "BRL",
    stock_quantity: 150,
    width_cm: 14.0,
    height_cm: 21.0,
    length_cm: 2.0,
    images: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    ],
    attributes: {
      paginas: "320 páginas",
      editora: "Editora Nacional",
      idioma: "Português",
      formato: "Brochura"
    },
    status: "active",
    created_at: new Date("2024-05-25T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Literatura & Ficção",
    price: 39.90,
    oldPrice: 49.90,
    installmentCount: 2,
    installmentValue: 14.95,
    percentual_discount: 25.0
  },
  {
    id: "p1b2c3d0-0052-0000-0000-000000000052",
    sku: "CAD-EST-026",
    name: "Caderno Universitário 10 Matérias",
    slug: "caderno-universitario-10-materias",
    description: "Caderno universitário espiral com 10 matérias, 200 folhas, papel de qualidade, capa dura resistente, divisórias coloridas.",
    brand_id: null,
    category_id: "a1b2c3d0-9002-0000-0000-000000000002", // Material Escolar
    cost_price: 12.00,
    sale_price: 29.90,
    discount_price: 24.90,
    currency: "BRL",
    stock_quantity: 200,
    width_cm: 20.0,
    height_cm: 28.0,
    length_cm: 2.0,
    images: [
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"
    ],
    attributes: {
      materias: "10 matérias",
      folhas: "200 folhas",
      tipo_papel: "Sulfite 75g",
      capa: "Dura plastificada"
    },
    status: "active",
    created_at: new Date("2024-05-26T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Material Escolar",
    price: 29.90,
    oldPrice: 34.90,
    installmentCount: 2,
    installmentValue: 12.45,
    percentual_discount: 16.7
  },
  {
    id: "p1b2c3d0-0053-0000-0000-000000000053",
    sku: "CUR-TEC-027",
    name: "Curso Online Programação Python",
    slug: "curso-online-programacao-python",
    description: "Curso online completo de programação em Python, do básico ao avançado, certificado incluso, acesso vitalício.",
    brand_id: null,
    category_id: "a1b2c3d0-9003-0000-0000-000000000003", // Cursos Online
    cost_price: 80.00,
    sale_price: 199.90,
    discount_price: 149.90,
    currency: "BRL",
    stock_quantity: 999,
    width_cm: null,
    height_cm: null,
    length_cm: null,
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80"
    ],
    attributes: {
      duracao: "40 horas",
      nivel: "Básico ao avançado",
      certificado: "Incluso",
      acesso: "Vitalício"
    },
    status: "active",
    created_at: new Date("2024-05-27T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Cursos Online",
    price: 199.90,
    oldPrice: 249.90,
    installmentCount: 6,
    installmentValue: 24.98,
    percentual_discount: 25.0
  },

  // NOVOS PRODUTOS - ALIMENTAÇÃO & BEBIDAS
  {
    id: "p1b2c3d0-0054-0000-0000-000000000054",
    sku: "CAF-ESP-028",
    name: "Café Especial Torrado em Grãos 500g",
    slug: "cafe-especial-torrado-graos-500g",
    description: "Café especial 100% arábica, torra média, notas de chocolate e caramelo, origem única, processo sustentável.",
    brand_id: null,
    category_id: "a1b2c3d0-10001-0000-0000-000000000001", // Cafés & Chás
    cost_price: 20.00,
    sale_price: 49.90,
    discount_price: 39.90,
    currency: "BRL",
    stock_quantity: 80,
    width_cm: 15.0,
    height_cm: 20.0,
    length_cm: 8.0,
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
    ],
    attributes: {
      peso: "500g",
      tipo: "100% Arábica",
      torra: "Média",
      origem: "Brasil - Cerrado Mineiro"
    },
    status: "active",
    created_at: new Date("2024-05-28T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Cafés & Chás",
    price: 49.90,
    oldPrice: 59.90,
    installmentCount: 2,
    installmentValue: 19.95,
    percentual_discount: 20.0
  },
  {
    id: "p1b2c3d0-0055-0000-0000-000000000055",
    sku: "MEL-PUR-029",
    name: "Mel Puro Orgânico 250g",
    slug: "mel-puro-organico-250g",
    description: "Mel puro orgânico de flores silvestres, sem conservantes, produção sustentável, rico em nutrientes e antioxidantes.",
    brand_id: null,
    category_id: "a1b2c3d0-10002-0000-0000-000000000002", // Produtos Naturais
    cost_price: 15.00,
    sale_price: 34.90,
    discount_price: 29.90,
    currency: "BRL",
    stock_quantity: 60,
    width_cm: 8.0,
    height_cm: 12.0,
    length_cm: 8.0,
    images: [
      "https://images.unsplash.com/photo-1587049016627-c0d8cae2ee3a?w=800&q=80",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80"
    ],
    attributes: {
      peso: "250g",
      tipo: "Orgânico certificado",
      origem: "Flores silvestres",
      conservantes: "Sem conservantes"
    },
    status: "active",
    created_at: new Date("2024-05-29T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Produtos Naturais",
    price: 34.90,
    oldPrice: 39.90,
    installmentCount: 2,
    installmentValue: 14.95,
    percentual_discount: 14.3
  },
  {
    id: "p1b2c3d0-0056-0000-0000-000000000056",
    sku: "SUC-NAT-030",
    name: "Suco Natural Detox Mix 6 Sabores",
    slug: "suco-natural-detox-mix-6-sabores",
    description: "Kit com 6 sucos naturais detox, diferentes combinações de frutas e vegetais, sem açúcar adicionado, embalagem sustentável.",
    brand_id: null,
    category_id: "a1b2c3d0-10003-0000-0000-000000000003", // Bebidas Naturais
    cost_price: 35.00,
    sale_price: 79.90,
    discount_price: 69.90,
    currency: "BRL",
    stock_quantity: 40,
    width_cm: 25.0,
    height_cm: 20.0,
    length_cm: 15.0,
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80"
    ],
    attributes: {
      sabores: "6 diferentes",
      volume_unitario: "300ml",
      acucar: "Sem açúcar adicionado",
      conservacao: "Refrigerado"
    },
    status: "active",
    created_at: new Date("2024-05-30T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Bebidas Naturais",
    price: 79.90,
    oldPrice: 89.90,
    installmentCount: 3,
    installmentValue: 23.30,
    percentual_discount: 12.5
  },

  // NOVOS PRODUTOS - AUTOMOTIVO
  {
    id: "p1b2c3d0-0057-0000-0000-000000000057",
    sku: "AUT-OLE-031",
    name: "Óleo Motor 5W30 Sintético 4L",
    slug: "oleo-motor-5w30-sintetico-4l",
    description: "Óleo lubrificante sintético 5W30 para motores, alta performance, proteção contra desgaste, ideal para carros modernos.",
    brand_id: null,
    category_id: "a1b2c3d0-11001-0000-0000-000000000001", // Óleos & Lubrificantes
    cost_price: 80.00,
    sale_price: 159.90,
    discount_price: 129.90,
    currency: "BRL",
    stock_quantity: 50,
    width_cm: 20.0,
    height_cm: 25.0,
    length_cm: 15.0,
    images: [
      "https://images.unsplash.com/photo-1609156094455-6c7de4b5c7e2?w=800&q=80",
      "https://images.unsplash.com/photo-1610551896169-5ca8b3bbde06?w=800&q=80"
    ],
    attributes: {
      volume: "4 litros",
      viscosidade: "5W30",
      tipo: "Sintético",
      aplicacao: "Motores gasolina/flex"
    },
    status: "active",
    created_at: new Date("2024-05-31T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Óleos & Lubrificantes",
    price: 159.90,
    oldPrice: 179.90,
    installmentCount: 6,
    installmentValue: 21.65,
    percentual_discount: 18.7
  },
  {
    id: "p1b2c3d0-0058-0000-0000-000000000058",
    sku: "AUT-PNE-032",
    name: "Pneu Aro 15 185/65R15 88H",
    slug: "pneu-aro-15-185-65r15-88h",
    description: "Pneu radial aro 15, medida 185/65R15, índice de carga 88H, aderência excelente, durabilidade garantida.",
    brand_id: null,
    category_id: "a1b2c3d0-11002-0000-0000-000000000002", // Pneus & Rodas
    cost_price: 200.00,
    sale_price: 399.90,
    discount_price: 349.90,
    currency: "BRL",
    stock_quantity: 30,
    width_cm: 65.0,
    height_cm: 65.0,
    length_cm: 20.0,
    images: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80"
    ],
    attributes: {
      aro: "15 polegadas",
      medida: "185/65R15",
      indice_carga: "88H",
      tipo: "Radial"
    },
    status: "active",
    created_at: new Date("2024-06-01T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Pneus & Rodas",
    price: 399.90,
    oldPrice: 449.90,
    installmentCount: 10,
    installmentValue: 34.99,
    percentual_discount: 12.5
  },
  {
    id: "p1b2c3d0-0059-0000-0000-000000000059",
    sku: "AUT-BAT-033",
    name: "Bateria Automotiva 60Ah Selada",
    slug: "bateria-automotiva-60ah-selada",
    description: "Bateria automotiva 60Ah livre de manutenção, tecnologia selada, alta durabilidade, 24 meses de garantia.",
    brand_id: null,
    category_id: "a1b2c3d0-11003-0000-0000-000000000003", // Baterias & Elétrica
    cost_price: 180.00,
    sale_price: 359.90,
    discount_price: 299.90,
    currency: "BRL",
    stock_quantity: 25,
    width_cm: 24.0,
    height_cm: 19.0,
    length_cm: 17.0,
    images: [
      "https://images.unsplash.com/photo-1609156094455-6c7de4b5c7e2?w=800&q=80",
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80"
    ],
    attributes: {
      capacidade: "60Ah",
      tipo: "Selada livre manutencao",
      garantia: "24 meses",
      aplicacao: "Carros 1.0 a 1.6"
    },
    status: "active",
    created_at: new Date("2024-06-02T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Baterias & Elétrica",
    price: 359.90,
    oldPrice: 399.90,
    installmentCount: 10,
    installmentValue: 29.99,
    percentual_discount: 16.7
  },

  // NOVOS PRODUTOS - PET SHOP
  {
    id: "p1b2c3d0-0060-0000-0000-000000000060",
    sku: "PET-RAC-034",
    name: "Ração Premium Cão Adulto 15kg",
    slug: "racao-premium-cao-adulto-15kg",
    description: "Ração super premium para cães adultos, rica em proteínas, vitaminas e minerais, sabor frango e arroz.",
    brand_id: null,
    category_id: "a1b2c3d0-12001-0000-0000-000000000001", // Alimentação Pet
    cost_price: 120.00,
    sale_price: 249.90,
    discount_price: 199.90,
    currency: "BRL",
    stock_quantity: 40,
    width_cm: 45.0,
    height_cm: 65.0,
    length_cm: 15.0,
    images: [
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
      "https://images.unsplash.com/photo-1553736277-055142d018f0?w=800&q=80"
    ],
    attributes: {
      peso: "15kg",
      idade: "Cães adultos",
      sabor: "Frango e arroz",
      categoria: "Super premium"
    },
    status: "active",
    created_at: new Date("2024-06-03T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Alimentação Pet",
    price: 249.90,
    oldPrice: 299.90,
    installmentCount: 8,
    installmentValue: 24.99,
    percentual_discount: 20.0
  },
  {
    id: "p1b2c3d0-0061-0000-0000-000000000061",
    sku: "PET-CAM-035",
    name: "Cama Pet Ortopédica Tamanho M",
    slug: "cama-pet-ortopedica-tamanho-m",
    description: "Cama ortopédica para pets, espuma viscoelástica, alívio de pressão nas articulações, capa removível e lavável.",
    brand_id: null,
    category_id: "a1b2c3d0-12002-0000-0000-000000000002", // Acessórios Pet
    cost_price: 80.00,
    sale_price: 179.90,
    discount_price: 149.90,
    currency: "BRL",
    stock_quantity: 35,
    width_cm: 70.0,
    height_cm: 50.0,
    length_cm: 10.0,
    images: [
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=800&q=80"
    ],
    attributes: {
      tamanho: "M (70x50cm)",
      material: "Viscoelástico",
      capa: "Removível e lavável",
      beneficio: "Ortopédica"
    },
    status: "active",
    created_at: new Date("2024-06-04T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Acessórios Pet",
    price: 179.90,
    oldPrice: 199.90,
    installmentCount: 6,
    installmentValue: 24.98,
    percentual_discount: 16.7
  },
  {
    id: "p1b2c3d0-0062-0000-0000-000000000062",
    sku: "PET-BRI-036",
    name: "Brinquedo Interativo Corda com Bola",
    slug: "brinquedo-interativo-corda-bola",
    description: "Brinquedo de corda com bola para cães, material resistente, estimula a atividade física e mental, seguro e durável.",
    brand_id: null,
    category_id: "a1b2c3d0-12003-0000-0000-000000000003", // Brinquedos Pet
    cost_price: 15.00,
    sale_price: 39.90,
    discount_price: 29.90,
    currency: "BRL",
    stock_quantity: 100,
    width_cm: 25.0,
    height_cm: 8.0,
    length_cm: 8.0,
    images: [
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
    ],
    attributes: {
      material: "Corda natural + borracha",
      tamanho: "25cm",
      idade: "Todas as idades",
      beneficio: "Estimula atividade física"
    },
    status: "active",
    created_at: new Date("2024-06-05T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Brinquedos Pet",
    price: 39.90,
    oldPrice: 49.90,
    installmentCount: 2,
    installmentValue: 14.95,
    percentual_discount: 25.0
  },

  // NOVOS PRODUTOS - SAÚDE & BEM-ESTAR
  {
    id: "p1b2c3d0-0063-0000-0000-000000000063",
    sku: "SAU-VIT-037",
    name: "Multivitamínico Completo 60 Cápsulas",
    slug: "multivitaminico-completo-60-capsulas",
    description: "Multivitamínico com 13 vitaminas e 10 minerais essenciais, fortalece imunidade, energia e vitalidade diária.",
    brand_id: null,
    category_id: "a1b2c3d0-13001-0000-0000-000000000001", // Suplementos
    cost_price: 25.00,
    sale_price: 59.90,
    discount_price: 49.90,
    currency: "BRL",
    stock_quantity: 80,
    width_cm: 8.0,
    height_cm: 12.0,
    length_cm: 8.0,
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80"
    ],
    attributes: {
      quantidade: "60 cápsulas",
      duracao: "2 meses",
      composicao: "13 vitaminas + 10 minerais",
      beneficio: "Imunidade e energia"
    },
    status: "active",
    created_at: new Date("2024-06-06T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Suplementos",
    price: 59.90,
    oldPrice: 69.90,
    installmentCount: 3,
    installmentValue: 16.63,
    percentual_discount: 16.7
  },
  {
    id: "p1b2c3d0-0064-0000-0000-000000000064",
    sku: "SAU-TER-038",
    name: "Termômetro Digital Infravermelho",
    slug: "termometro-digital-infravermelho",
    description: "Termômetro digital sem contato, medição por infravermelho, display LED, precisão médica, bateria incluída.",
    brand_id: null,
    category_id: "a1b2c3d0-13002-0000-0000-000000000002", // Equipamentos Médicos
    cost_price: 60.00,
    sale_price: 129.90,
    discount_price: 99.90,
    currency: "BRL",
    stock_quantity: 45,
    width_cm: 15.0,
    height_cm: 5.0,
    length_cm: 3.0,
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80"
    ],
    attributes: {
      tipo: "Infravermelho sem contato",
      precisao: "±0.2°C",
      display: "LED digital",
      bateria: "AAA incluídas"
    },
    status: "active",
    created_at: new Date("2024-06-07T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Equipamentos Médicos",
    price: 129.90,
    oldPrice: 149.90,
    installmentCount: 5,
    installmentValue: 19.98,
    percentual_discount: 23.1
  },
  {
    id: "p1b2c3d0-0065-0000-0000-000000000065",
    sku: "SAU-MAS-039",
    name: "Massageador Relaxante Pescoço e Ombros",
    slug: "massageador-relaxante-pescoco-ombros",
    description: "Massageador elétrico para pescoço e ombros, 4 intensidades, aquecimento infravermelho, alívio de tensões.",
    brand_id: null,
    category_id: "a1b2c3d0-13003-0000-0000-000000000003", // Relaxamento & Massagem
    cost_price: 100.00,
    sale_price: 229.90,
    discount_price: 189.90,
    currency: "BRL",
    stock_quantity: 30,
    width_cm: 40.0,
    height_cm: 15.0,
    length_cm: 35.0,
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80"
    ],
    attributes: {
      area: "Pescoço e ombros",
      intensidades: "4 níveis",
      aquecimento: "Infravermelho",
      alimentacao: "Bivolt automático"
    },
    status: "active",
    created_at: new Date("2024-06-08T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Relaxamento & Massagem",
    price: 229.90,
    oldPrice: 279.90,
    installmentCount: 8,
    installmentValue: 24.99,
    percentual_discount: 17.9
  },

  // NOVOS PRODUTOS - MÚSICA & INSTRUMENTOS
  {
    id: "p1b2c3d0-0066-0000-0000-000000000066",
    sku: "MUS-VIO-040",
    name: "Violão Clássico Nylon Iniciante",
    slug: "violao-classico-nylon-iniciante",
    description: "Violão clássico com cordas de nylon, ideal para iniciantes, madeira laminada, som equilibrado, acompanha capa.",
    brand_id: null,
    category_id: "a1b2c3d0-14001-0000-0000-000000000001", // Instrumentos Cordas
    cost_price: 200.00,
    sale_price: 399.90,
    discount_price: 329.90,
    currency: "BRL",
    stock_quantity: 20,
    width_cm: 100.0,
    height_cm: 38.0,
    length_cm: 10.0,
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      "https://images.unsplash.com/photo-1520166012956-add9ba0835cb?w=800&q=80"
    ],
    attributes: {
      tipo: "Clássico nylon",
      cordas: "6 cordas de nylon",
      madeira: "Laminada",
      acessorios: "Capa incluída"
    },
    status: "active",
    created_at: new Date("2024-06-09T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Instrumentos Cordas",
    price: 399.90,
    oldPrice: 459.90,
    installmentCount: 10,
    installmentValue: 32.99,
    percentual_discount: 17.5
  },
  {
    id: "p1b2c3d0-0067-0000-0000-000000000067",
    sku: "MUS-TEC-041",
    name: "Teclado Musical 61 Teclas com Suporte",
    slug: "teclado-musical-61-teclas-suporte",
    description: "Teclado eletrônico 61 teclas, 200 timbres, 200 ritmos, display LCD, suporte em X ajustável incluso.",
    brand_id: null,
    category_id: "a1b2c3d0-14002-0000-0000-000000000002", // Instrumentos Eletrônicos
    cost_price: 350.00,
    sale_price: 699.90,
    discount_price: 599.90,
    currency: "BRL",
    stock_quantity: 15,
    width_cm: 95.0,
    height_cm: 35.0,
    length_cm: 15.0,
    images: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80"
    ],
    attributes: {
      teclas: "61 teclas",
      timbres: "200 sons",
      ritmos: "200 estilos",
      acessorios: "Suporte em X"
    },
    status: "active",
    created_at: new Date("2024-06-10T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Instrumentos Eletrônicos",
    price: 699.90,
    oldPrice: 799.90,
    installmentCount: 12,
    installmentValue: 49.99,
    percentual_discount: 14.3
  },
  {
    id: "p1b2c3d0-0068-0000-0000-000000000068",
    sku: "MUS-MIC-042",
    name: "Microfone Condensador USB Profissional",
    slug: "microfone-condensador-usb-profissional",
    description: "Microfone condensador USB para gravação, podcasts e streaming, captação cardioide, plug and play, braço articulado.",
    brand_id: null,
    category_id: "a1b2c3d0-14003-0000-0000-000000000003", // Áudio Profissional
    cost_price: 180.00,
    sale_price: 379.90,
    discount_price: 299.90,
    currency: "BRL",
    stock_quantity: 35,
    width_cm: 20.0,
    height_cm: 25.0,
    length_cm: 15.0,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80"
    ],
    attributes: {
      tipo: "Condensador USB",
      captacao: "Cardioide",
      conexao: "USB plug and play",
      acessorios: "Braço articulado"
    },
    status: "active",
    created_at: new Date("2024-06-11T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    category: "Áudio Profissional",
    price: 379.90,
    oldPrice: 449.90,
    installmentCount: 10,
    installmentValue: 29.99,
    percentual_discount: 18.7
  },
  // Novos produtos Calças & Shorts
  {
    id: "p1b2c3d0-0007-0000-0000-000000000001",
    sku: "CAL-JEA-007",
    name: "Calça Jeans Slim Masculina",
    slug: "calca-jeans-slim-masculina",
    description: "Calça jeans masculina com corte slim, tecido de alta qualidade com elastano para maior conforto e mobilidade. Lavagem escura moderna.",
    brand_id: null,
    category_id: "a1b2c3d0-1002-0000-0000-000000000002", // Calças & Shorts
    cost_price: 65.00,
    sale_price: 129.90,
    discount_price: 99.90,
    currency: "BRL",
    stock_quantity: 80,
    width_cm: 30.0,
    height_cm: 3.0,
    length_cm: 40.0,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80"
    ],
    attributes: {
      material: "98% Algodão, 2% Elastano",
      corte: "Slim",
      lavagem: "Escura",
      estilo: "Casual"
    },
    sizes: [
      { value: "36", label: "36", available: true },
      { value: "38", label: "38", available: true },
      { value: "40", label: "40", available: true },
      { value: "42", label: "42", available: true },
      { value: "44", label: "44", available: true }
    ],
    colors: [
      { value: "azul-escuro", label: "Azul Escuro", hex: "#1e3a8a", available: true },
      { value: "preto", label: "Preto", hex: "#000000", available: true }
    ],
    status: 'active' as const,
    created_at: new Date("2024-11-15T10:00:00Z"),
    updated_at: new Date("2025-11-15T08:00:00Z"),
    category: "Calças & Shorts",
    price: 99.90,
    oldPrice: 129.90,
    installmentCount: 5,
    installmentValue: 19.98,
    percentual_discount: 23.1
  },
  {
    id: "p1b2c3d0-0008-0000-0000-000000000002",
    sku: "SHO-TAC-008",
    name: "Shorts Tactel Esportivo",
    slug: "shorts-tactel-esportivo",
    description: "Shorts masculino em tactel, ideal para atividades físicas e esportes. Tecido leve, respirável e de secagem rápida.",
    brand_id: null,
    category_id: "a1b2c3d0-1002-0000-0000-000000000002", // Calças & Shorts
    cost_price: 25.00,
    sale_price: 59.90,
    discount_price: 45.90,
    currency: "BRL",
    stock_quantity: 120,
    width_cm: 25.0,
    height_cm: 2.0,
    length_cm: 30.0,
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80",
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80",
      "https://images.unsplash.com/photo-1594938291221-94f18fb5bef8?w=800&q=80"
    ],
    attributes: {
      material: "100% Poliéster Tactel",
      corte: "Solto",
      comprimento: "Médio",
      estilo: "Esportivo"
    },
    sizes: [
      { value: "p", label: "P", available: true },
      { value: "m", label: "M", available: true },
      { value: "g", label: "G", available: true },
      { value: "gg", label: "GG", available: true }
    ],
    colors: [
      { value: "preto", label: "Preto", hex: "#000000", available: true },
      { value: "azul-marinho", label: "Azul Marinho", hex: "#000080", available: true },
      { value: "cinza", label: "Cinza", hex: "#808080", available: true }
    ],
    status: 'active' as const,
    created_at: new Date("2024-11-15T10:00:00Z"),
    updated_at: new Date("2025-11-15T08:00:00Z"),
    category: "Calças & Shorts",
    price: 45.90,
    oldPrice: 59.90,
    installmentCount: 3,
    installmentValue: 15.30,
    percentual_discount: 23.4
  },
  {
    id: "p1b2c3d0-0009-0000-0000-000000000003",
    sku: "CAL-SAR-009",
    name: "Calça Sarja Chino Masculina",
    slug: "calca-sarja-chino-masculina",
    description: "Calça masculina em sarja chino, corte reto moderno. Perfeita para looks casuais e semi-formais. Tecido macio e resistente.",
    brand_id: null,
    category_id: "a1b2c3d0-1002-0000-0000-000000000002", // Calças & Shorts
    cost_price: 55.00,
    sale_price: 109.90,
    discount_price: 89.90,
    currency: "BRL",
    stock_quantity: 60,
    width_cm: 30.0,
    height_cm: 3.0,
    length_cm: 40.0,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
      "https://images.unsplash.com/photo-1594938291221-94f18fb5bef8?w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80"
    ],
    attributes: {
      material: "100% Algodão Sarja",
      corte: "Reto",
      modelo: "Chino",
      estilo: "Casual/Social"
    },
    sizes: [
      { value: "36", label: "36", available: true },
      { value: "38", label: "38", available: true },
      { value: "40", label: "40", available: true },
      { value: "42", label: "42", available: true },
      { value: "44", label: "44", available: true }
    ],
    colors: [
      { value: "bege", label: "Bege", hex: "#f5f5dc", available: true },
      { value: "verde-oliva", label: "Verde Oliva", hex: "#808000", available: true },
      { value: "azul-marinho", label: "Azul Marinho", hex: "#000080", available: true }
    ],
    status: 'active' as const,
    created_at: new Date("2024-11-15T10:00:00Z"),
    updated_at: new Date("2025-11-15T08:00:00Z"),
    category: "Calças & Shorts",
    price: 89.90,
    oldPrice: 109.90,
    installmentCount: 4,
    installmentValue: 22.48,
    percentual_discount: 18.2
  },
  {
    id: "p1b2c3d0-0010-0000-0000-000000000004",
    sku: "BER-MOL-010",
    name: "Bermuda Moletom Masculina",
    slug: "bermuda-moletom-masculina",
    description: "Bermuda masculina em moletom, ideal para momentos de relaxamento e atividades casuais. Tecido macio com cordão ajustável.",
    brand_id: null,
    category_id: "a1b2c3d0-1002-0000-0000-000000000002", // Calças & Shorts
    cost_price: 35.00,
    sale_price: 79.90,
    discount_price: 59.90,
    currency: "BRL",
    stock_quantity: 90,
    width_cm: 28.0,
    height_cm: 2.5,
    length_cm: 35.0,
    images: [
      "https://images.unsplash.com/photo-1594938291221-94f18fb5bef8?w=800&q=80",
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80"
    ],
    attributes: {
      material: "80% Algodão, 20% Poliéster",
      corte: "Solto",
      modelo: "Moletom",
      estilo: "Casual"
    },
    sizes: [
      { value: "p", label: "P", available: true },
      { value: "m", label: "M", available: true },
      { value: "g", label: "G", available: true },
      { value: "gg", label: "GG", available: true }
    ],
    colors: [
      { value: "cinza-mescla", label: "Cinza Mescla", hex: "#a9a9a9", available: true },
      { value: "preto", label: "Preto", hex: "#000000", available: true },
      { value: "azul-marinho", label: "Azul Marinho", hex: "#000080", available: true }
    ],
    status: 'active' as const,
    created_at: new Date("2024-11-15T10:00:00Z"),
    updated_at: new Date("2025-11-15T08:00:00Z"),
    category: "Calças & Shorts",
    price: 59.90,
    oldPrice: 79.90,
    installmentCount: 3,
    installmentValue: 19.97,
    percentual_discount: 25.0
  },
  {
    id: "p1b2c3d0-0011-0000-0000-000000000005",
    sku: "CAL-LEG-011",
    name: "Calça Legging Feminina",
    slug: "calca-legging-feminina",
    description: "Calça legging feminina de alta qualidade, tecido com elastano para máximo conforto e flexibilidade. Ideal para academia e uso diário.",
    brand_id: null,
    category_id: "a1b2c3d0-1002-0000-0000-000000000002", // Calças & Shorts
    cost_price: 30.00,
    sale_price: 69.90,
    discount_price: 49.90,
    currency: "BRL",
    stock_quantity: 110,
    width_cm: 25.0,
    height_cm: 2.0,
    length_cm: 38.0,
    images: [
      "https://images.unsplash.com/photo-1594938291221-94f18fb5bef8?w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80"
    ],
    attributes: {
      material: "92% Poliamida, 8% Elastano",
      corte: "Ajustado",
      modelo: "Legging",
      estilo: "Esportivo/Casual"
    },
    sizes: [
      { value: "pp", label: "PP", available: true },
      { value: "p", label: "P", available: true },
      { value: "m", label: "M", available: true },
      { value: "g", label: "G", available: true },
      { value: "gg", label: "GG", available: true }
    ],
    colors: [
      { value: "preto", label: "Preto", hex: "#000000", available: true },
      { value: "azul-marinho", label: "Azul Marinho", hex: "#000080", available: true },
      { value: "grafite", label: "Grafite", hex: "#2f2f2f", available: true }
    ],
    status: 'active' as const,
    created_at: new Date("2024-11-15T10:00:00Z"),
    updated_at: new Date("2025-11-15T08:00:00Z"),
    category: "Calças & Shorts",
    price: 49.90,
    oldPrice: 69.90,
    installmentCount: 3,
    installmentValue: 16.63,
    percentual_discount: 28.6
  }
];

// Helper functions for product operations
export function getProductsByCategory(categoryIdOrName: string): Product[] {
  return featuredProducts.filter(product => {
    // Primeiro tenta match com category_id (UUID)
    if (product.category_id === categoryIdOrName) {
      return true;
    }
    
    // Fallback para compatibilidade: busca por nome/slug da categoria
    return (
      product.category?.toLowerCase().includes(categoryIdOrName.toLowerCase()) ||
      product.name.toLowerCase().includes(categoryIdOrName.toLowerCase())
    );
  });
}

// Helper function for multiple categories (comma-separated)
export function getProductsByCategories(categoriesString: string): Product[] {
  if (!categoriesString) return featuredProducts;
  
  const categoryIds = categoriesString.split(',').map(id => id.trim()).filter(Boolean);
  
  if (categoryIds.length === 0) return featuredProducts;
  
  return featuredProducts.filter(product => {
    return categoryIds.some(categoryId => {
      // Primeiro tenta match com category_id (UUID)
      if (product.category_id === categoryId) {
        return true;
      }
      
      // Fallback para compatibilidade: busca por nome/slug da categoria
      return (
        product.category?.toLowerCase().includes(categoryId.toLowerCase()) ||
        product.name.toLowerCase().includes(categoryId.toLowerCase())
      );
    });
  });
}

export function getProductsByCategoryExcluding(categoryIdOrName: string, excludeProductId: string): Product[] {
  return getProductsByCategory(categoryIdOrName).filter(product => product.id !== excludeProductId);
}

export function searchProducts(query: string, products: Product[] = featuredProducts): Product[] {
  const searchTerm = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description?.toLowerCase().includes(searchTerm) ||
    product.category?.toLowerCase().includes(searchTerm) ||
    product.sku?.toLowerCase().includes(searchTerm)
  );
}

export function getProductById(id: string): Product | undefined {
  return featuredProducts.find(product => product.id === id);
}