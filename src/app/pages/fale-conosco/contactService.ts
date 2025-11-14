import type { ContactFormData, ContactResponse } from './types';

// Serviço de envio de contato - atualmente mock (separar responsabilidade)
export async function sendContactForm(data: ContactFormData): Promise<ContactResponse> {
  // Simular delay e resposta
  await new Promise((res) => setTimeout(res, 600));

  // Validação simples do serviço (responsabilidade do serviço: comunicação)
  if (!data.email.includes('@')) {
    return { success: false, message: 'Email inválido' };
  }

  // Aqui seria chamada real: fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
  return { success: true, message: 'Mensagem enviada com sucesso' };
}

export default sendContactForm;
