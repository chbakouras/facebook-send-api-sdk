'use strict';

import Button from "./Button";
import {ButtonType} from "../../../constants";

export default class LogoutButton extends Button {

    constructor() {
        super(ButtonType.ACCOUNT_UNLINK);
    }
}
