'use strict';

import Button from "./Button";
import {ButtonType} from "../../../constants";

export default class CallButton extends Button {

    constructor(title: string, payload: string) {
        super(ButtonType.PHONE_NUMBER);
        this.title = title;
        this.payload = payload;
    }
}
