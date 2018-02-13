'use strict';

const constants = require('../../../constants');
const attachment = require('./../component/Attachment');
const message = require('./../component/Message');

const listTemplate = function (recipient, elements, button, top_element_style, messaging_type) {
    const listTemplateObj = {};

    if (elements.length < 2) throw new Error("Minimum 2 elements");
    if (elements.length > 4) throw new Error("Maximum 4 elements");

    listTemplateObj.messaging_type = messaging_type ? messaging_type : constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION;
    listTemplateObj.recipient = recipient;
    listTemplateObj.message = message(
        null,
        attachment(
            constants.AttachmentType.TEMPLATE,
            {
                template_type: constants.TemplateType.LIST,
                top_element_style: top_element_style ? top_element_style : constants.TopElementStyle.COMPACT,
                buttons: button ? [button] : [],
                elements: elements
            }
        )
    );

    return listTemplateObj;
};

module.exports = listTemplate;
