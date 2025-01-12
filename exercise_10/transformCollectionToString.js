/**
 * #10 :: Export JS function "transformCollectionToString" to transform collection into string
 * - if array has elements, then return array as string, joined by '|' (pipe character)
 * - otherwise, return an empty string
 * input: array (collection)
 * output: string
 * validate input: throw TypeError with message "expected array but received <type-of-argument>" if input is not an array
 */

import checkCollectionHasElements from '../exercise_06/checkCollectionHasElements.js';

/**
 * Transform a collection into a string, elements joined by a pipe ('|').
 * @param {Array} collection Array to transform.
 * @returns {string} Array as a string joined by pipe characters, empty string if array is empty.
 * @throws {TypeError} If input is not an array.
 */
function transformCollectionToString(collection) {
  if (!Array.isArray(collection)) {
    throw new TypeError(`expected array but received ${typeof collection}`);
  }

  if (checkCollectionHasElements(collection)) {
    return collection.join(' | ');
  }

  return '';
}

export default transformCollectionToString;
