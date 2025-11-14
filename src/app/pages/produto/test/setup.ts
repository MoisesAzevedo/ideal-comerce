/**
 * Configuração de testes específica para a página de produto
 * Segue as regras de arquitetura definidas no README.md
 */

import '@testing-library/jest-dom';

// Configuração global para testes da página produto
beforeAll(() => {
  // Mock do console para evitar logs desnecessários durante os testes
  jest.spyOn(console, 'log').mockImplementation();
  jest.spyOn(console, 'warn').mockImplementation();
  jest.spyOn(console, 'error').mockImplementation();
});

afterAll(() => {
  // Restaura os mocks do console
  jest.restoreAllMocks();
});

// Mock global do matchMedia para componentes que usam responsive design
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock do IntersectionObserver para componentes de carrossel
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
})) as any;

// Mock do ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
})) as any;

// Configuração do ambiente de teste
export const testConfig = {
  testEnvironment: 'jsdom',
  moduleNameMapping: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/app/pages/produto/test/setup.ts'],
  testMatch: [
    '<rootDir>/src/app/pages/produto/test/**/*.test.{ts,tsx}',
  ],
  collectCoverageFrom: [
    'src/app/pages/produto/**/*.{ts,tsx}',
    '!src/app/pages/produto/**/*.test.{ts,tsx}',
    '!src/app/pages/produto/test/**/*',
  ],
};