/**
 * Teste unitário para o componente Section
 * Responsabilidade: Validar estrutura e comportamento das seções da página quem-somos
 */

// Tipos para dados das seções
export type SectionData = {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'image-text' | 'list' | 'timeline' | 'stats';
  imageUrl?: string;
  items?: string[];
  stats?: {
    label: string;
    value: string | number;
    icon?: string;
  }[];
  timeline?: {
    year: number;
    event: string;
    description: string;
  }[];
};

// Mock de dados das seções
export const mockSections: SectionData[] = [
  {
    id: 'nossa-historia',
    title: 'Nossa História',
    content: 'A Ideal Comerce nasceu em 2020 com o objetivo de revolucionar o comércio online brasileiro, oferecendo produtos de qualidade e atendimento diferenciado.',
    type: 'text'
  },
  {
    id: 'nossos-valores',
    title: 'Nossos Valores',
    content: 'Acreditamos em qualidade, transparência e compromisso com nossos clientes.',
    type: 'image-text',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nossos-servicos',
    title: 'Nossos Serviços',
    content: 'Oferecemos uma ampla gama de produtos e serviços.',
    type: 'list',
    items: [
      'Vendas online com entrega rápida',
      'Atendimento personalizado',
      'Produtos de qualidade certificada',
      'Suporte pós-venda especializado',
      'Garantia estendida'
    ]
  },
  {
    id: 'nossa-jornada',
    title: 'Nossa Jornada',
    content: 'Marcos importantes da nossa trajetória.',
    type: 'timeline',
    timeline: [
      {
        year: 2020,
        event: 'Fundação da empresa',
        description: 'Início das operações com foco em produtos eletrônicos'
      },
      {
        year: 2021,
        event: 'Expansão do catálogo',
        description: 'Adição de novas categorias de produtos'
      },
      {
        year: 2022,
        event: 'Primeiro milhão em vendas',
        description: 'Marco histórico de faturamento'
      },
      {
        year: 2023,
        event: 'Expansão nacional',
        description: 'Atendimento para todo o território brasileiro'
      }
    ]
  },
  {
    id: 'nossos-numeros',
    title: 'Nossos Números',
    content: 'Resultados que comprovam nossa qualidade.',
    type: 'stats',
    stats: [
      { label: 'Clientes Satisfeitos', value: '50000+', icon: 'users' },
      { label: 'Produtos Vendidos', value: '150000+', icon: 'shopping-cart' },
      { label: 'Cidades Atendidas', value: '500+', icon: 'map-pin' },
      { label: 'Avaliação Média', value: '4.8/5', icon: 'star' }
    ]
  }
];

