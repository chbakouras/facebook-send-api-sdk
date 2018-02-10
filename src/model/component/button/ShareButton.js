'use strict';

import Button from "./Button";
import {ButtonType, AttachmentType, TemplateType} from "../../../constants";
import FbElement from "../element/FbElement";

export default class ShareButton extends Button {

    constructor(element: FbElement) {
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
