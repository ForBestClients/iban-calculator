/**
 * return string without spaces
 * @param value
 * @returns string
 */
export const trim = (value = '') => {
  if (typeof value !== 'string') {
    return '';
  }

  return value.replace(/\s/g, '');
};
