'use strict';

import Button from "../button/Button";
import UrlButton from "../button/UrlButton";

export default class FbElement {

    constructor(title: string, subtitle: string, image_url: string, default_action: UrlButton, buttons: Button[]) {
        this.title = title;
        this.subtitle = subtitle;
        this.image_url = image_url;
        this.default_action = default_action;
        this.buttons = buttons;
    }
}
