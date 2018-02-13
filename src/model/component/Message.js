'use strict';

const message = function (text, attachment, quick_replies, metadata) {
    const messageObj = {};

    if (!text && !attachment) throw new Error("Message text or attachment must be included");

    if (text) {
        messageObj.text = text;
    }

    if (attachment) {
        messageObj.attachment = attachment;
    }

    if (quick_replies) {
        if (quick_replies.length > 11) throw new Error("Facebook renders up to 11 quick replies");
        messageObj.quick_replies = quick_replies;
    }

    if (metadata) {
        messageObj.metadata = metadata;
    }

    return messageObj;
};

module.exports = message;
