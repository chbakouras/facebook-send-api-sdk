'use strict';

import {QuickReplyContentType} from "../../constants";

export default class QuickReply {

    constructor({content_type, title, payload, image_url}) {
        this.content_type = content_type;

        if (content_type === QuickReplyContentType.TEXT) {
            this.title = title;
            this.payload = payload;

            if (image_url) {
                this.image_url = image_url;
            }
        }
    }
}
