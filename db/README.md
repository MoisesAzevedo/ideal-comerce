# 🗄️ Mock Database - Ideal Comerce

Este diretório contém toda a estrutura de dados mock do projeto, simulando um banco de dados real. Esta documentação visa facilitar a migração para um banco de dados real pelos desenvolvedores backend.

## 📁 Estrutura do Mock Database

```
db/
├── README.md          # Esta documentação
├── index.ts           # Exportações centrais e classe MockDatabase
├── types/
│   └── index.ts       # Definições de tipos TypeScript (esquemas)
├── data/
│   ├── products.ts    # Dados e utilitários de produtos
│   └── categories.ts  # Dados e utilitários de categorias
└── utils/             # Utilitários seguindo princípios SOLID
    ├── index.ts       # Exportações centrais dos utils
    ├── promotionChecker.ts    # Verificações de promoção
    ├── installmentChecker.ts  # Verificações de parcelamento
    └── priceFormatter.ts      # Formatação de preços
```

## 🏗️ Arquitetura Atual (Mock)

### Classe MockDatabase
A classe `MockDatabase` simula operações de banco de dados:

```typescript
// Exemplo de uso atual
const result = await MockDatabase.getProducts({
  page: 1,
  perPage: 16,
  category: 'Camisetas',
  q: 'militar'
});
```

### Fluxo de Dados
```
Frontend → API Route → MockDatabase → Data Arrays → Response
```

## 🔄 Migração para Banco Real

### 1. Substituição da MockDatabase

**Atual (Mock):**
```typescript
// db/index.ts
export class MockDatabase {
  static async getProducts(params) {
    // Filtragem em arrays JavaScript
    return { data, meta };
  }
}
```

**Futuro (Real Database):**
```typescript
// db/database.ts
export class Database {
  static async getProducts(params) {
    const query = `
      SELECT * FROM products 
      WHERE category = $1 
      AND name ILIKE $2
      LIMIT $3 OFFSET $4
    `;
    // Usar ORM/Query builder como Prisma, Drizzle ou SQL direto
    return await db.query(query, [category, search, limit, offset]);
  }
}
```

### 2. Schemas de Banco de Dados

Use os tipos TypeScript como base para criar os schemas:

#### Tabela Products (Atualizada)
```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  old_price DECIMAL(10,2) NULL,           -- NULL quando não há promoção
  installment_count INTEGER NOT NULL DEFAULT 1,
  installment_value DECIMAL(10,2) NOT NULL,
  percentual_discount INTEGER NULL,       -- NULL quando não há desconto
  images JSONB NOT NULL,                  -- Array de URLs
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_name ON products USING GIN(to_tsvector('portuguese', name));
CREATE INDEX idx_products_promotion ON products(old_price, percentual_discount) WHERE old_price IS NOT NULL;
```

#### Tabela Categories
```sql
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 3. Substituição nas API Routes

**Atual:**
```typescript
// src/app/api/products/route.ts
import { MockDatabase } from "../../../../db";

export async function GET(request: Request) {
  const result = await MockDatabase.getProducts(params);
  return NextResponse.json(result);
}
```

**Futuro:**
```typescript
// src/app/api/products/route.ts
import { Database } from "../../../../db/database";

export async function GET(request: Request) {
  const result = await Database.getProducts(params);
  return NextResponse.json(result);
}
```

## 📊 Estrutura de Dados

### Product (Atualizado)
```typescript
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number | null;        // NULL quando não há promoção
  installmentCount: number;        // Número de parcelas
  installmentValue: number;        // Valor de cada parcela
  percentual_discount?: number | null; // NULL quando não há desconto (%)
  images: string[];               // Array de URLs das imagens
}
```

### Utilitários Disponíveis (NOVO)
```typescript
// Verificação de promoções
PromotionChecker.hasPromotion(product)     // Tem promoção completa?
PromotionChecker.hasOldPrice(product)      // Tem preço antigo?
PromotionChecker.hasDiscount(product)      // Tem desconto?

// Verificação de parcelamento
InstallmentChecker.hasInstallments(product) // Pode parcelar?
InstallmentChecker.isCashPayment(product)   // É à vista?

