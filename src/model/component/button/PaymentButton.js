'use strict';

const constants = require('../../../constants');

const paymentButton = function (title, payload, currency, payment_type, is_test_payment, merchant_name, price_list) {
    const paymentButtonObj = {};

    paymentButtonObj.type = constants.ButtonType.PAYMENT;
    paymentButtonObj.title = title;
    paymentButtonObj.payload = payload;

    paymentButtonObj.payment_summary = {
        currency: currency,
        payment_type: payment_type,
        is_test_payment: is_test_payment,
        merchant_name: merchant_name,
        requested_user_info: [
            "shipping_address",
            "contact_name",
            "contact_phone",
            "contact_email"
        ],
        price_list: price_list
    };

    return paymentButtonObj;
};

module.exports = paymentButton;
