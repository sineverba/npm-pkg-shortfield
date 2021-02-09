'use strict';

/**
 * 
 * @param {*} startString 
 */
const getShortString = (startString) => {
    if (!startString) {
        throw new Error('Missing startString');
    }
    return startString;
}

module.exports = getShortString;