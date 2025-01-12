import { describe, test, expect } from 'vitest';
import isAdditionGreaterThanFifty from './isAdditionGreaterThanFifty';

describe('Given isAdditionGreaterThanFifty', () => {
  test('when summand1 is not a number, then it should throw TypeError', () => {
    let summand1 = 'Damian';
    let summand2 = 1;

    expect(() => isAdditionGreaterThanFifty(summand1, summand2)).toThrow(
      'expected number but received string',
    );
  });

  test('when summand2 is not a number, then it should throw TypeError', () => {
    let summand1 = 2;
    let summand2 = 'No Longer Human';

    expect(() => isAdditionGreaterThanFifty(summand1, summand2)).toThrow(
      'expected number but received string',
    );
  });

  test('when both inputs are numbers and their sum is greater than or equal to 50, then it should return true', () => {
    let summand1 = 25;
    let summand2 = 25;

    let result = isAdditionGreaterThanFifty(summand1, summand2);

    expect(result).toBe(true);
  });

  test('when both inputs are numbers and their sum is less than 50, then it should return false', () => {
    let summand1 = 1;
    let summand2 = 2;

    let result = isAdditionGreaterThanFifty(summand1, summand2);

    expect(result).toBe(false);
  });

  test('when both inputs are numbers and their sum is exactly 50, then it should return true', () => {
    let summand1 = 1000;
    let summand2 = 0;

    let result = isAdditionGreaterThanFifty(summand1, summand2);

    expect(result).toBe(true);
  });
});
