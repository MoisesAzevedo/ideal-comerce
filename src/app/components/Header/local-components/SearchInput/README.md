# SearchInput Component - Sistema de Pesquisa Completo

## 🎯 Funcionalidades Implementadas

### ✅ Dropdown de Categorias
- Categorias mapeadas com IDs reais da base de dados
- Dropdown funcional com abertura/fechamento
- Truncamento de texto com reticências
- Responsive design com breakpoints do Tailwind

### ✅ Pesquisa em Tempo Real
- **Input de pesquisa** com debounce (300ms)
- **Busca por categoria** selecionada no dropdown
- **Filtros por nome, descrição e SKU** dos produtos
- **Resultados limitados** a 10 itens para performance

### ✅ Dropdown de Resultados
- **Z-index 9998** conforme solicitado
- **Layout responsivo** com imagem, nome e preço
- **Navigation por teclado** (Arrow keys, Enter, Escape)
- **Loading state** durante a pesquisa
- **Estado vazio** quando não há resultados

### ✅ Arquitetura SOLID e DRY

```
SearchInput/
├── SearchInput.tsx                 # Componente principal
├── SearchInput.module.scss         # Estilos CSS
├── index.ts                       # Exports centralizados
├── types/
│   ├── index.ts                   # Tipos principais
│   ├── search.ts                  # Tipos específicos de pesquisa  
│   └── components.ts              # Tipos de componentes
├── services/
│   └── ProductSearchService.ts    # Lógica de pesquisa (SRP)
├── hooks/
│   └── useSearch.ts              # Hook de estado da pesquisa (SRP)
├── components/
│   └── SearchResultsDropdown/    # Componente reutilizável (SRP)
│       ├── SearchResultsDropdown.tsx
│       ├── SearchResultsDropdown.module.scss
│       └── index.ts
└── utils/
    └── searchCategories.ts       # Dados de categorias (SRP)
```

## 🏗️ Princípios Aplicados

### Single Responsibility Principle (SRP)
- **ProductSearchService**: Apenas lógica de busca
- **useSearch**: Apenas gerenciamento de estado
- **SearchResultsDropdown**: Apenas exibição de resultados
- **searchCategories**: Apenas dados de categorias

### DRY (Don't Repeat Yourself)
- **Componentes reutilizáveis** para diferentes contextos
- **Tipos centralizados** evitando duplicação
- **Serviços centralizados** para lógica de negócio

### Responsive Design
- **Breakpoints do Tailwind** utilizados corretamente:
  - `theme('screens.xs')` - 350px
  - `theme('screens.phone')` - 480px
  - `theme('screens.tablet')` - 768px
  - `theme('screens.desktop')` - 1024px

## 💻 Como Usar

### Uso Básico
```tsx
import { SearchInput } from "./local-components/SearchInput";

<SearchInput />
```

### Uso Avançado com Callbacks
```tsx
import { SearchInput, type SearchFormData } from "./local-components/SearchInput";

const handleSearch = (data: SearchFormData) => {
  router.push(`/produtos?q=${data.query}&category=${data.categoryId}`);
};

const handleSelectProduct = (productId: string) => {
  router.push(`/produto/${productId}`);
};

<SearchInput 
  onSearch={handleSearch}
  onSelectProduct={handleSelectProduct}
  placeholder="Digite sua pesquisa..."
/>
```

## 🔍 Funcionalidades de Pesquisa

### Categorias Disponíveis
- **Camisetas & Blusas** (`a1b2c3d0-1001-0000-0000-000000000001`)
- **Vestidos** (`a1b2c3d0-1002-0000-0000-000000000002`)
- **Calças** (`a1b2c3d0-1003-0000-0000-000000000003`)
- **Shorts** (`a1b2c3d0-1004-0000-0000-000000000004`)
- **Jaquetas & Casacos** (`a1b2c3d0-1005-0000-0000-000000000005`)
- **Lingerie** (`a1b2c3d0-1006-0000-0000-000000000006`)
- **Calçados** (`a1b2c3d0-0002-0000-0000-000000000002`)
- **Acessórios** (`a1b2c3d0-0003-0000-0000-000000000003`)
- **Todas as categorias** (`todas`)

### Campos de Pesquisa
A pesquisa busca nos seguintes campos do produto:
- **name** - Nome do produto
- **description** - Descrição completa
- **sku** - Código interno único

### Performance
- **Debounce de 300ms** para evitar requisições excessivas
- **Limite de 10 resultados** para otimizar renderização
- **Lazy loading** de componentes quando necessário

## 🎨 Recursos Visuais

### Z-Index Strategy
- **Dropdown de categorias**: z-index 1000
- **Dropdown de resultados**: z-index 9998 (conforme solicitado)

### Estados Visuais
- **Loading**: Indicador durante pesquisa
- **Empty state**: Mensagem quando sem resultados
- **Hover states**: Feedback visual de interação
- **Selected state**: Item selecionado via teclado

### Responsividade
- **Mobile-first approach**
- **Breakpoints consistentes** com Tailwind Config
- **Touch-friendly** em dispositivos móveis

## 🔧 Extensibilidade

### Adicionar Novos Filtros
```tsx
// No ProductSearchService.ts
private matchesFilters(product: Product, filters?: SearchFilters): boolean {
  // Adicionar novos filtros aqui
}
```

### Personalizar Resultados
```tsx
// Criar novo componente baseado em SearchResultsDropdown
export function CustomSearchResults({ results }: CustomProps) {
  // Implementação customizada
}
```

### Integrar com APIs Reais
```tsx
// Substituir ProductSearchService por chamada à API
const searchService = new ApiSearchService(apiClient);
```

## 🚀 Próximos Passos

1. **Integração com Router**: Navegação real entre páginas
2. **Histórico de Pesquisa**: Salvar pesquisas recentes
3. **Autocomplete Inteligente**: Sugestões baseadas em popularidade
4. **Analytics**: Tracking de pesquisas para insights
5. **Cache**: Implementar cache de resultados para performance