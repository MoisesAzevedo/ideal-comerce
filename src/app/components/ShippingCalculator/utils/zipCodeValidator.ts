/**
 * Utils: ZipCode Validation
 * Responsabilidade única: Validação e formatação de CEP
 */

export class ZipCodeValidator {
  private static readonly ZIP_CODE_REGEX = /^\d{5}-?\d{3}$/;

  /**
   * Valida se o CEP está no formato correto (XXXXX-XXX ou XXXXXXXX)
   */
  static isValid(zipCode: string): boolean {
    const cleanZipCode = this.clean(zipCode);
    return this.ZIP_CODE_REGEX.test(cleanZipCode) && cleanZipCode.length === 8;
  }

  /**
   * Remove caracteres não numéricos do CEP
   */
  static clean(zipCode: string): string {
    return zipCode.replace(/\D/g, '');
  }

  /**
   * Formata o CEP no padrão XXXXX-XXX
   */
  static format(zipCode: string): string {
    const cleanZipCode = this.clean(zipCode);
    
    if (cleanZipCode.length === 8) {
      return `${cleanZipCode.slice(0, 5)}-${cleanZipCode.slice(5)}`;
    }
    
    return cleanZipCode;
  }

  /**
   * Aplica máscara durante a digitação
   */
  static applyMask(value: string): string {
    const cleanValue = this.clean(value);
    
    if (cleanValue.length <= 5) {
      return cleanValue;
    }
    
    return `${cleanValue.slice(0, 5)}-${cleanValue.slice(5, 8)}`;
  }
}