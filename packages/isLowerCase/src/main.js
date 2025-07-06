/**
 * @description Checks if a string is in lowercase.
 * @param {string} value The string to check.
 * @returns {boolean} true if the string is in lowercase, otherwise false.
 * @example
 * isLowerCase("HELLO"); // false
 * isLowerCase("Hello"); // false
 * isLowerCase("123");   // false
 * isLowerCase("hello"); // true
 * isLowerCase("hello world"); // true
 * isLowerCase("");      // false
*/

// TODO
// replace with the correct path when adding to npm
import isUpperCase from '/home/nickstambaugh/code/js-project/packages/isUpperCase/src/main';

export default function isLowerCase(value) {
    if (typeof value !== 'string' && !(value instanceof String)) {
        return false;
    }


    if (value.length === 0 || value.trim().length === 0) {
        return false;
    }

    if (isUpperCase(value)) {
        return false;
    }


    return value === value.toLowerCase();
}