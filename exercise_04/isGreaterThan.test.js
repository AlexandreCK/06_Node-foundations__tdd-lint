import { describe, test, expect } from 'vitest';
import isGreaterThan from './isGreaterThan';

describe('Given isGreaterThan', () => {
  test('when value is not a number, then it should throw TypeError', () => {
    let value = 'mechanoid';
    let threshold = 5;

    expect(() => isGreaterThan(value, threshold)).toThrow(
      'expected number but received string',
    );
  });

  test('when threshold is not a number, then it should throw TypeError', () => {
    let value = 100;
    let threshold = 'waster';

    expect(() => isGreaterThan(value, threshold)).toThrow(
      'expected number but received string',
    );
  });

  test('when both inputs are numbers and value is greater than threshold, then it should return true', () => {
    let value = 101;
    let threshold = 100;

    let result = isGreaterThan(value, threshold);

    expect(result).toBe(true);
  });

  test('when both inputs are numbers and value is less than threshold, then it should return false', () => {
    let value = 100;
    let threshold = 101;

    let result = isGreaterThan(value, threshold);

    expect(result).toBe(false);
  });

  test('when both inputs are numbers and value is equal to threshold, then it should return false', () => {
    let value = 101;
    let threshold = 101;

    let result = isGreaterThan(value, threshold);

    expect(result).toBe(false);
  });
});
