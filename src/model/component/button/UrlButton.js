'use strict';

const constants = require('../../../constants');

const urlButton = function (url, title, webview_height_ratio, messenger_extensions, fallback_url, webview_share_button) {
    const urlButtonObj = {};

    urlButtonObj.type = constants.ButtonType.WEB_URL;
    urlButtonObj.url = url;
    urlButtonObj.title = title;

    if (webview_height_ratio) {
        urlButtonObj.webview_height_ratio = webview_height_ratio;
    }

    if (messenger_extensions) {
        urlButtonObj.messenger_extensions = messenger_extensions;

        if (fallback_url) {
            urlButtonObj.fallback_url = fallback_url;
        }
    }

    if (webview_share_button) {
        urlButtonObj.webview_share_button = webview_share_button;
    }

    return urlButtonObj;
};

module.exports = urlButton;
