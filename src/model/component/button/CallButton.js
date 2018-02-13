'use strict';

const constants = require('../../../constants');

const callButton = function (title, payload) {
    const callButtonObj = {};

    callButtonObj.type = constants.ButtonType.PHONE_NUMBER;
    callButtonObj.title = title;
    callButtonObj.payload = payload;

    return callButtonObj;
};

module.exports = callButton;
