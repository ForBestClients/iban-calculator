import { structureTypeIndicatorToRegex } from '../structure';

describe('structure type indicator to regex', () => {
  test('a', () => {
    expect(structureTypeIndicatorToRegex.a).toBe('[A-Z]');
  });

  test('c', () => {
    expect(structureTypeIndicatorToRegex.c).toBe('[A-Za-z0-9]');
  });

  test('e', () => {
    expect(structureTypeIndicatorToRegex.e).toBe('\\s');
  });

  test('n', () => {
    expect(structureTypeIndicatorToRegex.n).toBe('[0-9]');
  });
});
