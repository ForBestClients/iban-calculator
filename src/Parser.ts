import { Country as CountryEnum } from './helpers/Country';
import { LocaleDefinition } from './helpers/Locale';
import { trim } from './utils/string';

import defaultLocale from './locales/sk/sk';

type LocaleDefinitionOrNull = LocaleDefinition | null;

class Parser {
  country: CountryEnum;
  locale: LocaleDefinition;
  ibanObject;
  constructor(country: CountryEnum, locale: LocaleDefinitionOrNull = null) {
    this.country = country;
    this.locale = locale || defaultLocale;
    this.ibanObject = {};

    if (!this.locale) {
      throw new Error('Locale not found');
    }
  }
  /**
   * Parses IBAN and return account and bank info
   * @param iban
   * @returns IbanObject
   */
  parse(iban = '') {
    const trimmedIban = trim(iban);
    if (!trimmedIban) {
      throw new Error('No IBAN provided');
    }

    const ibanObject = this.locale.parse(trimmedIban);
    if (ibanObject) {
      this.ibanObject = ibanObject;
    }

    return ibanObject;
  }
}

export default Parser;
