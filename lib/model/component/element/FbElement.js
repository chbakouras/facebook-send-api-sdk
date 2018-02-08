'use strict';

class FbElement {

    constructor({title, subtitle, image_url, default_action, buttons}) {
        this.title = title;
        this.subtitle = subtitle;
        this.image_url = image_url;
        this.default_action = default_action;
        this.buttons = buttons;
    }
}

export default FbElement;
