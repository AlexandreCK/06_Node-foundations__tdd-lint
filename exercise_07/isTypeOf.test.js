import { describe, test, expect } from 'vitest';
import isTypeOf from './isTypeOf';

describe('Given isTypeOf', () => {
  test('when type is not valid, then it should throw TypeError', () => {
    let value = 111;
    let type = 'bewilderment';

    expect(() => isTypeOf(value, type)).toThrow(
      "expected one of 'string', 'number', 'boolean', 'array' but received string",
    );
  });

  test("when type is 'string' and value is a string, then it should return true", () => {
    let value = 'unemployment';
    let type = 'string';

    let result = isTypeOf(value, type);

    expect(result).toBe(true);
  });

  test("when type is 'number' and value is a number, then it should return true", () => {
    let value = 350;
    let type = 'number';

    let result = isTypeOf(value, type);

    expect(result).toBe(true);
  });

  test("when type is 'boolean' and value is a boolean, then it should return true", () => {
    let value = true;
    let type = 'boolean';

    let result = isTypeOf(value, type);

    expect(result).toBe(true);
  });

  test("when type is 'array' and value is an array, then it should return true", () => {
    let value = [];
    let type = 'array';

    let result = isTypeOf(value, type);

    expect(result).toBe(true);
  });

  test("when type is 'string' and value is not a string, then it should return false", () => {
    let value = [];
    let type = 'string';

    let result = isTypeOf(value, type);

    expect(result).toBe(false);
  });

  test("when type is 'number' and value is not a number, then it should return false", () => {
    let value = false;
    let type = 'number';

    let result = isTypeOf(value, type);

    expect(result).toBe(false);
  });

  test("when type is 'boolean' and value is not a boolean, then it should return false", () => {
    let value = { 1: 1 };
    let type = 'boolean';

    let result = isTypeOf(value, type);

    expect(result).toBe(false);
  });

  test("when type is 'array' and value is not an array, then it should return false", () => {
    let value = 'fool';
    let type = 'array';

    let result = isTypeOf(value, type);

    expect(result).toBe(false);
  });
});
