import { describe, test, expect } from 'vitest';
import getTotalWordsFromString from './getTotalWordsFromString';

describe('Given getTotalWordsFromString', () => {
  test('when input is not a string, then it should throw TypeError', () => {
    let input = 449;

    expect(() => getTotalWordsFromString(input)).toThrow(
      'expected string but received number',
    );
  });

  test('when input is an empty string, then it should return 0', () => {
    let input = '';

    let result = getTotalWordsFromString(input);

    expect(result).toBe(0);
  });

  test('when input is a string with one word, then it should return 1', () => {
    let input = 'Ordinance';

    let result = getTotalWordsFromString(input);

    expect(result).toBe(1);
  });

  test('when input is a string with multiple words, then it should return the correct number of words', () => {
    let input =
      'Taking a new step, uttering a new word, is what people fear most.';

    let result = getTotalWordsFromString(input);

    expect(result).toBe(13);
  });

  test('when input is a string with multiple spaces, then it should return the correct number of words', () => {
    let input =
      '  All   happy families   are alike; each unhappy family    is unhappy in its own way.  ';

    let result = getTotalWordsFromString(input);

    expect(result).toBe(14);
  });
});
