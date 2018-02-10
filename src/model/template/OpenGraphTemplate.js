'use strict';

import {AttachmentType, MessagingType, TemplateType} from "../../constants";
import {Attachment, Message} from "../component";
import Recipient from "../component/Recipient";
import OpenGraphElement from "../component/element/OpenGraphElement";

export default class OpenGraphTemplate {

    constructor(recipient: Recipient, openGraphElement: OpenGraphElement, messaging_type: string) {
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
