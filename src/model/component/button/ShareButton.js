'use strict';

import Button from "./Button";
import {ButtonType, AttachmentType, TemplateType} from "../../../constants";

export default class ShareButton extends Button {

    constructor(element) {
        super(ButtonType.ELEMENT_SHARE);

        this.share_contents = {
            attachment: {
                type: AttachmentType.TEMPLATE,
                payload: {
                    template_type: TemplateType.GENERIC,
                    elements: [
                        element
                    ]
                }
            }
        }
    }
}
