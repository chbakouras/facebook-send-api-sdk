'use strict';

import {AttachmentType, MessagingType, TemplateType, TopElementStyle} from "../../constants";
import {Attachment, Message} from "../component";
import Recipient from "../component/Recipient";
import FbElement from "../component/element/FbElement";
import Button from "../component/button/Button";

export default class ListTemplate {

    constructor(recipient: Recipient, elements: FbElement[], button: Button, top_element_style: string, messaging_type: string) {
        if (elements.length < 2) throw new Error("Minimum 2 elements");
        if (elements.length > 4) throw new Error("Maximum 4 elements");

        this.messaging_type = messaging_type ? messaging_type : MessagingType.NON_PROMOTIONAL_SUBSCRIPTION;
        this.recipient = recipient;
        this.message = new Message({
            attachment: new Attachment({
                type: AttachmentType.TEMPLATE,
                payload: {
                    template_type: TemplateType.LIST,
                    top_element_style: top_element_style ? top_element_style : TopElementStyle.COMPACT,
                    buttons: button ? [button] : [],
                    elements: elements
                }
            })
        });
    }
}
