import {
  getCharactersCount,
  maskCardNumber,
  reverseString,
  validatePassword,
} from './strings';

describe('string helpers', () => {
  test('reverseString reverses text', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('getCharactersCount counts every character', () => {
    expect(getCharactersCount('hello')).toEqual({
      h: 1,
      e: 1,
      l: 2,
      o: 1,
    });
  });

  test('validatePassword returns true for valid password', () => {
    expect(validatePassword('Hello@123')).toBe(true);
  });

  test('validatePassword returns false when rule is missing', () => {
    expect(validatePassword('hello123')).toBe(false);
    expect(validatePassword('Hello@aa')).toBe(false);
  });

  test('maskCardNumber hides all numbers except last four', () => {
    expect(maskCardNumber('1234567812341234')).toBe('************1234');
  });
});
