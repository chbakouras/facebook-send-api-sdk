'use strict';

import {AttachmentType, MessagingType, TemplateType} from "../../constants";
import {Attachment, Message} from "../component";

export default class OpenGraphTemplate {

    constructor({recipient, openGraphElement, messaging_type}) {
        this.messaging_type = messaging_type ? messaging_type : MessagingType.NON_PROMOTIONAL_SUBSCRIPTION;
        this.recipient = recipient;
        this.message = new Message({
            attachment: new Attachment({
                type: AttachmentType.TEMPLATE,
                payload: {
                    template_type: TemplateType.OPEN_GRAPH,
                    elements: [openGraphElement]
                }
            })
        });
    }
}
