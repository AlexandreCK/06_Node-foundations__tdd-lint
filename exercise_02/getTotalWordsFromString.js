/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 * validate input: throw TypeError with message "expected string but received <type-of-argument>" if input is not a string
 */

import isTypeOf from '../exercise_07/isTypeOf.js';

/**
 * Number of words in a string.
 * @param {string} sentence Sentence to count words of.
 * @returns {number} Number of words.
 * @throws {TypeError} If input is not a string.
 */
function getTotalWordsFromString(sentence) {
  if (!isTypeOf(sentence, 'string')) {
    throw new TypeError(`expected string but received ${typeof sentence}`);
  }

  if (sentence.trim() === '') {
    return 0;
  }

  let wordCollection = sentence.trim().split(/\s+/);

  return wordCollection.length;
}

export default getTotalWordsFromString;
