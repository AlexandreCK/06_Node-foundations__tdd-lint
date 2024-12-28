import { describe, test, expect, vi } from 'vitest';
import getDistanceMessageFromSumTo100 from './getDistanceMessageFromSumTo100';
import * as randomModule from '../exercise_03/generateRandomNumberInRange';

describe('Given getDistanceMessageFromSumTo100', () => {
  test('when input is not a number, then it should throw TypeError', () => {
    let input = 'imperfection';

    expect(() => getDistanceMessageFromSumTo100(input)).toThrow(
      'expected number but received string',
    );
  });

  test('when sum of input and random number exceeds 100, then it should return the correct message', () => {
    let input = 100;

    vi.spyOn(randomModule, 'default').mockReturnValue(20);

    let result = getDistanceMessageFromSumTo100(input);

    expect(result).toBe('Sum with value 120 exceeds in 20 from number 100');
  });

  test('when sum of input and random number is less than or equal to 100, then it should return the correct message', () => {
    let input = 40;

    vi.spyOn(randomModule, 'default').mockReturnValue(30);

    let result = getDistanceMessageFromSumTo100(input);

    expect(result).toBe('Sum with value 70 is left in 30 from number 100');
  });

  test('when input is 0 and random number is 0, then it should return the correct message', () => {
    let input = 0;

    vi.spyOn(randomModule, 'default').mockReturnValue(0);

    let result = getDistanceMessageFromSumTo100(input);

    expect(result).toBe('Sum with value 0 is left in 100 from number 100');
  });

  test('when input is 50 and random number is 50, then it should return the correct message', () => {
    let input = 50;

    vi.spyOn(randomModule, 'default').mockReturnValue(50);

    let result = getDistanceMessageFromSumTo100(input);

    expect(result).toBe('Sum with value 100 is left in 0 from number 100');
  });
});