// Classe para validação dos dados da seção
export class SectionValidator {
  static validateSection(section: SectionData): {isValid: boolean, errors: string[]} {
    const errors: string[] = [];

    if (!section.id || section.id.trim().length < 3) {
      errors.push('ID da seção deve ter pelo menos 3 caracteres');
    }

    if (!section.title || section.title.trim().length < 3) {
      errors.push('Título da seção deve ter pelo menos 3 caracteres');
    }

    if (!section.content || section.content.trim().length < 10) {
      errors.push('Conteúdo da seção deve ter pelo menos 10 caracteres');
    }

    if (!['text', 'image-text', 'list', 'timeline', 'stats'].includes(section.type)) {
      errors.push('Tipo da seção deve ser válido');
    }

    // Validações específicas por tipo
    if (section.type === 'image-text' && (!section.imageUrl || !this.isValidUrl(section.imageUrl))) {
      errors.push('Seção image-text deve ter URL de imagem válida');
    }

    if (section.type === 'list' && (!section.items || section.items.length === 0)) {
      errors.push('Seção list deve ter pelo menos um item');
    }

    if (section.type === 'timeline' && (!section.timeline || section.timeline.length === 0)) {
      errors.push('Seção timeline deve ter pelo menos um evento');
    }

    if (section.type === 'stats' && (!section.stats || section.stats.length === 0)) {
      errors.push('Seção stats deve ter pelo menos uma estatística');
    }

    // Validar timeline se presente
    if (section.timeline) {
      section.timeline.forEach((event, index) => {
        if (event.year < 1900 || event.year > new Date().getFullYear() + 10) {
          errors.push(`Evento ${index + 1}: Ano deve ser realista`);
        }
        if (!event.event || event.event.trim().length < 5) {
          errors.push(`Evento ${index + 1}: Descrição do evento deve ter pelo menos 5 caracteres`);
        }
      });
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  private static isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
}

// Mock do componente Section
export class MockSection {
  private section: SectionData;
  private isVisible = true;
  private isLoading = false;
  private animationState: 'idle' | 'animating' | 'completed' = 'idle';

  constructor(section: SectionData) {
    this.section = section;
  }

  // Simular renderização da seção
  render(): {
    rendered: boolean;
    elements: string[];
    accessibility: {
      hasHeading: boolean;
      hasStructure: boolean;
      hasAltText: boolean;
    };
    performance: {
      renderTime: number;
      complexity: 'low' | 'medium' | 'high';
    };
  } {
    const validation = SectionValidator.validateSection(this.section);
    
    if (!validation.isValid) {
      return {
        rendered: false,
        elements: [],
        accessibility: { hasHeading: false, hasStructure: false, hasAltText: false },
        performance: { renderTime: 0, complexity: 'low' }
      };
    }

    const elements = ['section-container'];
    
    if (this.section.title) elements.push('section-title');
    if (this.section.content) elements.push('section-content');

    // Adicionar elementos específicos por tipo
    switch (this.section.type) {
      case 'image-text':
        if (this.section.imageUrl) elements.push('section-image');
        break;
      case 'list':
        if (this.section.items) {
          elements.push('items-list');
          this.section.items.forEach((_, index) => {
            elements.push(`list-item-${index}`);
          });
        }
        break;
      case 'timeline':
        if (this.section.timeline) {
          elements.push('timeline-container');
          this.section.timeline.forEach((_, index) => {
            elements.push(`timeline-item-${index}`);
          });
        }
        break;
      case 'stats':
        if (this.section.stats) {
          elements.push('stats-container');
          this.section.stats.forEach((_, index) => {
            elements.push(`stat-item-${index}`);
          });
        }
        break;
    }

    // Calcular complexidade e tempo de renderização
    let complexity: 'low' | 'medium' | 'high' = 'low';
    let baseRenderTime = 50;

    if (this.section.type === 'timeline' || this.section.type === 'stats') {
      complexity = 'high';
      baseRenderTime = 150;
    } else if (this.section.type === 'list' || this.section.type === 'image-text') {
      complexity = 'medium';
      baseRenderTime = 100;
    }

    const renderTime = baseRenderTime + (elements.length * 5);

    return {
      rendered: this.isVisible && !this.isLoading,
      elements,
      accessibility: {
        hasHeading: !!this.section.title,
        hasStructure: elements.length >= 2,
        hasAltText: this.section.type === 'image-text' && !!this.section.imageUrl
      },
      performance: {
        renderTime,
        complexity
      }
    };
  }

  // Simular animação de entrada
  animateIn(): {started: boolean, duration: number} {
    if (this.animationState !== 'idle') {
      return { started: false, duration: 0 };
    }

    this.animationState = 'animating';
    
    // Duração baseada na complexidade
    const baseDuration = this.section.type === 'timeline' ? 800 : 400;
    const itemCount = this.getItemCount();
    const duration = baseDuration + (itemCount * 100);

    // Simular conclusão da animação
    setTimeout(() => {
      this.animationState = 'completed';
    }, duration);

    return { started: true, duration };
  }

  // Obter contagem de itens na seção
  private getItemCount(): number {
    switch (this.section.type) {
      case 'list':
        return this.section.items?.length || 0;
      case 'timeline':
        return this.section.timeline?.length || 0;
      case 'stats':
        return this.section.stats?.length || 0;
      default:
        return 1;
    }
  }

  // Obter métricas da seção
  getSectionMetrics(): {
    contentLength: number;
    itemCount: number;
    hasOptionalContent: boolean;
    accessibilityScore: number;
    performanceScore: number;
  } {
    const result = this.render();
    const itemCount = this.getItemCount();
    
    // Calcular pontuação de acessibilidade (0-100)
    let accessibilityScore = 0;
    if (result.accessibility.hasHeading) accessibilityScore += 40;
    if (result.accessibility.hasStructure) accessibilityScore += 40;
    if (result.accessibility.hasAltText || this.section.type !== 'image-text') accessibilityScore += 20;

    // Calcular pontuação de performance (0-100)
    let performanceScore = 100;
    if (result.performance.renderTime > 200) performanceScore -= 30;
    if (result.performance.complexity === 'high') performanceScore -= 20;
    if (itemCount > 10) performanceScore -= 10;

    return {
      contentLength: this.section.content.length,
      itemCount,
      hasOptionalContent: !!(this.section.imageUrl || this.section.items || this.section.timeline || this.section.stats),
      accessibilityScore: Math.max(0, accessibilityScore),
      performanceScore: Math.max(0, performanceScore)
    };
  }

  setVisibility(visible: boolean): void {
    this.isVisible = visible;
  }

  setLoading(loading: boolean): void {
    this.isLoading = loading;
  }

  getAnimationState(): 'idle' | 'animating' | 'completed' {
    return this.animationState;
  }
}

// Classe para executar testes da Section
export class SectionTester {
  static testBasicRendering(): {passed: boolean, message: string} {
    try {
      let passedCount = 0;
      const totalSections = mockSections.length;

      mockSections.forEach(sectionData => {
        const section = new MockSection(sectionData);
        const result = section.render();
        
        const hasEssentials = result.elements.includes('section-title') && 
                             result.elements.includes('section-content');

        if (result.rendered && hasEssentials) {
          passedCount++;
        }
      });

      const passed = passedCount === totalSections;

      return {
        passed,
        message: passed ? 
          `Todas as ${totalSections} seções renderizaram corretamente` : 
          `${passedCount}/${totalSections} seções renderizaram corretamente`
      };
    } catch (error) {
      return {
        passed: false,
        message: `Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
      };
    }
  }

  static testSpecificTypes(): {passed: boolean, message: string} {
    try {
      const typeTests = mockSections.map(sectionData => {
        const section = new MockSection(sectionData);
        const result = section.render();
        
        // Verificar elementos específicos do tipo
        let hasTypeSpecificElements = false;
        
        switch (sectionData.type) {
          case 'image-text':
            hasTypeSpecificElements = result.elements.includes('section-image');
            break;
          case 'list':
            hasTypeSpecificElements = result.elements.includes('items-list');
            break;
          case 'timeline':
            hasTypeSpecificElements = result.elements.includes('timeline-container');
            break;
          case 'stats':
            hasTypeSpecificElements = result.elements.includes('stats-container');
            break;
          default:
            hasTypeSpecificElements = true; // tipo 'text' não tem elementos específicos
        }

        return {
          type: sectionData.type,
          passed: hasTypeSpecificElements,
          elements: result.elements.length
        };
      });

      const passedTypes = typeTests.filter(test => test.passed).length;
      const passed = passedTypes === typeTests.length;

      return {
        passed,
        message: passed ? 
          `Todos os tipos de seção funcionando corretamente` : 
          `${passedTypes}/${typeTests.length} tipos funcionando`
      };
    } catch (error) {
      return {
        passed: false,
        message: `Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
      };
    }
  }

  static testAnimations(): {passed: boolean, message: string} {
    try {
      let animationsWorking = 0;
      const totalSections = mockSections.length;

      mockSections.forEach(sectionData => {
        const section = new MockSection(sectionData);
        const animResult = section.animateIn();
        
        if (animResult.started && animResult.duration > 0) {
          animationsWorking++;
        }
      });

      const passed = animationsWorking === totalSections;

      return {
        passed,
        message: passed ? 
          `Animações funcionando em todas as seções` : 
          `${animationsWorking}/${totalSections} animações funcionando`
      };
    } catch (error) {
      return {
        passed: false,
        message: `Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
      };
    }
  }

  static testPerformance(): {passed: boolean, message: string} {
    try {
      const performanceResults = mockSections.map(sectionData => {
        const section = new MockSection(sectionData);
        const metrics = section.getSectionMetrics();
        return {
          id: sectionData.id,
          performance: metrics.performanceScore,
          accessibility: metrics.accessibilityScore
        };
      });

      const avgPerformance = performanceResults.reduce((sum, r) => sum + r.performance, 0) / performanceResults.length;
      const avgAccessibility = performanceResults.reduce((sum, r) => sum + r.accessibility, 0) / performanceResults.length;
      
      const passed = avgPerformance >= 70 && avgAccessibility >= 80;

      return {
        passed,
        message: passed ? 
          `Performance adequada: ${avgPerformance.toFixed(1)}% perf, ${avgAccessibility.toFixed(1)}% acess` : 
          `Performance inadequada: ${avgPerformance.toFixed(1)}% perf, ${avgAccessibility.toFixed(1)}% acess`
      };
    } catch (error) {
      return {
        passed: false,
        message: `Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
      };
    }
  }

  // Executar todos os testes
  static runAllTests(): void {
    console.log('=== Testes do Section ===');
    
    const tests = [
      { name: 'Renderização Básica', test: this.testBasicRendering },
      { name: 'Tipos Específicos', test: this.testSpecificTypes },
      { name: 'Animações', test: this.testAnimations },
      { name: 'Performance', test: this.testPerformance }
    ];

    tests.forEach(testCase => {
      const result = testCase.test();
      console.log(`${result.passed ? '✓' : '✗'} ${testCase.name}: ${result.message}`);
    });
  }
}

// Função para testar seções individualmente
export function testIndividualSections(): void {
  console.log('=== Testando Seções Individualmente ===');
  
  mockSections.forEach((sectionData, index) => {
    console.log(`\n${index + 1}. Testando: ${sectionData.title} (${sectionData.type})`);
    
    const section = new MockSection(sectionData);
    const validation = SectionValidator.validateSection(sectionData);
    const result = section.render();
    const metrics = section.getSectionMetrics();
    const animation = section.animateIn();
    
    console.log(`   ✓ Validação: ${validation.isValid ? 'Passou' : 'Falhou'}`);
    if (!validation.isValid) {
      console.log(`     Erros: ${validation.errors.join(', ')}`);
    }
    
    console.log(`   ✓ Renderização: ${result.rendered ? 'Sucesso' : 'Falha'}`);
    console.log(`   ✓ Elementos: ${result.elements.length}`);
    console.log(`   ✓ Performance: ${result.performance.renderTime}ms (${result.performance.complexity})`);
    console.log(`   ✓ Acessibilidade: ${metrics.accessibilityScore}%`);
    console.log(`   ✓ Animação: ${animation.started ? `${animation.duration}ms` : 'Falhou'}`);
  });
}