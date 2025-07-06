/**
 * @description Checks if a string is in uppercase.
 * @param {string} value The string to check.
 * @returns {boolean} true if the string is in uppercase, otherwise false.
 * @example
 * isUpperCase("HELLO"); // true
 * isUpperCase("Hello"); // false
 * isUpperCase("123");   // true
 * isUpperCase("");      // false
 */
export default function isUpperCase(value) {
    if (typeof value !== 'string') {
        return false;
    }

    if (value.length === 0 || value.trim().length === 0) {
        return false;
    }

    return value === value.toUpperCase();
}