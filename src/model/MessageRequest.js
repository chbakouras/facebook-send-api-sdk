'use strict';

const constants = require('./../constants');

const messageRequest = function (recipient, message, messaging_type, notification_type, tag, sender_action) {
    const messageReq = {};

    messageReq.recipient = recipient;

    if (sender_action) {
        messageReq.sender_action = sender_action;
    } else {
        messageReq.message = message;
        messageReq.messaging_type = messaging_type ? messaging_type : constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION;
        messageReq.notification_type = notification_type ? notification_type : constants.NotificationType.REGULAR;

        if (tag) {
            messageReq.tag = tag;
        }
    }

    return messageReq;
};

module.exports = messageRequest;
