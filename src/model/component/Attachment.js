'use strict';

const attachment = function (type, payload) {
    const attachmentObj = {};

    attachmentObj.type = type;
    attachmentObj.payload = payload;

    return attachmentObj;
};

module.exports = attachment;
