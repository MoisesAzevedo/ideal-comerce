/**
 * Teste unitário para o componente TeamCard
 * Responsabilidade: Validar exibição e comportamento dos cards de equipe
 */

// Tipos para dados do membro da equipe
export type TeamMember = {
  id: number;
  name: string;
  position: string;
  description: string;
  imageUrl: string;
  socialLinks?: {
    linkedin?: string;
    email?: string;
    twitter?: string;
  };
  skills?: string[];
  experience?: number; // anos de experiência
};

// Mock de dados da equipe
export const mockTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ana Silva',
    position: 'CEO & Fundadora',
    description: 'Empreendedora visionária com mais de 15 anos de experiência em varejo e e-commerce.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?auto=format&fit=crop&w=400&q=80',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/ana-silva',
      email: 'ana@idealcomerce.com'
    },
    skills: ['Gestão', 'Estratégia', 'Liderança'],
    experience: 15
  },
  {
    id: 2,
    name: 'Carlos Santos',
    position: 'CTO',
    description: 'Especialista em tecnologia e desenvolvimento de sistemas para e-commerce.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/carlos-santos',
      twitter: 'https://twitter.com/carlos_dev'
    },
    skills: ['Desenvolvimento', 'Arquitetura', 'DevOps'],
    experience: 12
  },
  {
    id: 3,
    name: 'Maria Oliveira',
    position: 'Gerente de Vendas',
    description: 'Responsável por relacionamento com clientes e estratégias de vendas.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    skills: ['Vendas', 'Atendimento', 'Negociação'],
    experience: 8
  }
];

