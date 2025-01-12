import { describe, test, expect } from 'vitest';
import getDistanceFromThreshold from './getDistanceFromThreshold';

describe('Given getDistanceFromThreshold', () => {
  test('when value is not a number, then it should throw TypeError', () => {
    let value = 'a';
    let threshold = 1946;

    expect(() => getDistanceFromThreshold(value, threshold)).toThrow(
      'got string, expected a number',
    );
  });

  test('when threshold is not a number, then it should throw TypeError', () => {
    let value = 1946;
    let threshold = 'a';

    expect(() => getDistanceFromThreshold(value, threshold)).toThrow(
      'got string, expected a number',
    );
  });

  test('when both inputs are numbers, then it should return the correct distance', () => {
    let value = 1946;
    let threshold = 2023;

    let result = getDistanceFromThreshold(value, threshold);

    expect(result).toBe(77);
  });

  test('when value is zero, then it should handle zero correctly', () => {
    let value = 0;
    let threshold = 1946;

    let result = getDistanceFromThreshold(value, threshold);

    expect(result).toBe(1946);
  });

  test('when value is negative, then it should handle negative numbers correctly', () => {
    let value = -1946;
    let threshold = 2023;

    let result = getDistanceFromThreshold(value, threshold);

    expect(result).toBe(3969);
  });
});
