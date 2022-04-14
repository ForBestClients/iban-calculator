import * as strings from '../string';

describe('replace empty values', () => {
  test('empty string', () => {
    const value = strings.trim();
    expect(value).toBe('');
  });

  test('string with spaces only', () => {
    const value = strings.trim('    ');
    expect(value).toBe('');
  });

  test('string with spaces', () => {
    const value = strings.trim('string with spaces');
    expect(value).toBe('stringwithspaces');
  });

  test('null', () => {
    const value = strings.trim(null);
    expect(value).toBe('');
  });

  test('undefined', () => {
    const value = strings.trim(undefined);
    expect(value).toBe('');
  });
});
