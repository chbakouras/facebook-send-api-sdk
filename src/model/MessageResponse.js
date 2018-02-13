'use strict';

const messageResponse = function (recipient_id, message_id) {
    const messageRes = {};

    messageRes.recipient_id = recipient_id;
    messageRes.message_id = message_id;

    return messageRes;
};

module.exports = messageResponse;
