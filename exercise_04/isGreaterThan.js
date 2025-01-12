/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if inputs are not numbers
 */

import isTypeOf from '../exercise_07/isTypeOf.js';

/**
 * Checks if the first number is greater than the second number.
 * @param {number} value Number to compare.
 * @param {number} threshold Number to compare against.
 * @returns {boolean} True if the value is greater than the threshold, false if not.
 * @throws {TypeError} If inputs are not numbers.
 */
function isGreaterThan(value, threshold) {
  if (!isTypeOf(value, 'number')) {
    throw new TypeError(`expected number but received ${typeof value}`);
  }

  if (!isTypeOf(threshold, 'number')) {
    throw new TypeError(`expected number but received ${typeof threshold}`);
  }

  return value > threshold;
}

export default isGreaterThan;
