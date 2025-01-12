import { describe, test, expect } from 'vitest';
import formatStringByWordsLength from './formatStringByWordsLength';

describe('Given formatStringByWordsLength', () => {
  test('when input is not a string, then it should throw TypeError', () => {
    let input = { type: 'cat', name: 'guts' };

    expect(() => formatStringByWordsLength(input)).toThrow(
      'expected string but received object',
    );
  });

  test('when input is a string with 5 or fewer words, then it should return the string in lowercase', () => {
    let input = 'Desperation';

    let result = formatStringByWordsLength(input);

    expect(result).toBe('desperation');
  });

  test('when input is a string with more than 5 words, then it should return the string in uppercase', () => {
    let input =
      'Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth.';

    let result = formatStringByWordsLength(input);

    expect(result).toBe(
      'PAIN AND SUFFERING ARE ALWAYS INEVITABLE FOR A LARGE INTELLIGENCE AND A DEEP HEART. THE REALLY GREAT MEN MUST, I THINK, HAVE GREAT SADNESS ON EARTH.',
    );
  });

  test('when input is an empty string, then it should return the string in lowercase', () => {
    let input = '';

    let result = formatStringByWordsLength(input);

    expect(result).toBe('');
  });

  test('when input is a string with exactly 5 words, then it should return the string in lowercase', () => {
    let input = 'Beauty will save the world.';

    let result = formatStringByWordsLength(input);

    expect(result).toBe('beauty will save the world.');
  });
});
