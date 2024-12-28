/**
 * #9 :: Export JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
 * - if sum result exceeds 100, then return message "Sum with value <random> exceeds in <sum> from number 100"
 * - otherwise, return message "Sum with value <random> is left in <result> from number 100"
 * input: number (value)
 * output: string
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if input is not a number
 */

import getDistanceFromThreshold from '../exercise_01/getDistanceFromThreshold.js';
import generateRandomNumberInRange from '../exercise_03/generateRandomNumberInRange.js';
import isTypeOf from '../exercise_07/isTypeOf.js';

/**
 * Generates a random number, adds it to the given value, and returns a distance message to 100.
 * @param {number} value Number to add with a random value.
 * @returns {string} String displaying distance of the sum from 100.
 * @throws {TypeError} If input is not a number.
 */
function getDistanceMessageFromSumTo100(value) {
  const MAX_VALUE = 100;

  if (!isTypeOf(value, 'number')) {
    throw new TypeError(`expected number but received ${typeof value}`);
  }

  let randomValue = generateRandomNumberInRange(MAX_VALUE);
  let addition = value + randomValue;
  let difference = getDistanceFromThreshold(addition, MAX_VALUE);

  const message =
    addition > MAX_VALUE
      ? `Sum with value ${addition} exceeds in ${Math.abs(difference)} from number ${MAX_VALUE}`
      : `Sum with value ${addition} is left in ${Math.abs(difference)} from number ${MAX_VALUE}`;

  return message;
}

export default getDistanceMessageFromSumTo100;
