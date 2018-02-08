'use strict';
import MediaType from "../../../constants/MediaType";

class MediaElement {

    constructor({media_type, attachment_id, url, button}) {
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

export default MediaElement;
