"use client";
import React from 'react';
import useContactForm from '../useContactForm';

export default function FaleConosco() {
  const { form, update, submit, loading, error, success } = useContactForm();

  return (
    <div data-name="fale-conosco" className="w-full bg-gray-50 rounded p-4 phone:p-6 md:p-8">
      <h3 className="text-xl phone:text-2xl font-semibold mb-4">Fale conosco</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className="w-full rounded border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-[#495949]"
            placeholder="Seu nome"
            type="text"
          />

          <label className="block text-sm font-medium mt-3 mb-1">Email</label>
          <input
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className="w-full rounded border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-[#495949]"
            placeholder="seu@exemplo.com"
            type="email"
          />
        </div>

        <div className="col-span-1">
          <label className="block text-sm font-medium mb-1">Mensagem</label>
          <textarea
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            className="w-full h-full min-h-[140px] rounded border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-[#495949]"
            placeholder="Escreva sua mensagem"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={() => submit()}
          disabled={loading}
          className="px-4 py-2 bg-[#495949] text-white rounded disabled:opacity-60"
        >
          {loading ? 'Enviando...' : 'Enviar mensagem'}
        </button>

        {error && <div className="text-sm text-red-600">{error}</div>}
        {success && <div className="text-sm text-green-600">{success}</div>}
      </div>
    </div>
  );
}
