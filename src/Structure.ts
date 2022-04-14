import { Country as CountryEnum } from './helpers/Country';
import { Structure as StructureEnum } from './helpers/Structure';
import { structureTypeIndicatorToRegex } from './utils/structure';
import { trim } from './utils/string';

/**
 * ISO 13616
 * https://cdn.standards.iteh.ai/samples/81090/ab77d634b898429f99ee4b13ab8ffe8a/ISO-13616-1-2020.pdf
 */
class Structure {
  country: CountryEnum;
  structure: string;
  constructor(country: CountryEnum, structure = '') {
    this.country = country;
    this.structure = structure || this._getStructureByCountry(country);

    if (!this.structure) {
      throw new Error('No IBAN structure has been found for your country');
    }
  }
  /**
   * Returns structure of IBAN specified by country
   * @param country
   * @returns string
   */
  _getStructureByCountry(country: CountryEnum) {
    return StructureEnum[country] ?? '';
  }
  /**
   * Builds regex for group extracted from structure
   * @param group
   * @returns string
   */
  _bildRegexForGroup(group: RegExpExecArray | [] = []) {
    const count = group[1];
    const isStrictCount = group[2] === '!';
    const type = group[3];

    const typeRegex = structureTypeIndicatorToRegex[type] ?? '';
    if (!typeRegex) {
      return '';
    }

    return typeRegex + (isStrictCount ? `{${count}}` : `{0,${count}}`);
  }
  /**
   * Transform structure to RegExP
   * @returns RegExp
   */
  _structureToRegex() {
    let ibanRegex = '';
    const structureRegex = /(?:(?<count>\d\d*)(?<isMax>!)?(?<type>a|c|e|n))+?/gi;
    let m = structureRegex.exec(this.structure);

    while (m !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === structureRegex.lastIndex) {
        structureRegex.lastIndex++;
      }

      ibanRegex += this._bildRegexForGroup(m);
      m = structureRegex.exec(this.structure);
    }

    return new RegExp('^' + ibanRegex + '$');
  }
  /**
   * Validate IBAN against provided structure
   * @param iban
   * @returns boolean
   */
  isValid(iban = '') {
    const trimmedIban = trim(iban);
    if (!trimmedIban) {
      throw new Error('No IBAN provided');
    }

    const ibanRegex = this._structureToRegex();
    return ibanRegex.test(trimmedIban);
  }
}

export default Structure;
