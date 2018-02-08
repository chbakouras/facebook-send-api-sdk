'use strict';
import Button from "./Button";
import {ButtonType} from "../../../constants";

class LoginButton extends Button {

    constructor(url) {
        super(ButtonType.ACCOUNT_LINK);
        this.url = url;
    }
}

export default LoginButton;
