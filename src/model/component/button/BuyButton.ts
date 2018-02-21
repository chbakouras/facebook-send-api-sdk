import Button from './Button'
import Constants from '../../../Constants'
import PaymentSummary from '../payment/PaymentSummary'

export default class PaymentButton extends Button {
  public title: string
  public payload: string
  public payment_summary: PaymentSummary

  constructor(title: string, payload: string, payment_summary: PaymentSummary) {
    super(Constants.ButtonType.PAYMENT)
    this.title = title
    this.payload = payload
    this.payment_summary = payment_summary
  }
}
