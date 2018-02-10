'use strict';

import Button from "../button/Button";

export default class OpenGraphElement {

    constructor(url: string, buttons: Button[]) {
        this.url = url;
        this.buttons = buttons;
    }
}
