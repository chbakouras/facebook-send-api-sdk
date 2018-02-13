'use strict';

const AttachmentType = {
    IMAGE: 'image',
    AUDIO: 'audio',
    VIDEO: 'video',
    FILE: 'file',
    TEMPLATE: 'template'
};

const ButtonType = {
    PAYMENT: "payment",
    PHONE_NUMBER: "phone_number",
    GAME_PLAY: "game_play",
    ACCOUNT_LINK: "account_link",
    ACCOUNT_UNLINK: "account_unlink",
    POSTBACK: "postback",
    ELEMENT_SHARE: "element_share",
    WEB_URL: "web_url"
};

const ImageAspectRatio = {
    HORIZONTAL: 'horizontal',
    SQUARE: 'square'
};

const MediaType = {
    IMAGE: 'image',
    VIDEO: 'video'
};

const MessageState = {
    TYPING_ON: 'typing_on',
    TYPING_OFF: 'typing_off',
    MARK_SEEN: 'mark_seen'
};

const MessagingTag = {
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
    TICKET_UPDATE: 'TICKET_UPDATE'
};

const MessagingType = {
    RESPONSE: 'RESPONSE',
    UPDATE: 'UPDATE',
    MESSAGE_TAG: 'MESSAGE_TAG',
    NON_PROMOTIONAL_SUBSCRIPTION: 'NON_PROMOTIONAL_SUBSCRIPTION'
};

const NotificationType = {
    REGULAR: 'REGULAR',
    SILENT_PUSH: 'SILENT_PUSH',
    NO_PUSH: 'NO_PUSH'
};

const QuickReplyContentType = {
    TEXT: 'text',
    LOCATION: 'location'
};

const TemplateType = {
    BUTTON: "button",
    GENERIC: "generic",
    LIST: "list",
    MEDIA: "media",
    OPEN_GRAPH: "open_graph"
};

const TopElementStyle = {
    COMPACT: 'compact',
    LARGE: 'large'
};

const WebviewHeightRatio = {
    COMPACT: 'compact',
    TALL: 'tall',
    FULL: 'full'
};

module.exports = {
    AttachmentType: AttachmentType,
    ButtonType: ButtonType,
    ImageAspectRatio: ImageAspectRatio,
    MediaType: MediaType,
    MessageState: MessageState,
    MessagingTag: MessagingTag,
    MessagingType: MessagingType,
    NotificationType: NotificationType,
    QuickReplyContentType: QuickReplyContentType,
    TemplateType: TemplateType,
    TopElementStyle: TopElementStyle,
    WebviewHeightRatio: WebviewHeightRatio
};
