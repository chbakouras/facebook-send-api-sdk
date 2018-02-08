'use strict';

import {MessagingType, AttachmentType, TemplateType} from "../../constants";
import {Message, Attachment} from "../component";

class OpenGraphTemplate {

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

export default OpenGraphTemplate;
