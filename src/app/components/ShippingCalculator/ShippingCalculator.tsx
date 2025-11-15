/**
 * Component: ShippingCalculator
 * Responsabilidade única: Interface para cálculo de frete baseado em CEP
 */

'use client';

import { useEffect } from 'react';
import { ShippingCalculatorProps } from './types';
import { useShippingCalculator } from './hooks';
import { PriceFormatter } from './utils';
import { TruckIcon } from '@/icons';
import styles from './ShippingCalculator.module.scss';

export function ShippingCalculator({
  className = '',
  onShippingCalculated,
  placeholder = 'Digite seu CEP (00000-000)',
  disabled = false,
}: ShippingCalculatorProps) {
  const {
    zipCode,
    isLoading,
    options,
    error,
    isCalculated,
    isValidZipCode,
    setZipCode,
    calculateShipping,
    reset,
  } = useShippingCalculator();

  // Notifica o componente pai quando as opções são calculadas
  useEffect(() => {
    if (isCalculated && options.length > 0 && onShippingCalculated) {
      onShippingCalculated(options);
    }
  }, [isCalculated, options, onShippingCalculated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidZipCode && !isLoading && !disabled) {
      calculateShipping();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setZipCode(value);
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div data-name="shipping-calculator-container" className={`${styles.container} ${className}`}>
      <label data-name="shipping-calculator-label" className={styles.label}>
        <TruckIcon size={16} className="inline mr-2" />
        Calcular Frete
      </label>

      <form data-name="shipping-form" onSubmit={handleSubmit}>
        <div data-name="input-container" className={styles.inputContainer}>
          <div data-name="input-group" className={styles.inputGroup}>
            <input
              data-name="zip-code-input"
              type="text"
              value={zipCode}
              onChange={handleInputChange}
              placeholder={placeholder}
              disabled={disabled || isLoading}
              className={`${styles.input} ${error ? styles.error : ''}`}
              maxLength={9}
              aria-label="CEP para cálculo de frete"
              aria-invalid={!!error}
              aria-describedby={error ? 'shipping-error' : undefined}
            />
            <button
              data-name="calculate-button"
              type="submit"
              disabled={!isValidZipCode || isLoading || disabled}
              className={`${styles.calculateButton} ${isLoading ? styles.loading : ''}`}
              aria-label="Calcular frete"
            >
              {isLoading ? (
                <>
                  <div data-name="loading-spinner" className={styles.loadingSpinner} />
                  Calculando...
                </>
              ) : (
                <>
                  <TruckIcon size={16} />
                  Calcular
                </>
              )}
            </button>
          </div>

          {error && (
            <div
              data-name="error-message"
              id="shipping-error"
              className={styles.errorMessage}
              role="alert"
            >
              ⚠️ {error}
            </div>
          )}
        </div>
      </form>

      {isCalculated && options.length > 0 && (
        <div data-name="results-container" className={styles.resultsContainer}>
          <div data-name="results-header" className={styles.resultsHeader}>
            Opções de entrega para {zipCode}
          </div>

          <ul data-name="options-list" className={styles.optionsList}>
            {options.map((option) => (
              <li
                key={option.id}
                data-name="shipping-option"
                className={styles.shippingOption}
              >
                <div data-name="option-header" className={styles.optionHeader}>
                  <span data-name="option-name" className={styles.optionName}>
                    {option.name}
                  </span>
                  <span data-name="option-price" className={styles.optionPrice}>
                    {PriceFormatter.toBRL(option.price)}
                  </span>
                </div>

                <div data-name="option-details" className={styles.optionDetails}>
                  <span data-name="option-delivery-time" className={styles.optionDeliveryTime}>
                    📅 {option.deliveryTime}
                  </span>
                  {option.description && (
                    <span data-name="option-description" className={styles.optionDescription}>
                      {option.description}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <button
            data-name="reset-button"
            onClick={handleReset}
            className={styles.resetButton}
            type="button"
            aria-label="Calcular para outro CEP"
          >
            Calcular para outro CEP
          </button>
        </div>
      )}
    </div>
  );
}