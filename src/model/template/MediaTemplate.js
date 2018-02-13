'use strict';

const constants = require('../../../constants');
const attachment = require('./../component/Attachment');
const message = require('./../component/Message');

const mediaTemplate = function (recipient, mediaElement, messaging_type) {
    const mediaTemplateObj = {};

    mediaTemplateObj.messaging_type = messaging_type ? messaging_type : constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION;
    mediaTemplateObj.recipient = recipient;
    mediaTemplateObj.message = message(
        null,
        attachment(
            constants.AttachmentType.TEMPLATE,
            {
                template_type: constants.TemplateType.MEDIA,
                elements: [mediaElement]
            }
        )
    );

    return mediaTemplateObj;
};

module.exports = mediaTemplate;
