'use strict';

const constants = require('../../../constants');

const shareButton = function (element) {
    const shareButtonObj = {};

    shareButtonObj.type = constants.ButtonType.ELEMENT_SHARE;
    shareButtonObj.share_contents = {
        attachment: {
            type: constants.AttachmentType.TEMPLATE,
            payload: {
                template_type: constants.TemplateType.GENERIC,
                elements: [
                    element
                ]
            }
        }
    };

    return shareButtonObj;
};

module.exports = shareButton;