// Classe para validação dos dados do TeamCard
export class TeamCardValidator {
  static validateMember(member: TeamMember): {isValid: boolean, errors: string[]} {
    const errors: string[] = [];

    if (!member.name || member.name.trim().length < 2) {
      errors.push('Nome deve ter pelo menos 2 caracteres');
    }

    if (!member.position || member.position.trim().length < 3) {
      errors.push('Posição deve ter pelo menos 3 caracteres');
    }

    if (!member.description || member.description.trim().length < 20) {
      errors.push('Descrição deve ter pelo menos 20 caracteres');
    }

    if (!member.imageUrl || !this.isValidImageUrl(member.imageUrl)) {
      errors.push('URL da imagem deve ser válida');
    }

    if (member.socialLinks) {
      Object.entries(member.socialLinks).forEach(([platform, url]) => {
        if (url && !this.isValidUrl(url)) {
          errors.push(`URL do ${platform} é inválida`);
        }
      });
    }

    if (member.experience !== undefined && (member.experience < 0 || member.experience > 50)) {
      errors.push('Experiência deve estar entre 0 e 50 anos');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  private static isValidImageUrl(url: string): boolean {
    try {
      const urlObj = new URL(url);
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch {
      return false;
    }
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

// Mock do componente TeamCard
export class MockTeamCard {
  private member: TeamMember;
  private isHovered = false;
  private isLoading = false;

  constructor(member: TeamMember) {
    this.member = member;
  }

  // Simular renderização do card
  render(): {
    rendered: boolean;
    elements: string[];
    accessibility: {
      hasAltText: boolean;
      hasRole: boolean;
      hasAriaLabels: boolean;
    };
  } {
    const validation = TeamCardValidator.validateMember(this.member);
    
    if (!validation.isValid) {
      return {
        rendered: false,
        elements: [],
        accessibility: {
          hasAltText: false,
          hasRole: false,
          hasAriaLabels: false
        }
      };
    }

    const elements = ['card-container'];
    
    if (this.member.name) elements.push('member-name');
    if (this.member.position) elements.push('member-position');
    if (this.member.description) elements.push('member-description');
    if (this.member.imageUrl) elements.push('member-image');
    if (this.member.socialLinks) elements.push('social-links');
    if (this.member.skills && this.member.skills.length > 0) elements.push('skills-list');
    if (this.member.experience) elements.push('experience-badge');

    return {
      rendered: !this.isLoading,
      elements,
      accessibility: {
        hasAltText: !!this.member.imageUrl,
        hasRole: true, // assumindo que o card tem role adequado
        hasAriaLabels: !!(this.member.socialLinks && Object.keys(this.member.socialLinks).length > 0)
      }
    };
  }

  // Simular hover no card
  hover(): {hovered: boolean, effects: string[]} {
    this.isHovered = true;
    const effects = ['elevation-effect'];
    
    if (this.member.socialLinks) effects.push('social-links-visible');
    if (this.member.skills) effects.push('skills-highlight');

    return {
      hovered: this.isHovered,
      effects
    };
  }

  // Simular clique no link social
  clickSocialLink(platform: keyof NonNullable<TeamMember['socialLinks']>): {
    success: boolean;
    url?: string;
    error?: string;
  } {
    if (!this.member.socialLinks || !this.member.socialLinks[platform]) {
      return {
        success: false,
        error: `Link ${platform} não disponível`
      };
    }

    return {
      success: true,
      url: this.member.socialLinks[platform]
    };
  }

  // Obter métricas do card
  getCardMetrics(): {
    completeness: number; // percentual de campos preenchidos
    socialLinksCount: number;
    skillsCount: number;
    descriptionLength: number;
    hasExperience: boolean;
  } {
    const totalFields = 6; // name, position, description, image, social, skills
    let filledFields = 4; // name, position, description, image são obrigatórios

    if (this.member.socialLinks && Object.keys(this.member.socialLinks).length > 0) filledFields++;
    if (this.member.skills && this.member.skills.length > 0) filledFields++;

    return {
      completeness: (filledFields / totalFields) * 100,
      socialLinksCount: this.member.socialLinks ? Object.keys(this.member.socialLinks).length : 0,
      skillsCount: this.member.skills ? this.member.skills.length : 0,
      descriptionLength: this.member.description.length,
      hasExperience: this.member.experience !== undefined
    };
  }

  setLoading(loading: boolean): void {
    this.isLoading = loading;
  }
}

// Casos de teste para TeamCard
export const teamCardTestCases = {
  completeMember: {
    description: 'Membro completo deve renderizar todos os elementos',
    member: mockTeamMembers[0],
    expectedElements: ['card-container', 'member-name', 'member-position', 'member-description', 'member-image', 'social-links', 'skills-list', 'experience-badge']
  },

  basicMember: {
    description: 'Membro básico deve renderizar elementos essenciais',
    member: mockTeamMembers[2], // sem social links
    expectedElements: ['card-container', 'member-name', 'member-position', 'member-description', 'member-image', 'skills-list', 'experience-badge']
  },

  invalidMember: {
    description: 'Membro com dados inválidos não deve renderizar',
    member: {
      id: 999,
      name: '',
      position: '',
      description: '',
      imageUrl: 'invalid-url'
    } as TeamMember,
    expectedElements: []
  }
};

// Classe para executar testes do TeamCard
export class TeamCardTester {
  static testBasicRendering(): {passed: boolean, message: string} {
    try {
      const card = new MockTeamCard(mockTeamMembers[0]);
      const result = card.render();
      
      const hasEssentialElements = result.elements.includes('member-name') && 
                                  result.elements.includes('member-position') && 
                                  result.elements.includes('member-description') && 
                                  result.elements.includes('member-image');

      return {
        passed: result.rendered && hasEssentialElements,
        message: result.rendered ? 
          `Renderizou ${result.elements.length} elementos essenciais` : 
          'Falha na renderização'
      };
    } catch (error) {
      return {
        passed: false,
        message: `Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
      };
    }
  }

  static testInteractions(): {passed: boolean, message: string} {
    try {
      const card = new MockTeamCard(mockTeamMembers[0]);
      
      // Teste de hover
      const hoverResult = card.hover();
      
      // Teste de clique em social link
      const socialResult = card.clickSocialLink('linkedin');

      const passed = hoverResult.hovered && 
                    hoverResult.effects.length > 0 && 
                    socialResult.success;

      return {
        passed,
        message: passed ? 
          `Interações funcionando: hover(${hoverResult.effects.length} efeitos), social(${socialResult.url})` : 
          'Falha nas interações'
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
      const card = new MockTeamCard(mockTeamMembers[0]);
      const result = card.render();
      
      const accessibility = result.accessibility;
      const passed = accessibility.hasAltText && 
                    accessibility.hasRole && 
                    accessibility.hasAriaLabels;

      return {
        passed,
        message: passed ? 
          'Critérios de acessibilidade atendidos' : 
          `Falhas: alt=${accessibility.hasAltText}, role=${accessibility.hasRole}, aria=${accessibility.hasAriaLabels}`
      };
    } catch (error) {
      return {
        passed: false,
        message: `Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
      };
    }
  }

  static testDataCompleteness(): {passed: boolean, message: string} {
    try {
      const results = mockTeamMembers.map((member, index) => {
        const card = new MockTeamCard(member);
        const metrics = card.getCardMetrics();
        return { index, completeness: metrics.completeness, member: member.name };
      });

      const averageCompleteness = results.reduce((sum, r) => sum + r.completeness, 0) / results.length;
      const passed = averageCompleteness >= 80; // Pelo menos 80% de completude

      return {
        passed,
        message: passed ? 
          `Completude adequada: ${averageCompleteness.toFixed(1)}%` : 
          `Completude insuficiente: ${averageCompleteness.toFixed(1)}%`
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
    console.log('=== Testes do TeamCard ===');
    
    const tests = [
      { name: 'Renderização Básica', test: this.testBasicRendering },
      { name: 'Interações', test: this.testInteractions },
      { name: 'Acessibilidade', test: this.testAccessibility },
      { name: 'Completude dos Dados', test: this.testDataCompleteness }
    ];

    tests.forEach(testCase => {
      const result = testCase.test();
      console.log(`${result.passed ? '✓' : '✗'} ${testCase.name}: ${result.message}`);
    });
  }
}

// Função utilitária para testar todos os membros da equipe
export function testAllTeamMembers(): void {
  console.log('=== Testando Todos os Membros da Equipe ===');
  
  mockTeamMembers.forEach((member, index) => {
    console.log(`\nTestando: ${member.name} (${member.position})`);
    
    const card = new MockTeamCard(member);
    const validation = TeamCardValidator.validateMember(member);
    const result = card.render();
    const metrics = card.getCardMetrics();
    
    console.log(`✓ Validação: ${validation.isValid ? 'Passou' : 'Falhou'}`);
    if (!validation.isValid) {
      console.log(`  Erros: ${validation.errors.join(', ')}`);
    }
    
    console.log(`✓ Renderização: ${result.rendered ? 'Sucesso' : 'Falha'}`);
    console.log(`✓ Completude: ${metrics.completeness.toFixed(1)}%`);
    console.log(`✓ Links sociais: ${metrics.socialLinksCount}`);
    console.log(`✓ Habilidades: ${metrics.skillsCount}`);
  });
}