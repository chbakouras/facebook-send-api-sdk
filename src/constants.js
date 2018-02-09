'use strict';

export const AttachmentType = {
    IMAGE: 'image',
    AUDIO: 'audio',
    VIDEO: 'video',
    FILE: 'file',
    TEMPLATE: 'template',
};

export const ButtonType = {
    PAYMENT: "payment",
    PHONE_NUMBER: "phone_number",
    GAME_PLAY: "game_play",
    ACCOUNT_LINK: "account_link",
    ACCOUNT_UNLINK: "account_unlink",
    POSTBACK: "postback",
    ELEMENT_SHARE: "element_share",
    WEB_URL: "web_url",
};

export const ImageAspectRatio = {
    HORIZONTAL: 'horizontal',
    SQUARE: 'square'
};

export const MediaType = {
    IMAGE: 'image',
    VIDEO: 'video',
};

export const MessageState = {
    TYPING_ON: 'typing_on',
    TYPING_OFF: 'typing_off',
    MARK_SEEN: 'mark_seen',
};

export const MessagingTag = {
    PAIRING_UPDATE: 'PAIRING_UPDATE',
    APPLICATION_UPDATE: 'APPLICATION_UPDATE',
    ACCOUNT_UPDATE: 'ACCOUNT_UPDATE',
    PAYMENT_UPDATE: 'PAYMENT_UPDATE',
    PERSONAL_FINANCE_UPDATE: 'PERSONAL_FINANCE_UPDATE',
    SHIPPING_UPDATE: 'SHIPPING_UPDATE',
    RESERVATION_UPDATE: 'RESERVATION_UPDATE',
    ISSUE_RESOLUTION: 'ISSUE_RESOLUTION',
    APPOINTMENT_UPDATE: 'APPOINTMENT_UPDATE',
    GAME_EVENT: 'GAME_EVENT',
    TRANSPORTATION_UPDATE: 'TRANSPORTATION_UPDATE',
    FEATURE_FUNCTIONALITY_UPDATE: 'FEATURE_FUNCTIONALITY_UPDATE',
    TICKET_UPDATE: 'TICKET_UPDATE',
};

export const MessagingType = {
    RESPONSE: 'RESPONSE',
    UPDATE: 'UPDATE',
    MESSAGE_TAG: 'MESSAGE_TAG',
    NON_PROMOTIONAL_SUBSCRIPTION: 'NON_PROMOTIONAL_SUBSCRIPTION',
};

export const NotificationType = {
    REGULAR: 'REGULAR',
    SILENT_PUSH: 'SILENT_PUSH',
    NO_PUSH: 'NO_PUSH',
};

export const QuickReplyContentType = {
    TEXT: 'text',
    LOCATION: 'location',
};

export const TemplateType = {
    BUTTON: "button",
    GENERIC: "generic",
    LIST: "list",
    MEDIA: "media",
    OPEN_GRAPH: "open_graph",
};

export const TopElementStyle = {
    COMPACT: 'compact',
    LARGE: 'large',
};

export const WebviewHeightRatio = {
    COMPACT: 'compact',
    TALL: 'tall',
    FULL: 'full',
};

export default {
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
}
