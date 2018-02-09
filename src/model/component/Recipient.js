'use strict';

export default class Recipient {

    constructor({id, phone_number, user_ref, name}) {
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
