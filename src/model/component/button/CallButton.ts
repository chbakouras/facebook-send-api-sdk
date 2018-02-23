import Button from './Button'
import Constants from '../../../Constants'

export interface ICallButton {
  title: string
  payload: string
}

export default class CallButton extends Button {
  public title: string
  public payload: string

  constructor(callButton: ICallButton) {
    super(Constants.ButtonType.PHONE_NUMBER)
    this.title = callButton.title
    this.payload = callButton.payload
  }
}
