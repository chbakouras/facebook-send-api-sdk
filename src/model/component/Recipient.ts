import { default as Name } from './Name'

export interface IRecipient {
  id: string
  phone_number?: string
  user_ref?: string
  name?: Name
}

export default class Recipient {
  public id: string
  public user_ref: string
  public phone_number: string
  public name: Name

  constructor(recipient: IRecipient) {
    this.id = recipient.id

    if (recipient.user_ref) {
      this.user_ref = recipient.user_ref
    }

    if (recipient.phone_number) {
      this.phone_number = recipient.phone_number
      if (recipient.name) {
        this.name = recipient.name
      }
    }
  }
}
