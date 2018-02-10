'use strict';

import {AttachmentType, MessagingType, TemplateType} from "../../constants";
import {Attachment, Message} from "../component";
import Recipient from "../component/Recipient";
import MediaElement from "../component/element/MediaElement";

export default class MediaTemplate {

    constructor(recipient: Recipient, mediaElement: MediaElement, messaging_type: string) {
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
