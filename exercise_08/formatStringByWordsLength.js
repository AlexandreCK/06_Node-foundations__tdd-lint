/**
 * #8 :: Export JS function "formatStringByWordsLength" to check number of words contained in given string
 * - if total number of words is greater than 5, then return uppercase string
 * - otherwise, return lowercase string
 * input: string (sentence)
 * output: string
 * validate input: throw TypeError with message "expected string but received <type-of-argument>" if input is not a string
 */

import getTotalWordsFromString from '../exercise_02/getTotalWordsFromString.js';
import isTypeOf from '../exercise_07/isTypeOf.js';

/**
 * Format string based on word count. Uppercase if more than 5 words, if not, lowercase.
 * @param {string} sentence String to format.
 * @returns {string} Formatted string.
 * @throws {TypeError} If input is not a string.
 */
function formatStringByWordsLength(sentence) {
  const WORD_THRESHOLD = 5;

  if (!isTypeOf(sentence, 'string')) {
    throw new TypeError(`expected string but received ${typeof sentence}`);
  }

  let numberOfWords = getTotalWordsFromString(sentence);

  return numberOfWords > WORD_THRESHOLD
    ? sentence.toUpperCase()
    : sentence.toLowerCase();
}

export default formatStringByWordsLength;
