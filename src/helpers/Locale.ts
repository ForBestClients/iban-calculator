import { Country as CountryEnum } from './Country';

type ParsedObject = {
  iban: string;
  ibanFormatted: string;
  country: CountryEnum;
  controlNumber: string;
  bankName: string;
  bankCode: string;
  accountNumberPrefix: string;
  accountNumber: string;
  [key: string]: any;
};

export type IbanObject = ParsedObject | null;

export type LocaleDefinition = {
  structure: string;
  formatRegex: RegExp;
  parseRegex: RegExp;
  format: (iban: string) => string;
  parse: (iban: string) => IbanObject;
};
