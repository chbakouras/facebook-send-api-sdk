'use strict';

import {MediaType} from "../../../constants";
import Button from "../button/Button";

export default class MediaElement {

    constructor(media_type: string, attachment_id: string, url: string, button: Button) {
        if (media_type !== MediaType.IMAGE && media_type !== MediaType.VIDEO) throw  new Error("Not supported media type");

        this.media_type = media_type;

        if (attachment_id) {
            this.attachment_id = attachment_id;
        } else if (url) {
            this.url = url;
        }

        this.buttons = [button];
    }
}
