/**
 * Service: Shipping Calculator Service
 * Responsabilidade única: Calcular frete baseado no CEP
 */

import { ShippingOption } from '../types';

export class ShippingCalculatorService {
  private static readonly SHIPPING_OPTIONS_MOCK: Record<string, ShippingOption[]> = {
    // CEPs de São Paulo (01000-000 a 05999-999, 08000-000 a 08999-999)
    'sp': [
      {
        id: 'pac-sp',
        name: 'PAC',
        price: 12.50,
        deliveryTime: '5 a 8 dias úteis',
        description: 'Entrega econômica'
      },
      {
        id: 'sedex-sp',
        name: 'SEDEX',
        price: 25.90,
        deliveryTime: '1 a 3 dias úteis',
        description: 'Entrega expressa'
      },
      {
        id: 'express-sp',
        name: 'Entrega Expressa',
        price: 35.00,
        deliveryTime: 'Mesmo dia',
        description: 'Entrega no mesmo dia (até 18h)'
      }
    ],
    // CEPs do Rio de Janeiro (20000-000 a 23799-999)
    'rj': [
      {
        id: 'pac-rj',
        name: 'PAC',
        price: 15.80,
        deliveryTime: '6 a 9 dias úteis',
        description: 'Entrega econômica'
      },
      {
        id: 'sedex-rj',
        name: 'SEDEX',
        price: 28.50,
        deliveryTime: '2 a 4 dias úteis',
        description: 'Entrega expressa'
      }
    ],
    // CEPs de outras regiões
    'default': [
      {
        id: 'pac-default',
        name: 'PAC',
        price: 18.90,
        deliveryTime: '8 a 12 dias úteis',
        description: 'Entrega econômica'
      },
      {
        id: 'sedex-default',
        name: 'SEDEX',
        price: 32.70,
        deliveryTime: '3 a 6 dias úteis',
        description: 'Entrega expressa'
      }
    ]
  };

  /**
   * Calcula as opções de frete para um CEP específico
   */
  static async calculateShipping(zipCode: string): Promise<ShippingOption[]> {
    // Simula delay de API
    await this.delay(1000);

    const cleanZipCode = zipCode.replace(/\D/g, '');
    const region = this.getRegionByZipCode(cleanZipCode);

    return this.SHIPPING_OPTIONS_MOCK[region] || this.SHIPPING_OPTIONS_MOCK['default'];
  }

  /**
   * Determina a região baseada no CEP
   */
  private static getRegionByZipCode(zipCode: string): string {
    const cepNumber = parseInt(zipCode.slice(0, 5));

    // São Paulo
    if ((cepNumber >= 1000 && cepNumber <= 5999) || (cepNumber >= 8000 && cepNumber <= 8999)) {
      return 'sp';
    }

    // Rio de Janeiro
    if (cepNumber >= 20000 && cepNumber <= 23799) {
      return 'rj';
    }

    return 'default';
  }

  /**
   * Simula delay de API
   */
  private static delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}