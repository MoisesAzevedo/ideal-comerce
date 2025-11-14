/**
 * Teste unitário para validações do formulário de contato
 * Responsabilidade: Validar regras de negócio e sanitização de dados
 */

import { ContactFormData } from '../../types';

// Mock de dados de teste
export const validContactData: ContactFormData = {
  name: 'João Silva',
  email: 'joao@teste.com',
  message: 'Gostaria de mais informações sobre os produtos disponíveis na loja.'
};

export const invalidContactData: ContactFormData = {
  name: '',
  email: 'email-invalido',
  message: ''
};

// Mock do serviço de contato
export class MockContactService {
  static mockResponse = { success: true, message: 'Enviado com sucesso!' };
  static shouldFail = false;

  static async sendMessage(data: ContactFormData): Promise<{success: boolean, message: string}> {
    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 100));
    
    if (this.shouldFail) {
      throw new Error('Erro simulado do servidor');
    }
    
    return this.mockResponse;
  }

  static setMockResponse(response: {success: boolean, message: string}) {
    this.mockResponse = response;
  }

  static setShouldFail(shouldFail: boolean) {
    this.shouldFail = shouldFail;
  }
}

// Utilitários de validação para testes
export class ContactFormValidator {
  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validateName(name: string): boolean {
    return name.trim().length >= 2;
  }

  static validateMessage(message: string): boolean {
    return message.trim().length >= 10;
  }

  static validateForm(data: ContactFormData): {isValid: boolean, errors: string[]} {
    const errors: string[] = [];

    if (!this.validateName(data.name)) {
      errors.push('Nome deve ter pelo menos 2 caracteres');
    }

    if (!this.validateEmail(data.email)) {
      errors.push('Email deve ter formato válido');
    }

    if (!this.validateMessage(data.message)) {
      errors.push('Mensagem deve ter pelo menos 10 caracteres');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

// Casos de teste documentados
export const testCases = {
  validForm: {
    description: 'Formulário com dados válidos deve passar na validação',
    data: validContactData,
    expectedValid: true
  },
  
  invalidEmail: {
    description: 'Email inválido deve falhar na validação',
    data: { ...validContactData, email: 'email-invalido' },
    expectedValid: false
  },
  
  emptyName: {
    description: 'Nome vazio deve falhar na validação',
    data: { ...validContactData, name: '' },
    expectedValid: false
  },
  
  shortMessage: {
    description: 'Mensagem muito curta deve falhar na validação',
    data: { ...validContactData, message: 'Oi' },
    expectedValid: false
  }
};

// Função para executar testes manuais
export function runValidationTests(): void {
  console.log('=== Executando Testes de Validação ===');
  
  Object.entries(testCases).forEach(([key, testCase]) => {
    const result = ContactFormValidator.validateForm(testCase.data);
    const passed = result.isValid === testCase.expectedValid;
    
    console.log(`✓ ${testCase.description}: ${passed ? 'PASSOU' : 'FALHOU'}`);
    
    if (!passed) {
      console.log(`  Esperado: ${testCase.expectedValid}, Obtido: ${result.isValid}`);
      console.log(`  Erros: ${result.errors.join(', ')}`);
    }
  });
}

// Exemplo de uso dos mocks
export async function testContactService(): Promise<void> {
  console.log('=== Testando Serviço de Contato ===');
  
  // Teste de sucesso
  MockContactService.setShouldFail(false);
  try {
    const result = await MockContactService.sendMessage(validContactData);
    console.log('✓ Envio bem-sucedido:', result.message);
  } catch (error) {
    console.log('✗ Falha inesperada:', error);
  }
  
  // Teste de erro
  MockContactService.setShouldFail(true);
  try {
    await MockContactService.sendMessage(validContactData);
    console.log('✗ Deveria ter falhado');
  } catch (error) {
    console.log('✓ Erro tratado corretamente:', error instanceof Error ? error.message : 'Erro desconhecido');
  }
}