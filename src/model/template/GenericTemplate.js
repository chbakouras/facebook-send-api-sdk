'use strict';

import {AttachmentType, ImageAspectRatio, MessagingType, TemplateType} from "../../constants";
import {Attachment, Message} from "../component";
import Recipient from "../component/Recipient";
import FbElement from "../component/element/FbElement";

export default class GenericTemplate {

    constructor(recipient: Recipient, elements: FbElement[], sharable: boolean, image_aspect_ratio: string, messaging_type: string) {
        this.messaging_type = messaging_type ? messaging_type : MessagingType.NON_PROMOTIONAL_SUBSCRIPTION;
        this.recipient = recipient;
        this.message = new Message({
            attachment: new Attachment({
                type: AttachmentType.TEMPLATE,
                payload: {
                    template_type: TemplateType.GENERIC,
                    sharable: sharable ? sharable : false,
                    image_aspect_ratio: image_aspect_ratio ? image_aspect_ratio : ImageAspectRatio.HORIZONTAL,
                    elements: elements
                }
            })
        });
    }
}
