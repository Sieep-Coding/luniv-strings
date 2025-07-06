/**
 * @description Checks if the provided value is empty.
 * @param {any} value The value to check.
 * @returns {boolean} true if the value is empty, otherwise false.
 * @example
 * isEmpty("");         // true
 * isEmpty("   ");      // true
 * isEmpty([]);         // true
 * isEmpty([1, 2, 3]);  // false
 */
export default function isEmpty(value) {
  if (value == null) {
    return true;
  }

  if (typeof value === 'string' || value instanceof String) {
    return /^\s*$/.test(value);
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  return false;
}