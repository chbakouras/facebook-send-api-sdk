import PriceList from './PriceList'

export default class PaymentSummary {
  public currency: string
  public is_test_payment: boolean
  public payment_type: string
  public merchant_name: string
  public requested_user_info: string[]
  public price_list: PriceList[]

  constructor(
    currency: string,
    is_test_payment: boolean,
    payment_type: string,
    merchant_name: string,
    requested_user_info: string[],
    price_list: PriceList[]
  ) {
    this.currency = currency
    this.is_test_payment = is_test_payment
    this.payment_type = payment_type
    this.merchant_name = merchant_name
    this.requested_user_info = requested_user_info
    this.price_list = price_list
  }
}
