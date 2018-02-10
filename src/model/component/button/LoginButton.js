'use strict';

import Button from "./Button";
import {ButtonType} from "../../../constants";

export default class LoginButton extends Button {

    constructor(url: string) {
        super(ButtonType.ACCOUNT_LINK);
        this.url = url;
    }
}
