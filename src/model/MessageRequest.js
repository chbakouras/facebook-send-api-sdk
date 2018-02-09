'use strict';

import {MessagingType, NotificationType} from "../constants";

export default class MessageRequest {

    constructor({recipient, message, messaging_type, notification_type, tag, sender_action}) {
        this.recipient = recipient;

        if (sender_action) {
            this.sender_action = sender_action;
        } else {
            this.message = message;
            this.messaging_type = messaging_type ? messaging_type : MessagingType.NON_PROMOTIONAL_SUBSCRIPTION;
            this.notification_type = notification_type ? notification_type : NotificationType.REGULAR;

            if (tag) {
                this.tag = tag;
            }
        }
    }
}
