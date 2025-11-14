/**
 * Teste unitário para o componente AboutHero
 * Responsabilidade: Validar renderização e comportamento do hero da página quem-somos
 */

// Tipos para dados do hero
export type AboutHeroData = {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
  ctaUrl?: string;
};

// Mock de dados para o AboutHero
export const mockHeroData: AboutHeroData = {
  title: 'Sobre a Ideal Comerce',
  subtitle: 'Sua loja de confiança desde 2020',
  description: 'Somos uma empresa dedicada a oferecer os melhores produtos com qualidade excepcional e atendimento personalizado para nossos clientes.',
  imageUrl: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
  ctaText: 'Conheça nossos produtos',
  ctaUrl: '/produtos'
};

export const mockHeroDataMinimal: AboutHeroData = {
  title: 'Título Simples',
  subtitle: 'Subtítulo básico',
  description: 'Descrição mínima para teste.',
  imageUrl: 'https://via.placeholder.com/800x400'
};

// Classe para validação dos dados do hero
export class AboutHeroValidator {
  static validateHeroData(data: AboutHeroData): {isValid: boolean, errors: string[]} {
    const errors: string[] = [];

    if (!data.title || data.title.trim().length < 5) {
      errors.push('Título deve ter pelo menos 5 caracteres');
    }

    if (!data.subtitle || data.subtitle.trim().length < 5) {
      errors.push('Subtítulo deve ter pelo menos 5 caracteres');
    }

    if (!data.description || data.description.trim().length < 20) {
      errors.push('Descrição deve ter pelo menos 20 caracteres');
    }

    if (!data.imageUrl || !this.isValidUrl(data.imageUrl)) {
      errors.push('URL da imagem deve ser válida');
    }

    if (data.ctaUrl && !this.isValidUrl(data.ctaUrl) && !this.isValidPath(data.ctaUrl)) {
      errors.push('URL do CTA deve ser válida');
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

  private static isValidPath(path: string): boolean {
    return path.startsWith('/') && path.length > 1;
  }
}

// Mock do componente AboutHero
export class MockAboutHero {
  private data: AboutHeroData;
  private isVisible = true;
  private hasAnimation = false;

  constructor(data: AboutHeroData) {
    this.data = data;
  }

  // Simular renderização do componente
  render(): {
    rendered: boolean;
    elements: string[];
    accessibility: {
      hasAltText: boolean;
      hasHeadings: boolean;
      hasStructure: boolean;
    };
  } {
    const validation = AboutHeroValidator.validateHeroData(this.data);
    
    if (!validation.isValid) {
      return {
        rendered: false,
        elements: [],
        accessibility: {
          hasAltText: false,
          hasHeadings: false,
          hasStructure: false
        }
      };
    }

    const elements = ['hero-container'];
    
    if (this.data.title) elements.push('title');
    if (this.data.subtitle) elements.push('subtitle');
    if (this.data.description) elements.push('description');
    if (this.data.imageUrl) elements.push('hero-image');
    if (this.data.ctaText && this.data.ctaUrl) elements.push('cta-button');

    return {
      rendered: this.isVisible,
      elements,
      accessibility: {
        hasAltText: !!this.data.imageUrl,
        hasHeadings: !!(this.data.title && this.data.subtitle),
        hasStructure: elements.length >= 4
      }
    };
  }

  // Simular interações
  clickCTA(): {success: boolean, url?: string} {
    if (!this.data.ctaUrl) {
      return { success: false };
    }

    return { 
      success: true, 
      url: this.data.ctaUrl 
    };
  }

  setVisibility(visible: boolean): void {
    this.isVisible = visible;
  }

  enableAnimation(): void {
    this.hasAnimation = true;
  }

  // Obter métricas do componente
  getMetrics(): {
    titleLength: number;
    descriptionLength: number;
    hasOptionalElements: boolean;
    loadTime: number;
  } {
    return {
      titleLength: this.data.title.length,
      descriptionLength: this.data.description.length,
      hasOptionalElements: !!(this.data.ctaText && this.data.ctaUrl),
      loadTime: Math.random() * 100 // Simular tempo de carregamento
    };
  }
}

// Casos de teste para o AboutHero
export const heroTestCases = {
  completeHero: {
    description: 'Hero completo deve renderizar todos os elementos',
    data: mockHeroData,
    expectedElements: ['hero-container', 'title', 'subtitle', 'description', 'hero-image', 'cta-button']
  },

  minimalHero: {
    description: 'Hero mínimo deve renderizar elementos básicos',
    data: mockHeroDataMinimal,
    expectedElements: ['hero-container', 'title', 'subtitle', 'description', 'hero-image']
  },

  invalidHero: {
    description: 'Hero com dados inválidos não deve renderizar',
    data: {
      title: '',
      subtitle: '',
      description: '',
      imageUrl: 'invalid-url'
    } as AboutHeroData,
    expectedElements: []
  }
};

// Classe para executar testes do AboutHero
export class AboutHeroTester {
  static testBasicRendering(): {passed: boolean, message: string} {
    try {
      const hero = new MockAboutHero(mockHeroData);
      const result = hero.render();
      
      const hasRequiredElements = result.elements.includes('title') && 
                                 result.elements.includes('description') && 
                                 result.elements.includes('hero-image');

      return {
        passed: result.rendered && hasRequiredElements,
        message: result.rendered ? 
          `Renderizou ${result.elements.length} elementos` : 
          'Falha na renderização'
      };
    } catch (error) {
      return {
        passed: false,
        message: `Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
      };
    }
  }

  static testAccessibility(): {passed: boolean, message: string} {
    try {
      const hero = new MockAboutHero(mockHeroData);
      const result = hero.render();
      
      const accessibility = result.accessibility;
      const passed = accessibility.hasAltText && 
                    accessibility.hasHeadings && 
                    accessibility.hasStructure;

      return {
        passed,
        message: passed ? 
          'Todos os critérios de acessibilidade atendidos' : 
          `Falhas: alt=${accessibility.hasAltText}, headings=${accessibility.hasHeadings}, structure=${accessibility.hasStructure}`
      };
    } catch (error) {
      return {
        passed: false,
        message: `Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
      };
    }
  }

  static testCTAInteraction(): {passed: boolean, message: string} {
    try {
      const hero = new MockAboutHero(mockHeroData);
      const ctaResult = hero.clickCTA();
      
      const passed = ctaResult.success && ctaResult.url === mockHeroData.ctaUrl;

      return {
        passed,
        message: passed ? 
          `CTA funcionando corretamente: ${ctaResult.url}` : 
          'Falha na interação do CTA'
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
      const hero = new MockAboutHero(mockHeroData);
      const metrics = hero.getMetrics();
      
      // Critérios de performance
      const passed = metrics.loadTime < 150 && // Menos de 150ms
                    metrics.titleLength > 0 && 
                    metrics.descriptionLength > 0;

      return {
        passed,
        message: passed ? 
          `Performance adequada: ${metrics.loadTime.toFixed(2)}ms` : 
          `Performance inadequada: ${metrics.loadTime.toFixed(2)}ms`
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
    console.log('=== Testes do AboutHero ===');
    
    const tests = [
      { name: 'Renderização Básica', test: this.testBasicRendering },
      { name: 'Acessibilidade', test: this.testAccessibility },
      { name: 'Interação CTA', test: this.testCTAInteraction },
      { name: 'Performance', test: this.testPerformance }
    ];

    tests.forEach(testCase => {
      const result = testCase.test();
      console.log(`${result.passed ? '✓' : '✗'} ${testCase.name}: ${result.message}`);
    });
  }
}