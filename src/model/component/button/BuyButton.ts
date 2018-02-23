import Button from './Button'
import Constants from '../../../Constants'
import PaymentSummary from '../payment/PaymentSummary'

export interface IPaymentButton {
  title: string
  payload: string
  payment_summary: PaymentSummary
}

export default class PaymentButton extends Button {
  public title: string
  public payload: string
  public payment_summary: PaymentSummary

  constructor(paymentButton: IPaymentButton) {
    super(Constants.ButtonType.PAYMENT)
    this.title = paymentButton.title
    this.payload = paymentButton.payload
    this.payment_summary = paymentButton.payment_summary
  }
}
