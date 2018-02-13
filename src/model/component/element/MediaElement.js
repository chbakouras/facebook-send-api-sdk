'use strict';

const constants = require('./../../../constants');

const mediaElement = function (media_type, attachment_id, url, button) {
    const mediaElementObj = {};

    if (media_type !== constants.MediaType.IMAGE && media_type !== constants.MediaType.VIDEO) throw  new Error("Not supported media type");

    mediaElementObj.media_type = media_type;

    if (attachment_id) {
        mediaElementObj.attachment_id = attachment_id;
    } else if (url) {
        mediaElementObj.url = url;
    }

    mediaElementObj.buttons = [button];

    return mediaElementObj;
};

module.exports = mediaElement;
