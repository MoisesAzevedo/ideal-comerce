# Componente Breadcrumb

O componente Breadcrumb fornece navegação hierárquica para mostrar o caminho do usuário até a página atual. É ideal para e-commerce e sites com estrutura de navegação profunda.

## Características

- ✅ **Totalmente acessível** - Suporte completo para screen readers
- ✅ **Responsivo** - Adapta-se a diferentes tamanhos de tela
- ✅ **Personalizável** - Separadores, labels e estilos customizáveis
- ✅ **Geração automática** - Hook para criar breadcrumbs baseado na URL
- ✅ **TypeScript** - Tipagem completa
- ✅ **Testado** - Cobertura completa de testes

## Instalação e Uso Básico

```tsx
import { Breadcrumb, BreadcrumbItem } from '@/components';

const items: BreadcrumbItem[] = [
  { label: 'Produtos', href: '/produtos' },
  { label: 'Sapatos', href: '/produtos/sapatos' },
  { label: 'Nike Air Max', href: '/produtos/sapatos/nike-air-max' }
];

export default function MinhaPage() {
  return (
    <div>
      <Breadcrumb items={items} />
      {/* resto do conteúdo */}
    </div>
  );
}
```

## API do Componente

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `items` | `BreadcrumbItem[]` | **obrigatório** | Array de itens do breadcrumb |
| `separator` | `string` | `"/"` | Caractere separador entre itens |
| `className` | `string` | `""` | Classes CSS adicionais |
| `maxItems` | `number` | `5` | Número máximo de itens visíveis |
| `showHome` | `boolean` | `true` | Se deve mostrar item "Início" |
| `homeLabel` | `string` | `"Início"` | Texto do link inicial |
| `homeHref` | `string` | `"/"` | URL do link inicial |

### BreadcrumbItem

```typescript
interface BreadcrumbItem {
  label: string;      // Texto exibido
  href: string;       // URL do link
  isActive?: boolean; // Se é o item atual (auto-detectado)
}
```

## Uso com Hook Automático

O hook `useBreadcrumb` gera automaticamente breadcrumbs baseado na URL atual:

```tsx
import { Breadcrumb, useBreadcrumb } from '@/components';

export default function MinhaPage() {
  const breadcrumbItems = useBreadcrumb();
  
  return <Breadcrumb items={breadcrumbItems} />;
}
```

### Opções do Hook

```tsx
const breadcrumbItems = useBreadcrumb({
  // Nome do produto (para páginas de produto)
  productName: 'Nike Air Max 90',
  
  // Categorias personalizadas
  customCategory: 'Calçados Esportivos',
  customSubcategory: 'Tênis de Corrida',
  
  // Labels customizados para segmentos
  customLabels: {
    'calcados': 'Calçados Premium',
    'ofertas': 'Promoções'
  },
  
  // Segmentos para excluir da URL
  excludeSegments: ['api', 'admin']
});
```

## Exemplos de Uso

### 1. Breadcrumb Básico

```tsx
const items = [
  { label: 'Produtos', href: '/produtos' },
  { label: 'Eletrônicos', href: '/produtos/eletronicos' },
  { label: 'Smartphones', href: '/produtos/eletronicos/smartphones' }
];

<Breadcrumb items={items} />
```

**Resultado:** `🏠 Início / Produtos / Eletrônicos / Smartphones`

### 2. Página de Produto

```tsx
import { ProductPageBreadcrumb } from '@/components';

<ProductPageBreadcrumb 
  productId="123"
  productName="iPhone 14 Pro"
  categoryName="Eletrônicos"
  subcategoryName="Smartphones"
/>
```

**Resultado:** `🏠 Início / Produtos / Eletrônicos / Smartphones / iPhone 14 Pro`

### 3. Separador Personalizado

```tsx
<Breadcrumb 
  items={items} 
  separator=">" 
/>
```

**Resultado:** `🏠 Início > Produtos > Sapatos`

### 4. Sem Ícone de Casa

```tsx
<Breadcrumb 
  items={items} 
  showHome={false}
/>
```

**Resultado:** `Produtos / Sapatos / Nike Air Max`

### 5. Limite de Itens

```tsx
<Breadcrumb 
  items={muitosItems} 
  maxItems={3}
/>
```

**Resultado:** `🏠 Início / ... / Categoria / Produto`

## Mapeamento de Rotas

O hook usa um mapeamento automático para converter segmentos de URL em labels legíveis:

```typescript
const routeLabels = {
  'produtos': 'Produtos',
  'sapatos': 'Sapatos',
  'calcados': 'Calçados',
  'roupas': 'Roupas',
  'masculino': 'Masculino',
  'feminino': 'Feminino',
  'favoritos': 'Favoritos',
  'carrinho': 'Carrinho',
  // ... mais mapeamentos
};
```

## Responsividade

O componente se adapta automaticamente a diferentes tamanhos de tela:

- **Desktop**: Breadcrumb completo com todos os itens
- **Tablet**: Mantém funcionalidade com espaçamento reduzido  
- **Mobile**: Permite scroll horizontal e reduz tamanhos

## Acessibilidade

- ✅ Navegação por teclado (Tab/Enter)
- ✅ Screen reader support (`aria-label`, `role="navigation"`)
- ✅ Indicação do item atual (`aria-current="page"`)
- ✅ Focus visível
- ✅ Semântica correta com `<nav>` e `<ol>`

## Integração com Next.js

O componente é otimizado para Next.js:

- ✅ Client-side navigation com `next/link`
- ✅ Suporte a `usePathname` para detecção de rota
- ✅ Server-side rendering compatível
- ✅ Otimização automática de imagens

## Personalização de Estilos

### Classes CSS Disponíveis

```scss
.breadcrumb          // Container principal
.breadcrumbItem      // Item individual
.breadcrumbLink      // Links clicáveis
.breadcrumbActive    // Item atual (não clicável)
.breadcrumbSeparator // Separadores
.homeIcon           // Ícone de casa
```

### Variáveis CSS

```css
:root {
  --color-primary-green: #495949;
  --color-light-green: #059669;
  --font-secondary: "Calibri", Arial, sans-serif;
}
```

## Testes

O componente inclui testes completos:

```bash
# Executar testes do componente
npm test -- Breadcrumb.test.tsx

# Executar testes do hook
npm test -- useBreadcrumb.test.ts
```

## Estrutura de Arquivos

```
Breadcrumb/
├── __tests__/
│   ├── Breadcrumb.test.tsx
│   └── useBreadcrumb.test.ts
├── examples/
│   └── BreadcrumbExample.tsx
├── hooks/
│   ├── index.ts
│   └── useBreadcrumb.ts
├── Breadcrumb.module.scss
├── Breadcrumb.tsx
├── index.ts
├── types.ts
└── README.md
```

## Contribuição

Para contribuir com melhorias:

1. Mantenha a tipagem TypeScript
2. Adicione testes para novas funcionalidades
3. Siga os padrões de código existentes
4. Atualize a documentação

## Roadmap

- [ ] Suporte a ícones customizados
- [ ] Tema escuro
- [ ] Animações de transição
- [ ] Modo compacto para mobile
- [ ] Integração com analytics