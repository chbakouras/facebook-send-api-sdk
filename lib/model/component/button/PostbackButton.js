'use strict';
import Button from "./Button";
import {ButtonType} from "../../../constants";

class PostbackButton extends Button {

    constructor({title, payload}) {
        super(ButtonType.POSTBACK);
        this.title = title;
        this.payload = payload;
    }
}

export default PostbackButton;
