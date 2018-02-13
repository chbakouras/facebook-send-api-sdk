'use strict';

const constants = require('../../constants');
const attachment = require('./../component/Attachment');
const message = require('./../component/Message');

const buttonTemplate = function (recipient, text, buttons, messaging_type) {
    const buttonTemplateObj = {};

    if (buttons.length > 3) throw new Error("Max 3 buttons");

    buttonTemplateObj.messaging_type = messaging_type ? messaging_type : constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION;
    buttonTemplateObj.recipient = recipient;
    buttonTemplateObj.message = message(
        null,
        attachment(
            constants.AttachmentType.TEMPLATE,
            {
                template_type: constants.TemplateType.BUTTON,
                text: text,
                buttons: buttons
            }
        )
    );

    return buttonTemplateObj;
};

module.exports = buttonTemplate;
