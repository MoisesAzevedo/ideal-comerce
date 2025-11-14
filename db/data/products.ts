import type { Product } from '../types';

// Mock products data - artigos militares (estrutura completa conforme spec)
export const featuredProducts: Product[] = [
  {
    id: "p1b2c3d0-0001-0000-0000-000000000001",
    sku: "ARM-M4A1-001",
    name: "Rifle M4A1 Carbine",
    slug: "rifle-m4a1-carbine",
    description: "Rifle de assalto M4A1 com sistema de tiro seletivo, coronha retrátil e rail superior para acessórios. Ideal para operações táticas e treinamento militar.",
    brand_id: null,
    category_id: "a1b2c3d0-0001-0000-0000-000000000001", // Armamento
    cost_price: 2500.00,
    sale_price: 3200.00,
    discount_price: 2980.00,
    currency: "BRL",
    stock_quantity: 15,
    width_cm: 8.5,
    height_cm: 25.2,
    length_cm: 83.8,
    images: [
      "https://images.unsplash.com/photo-1574006572354-1fcefebff4e2?w=800&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      "https://images.unsplash.com/photo-1578663005689-3a26b2b94c8b?w=800&q=80"
    ],
    attributes: {
      caliber: "5.56x45mm NATO",
      barrel_length: "14.5 inches",
      weight: "3.4 kg",
      material: "Aluminum alloy",
      color: "Black"
    },
    status: "active",
    created_at: new Date("2024-01-15T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    // Campos de compatibilidade
    category: "Armamento",
    price: 3200.00,
    oldPrice: 3500.00,
    installmentCount: 12,
    installmentValue: 266.67,
    percentual_discount: 6.9
  },
  {
    id: "p1b2c3d0-0002-0000-0000-000000000002",
    sku: "MUN-556-100",
    name: "Munição 5.56x45mm NATO (100 unidades)",
    slug: "municao-556-nato-100un",
    description: "Munição militar padrão NATO 5.56x45mm, caixa com 100 cartuchos. Projétil FMJ 62gr, alta precisão e confiabilidade.",
    brand_id: null,
    category_id: "a1b2c3d0-0002-0000-0000-000000000002", // Ammunition
    cost_price: 180.00,
    sale_price: 245.00,
    discount_price: null,
    currency: "BRL",
    stock_quantity: 500,
    width_cm: 12.0,
    height_cm: 8.0,
    length_cm: 18.0,
    images: [
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80"
    ],
    attributes: {
      caliber: "5.56x45mm",
      bullet_weight: "62 grains",
      bullet_type: "FMJ",
      quantity: 100,
      case_material: "Brass"
    },
    status: "active",
    created_at: new Date("2024-01-20T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    // Campos de compatibilidade
    category: "Ammunition",
    price: 245.00,
    oldPrice: null,
    installmentCount: 6,
    installmentValue: 40.83,
    percentual_discount: null
  },
  {
    id: "p1b2c3d0-0003-0000-0000-000000000003",
    sku: "VEST-TAC-M",
    name: "Colete Tático Modular Nivel IIIA",
    slug: "colete-tatico-modular-iiia",
    description: "Colete balístico tático com proteção nível IIIA, sistema MOLLE para acessórios, ajuste em múltiplos pontos. Certificado NIJ.",
    brand_id: null,
    category_id: "a1b2c3d0-0005-0000-0000-000000000005", // Proteção
    cost_price: 850.00,
    sale_price: 1200.00,
    discount_price: 1050.00,
    currency: "BRL",
    stock_quantity: 25,
    width_cm: 45.0,
    height_cm: 55.0,
    length_cm: 3.2,
    images: [
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1574006572354-1fcefebff4e2?w=800&q=80"
    ],
    attributes: {
      protection_level: "IIIA",
      size: "Medium",
      weight: "2.1 kg",
      color: "Multicam",
      molle_compatible: true,
      certification: "NIJ 0101.06"
    },
    status: "active",
    created_at: new Date("2024-02-01T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    // Campos de compatibilidade
    category: "Proteção",
    price: 1200.00,
    oldPrice: 1350.00,
    installmentCount: 10,
    installmentValue: 105.00,
    percentual_discount: 12.5
  },
  {
    id: "p1b2c3d0-0004-0000-0000-000000000004",
    sku: "UNI-ACU-L",
    name: "Uniforme ACU Digital Woodland",
    slug: "uniforme-acu-digital-woodland",
    description: "Uniforme militar padrão ACU (Army Combat Uniform) em padrão digital woodland. Tecido ripstop, bolsos cargo, resistente ao desgaste.",
    brand_id: null,
    category_id: "a1b2c3d0-0003-0000-0000-000000000003", // Vestimenta
    cost_price: 120.00,
    sale_price: 180.00,
    discount_price: null,
    currency: "BRL",
    stock_quantity: 75,
    width_cm: null,
    height_cm: null,
    length_cm: null,
    images: [
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&q=80",
      "https://images.unsplash.com/photo-1614002569204-8e90ebdfb96b?w=800&q=80"
    ],
    attributes: {
      size: "Large",
      pattern: "Digital Woodland",
      material: "65% Cotton, 35% Polyester Ripstop",
      pockets: 8,
      color: "Green Digital",
      ir_treatment: true
    },
    status: "active",
    created_at: new Date("2024-02-10T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    // Campos de compatibilidade
    category: "Vestimenta",
    price: 180.00,
    oldPrice: null,
    installmentCount: 4,
    installmentValue: 45.00,
    percentual_discount: null
  },
  {
    id: "p1b2c3d0-0005-0000-0000-000000000005",
    sku: "OPT-ACOG-4X",
    name: "Luneta ACOG 4x32 com Retículo Illuminado",
    slug: "luneta-acog-4x32-illuminada",
    description: "Luneta tática ACOG com magnificação fixa 4x, objetivo de 32mm, retículo illuminado por fibra óptica e tritium. Montagem para trilho Picatinny.",
    brand_id: null,
    category_id: "a1b2c3d0-0006-0000-0000-000000000006", // Óptica & Eletrônica
    cost_price: 1800.00,
    sale_price: 2400.00,
    discount_price: 2200.00,
    currency: "BRL",
    stock_quantity: 12,
    width_cm: 15.8,
    height_cm: 8.6,
    length_cm: 14.2,
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
      "https://images.unsplash.com/photo-1574006572354-1fcefebff4e2?w=800&q=80"
    ],
    attributes: {
      magnification: "4x",
      objective_diameter: "32mm",
      reticle: "Chevron",
      illumination: "Fiber optic + Tritium",
      eye_relief: "1.5 inches",
      weight: "300g",
      mount: "Picatinny"
    },
    status: "active",
    created_at: new Date("2024-02-15T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    // Campos de compatibilidade
    category: "Óptica & Eletrônica",
    price: 2400.00,
    oldPrice: 2600.00,
    installmentCount: 12,
    installmentValue: 183.33,
    percentual_discount: 8.3
  },
  {
    id: "p1b2c3d0-0006-0000-0000-000000000006",
    sku: "RAD-PRC-152",
    name: "Rádio Tático PRC-152 VHF/UHF",
    slug: "radio-tatico-prc-152",
    description: "Rádio portátil militar multiband VHF/UHF com criptografia, GPS integrado, resistente à água e poeira IP67.",
    brand_id: null,
    category_id: "a1b2c3d0-0007-0000-0000-000000000007", // Comunicações
    cost_price: 3200.00,
    sale_price: 4200.00,
    discount_price: null,
    currency: "BRL",
    stock_quantity: 8,
    width_cm: 7.2,
    height_cm: 24.8,
    length_cm: 5.8,
    images: [
      "https://images.unsplash.com/photo-1614002569204-8e90ebdfb96b?w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
    ],
    attributes: {
      frequency_range: "30-512 MHz",
      power_output: "5W",
      encryption: "AES-256",
      gps: true,
      waterproof: "IP67",
      battery_life: "12 hours",
      weight: "680g"
    },
    status: "active",
    created_at: new Date("2024-03-01T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    // Campos de compatibilidade
    category: "Comunicações",
    price: 4200.00,
    oldPrice: null,
    installmentCount: 12,
    installmentValue: 350.00,
    percentual_discount: null
  },
  {
    id: "p1b2c3d0-0007-0000-0000-000000000007",
    sku: "BOOT-TAC-10",
    name: "Bota Tática Desert 8\" Cano Alto",
    slug: "bota-tatica-desert-8-cano-alto",
    description: "Bota militar tática com cano de 8 polegadas, couro legítimo, solado antiderrapante Vibram, resistente à água e respirável.",
    brand_id: null,
    category_id: "a1b2c3d0-0008-0000-0000-000000000008", // Calçados
    cost_price: 180.00,
    sale_price: 280.00,
    discount_price: 250.00,
    currency: "BRL",
    stock_quantity: 45,
    width_cm: null,
    height_cm: null,
    length_cm: null,
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&q=80"
    ],
    attributes: {
      size: "10",
      height: "8 inches",
      material: "Full grain leather",
      sole: "Vibram rubber",
      color: "Desert Tan",
      waterproof: true,
      breathable: true
    },
    status: "active",
    created_at: new Date("2024-03-05T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    // Campos de compatibilidade
    category: "Calçados",
    price: 280.00,
    oldPrice: 320.00,
    installmentCount: 6,
    installmentValue: 41.67,
    percentual_discount: 10.7
  },
  {
    id: "p1b2c3d0-0008-0000-0000-000000000008",
    sku: "BAG-ASLT-72H",
    name: "Mochila de Assalto 72H - 45L",
    slug: "mochila-assalto-72h-45l",
    description: "Mochila tática modular para operações de 72 horas, capacidade 45L, sistema MOLLE, compartimentos organizadores, alças acolchoadas.",
    brand_id: null,
    category_id: "a1b2c3d0-0004-0000-0000-000000000004", // Equipamento Tático
    cost_price: 220.00,
    sale_price: 320.00,
    discount_price: 285.00,
    currency: "BRL",
    stock_quantity: 32,
    width_cm: 30.0,
    height_cm: 50.0,
    length_cm: 25.0,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800&q=80",
      "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&q=80"
    ],
    attributes: {
      capacity: "45L",
      material: "1000D Cordura Nylon",
      color: "Multicam",
      molle_compatible: true,
      hydration_compatible: true,
      compartments: 7,
      weight: "1.8 kg"
    },
    status: "active",
    created_at: new Date("2024-03-10T10:00:00Z"),
    updated_at: new Date("2025-11-14T08:00:00Z"),
    // Campos de compatibilidade
    category: "Equipamento Tático",
    price: 320.00,
    oldPrice: 380.00,
    installmentCount: 8,
    installmentValue: 35.63,
    percentual_discount: 10.9
  }
];