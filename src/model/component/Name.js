'use strict';

const name = function (first_name, last_name) {
    const nameObj = {};

    nameObj.first_name = first_name;
    nameObj.last_name = last_name;

    return nameObj;
};

module.exports = name;
