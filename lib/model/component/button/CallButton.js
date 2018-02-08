'use strict';
import Button from "./Button";
import {ButtonType} from "../../../constants";

class CallButton extends Button {

    constructor({title, payload}) {
        super(ButtonType.PHONE_NUMBER);
        this.title = title;
        this.payload = payload;
    }
}

export default CallButton;
