/**
 * Component: DeliveryAddressForm
 * Responsabilidade única: Formulário para cadastro/edição de endereço de entrega
 */

import React, { useState, useEffect } from 'react';
import { DeliveryAddress } from '../types';
import { validateEmail, validateZipCode, validatePhone } from '../utils/validation';

interface DeliveryAddressFormProps {
  address: DeliveryAddress | null;
  onAddressChange: (address: DeliveryAddress | null) => void;
  className?: string;
}

export const DeliveryAddressForm: React.FC<DeliveryAddressFormProps> = ({
  address,
  onAddressChange,
  className = '',
}) => {
  const [formData, setFormData] = useState<DeliveryAddress>({
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Atualizar formulário quando o endereço externo mudar
  useEffect(() => {
    if (address) {
      setFormData(address);
    }
  }, [address]);

  // Validar campo individual
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'fullName':
        return value.trim().length < 3 ? 'Nome deve ter pelo menos 3 caracteres' : '';
      case 'email':
        return !validateEmail(value) ? 'E-mail inválido' : '';
      case 'phone':
        return !validatePhone(value) ? 'Telefone inválido' : '';
      case 'zipCode':
        return !validateZipCode(value) ? 'CEP inválido' : '';
      case 'street':
        return value.trim().length < 5 ? 'Endereço deve ter pelo menos 5 caracteres' : '';
      case 'number':
        return value.trim().length === 0 ? 'Número é obrigatório' : '';
      case 'neighborhood':
        return value.trim().length < 2 ? 'Bairro é obrigatório' : '';
      case 'city':
        return value.trim().length < 2 ? 'Cidade é obrigatória' : '';
      case 'state':
        return value.trim().length < 2 ? 'Estado é obrigatório' : '';
      default:
        return '';
    }
  };

  // Atualizar campo do formulário
  const handleInputChange = (name: string, value: string) => {
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    // Validar campo
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));

    // Se não há erros, validar formulário completo e notificar mudança
    const hasErrors = Object.values({ ...errors, [name]: error }).some(err => err !== '');
    const isFormComplete = Object.keys(newFormData).every(key => {
      if (key === 'complement' || key === 'id' || key === 'isDefault') return true;
      return newFormData[key as keyof DeliveryAddress]?.toString().trim() !== '';
    });

    if (!hasErrors && isFormComplete) {
      onAddressChange(newFormData);
    } else if (hasErrors || !isFormComplete) {
      onAddressChange(null);
    }
  };

  // Buscar endereço pelo CEP (mock)
  const handleZipCodeChange = async (value: string) => {
    handleInputChange('zipCode', value);
    
    if (validateZipCode(value)) {
      // Mock de busca de CEP - em produção, usar API real
      setTimeout(() => {
        setFormData(prev => ({
          ...prev,
          street: 'Rua Exemplo',
          neighborhood: 'Centro',
          city: 'São Paulo',
          state: 'SP',
        }));
      }, 500);
    }
  };

  const inputClasses = "w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-green)] focus:bg-white transition-colors";
  const errorClasses = "text-red-500 text-xs mt-1";

  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      <h3 className="text-lg font-semibold font-teko mb-4">Endereço de Entrega</h3>
      
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-3">
        {/* Nome completo */}
        <div className="tablet:col-span-2">
          <label className="block text-sm font-medium mb-1">
            Nome completo *
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className={inputClasses}
            placeholder="Seu nome completo"
          />
          {errors.fullName && <p className={errorClasses}>{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            E-mail *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={inputClasses}
            placeholder="seu@email.com"
          />
          {errors.email && <p className={errorClasses}>{errors.email}</p>}
        </div>

        {/* Telefone */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Telefone *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={inputClasses}
            placeholder="(11) 99999-9999"
          />
          {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
        </div>

        {/* CEP */}
        <div>
          <label className="block text-sm font-medium mb-1">
            CEP *
          </label>
          <input
            type="text"
            value={formData.zipCode}
            onChange={(e) => handleZipCodeChange(e.target.value)}
            className={inputClasses}
            placeholder="00000-000"
            maxLength={9}
          />
          {errors.zipCode && <p className={errorClasses}>{errors.zipCode}</p>}
        </div>

        {/* Endereço */}
        <div className="tablet:col-span-2">
          <label className="block text-sm font-medium mb-1">
            Endereço *
          </label>
          <input
            type="text"
            value={formData.street}
            onChange={(e) => handleInputChange('street', e.target.value)}
            className={inputClasses}
            placeholder="Rua, avenida, travessa..."
          />
          {errors.street && <p className={errorClasses}>{errors.street}</p>}
        </div>

        {/* Número */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Número *
          </label>
          <input
            type="text"
            value={formData.number}
            onChange={(e) => handleInputChange('number', e.target.value)}
            className={inputClasses}
            placeholder="123"
          />
          {errors.number && <p className={errorClasses}>{errors.number}</p>}
        </div>

        {/* Complemento */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Complemento
          </label>
          <input
            type="text"
            value={formData.complement}
            onChange={(e) => handleInputChange('complement', e.target.value)}
            className={inputClasses}
            placeholder="Apto, casa, bloco..."
          />
        </div>

        {/* Bairro */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Bairro *
          </label>
          <input
            type="text"
            value={formData.neighborhood}
            onChange={(e) => handleInputChange('neighborhood', e.target.value)}
            className={inputClasses}
            placeholder="Nome do bairro"
          />
          {errors.neighborhood && <p className={errorClasses}>{errors.neighborhood}</p>}
        </div>

        {/* Cidade */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Cidade *
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            className={inputClasses}
            placeholder="Nome da cidade"
          />
          {errors.city && <p className={errorClasses}>{errors.city}</p>}
        </div>

        {/* Estado */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Estado *
          </label>
          <select
            value={formData.state}
            onChange={(e) => handleInputChange('state', e.target.value)}
            className={inputClasses}
          >
            <option value="">Selecione</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
          {errors.state && <p className={errorClasses}>{errors.state}</p>}
        </div>
      </div>
    </div>
  );
};