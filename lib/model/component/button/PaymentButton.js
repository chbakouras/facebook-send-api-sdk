'use strict';
import Button from "./Button";
import {ButtonType} from "../../../constants";

class PaymentButton extends Button {

    constructor({title, payload, currency, payment_type, is_test_payment, merchant_name, price_list}) {
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

export default PaymentButton;
