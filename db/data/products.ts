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
    id: "p1b2c3d0-0010-0000-0000-000000000010",
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
    id: "p1b2c3d0-0011-0000-0000-000000000011",
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
    id: "p1b2c3d0-0012-0000-0000-000000000012",
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
    id: "p1b2c3d0-0013-0000-0000-000000000013",
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
    id: "p1b2c3d0-0015-0000-0000-000000000015",
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
    id: "p1b2c3d0-0016-0000-0000-000000000016",
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
    id: "p1b2c3d0-0017-0000-0000-000000000017",
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
    id: "p1b2c3d0-0018-0000-0000-000000000018",
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
  }
];

// Helper functions for product operations
export function getProductsByCategory(categoryName: string): Product[] {
  return featuredProducts.filter(product => 
    product.category?.toLowerCase().includes(categoryName.toLowerCase()) ||
    product.name.toLowerCase().includes(categoryName.toLowerCase())
  );
}

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase();
  return featuredProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description?.toLowerCase().includes(searchTerm) ||
    product.category?.toLowerCase().includes(searchTerm) ||
    product.sku?.toLowerCase().includes(searchTerm)
  );
}

export function getProductById(id: string): Product | undefined {
  return featuredProducts.find(product => product.id === id);
}