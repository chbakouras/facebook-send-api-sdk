'use strict';

import Button from "./Button";
import {ButtonType} from "../../../constants";

export default class PostbackButton extends Button {

    constructor({title, payload}) {
        super(ButtonType.POSTBACK);
        this.title = title;
        this.payload = payload;
    }
}
