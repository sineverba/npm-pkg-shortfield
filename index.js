'use strict';

/**
 * 
 * @param {*} startString 
 */
const getShortString = (startString) => {
    const maxLengthString = 10;
    if (!startString) {
        throw new Error('Missing startString');
    }
    const stringLength = startString.length;
    if (stringLength > maxLengthString) {
        return `${startString.substring(0, maxLengthString)}...`;
    }
    return startString;
}

module.exports = getShortString;