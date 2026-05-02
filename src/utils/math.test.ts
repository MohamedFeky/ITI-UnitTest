import { add, isPrime, range } from './math';

describe('math helpers', () => {
  test('add returns the sum of two numbers', () => {
    expect(add(3, 7)).toBe(10);
  });

  test('isPrime returns true for prime numbers', () => {
    expect(isPrime(7)).toBe(true);
  });

  test('isPrime returns false for numbers that are not prime', () => {
    expect(isPrime(9)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  test('range returns numbers from start to end', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  test('range supports custom step', () => {
    expect(range(2, 10, 2)).toEqual([2, 4, 6, 8, 10]);
  });

  test('range supports descending numbers', () => {
    expect(range(5, 1)).toEqual([5, 4, 3, 2, 1]);
  });

  test('range throws error when step is zero', () => {
    expect(() => range(1, 5, 0)).toThrow('step cannot be 0');
  });
});
