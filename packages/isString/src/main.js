/**
 * @description Checks if the provided value is a string.
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is a string (primitive or String object), otherwise false.
 * @example
 * // Basic usage
 * isString("hello");           // true
 * isString(new String("hi"));  // true
 * isString(123);               // false
 */

export default function isString(value) {
  return typeof value === 'string' || value instanceof String;
}