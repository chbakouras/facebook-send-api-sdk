'use strict';

import Name from "./Name";

export default class Recipient {

    constructor(id: string, phone_number: string, user_ref: string, name: Name) {
        this.id = id;

        if (user_ref) {
            this.user_ref = user_ref;
        }

        if (phone_number) {
            this.phone_number = phone_number;
            if (name) {
                this.name = name;
            }
        }
    }
}
