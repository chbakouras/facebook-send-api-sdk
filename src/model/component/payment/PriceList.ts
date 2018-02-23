export interface IPriceList {
  label: string
  amount: string
}

export default class PriceList {
  public label: string
  public amount: string

  constructor(priceList: IPriceList) {
    this.label = priceList.label
    this.amount = priceList.amount
  }
}
