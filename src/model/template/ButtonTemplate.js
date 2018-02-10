'use strict';

import {AttachmentType, MessagingType, TemplateType} from "../../constants";
import {Attachment, Message} from "../component";
import Recipient from "../component/Recipient";
import Button from "../component/button/Button";

export default class ButtonTemplate {

    constructor(recipient: Recipient, text: string, buttons: Button[], messaging_type: string) {
        if (buttons.length > 3) throw new Error("Max 3 buttons");

        this.messaging_type = messaging_type ? messaging_type : MessagingType.NON_PROMOTIONAL_SUBSCRIPTION;
        this.recipient = recipient;
        this.message = new Message({
            attachment: new Attachment({
                type: AttachmentType.TEMPLATE,
                payload: {
                    template_type: TemplateType.BUTTON,
                    text: text,
                    buttons: buttons
                }
            })
        });
    }
}
