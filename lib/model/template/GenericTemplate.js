'use strict';

import {MessagingType, AttachmentType, TemplateType, ImageAspectRatio} from "../../constants";
import {Message, Attachment} from "../component";

class GenericTemplate {

    constructor({recipient, elements, sharable, image_aspect_ratio, messaging_type}) {
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

export default GenericTemplate;
