# Testes da Página de Produto

## Visão Geral

Esta pasta contém todos os testes unitários para a página de produto, seguindo as regras de arquitetura definidas no README.md do projeto.

## Estrutura de Testes

### Arquivos de Teste

- `ProductPage.test.tsx` - Testa o componente raiz da página
- `ProductPageClient.test.ts` - Testa o hook useProduct e lógica de estado
- `ProductImageCarousel.test.tsx` - Testa o carrossel de imagens com embla-carousel
- `ProductDetails.test.tsx` - Testa a exibição de detalhes e ações do produto
- `productApiService.test.ts` - Testa o serviço de API
- `productUtils.test.ts` - Testa funções utilitárias

### Configuração

- `setup.ts` - Configuração global dos testes com mocks necessários

## Cobertura de Testes

### Cenários Testados

1. **Carregamento de Produto**
   - Busca por ID válido
   - Tratamento de erros de API
   - Estados de loading

2. **Carrossel de Imagens**
   - Navegação entre imagens
   - Comportamento com uma única imagem
   - Responsividade

3. **Detalhes do Produto**
   - Exibição de informações
   - Seleção de quantidade
   - Ações de compra
   - Produtos esgotados

4. **Serviços e Utilitários**
   - Validação de dados
   - Formatação de preços
   - Geração de URLs

## Executando os Testes

### Comando Individual
```bash
# Executar todos os testes da página produto
npm test -- src/app/pages/produto/test

# Executar teste específico
npm test -- ProductImageCarousel.test.tsx

# Executar com cobertura
npm test -- --coverage src/app/pages/produto/test
```

### Modo Watch
```bash
# Executar em modo watch para desenvolvimento
npm test -- --watch src/app/pages/produto/test
```

## Mocks Utilizados

### Bibliotecas Externas
- `embla-carousel-react` - Para testes do carrossel
- `next/image` - Para componentes de imagem
- `next/navigation` - Para roteamento

### APIs e Serviços
- `fetchProductById` - Mock do serviço de API
- `fetch` global - Para testes de requisições

### Utilitários
- `console` methods - Silenciados durante testes
- `matchMedia` - Para responsividade
- `IntersectionObserver` - Para carrossel
- `ResizeObserver` - Para componentes responsivos

## Padrões de Teste

### Nomenclatura
- Arquivos: `ComponentName.test.tsx` ou `serviceName.test.ts`
- Describes: Nome do componente/função testada
- Its: Comportamento esperado em inglês

### Estrutura
```typescript
describe('ComponentName', () => {
  beforeEach(() => {
    // Setup específico
  });

  it('should do something expected', () => {
    // Arrange
    // Act  
    // Assert
  });
});
```

### Assertions
- Use `@testing-library/jest-dom` para matchers específicos
- Prefira `screen.getByRole` sobre outros seletores
- Use `data-testid` apenas quando necessário

## Integração Contínua

Os testes são executados automaticamente em:
- Push para branches principais
- Pull requests
- Deploy para produção

## Métricas de Cobertura

Target mínimo: 80% de cobertura de código
- Statements: >= 80%
- Branches: >= 75%
- Functions: >= 80%
- Lines: >= 80%

## Troubleshooting

### Problemas Comuns

1. **Erro de importação de módulos**
   - Verificar mapeamento em `jest.config.js`
   - Confirmar paths relativos

2. **Mocks não funcionando**
   - Verificar ordem dos mocks
   - Usar `jest.clearAllMocks()` no beforeEach

3. **Componentes não renderizando**
   - Verificar se todos os props obrigatórios estão sendo passados
   - Confirmar mocks de dependências

### Debug
```bash
# Executar com debug
npm test -- --verbose src/app/pages/produto/test

# Executar teste específico com debug
npm test -- --verbose ProductImageCarousel.test.tsx
```