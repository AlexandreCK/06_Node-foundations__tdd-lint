/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if input is not a number
 */

import isTypeOf from '../exercise_07/isTypeOf.js';

/**
 * Generate random number from 0 to the stated limit.
 * @param {number} limit Maximum number.
 * @returns {number} Random number.
 * @throws {TypeError} If input is not a number.
 */
function generateRandomNumberInRange(limit) {
  const MIN_LIMIT = 0;

  if (!isTypeOf(limit, 'number')) {
    throw new TypeError(`expected number but received ${typeof limit}`);
  }

  if (limit < MIN_LIMIT) {
    return MIN_LIMIT;
  }

  return Math.floor(Math.random() * (limit + 1));
}

export default generateRandomNumberInRange;
