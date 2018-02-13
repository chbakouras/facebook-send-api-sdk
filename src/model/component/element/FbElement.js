'use strict';

const fbElement = function (title, subtitle, image_url, default_action, buttons) {
    const fbElementObj = {};

    fbElementObj.title = title;
    fbElementObj.subtitle = subtitle;
    fbElementObj.image_url = image_url;
    fbElementObj.default_action = default_action;
    fbElementObj.buttons = buttons;

    return fbElementObj;
};

module.exports = fbElement;
