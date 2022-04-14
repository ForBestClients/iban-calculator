import { Country } from './helpers/Country';
import Structure from './Structure';
import Parser from './Parser';
import { LocaleDefinition } from './helpers/Locale';
import { trim } from './utils/string';

type Locale = LocaleDefinition | null;

class IBAN {
  country: Country;
  structure;
  parser;
  locale;
  constructor(country: Country, locale: Locale = null) {
    this.country = country;
    this.structure = new Structure(country, locale?.structure);
    this.parser = new Parser(country, locale);
    this.locale = locale;
  }
  /**
   * Prepare an IBAN for MODULUS 97 - 10 computation by moving the first 4 chars to the end and transforming the letters to
   * numbers (A = 10, B = 11, ..., Z = 35), as specified in ISO13616.
   *
   * @param {string} iban the IBAN
   * @returns {string} the prepared IBAN
   */
  iso13616Prepare(iban: string) {
    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);

    let tempIban = iban.toUpperCase();
    tempIban = tempIban.slice(4) + tempIban.slice(0, 4);

    return tempIban
      .split('')
      .map((n) => {
        const code = n.charCodeAt(0);
        if (code >= A && code <= Z) {
          // A = 10, B = 11, ... Z = 35
          return code - A + 10;
        } else {
          return n;
        }
      })
      .join('');
  }
  /**
   * Calculates the MODULUS 97 - 10 of the IBAN as specified in ISO7064.
   *
   * @param iban
   * @returns {number}
   */
  iso7064Mod97_10(iban: string) {
    let remainder = this.iso13616Prepare(iban);
    let block;

    while (remainder.length > 2) {
      block = remainder.slice(0, 9);
      remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length);
    }

    return parseInt(remainder, 10) % 97;
  }
  /**
   * Validates structure and checksum if IBAN as specified in ISO7064
   * @param iban
   * @returns
   */
  isValid(iban: string) {
    const trimmedIban = trim(iban);
    return this.structure.isValid(trimmedIban) && this.iso7064Mod97_10(trimmedIban) === 1;
  }
  /**
   * Parses data from IBAN
   * @param iban
   * @returns IbanObject {}
   */
  parse(iban: string) {
    if (!this.isValid(iban)) {
      throw new Error('Invalid IBAN');
    }

    return this.parser.parse(iban);
  }
}

export default IBAN;
