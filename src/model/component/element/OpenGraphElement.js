'use strict';

const openGraphElement = function (url, buttons) {
    const openGraphElementObj = {};

    openGraphElementObj.url = url;
    openGraphElementObj.buttons = buttons;

    return openGraphElementObj;
};

module.exports = openGraphElement;
