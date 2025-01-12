/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 * validate input: throw TypeError with message "expected array but received <type-of-argument>" if input is not an array
 */

import isTypeOf from '../exercise_07/isTypeOf.js';

/**
 * Check if collection has any items.
 * @param {array} collection Array to check.
 * @returns {boolean} True if collection has elements, false if empty or invalid.
 * @throws {TypeError} If input is not an array.
 */
function checkCollectionHasElements(collection) {
  if (!isTypeOf(collection, 'array')) {
    throw new TypeError(`expected array but received ${typeof collection}`);
  }

  return collection.length > 0;
}

export default checkCollectionHasElements;
