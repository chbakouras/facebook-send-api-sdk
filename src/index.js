'use strict';

import {
    AttachmentType, ButtonType, ImageAspectRatio, MediaType, MessageState, MessagingTag, MessagingType,
    NotificationType, QuickReplyContentType, TemplateType, TopElementStyle, WebviewHeightRatio
} from './constants';
import {
    Button, CallButton, GamePlayButton, LoginButton, LogoutButton, PaymentButton, PostbackButton, ShareButton,
    UrlButton
} from "./model/component/button";
import {FbElement, MediaElement, OpenGraphElement} from "./model/component/element";
import {Attachment, Message, Name, QuickReply, Recipient} from "./model/component";
import {ButtonTemplate, GenericTemplate, ListTemplate, MediaTemplate, OpenGraphTemplate} from "./model/template";
import {MessageRequest, MessageResponse} from "./model";
import SendApiSdk from './SendApiSdk';

export const constants = {
    AttachmentType,
    ButtonType,
    ImageAspectRatio,
    MediaType,
    MessageState,
    MessagingTag,
    MessagingType,
    NotificationType,
    QuickReplyContentType,
    TemplateType,
    TopElementStyle,
    WebviewHeightRatio
};

export const model = {
    component: {
        button: {
            Button,
            CallButton,
            GamePlayButton,
            LoginButton,
            LogoutButton,
            PaymentButton,
            PostbackButton,
            ShareButton,
            UrlButton
        },
        element: {
            FbElement,
            MediaElement,
            OpenGraphElement
        },
        Attachment,
        Message,
        Name,
        QuickReply,
        Recipient
    },
    template: {
        ButtonTemplate,
        GenericTemplate,
        ListTemplate,
        MediaTemplate,
        OpenGraphTemplate,
    },
    MessageRequest,
    MessageResponse
};

export default {
    constants: constants,
    model: model,
    SendApiSdk
};
