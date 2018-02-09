'use strict';

import {MessagingType, AttachmentType, TemplateType} from "../../constants";
import {Message, Attachment} from "../component";

export default class ButtonTemplate {

    constructor({recipient, text, buttons, messaging_type}) {
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
