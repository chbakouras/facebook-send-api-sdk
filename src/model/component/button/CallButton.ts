import Button from './Button'
import Constants from '../../../Constants'

export default class CallButton extends Button {
  public title: string
  public payload: string

  constructor(title: string, payload: string) {
    super(Constants.ButtonType.PHONE_NUMBER)
    this.title = title
    this.payload = payload
  }
}
