import { describe, test, expect } from 'vitest';
import transformCollectionToString from './transformCollectionToString';

describe('Given transformCollectionToString', () => {
  test('when input is not an array, then it should throw TypeError', () => {
    let input = 689;

    expect(() => transformCollectionToString(input)).toThrow(
      'expected array but received number',
    );
  });

  test('when input is an empty array, then it should return an empty string', () => {
    let input = [];

    let result = transformCollectionToString(input);

    expect(result).toBe('');
  });

  test('when input is an array with one element, then it should return the element as a string', () => {
    let input = ['meow'];

    let result = transformCollectionToString(input);

    expect(result).toBe('meow');
  });

  test('when input is an array with multiple elements, then it should return the elements joined by a pipe', () => {
    let input = [18, 'mind', 'the', 'gap'];

    let result = transformCollectionToString(input);

    expect(result).toBe('18 | mind | the | gap');
  });

  test('when input is an array with different types of elements, then it should return the elements joined by a pipe', () => {
    let input = ['tranquility', 0, [1]];

    let result = transformCollectionToString(input);

    expect(result).toBe('tranquility | 0 | 1');
  });
});
