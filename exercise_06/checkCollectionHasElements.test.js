import { describe, test, expect } from 'vitest';
import checkCollectionHasElements from './checkCollectionHasElements';

describe('Given checkCollectionHasElements', () => {
  test('when input is not an array, then it should throw TypeError', () => {
    let input = 17;

    expect(() => checkCollectionHasElements(input)).toThrow(
      'expected array but received number',
    );
  });

  test('when input is an empty array, then it should return false', () => {
    let input = [];

    let result = checkCollectionHasElements(input);

    expect(result).toBe(false);
  });

  test('when input is an array with one element, then it should return true', () => {
    let input = ['R.U.R.'];

    let result = checkCollectionHasElements(input);

    expect(result).toBe(true);
  });

  test('when input is an array with multiple elements, then it should return true', () => {
    let input = ['07', '06', '08', '03'];

    let result = checkCollectionHasElements(input);

    expect(result).toBe(true);
  });

  test('when input is an array with different types of elements, then it should return true', () => {
    let input = [27, 'owo', [12]];

    let result = checkCollectionHasElements(input);

    expect(result).toBe(true);
  });
});
