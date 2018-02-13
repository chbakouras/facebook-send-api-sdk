'use strict';

const constants = require("../../constants");

const quickReply = function (content_type, title, payload, image_url) {
    const quickReplyObj = {};

    quickReplyObj.content_type = content_type;

    if (content_type === constants.QuickReplyContentType.TEXT) {
        quickReplyObj.title = title;
        quickReplyObj.payload = payload;

        if (image_url) {
            quickReplyObj.image_url = image_url;
        }
    }

    return quickReplyObj;
};

module.exports = quickReply;
