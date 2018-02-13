'use strict';

const button = require('./button');
const element = require('./element');
const attachment = require('./Attachment');
const message = require('./Message');
const name = require('./Name');
const quickReply = require('./QuickReply');
const recipient = require('./Recipient');

module.exports = {
    button: button,
    element: element,
    attachment: attachment,
    message: message,
    name: name,
    quickReply: quickReply,
    recipient: recipient
};
