'use strict';

const constants = require('../../../constants');

const logoutButton = function () {
    const logoutButtonObj = {};

    logoutButtonObj.type = constants.ButtonType.ACCOUNT_UNLINK;

    return logoutButtonObj;
};

module.exports = logoutButton;
