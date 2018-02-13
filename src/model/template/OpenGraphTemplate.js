'use strict';

const constants = require('../../constants');
const attachment = require('./../component/Attachment');
const message = require('./../component/Message');

const openGraphTemplate = function (recipient, openGraphElement, messaging_type) {
    const openGraphTemplateObj = {};

    this.messaging_type = messaging_type ? messaging_type : constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION;
    this.recipient = recipient;
    this.message = message(
        null,
        attachment(
            constants.AttachmentType.TEMPLATE,
            {
                template_type: constants.TemplateType.OPEN_GRAPH,
                elements: [openGraphElement]
            }
        )
    );

    return openGraphTemplateObj;
};

module.exports = openGraphTemplate;
