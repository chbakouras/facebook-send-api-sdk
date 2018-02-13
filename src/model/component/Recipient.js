'use strict';

const recipient = function (id, phone_number, user_ref, name) {
    const recipientObj = {};

    recipientObj.id = id;

    if (user_ref) {
        recipientObj.user_ref = user_ref;
    }

    if (phone_number) {
        recipientObj.phone_number = phone_number;
        if (name) {
            recipientObj.name = name;
        }
    }

    return recipientObj;
};

module.exports = recipient;
