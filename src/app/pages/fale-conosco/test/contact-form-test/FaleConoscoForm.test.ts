/**
 * Teste unitário simplificado para o componente FaleConosco
 * Responsabilidade: Validar lógica de negócio do formulário sem dependências externas
 */

import { ContactFormData, ContactResponse } from '../../types';

// Mock simples dos dados do formulário
export const mockContactData: ContactFormData = {
  name: 'João Silva',
  email: 'joao@teste.com',
  message: 'Esta é uma mensagem de teste para validar o formulário de contato.'
};

export const invalidContactData: ContactFormData = {
  name: '',
  email: 'email-invalido',
  message: 'msg'
};

// Simulador do componente FaleConosco
export class FaleConoscoSimulator {
  private formData: ContactFormData;
  private errors: string[] = [];
  private isSubmitting = false;
  private submitResult: ContactResponse | null = null;

  constructor() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }

  // Simular mudança nos campos do formulário
  updateField(field: keyof ContactFormData, value: string): void {
    this.formData[field] = value;
    this.validateField(field, value);
  }

  // Validar campo individual
  private validateField(field: keyof ContactFormData, value: string): void {
    // Remover erros anteriores do campo
    this.errors = this.errors.filter(error => !error.includes(field));

    switch (field) {
      case 'name':
        if (!value || value.trim().length < 2) {
          this.errors.push('name: Nome deve ter pelo menos 2 caracteres');
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailRegex.test(value)) {
          this.errors.push('email: Email deve ter formato válido');
        }
        break;
      case 'message':
        if (!value || value.trim().length < 10) {
          this.errors.push('message: Mensagem deve ter pelo menos 10 caracteres');
        }
        break;
    }
  }

  // Validar formulário completo
  validateForm(): { isValid: boolean; errors: string[] } {
    this.errors = [];
    
    this.validateField('name', this.formData.name);
    this.validateField('email', this.formData.email);
    this.validateField('message', this.formData.message);

    return {
      isValid: this.errors.length === 0,
      errors: [...this.errors]
    };
  }

  // Simular envio do formulário
  async submitForm(): Promise<ContactResponse> {
    const validation = this.validateForm();
    
    if (!validation.isValid) {
      return {
        success: false,
        message: `Erro de validação: ${validation.errors.join(', ')}`
      };
    }

    this.isSubmitting = true;

    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 500));

    // Simular resposta do servidor
    const mockResponse: ContactResponse = {
      success: true,
      message: 'Mensagem enviada com sucesso!'
    };

    this.isSubmitting = false;
    this.submitResult = mockResponse;

    return mockResponse;
  }

  // Resetar formulário
  reset(): void {
    this.formData = { name: '', email: '', message: '' };
    this.errors = [];
    this.isSubmitting = false;
    this.submitResult = null;
  }

  // Obter estado atual
  getState() {
    return {
      formData: { ...this.formData },
      errors: [...this.errors],
      isSubmitting: this.isSubmitting,
      submitResult: this.submitResult
    };
  }

  // Preencher formulário com dados de teste
  fillWithTestData(data: ContactFormData): void {
    Object.entries(data).forEach(([key, value]) => {
      this.updateField(key as keyof ContactFormData, value);
    });
  }
}

// Classe para executar testes
export class FaleConoscoTester {
  static testFormValidation(): { passed: boolean; message: string } {
    try {
      const simulator = new FaleConoscoSimulator();
      
      // Teste com dados inválidos
      simulator.fillWithTestData(invalidContactData);
      const invalidResult = simulator.validateForm();
      
      if (invalidResult.isValid) {
        return {
          passed: false,
          message: 'Formulário inválido foi aceito como válido'
        };
      }

      // Teste com dados válidos
      simulator.reset();
      simulator.fillWithTestData(mockContactData);
      const validResult = simulator.validateForm();
      
      if (!validResult.isValid) {
        return {
          passed: false,
          message: `Formulário válido foi rejeitado: ${validResult.errors.join(', ')}`
        };
      }

      return {
        passed: true,
        message: 'Validação funcionando corretamente'
      };
    } catch (error) {
      return {
        passed: false,
        message: `Erro no teste: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
      };
    }
  }

  static async testFormSubmission(): Promise<{ passed: boolean; message: string }> {
    try {
      const simulator = new FaleConoscoSimulator();
      
      // Teste de envio com dados válidos
      simulator.fillWithTestData(mockContactData);
      const result = await simulator.submitForm();
      
      if (!result.success) {
        return {
          passed: false,
          message: `Envio falhou: ${result.message}`
        };
      }

      // Teste de envio com dados inválidos
      simulator.reset();
      simulator.fillWithTestData(invalidContactData);
      const invalidResult = await simulator.submitForm();
      
      if (invalidResult.success) {
        return {
          passed: false,
          message: 'Dados inválidos foram aceitos no envio'
        };
      }

      return {
        passed: true,
        message: 'Envio funcionando corretamente'
      };
    } catch (error) {
      return {
        passed: false,
        message: `Erro no teste: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
      };
    }
  }

  static testFormInteractions(): { passed: boolean; message: string } {
    try {
      const simulator = new FaleConoscoSimulator();
      
      // Teste de preenchimento de campos
      simulator.updateField('name', 'Test User');
      simulator.updateField('email', 'test@example.com');
      simulator.updateField('message', 'Esta é uma mensagem de teste válida');
      
      const state = simulator.getState();
      
      const nameCorrect = state.formData.name === 'Test User';
      const emailCorrect = state.formData.email === 'test@example.com';
      const messageCorrect = state.formData.message === 'Esta é uma mensagem de teste válida';
      const noErrors = state.errors.length === 0;
      
      if (!nameCorrect || !emailCorrect || !messageCorrect || !noErrors) {
        return {
          passed: false,
          message: `Problemas na interação: name=${nameCorrect}, email=${emailCorrect}, message=${messageCorrect}, errors=${noErrors}`
        };
      }

      return {
        passed: true,
        message: 'Interações funcionando corretamente'
      };
    } catch (error) {
      return {
        passed: false,
        message: `Erro no teste: ${error instanceof Error ? error.message : 'Erro desconhecido'}`
      };
    }
  }

  static async runAllTests(): Promise<void> {
    console.log('=== Testes do FaleConosco ===');
    
    // Teste de validação
    const validationTest = this.testFormValidation();
    console.log(`${validationTest.passed ? '✓' : '✗'} Validação: ${validationTest.message}`);
    
    // Teste de envio
    const submissionTest = await this.testFormSubmission();
    console.log(`${submissionTest.passed ? '✓' : '✗'} Envio: ${submissionTest.message}`);
    
    // Teste de interações
    const interactionTest = this.testFormInteractions();
    console.log(`${interactionTest.passed ? '✓' : '✗'} Interações: ${interactionTest.message}`);
  }
}

// Exemplo de uso dos testes
export async function demonstrarTestes(): Promise<void> {
  console.log('Demonstração dos testes do FaleConosco:');
  await FaleConoscoTester.runAllTests();
}

// Exportar para uso em outros lugares
export default FaleConoscoSimulator;