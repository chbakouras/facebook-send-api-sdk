import PriceList from './PriceList'

export interface IPaymentSummary {
  currency: string
  is_test_payment: boolean
  payment_type: string
  merchant_name: string
  requested_user_info: string[]
  price_list: PriceList[]
}

export default class PaymentSummary {
  public currency: string
  public is_test_payment: boolean
  public payment_type: string
  public merchant_name: string
  public requested_user_info: string[]
  public price_list: PriceList[]

  constructor(paymentSummary: IPaymentSummary) {
    this.currency = paymentSummary.currency
    this.is_test_payment = paymentSummary.is_test_payment
    this.payment_type = paymentSummary.payment_type
    this.merchant_name = paymentSummary.merchant_name
    this.requested_user_info = paymentSummary.requested_user_info
    this.price_list = paymentSummary.price_list
  }
}
