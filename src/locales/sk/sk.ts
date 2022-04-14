import { Country as CountryEnum } from '../../helpers/Country';
import { LocaleDefinition, IbanObject } from '../../helpers/Locale';
import Banks from './banks';

const localeDefinition: LocaleDefinition = {
  structure: '2!a2!n30c',
  parseRegex:
    /^(?<country>SK)(?<controlNumber>[0-9]{2})(?<bankCode>[0-9]{4})(?<accountNumberPrefix>[0-9]{6})(?<accountNumber>[0-9]{10})$/,
  formatRegex: /(SK\d{2})(\d{4})(\d{4})(\d{4})(\d{4})(\d{4})/,
  format(iban: string) {
    return iban.replace(this.formatRegex, '$1 $2 $3 $4 $5 $6');
  },
  parse(iban: string): IbanObject {
    const ibanRegExp = new RegExp(this.parseRegex);

    const parsedIban = ibanRegExp.exec(iban)?.groups;
    let ibanObject: IbanObject = null;

    if (parsedIban) {
      ibanObject = {
        iban: iban,
        ibanFormatted: this.format(iban),
        country: CountryEnum[parsedIban.country],
        controlNumber: parsedIban?.controlNumber,
        bankName: Banks.get(parsedIban?.bankCode),
        bankCode: parsedIban?.bankCode,
        accountNumberPrefix: parsedIban?.accountNumberPrefix,
        accountNumber: parsedIban?.accountNumber,
      };
    }

    return ibanObject;
  },
};

export default localeDefinition;
