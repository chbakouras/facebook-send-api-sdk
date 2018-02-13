'use strict';

const constants = require('../../../constants');
const attachment = require('./../component/Attachment');
const message = require('./../component/Message');

const genericTemplate = function (recipient, elements, sharable, image_aspect_ratio, messaging_type) {
    const genericTemplateObj = {};

    genericTemplateObj.messaging_type = messaging_type ? messaging_type : constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION;
    genericTemplateObj.recipient = recipient;
    genericTemplateObj.message = message(
        null,
        attachment(
            constants.AttachmentType.TEMPLATE,
            {
                template_type: constants.TemplateType.GENERIC,
                sharable: sharable ? sharable : false,
                image_aspect_ratio: image_aspect_ratio ? image_aspect_ratio : constants.ImageAspectRatio.HORIZONTAL,
                elements: elements
            }
        )
    );

    return genericTemplateObj;
};

module.exports = genericTemplate;
