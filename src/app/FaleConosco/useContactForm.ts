import { useState } from 'react';
import type { ContactFormData } from './types';
import { sendContactForm } from './contactService';

export function useContactForm(initial?: Partial<ContactFormData>) {
  const [form, setForm] = useState<ContactFormData>({
    name: initial?.name ?? '',
    email: initial?.email ?? '',
    message: initial?.message ?? ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  function update<K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) {
    setForm((s) => ({ ...s, [key]: value }));
  }

  async function submit() {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      // validação simples
      if (!form.name || !form.email || !form.message) throw new Error('Preencha todos os campos');
      const res = await sendContactForm(form);
      if (!res.success) throw new Error(res.message || 'Erro desconhecido');
      setSuccess(res.message ?? 'Enviado');
      setForm({ name: '', email: '', message: '' });
    } catch (err: any) {
      setError(err.message ?? 'Erro ao enviar');
    } finally {
      setLoading(false);
    }
  }

  return { form, update, submit, loading, error, success } as const;
}

export default useContactForm;
