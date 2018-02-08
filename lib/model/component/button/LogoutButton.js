'use strict';
import Button from "./Button";
import {ButtonType} from "../../../constants";

class LogoutButton extends Button {

    constructor() {
        super(ButtonType.ACCOUNT_UNLINK);
    }
}

export default LogoutButton;
