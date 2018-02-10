'use strict';

import {MessagingType, NotificationType} from "../constants";
import Recipient from "./component/Recipient";
import Message from "./component/Message";

export default class MessageRequest {

    constructor(recipient: Recipient, message: Message, messaging_type: string, notification_type:string, tag:string, sender_action: string) {
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
