/**
 * Truncates a string to a specified length and appends ellipsis if necessary.
 *
 * @param {string} startString - The string to be truncated.
 * @param {number} [intLength=10] - The desired length of the truncated string, including the ellipsis. Default is 10.
 * @returns {string} - The truncated string with ellipsis appended if the original string exceeds the specified length.
 * @throws {Error} - Throws an error if the start string is not provided.
 *
 * @example
 * Shortener("Hello, World!", 5);
 * // Returns 'Hello...'
 *
 * @example
 * Shortener("Hello", 10);
 * // Returns 'Hello'
 *
 * @example
 * // Throws an error
 * Shortener("", 5);
 */
export const Shortener = (
  startString: string,
  intLength: number = 10
): string => {
  if (!startString) {
    throw new Error("Missing startString");
  }
  const stringLength = startString.length;
  if (stringLength > intLength) {
    return `${startString.substring(0, intLength)}...`;
  }
  return startString;
};
