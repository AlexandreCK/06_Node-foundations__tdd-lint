/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if inputs are not numbers
 */

import isTypeOf from '../exercise_07/isTypeOf.js';

/**
 * Check if sum of two numbers is 50 or more.
 * @param {number} summand1 First number.
 * @param {number} summand2 Second number.
 * @returns {boolean} True if sum is 50 or more, else false.
 * @throws {TypeError} If inputs are not numbers.
 */
function isAdditionGreaterThanFifty(summand1, summand2) {
  const THRESHOLD = 50;

  if (!isTypeOf(summand1, 'number')) {
    throw new TypeError(`expected number but received ${typeof summand1}`);
  }

  if (!isTypeOf(summand2, 'number')) {
    throw new TypeError(`expected number but received ${typeof summand2}`);
  }

  return summand1 + summand2 >= THRESHOLD;
}

export default isAdditionGreaterThanFifty;
