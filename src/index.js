'use strict';

const constants = require('./constants');
const model = require('./model');
const SendApiSdk = require('./SendApiSdk');

module.exports = {
    constants: {
        AttachmentType: constants.AttachmentType,
        ButtonType: constants.ButtonType,
        ImageAspectRatio: constants.ImageAspectRatio,
        MediaType: constants.MediaType,
        MessageState: constants.MessageState,
        MessagingTag: constants.MessagingTag,
        MessagingType: constants.MessagingType,
        NotificationType: constants.NotificationType,
        QuickReplyContentType: constants.QuickReplyContentType,
        TemplateType: constants.TemplateType,
        TopElementStyle: constants.TopElementStyle,
        WebviewHeightRatio: constants.WebviewHeightRatio
    },
    model: {
        component: {
            button: {
                callButton: model.component.button.callButton,
                gamePlayButton: model.component.button.gamePlayButton,
                loginButton: model.component.button.loginButton,
                logoutButton: model.component.button.logoutButton,
                paymentButton: model.component.button.paymentButton,
                postbackButton: model.component.button.postbackButton,
                shareButton: model.component.button.shareButton,
                urlButton: model.component.button.urlButton
            },
            element: {
                fbElement: model.component.element.fbElement,
                mediaElement: model.component.element.mediaElement,
                openGraphElement: model.component.element.openGraphElement
            },
            attachment: model.component.attachment,
            message: model.component.message,
            name: model.component.name,
            quickReply: model.component.quickReply,
            recipient: model.component.recipient
        },
        template: {
            buttonTemplate: model.template.buttonTemplate,
            genericTemplate: model.template.genericTemplate,
            listTemplate: model.template.listTemplate,
            mediaTemplate: model.template.mediaTemplate,
            openGraphTemplate: model.template.openGraphTemplate
        },
        messageRequest: model.messageRequest,
        messageResponse: model.messageResponse
    },
    SendApiSdk: SendApiSdk
};
