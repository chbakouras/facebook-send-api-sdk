'use strict';

const constants = require('../../../constants');

const postbackButton = function (title, payload) {
    const postbackButtonObj = {};

    postbackButtonObj.type = constants.ButtonType.POSTBACK;
    postbackButtonObj.title = title;
    postbackButtonObj.payload = payload;

    return postbackButtonObj;
};

module.exports = postbackButton;
