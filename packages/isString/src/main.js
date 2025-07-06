/**
 * @description Checks if the provided value is a string.
 */

export default function isString(value) {
  return typeof value === 'string' || value instanceof String;
}