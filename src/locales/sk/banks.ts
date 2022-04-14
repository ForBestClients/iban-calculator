const banksList = {
  '0200': 'Všeobecná úverová banka, a. s.',
  '0600': 'MONETA Money Bank, a. s.',
  '0720': 'Národná banka Slovenska.',
  '0900': 'Slovenská sporiteľňa, a. s.',
  '1100': 'Tatra banka, a. s.',
  '1111': 'UniCredit Bank Czech Republic and Slovakia, a.s., pobočka zahraničnej banky',
  '2010': 'Fio banka, a.s.',
  '2070': 'TRINITY BANK a.s.',
  '3000': 'Slovenská záručná a rozvojová banka, a. s.',
  '3100': 'Prima banka Slovensko, a.s. – kód pre dobeh platieb',
  '4000': 'Expobank CZ a.s.',
  '5200': 'Československá obchodná banka, a. s. (predtým OTP Banka Slovensko a. s.) – kód pre dobeh platieb',
  '5600': 'Prima banka Slovensko, a.s',
  '5800': 'J&T BANKA, a.s.',
  '5900': 'Prvá stavebná sporiteľňa, a. s.',
  '6000': 'PPF banka a.s.',
  '6500': '365.bank, a. s.',
  '7300': 'ING Bank N. V., pobočka zahraničnej banky',
  '7500': 'Československá obchodná banka, a. s.',
  '7930': 'Wüstenrot stavebná sporiteľňa, a. s.',
  '8050': 'COMMERZBANK Aktiengesellschaft, pobočka zahraničnej banky, Bratislava',
  '8100': 'Komerční banka a.s. pobočka zahraničnej banky',
  '8120': 'Privatbanka, a. s.',
  '8130': 'Citibank Europe plc,&nbsp;&nbsp;pobočka zahraničnej banky',
  '8160': 'EXIMBANKA SR',
  '8170': 'ČSOB stavebná sporiteľňa, a. s.',
  '8180': 'Štátna pokladnica',
  '8320': 'J&T BANKA, a. s., pobočka zahraničnej banky',
  '8330': 'Fio banka, a.s., pobočka zahraničnej banky',
  '8360': 'mBank S.A., pobočka zahraničnej banky',
  '8370': 'Oberbank AG, pobočka zahraničnej banky v Slovenskej republike',
  '8400': 'COFIDIS SA, pobočka zahraničnej banky',
  '8420': 'BKS Bank AG, pobočka zahraničnej banky v SR',
  '8430': 'KDB Bank Europe Ltd. pobočka zahraničnej banky',
  '8440': 'BNP PARIBAS PERSONAL FINANCE SA, pobočka zahraničnej banky',
  '8450': 'PKO BP S.A., pobočka zahraničnej banky',
  '9950': 'SIA Slovakia, s.r.o',
  '9952': 'Trust Pay, a.s.',
  '9953': 'Payment institution NFD, a.s.',
  '9954': 'K-PAY a. s.',
};

const Banks = new Map();
Object.keys(banksList).forEach((bankCode) => Banks.set(bankCode, banksList[bankCode]));

export default Banks;