// Formatação
PriceFormatter.formatCurrency(value)       // R$ 199,00
PriceFormatter.formatInstallmentValue(value) // 199,90 → 199,90
PriceFormatter.formatDiscountPercentage(10)  // -10%
```

### Resposta Paginada
```typescript
interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}
```

## 🛠️ Operações Implementadas

### Produtos
- ✅ **Listagem paginada**: `getProducts({ page, perPage })`
- ✅ **Filtro por categoria**: `getProducts({ category })`
- ✅ **Busca por nome**: `getProducts({ q })`
- ✅ **Combinação de filtros**: Todos os parâmetros podem ser combinados

### Categorias
- ✅ **Listagem completa**: `getCategories()`

## 🔮 Funcionalidades para Implementar (Backend)

### Produtos
- [ ] **CRUD completo**: Create, Update, Delete produtos
- [ ] **Upload de imagens**: Integração com serviço de storage (AWS S3, Cloudinary)
- [ ] **Gestão de estoque**: Controle de quantidade disponível
- [ ] **Variações de produto**: Tamanhos, cores, etc.
- [ ] **Relacionamentos**: Produtos relacionados, bundling

### Usuários & Autenticação
- [ ] **Registro e login**: Sistema de autenticação
- [ ] **Perfis de usuário**: Dados pessoais, endereços
- [ ] **Roles e permissões**: Admin, cliente, etc.

### Carrinho & Pedidos
- [ ] **Carrinho persistente**: Salvar carrinho do usuário
- [ ] **Processar pedidos**: Criar, atualizar, cancelar
- [ ] **Histórico de compras**: Pedidos anteriores do usuário

### Sistema de Pagamento
- [ ] **Integração com gateway**: PagSeguro, Mercado Pago, Stripe
- [ ] **Cálculo de parcelas**: Baseado nas taxas do gateway
- [ ] **Processamento assíncrono**: Webhooks para confirmação

## 🚀 Recomendações Técnicas

### Stack Sugerida
- **ORM**: Prisma ou Drizzle ORM
- **Banco**: PostgreSQL (produção) + SQLite (desenvolvimento)
- **Cache**: Redis para cache de consultas frequentes
- **Storage**: AWS S3 ou Cloudinary para imagens
- **Search**: Elasticsearch para busca avançada (futuro)

### Estrutura de Arquivos (Backend)
```
src/
├── db/
│   ├── schema.sql         # Esquemas das tabelas
│   ├── migrations/        # Migrações do banco
│   └── seeds/             # Dados iniciais (migração do mock)
├── lib/
│   ├── database.ts        # Configuração do banco
│   └── cache.ts           # Configuração do cache
└── services/
    ├── products.service.ts
    ├── users.service.ts
    └── orders.service.ts
```

### Migração Gradual
1. **Fase 1**: Manter mock + implementar banco em paralelo
2. **Fase 2**: Substituir endpoints um por um
3. **Fase 3**: Remover código mock completamente
4. **Fase 4**: Otimizações e cache

### Performance
- **Índices**: Criar índices nas colunas mais consultadas
- **Paginação**: Usar LIMIT/OFFSET ou cursor pagination
- **Cache**: Cache de consultas frequentes (categorias, produtos em destaque)
- **CDN**: Para servir imagens de produtos

## 📝 Dados de Migração

Os dados atuais do mock estão em:
- **Produtos**: `db/data/products.ts` (16 produtos)
- **Categorias**: `db/data/categories.ts` (5 categorias)

Use estes dados para criar os seeds iniciais do banco real.

## 🔗 Integrações Frontend

O frontend está preparado para a transição:
- ✅ **Tipos TypeScript** definidos e exportados
- ✅ **API Service** abstraído em `productsService.ts`
- ✅ **Hooks customizados** para gestão de estado
- ✅ **Tratamento de erro** implementado

## 📞 Contato

Para dúvidas sobre a estrutura de dados ou implementação:
- Revisar este README
- Consultar tipos em `db/types/index.ts`
- Verificar implementação atual em `db/index.ts`

---

**Importante**: Mantenha a compatibilidade dos tipos e estrutura de resposta da API para evitar quebras no frontend durante a migração.