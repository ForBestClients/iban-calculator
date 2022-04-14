import { Country } from '../helpers/Country';
import Structure from '../Structure';

describe('structure class', () => {
  test('valid', () => {
    const structure = new Structure(Country.SK);
    expect(structure.isValid('SK3112000000001987426375')).toBeTruthy();
  });

  test('invalid', () => {
    const structure = new Structure(Country.SK);
    expect(structure.isValid('SK1234000000001234567890')).toBeTruthy();
  });
});
