import { describe, test, expect } from 'vitest';
import generateRandomNumberInRange from './generateRandomNumberInRange';

describe('Given generateRandomNumberInRange', () => {
  test('when input is not a number, then it should throw TypeError', () => {
    let input = 'capybara';

    expect(() => generateRandomNumberInRange(input)).toThrow(
      'expected number but received string',
    );
  });

  test('when input is a negative number, then it should return 0', () => {
    let input = -42;

    let result = generateRandomNumberInRange(input);

    expect(result).toBe(0);
  });

  test('when input is 0, then it should return 0', () => {
    let input = 0;

    let result = generateRandomNumberInRange(input);

    expect(result).toBe(0);
  });

  test('when input is a positive number, then it should return a number within the range', () => {
    let input = 10;

    let result = generateRandomNumberInRange(input);

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(10);
  });

  test('when input is a large positive number, then it should return a number within the range', () => {
    let input = 7200;

    let result = generateRandomNumberInRange(input);

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(7200);
  });
});
