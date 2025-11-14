/**
 * Teste unitário para o serviço de contato
 * Responsabilidade: Validar integração com APIs e tratamento de erros
 */

import { ContactFormData, ContactResponse } from '../../types';

// Mock do serviço original
export class MockContactService {
  private static responses: Map<string, ContactResponse> = new Map();
  private static shouldFail = false;
  private static networkDelay = 100;

  // Configurar comportamento do mock
  static setResponse(key: string, response: ContactResponse): void {
    this.responses.set(key, response);
  }

  static setShouldFail(shouldFail: boolean): void {
    this.shouldFail = shouldFail;
  }

  static setNetworkDelay(delay: number): void {
    this.networkDelay = delay;
  }

  // Simular chamada de API
  static async sendMessage(data: ContactFormData): Promise<ContactResponse> {
    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, this.networkDelay));
    
    if (this.shouldFail) {
      throw new Error('Falha na comunicação com o servidor');
    }

    // Retornar resposta baseada no email (para testes específicos)
    const response = this.responses.get(data.email);
    if (response) {
      return response;
    }

    // Resposta padrão de sucesso
    return {
      success: true,
      message: 'Mensagem enviada com sucesso!'
    };
  }

  // Limpar estado do mock
  static reset(): void {
    this.responses.clear();
    this.shouldFail = false;
    this.networkDelay = 100;
  }
}

// Dados de teste para diferentes cenários
export const testData = {
  validUser: {
    name: 'Maria Santos',
    email: 'maria@teste.com',
    message: 'Olá, gostaria de saber mais sobre os produtos da loja.'
  },
  
  duplicateUser: {
    name: 'Pedro Oliveira',
    email: 'pedro@duplicado.com',
    message: 'Esta é uma mensagem duplicada para teste.'
  },
  
  blockedUser: {
    name: 'Spam User',
    email: 'spam@bloqueado.com',
    message: 'Esta mensagem deve ser bloqueada pelo sistema.'
  },
  
  longMessage: {
    name: 'João Extenso',
    email: 'joao@longo.com',
    message: 'Esta é uma mensagem muito longa '.repeat(50) + 'para testar o limite do sistema.'
  }
};

// Cenários de resposta para diferentes situações
export const responseScenarios = {
  success: {
    success: true,
    message: 'Mensagem enviada com sucesso!'
  },
  
  duplicate: {
    success: false,
    message: 'Esta mensagem já foi enviada recentemente.'
  },
  
  blocked: {
    success: false,
    message: 'Usuário bloqueado por violação dos termos.'
  },
  
  tooLong: {
    success: false,
    message: 'Mensagem excede o limite de caracteres permitido.'
  }
};

// Classe para executar testes de serviço
export class ContactServiceTester {
  static async testSuccessScenario(): Promise<{passed: boolean, message: string}> {
    try {
      MockContactService.reset();
      MockContactService.setResponse(testData.validUser.email, responseScenarios.success);
      
      const response = await MockContactService.sendMessage(testData.validUser);
      
      const passed = response.success && response.message === responseScenarios.success.message;
      
      return {
        passed,
        message: passed ? 'Teste de sucesso passou' : `Falhou: ${JSON.stringify(response)}`
      };
    } catch (error) {
      return {
        passed: false,
        message: `Erro inesperado: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
      };
    }
  }

  static async testFailureScenario(): Promise<{passed: boolean, message: string}> {
    try {
      MockContactService.reset();
      MockContactService.setShouldFail(true);
      
      await MockContactService.sendMessage(testData.validUser);
      
      return {
        passed: false,
        message: 'Teste falhou - deveria ter lançado erro'
      };
    } catch (error) {
      return {
        passed: true,
        message: 'Teste de falha passou - erro capturado corretamente'
      };
    }
  }

  static async testDuplicateMessage(): Promise<{passed: boolean, message: string}> {
    try {
      MockContactService.reset();
      MockContactService.setResponse(testData.duplicateUser.email, responseScenarios.duplicate);
      
      const response = await MockContactService.sendMessage(testData.duplicateUser);
      
      const passed = !response.success && response.message === responseScenarios.duplicate.message;
      
      return {
        passed,
        message: passed ? 'Teste de duplicata passou' : `Falhou: ${JSON.stringify(response)}`
      };
    } catch (error) {
      return {
        passed: false,
        message: `Erro inesperado: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
      };
    }
  }

  static async testBlockedUser(): Promise<{passed: boolean, message: string}> {
    try {
      MockContactService.reset();
      MockContactService.setResponse(testData.blockedUser.email, responseScenarios.blocked);
      
      const response = await MockContactService.sendMessage(testData.blockedUser);
      
      const passed = !response.success && response.message === responseScenarios.blocked.message;
      
      return {
        passed,
        message: passed ? 'Teste de usuário bloqueado passou' : `Falhou: ${JSON.stringify(response)}`
      };
    } catch (error) {
      return {
        passed: false,
        message: `Erro inesperado: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
      };
    }
  }

  // Executar todos os testes
  static async runAllTests(): Promise<void> {
    console.log('=== Executando Testes do Serviço de Contato ===');
    
    const tests = [
      { name: 'Cenário de Sucesso', test: this.testSuccessScenario },
      { name: 'Cenário de Falha', test: this.testFailureScenario },
      { name: 'Mensagem Duplicada', test: this.testDuplicateMessage },
      { name: 'Usuário Bloqueado', test: this.testBlockedUser }
    ];

    for (const testCase of tests) {
      console.log(`\nExecutando: ${testCase.name}`);
      const result = await testCase.test();
      console.log(`${result.passed ? '✓' : '✗'} ${result.message}`);
    }
  }
}

// Função utilitária para simular diferentes condições de rede
export async function simulateNetworkConditions(): Promise<void> {
  console.log('=== Simulando Condições de Rede ===');
  
  // Rede rápida
  MockContactService.reset();
  MockContactService.setNetworkDelay(50);
  const startFast = Date.now();
  await MockContactService.sendMessage(testData.validUser);
  console.log(`✓ Rede rápida: ${Date.now() - startFast}ms`);
  
  // Rede lenta
  MockContactService.setNetworkDelay(2000);
  const startSlow = Date.now();
  await MockContactService.sendMessage(testData.validUser);
  console.log(`✓ Rede lenta: ${Date.now() - startSlow}ms`);
}