'use strict';

const constants = require('../../../constants');

const loginButton = function (url) {
    const loginButtonObj = {};

    loginButtonObj.type = constants.ButtonType.ACCOUNT_LINK;
    loginButtonObj.url = url;

    return loginButtonObj;
};

module.exports = loginButton;
