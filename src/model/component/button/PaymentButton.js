'use strict';

import Button from "./Button";
import {ButtonType} from "../../../constants";

export default class PaymentButton extends Button {

    constructor(title: string, payload: string, currency: string, payment_type: string, is_test_payment: boolean, merchant_name: string, price_list) {
        super(ButtonType.PAYMENT);
        this.title = title;
        this.payload = payload;

        this.payment_summary = {
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
        }
    }
}
