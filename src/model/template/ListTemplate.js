'use strict';

import {MessagingType, AttachmentType, TemplateType, TopElementStyle} from "../../constants";
import {Message, Attachment} from "../component";

export default class ListTemplate {

    constructor({recipient, elements, button, top_element_style, messaging_type}) {
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
