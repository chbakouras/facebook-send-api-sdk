'use strict';

import {MessagingType, AttachmentType, TemplateType} from "../../constants";
import {Message, Attachment} from "../component";

class MediaTemplate {

    constructor({recipient, mediaElement, messaging_type}) {
        this.messaging_type = messaging_type ? messaging_type : MessagingType.NON_PROMOTIONAL_SUBSCRIPTION;
        this.recipient = recipient;
        this.message = new Message({
            attachment: new Attachment({
                type: AttachmentType.TEMPLATE,
                payload: {
                    template_type: TemplateType.MEDIA,
                    elements: [mediaElement]
                }
            })
        });
    }
}

export default MediaTemplate;
