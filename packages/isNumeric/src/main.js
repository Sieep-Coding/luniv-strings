/**
 * @description Checks if the provided arguement is a numeric value.
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is numeric, otherwise false.
 * @example
 * // Basic usage
 * isNumeric(42); // true
 * isNumeric('Hello'); // false 
 */

export default function isNumeric(value) {
  
  if (value === null || value === undefined) {
    return false;
  }

  if (typeof value === 'number') {
    return isFinite(value);
  }

  if (typeof value === 'string' && value.trim() !== '') {
    const num = Number(value);
    return !isNaN(num) && isFinite(num);
  }

  return false;
}
