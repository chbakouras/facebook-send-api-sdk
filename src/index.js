'use strict';

import * as constants from './constants'
import * as model from './model'
import SendApiSdk from './SendApiSdk'

export default {
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
                Button: model.component.button.Button,
                CallButton: model.component.button.CallButton,
                GamePlayButton: model.component.button.GamePlayButton,
                LoginButton: model.component.button.LoginButton,
                LogoutButton: model.component.button.LogoutButton,
                PaymentButton: model.component.button.PaymentButton,
                PostbackButton: model.component.button.PostbackButton,
                ShareButton: model.component.button.ShareButton,
                UrlButton: model.component.button.UrlButton
            },
            element: {
                FbElement: model.component.element.FbElement,
                MediaElement: model.component.element.MediaElement,
                OpenGraphElement: model.component.element.OpenGraphElement
            },
            Attachment: model.component.Attachment,
            Message: model.component.Message,
            QuickReply: model.component.QuickReply,
            Recipient: model.component.Recipient
        },
        template: {
            ButtonTemplate: model.template.ButtonTemplate,
            GenericTemplate: model.template.GenericTemplate,
            ListTemplate: model.template.ListTemplate,
            MediaTemplate: model.template.MediaTemplate,
            OpenGraphTemplate: model.template.OpenGraphTemplate,
        },
        MessageRequest: model.MessageRequest,
        MessageResponse: model.MessageResponse
    },
    SendApiSdk: SendApiSdk
};
