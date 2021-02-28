/**
 *
 * @param String startString The start string
 * @param int intLength The needed length
 */
const getShortString = (startString, intLength = 10) => {
  if (!startString) {
    throw new Error('Missing startString');
  }
  const stringLength = startString.length;
  if (stringLength > intLength) {
    return `${startString.substring(0, intLength)}...`;
  }
  return startString;
};

module.exports = getShortString;
