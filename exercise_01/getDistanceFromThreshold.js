/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if inputs are not numbers
 */

import isTypeOf from '../exercise_07/isTypeOf.js';

/**
 * Calculate the distance between a value and a threshold.
 * @param {number} value Number to compare.
 * @param {number} threshold Number to compare with.
 * @returns {number} Distance between threshold and value.
 * @throws {TypeError} If inputs are not numbers.
 */
function getDistanceFromThreshold(value, threshold) {
  if (!isTypeOf(value, 'number')) {
    throw new TypeError(`got ${typeof value}, expected a number`);
  }

  if (!isTypeOf(threshold, 'number')) {
    throw new TypeError(`got ${typeof threshold}, expected a number`);
  }

  return threshold - value;
}

export default getDistanceFromThreshold;
