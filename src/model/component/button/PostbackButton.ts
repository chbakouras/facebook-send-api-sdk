import Button from './Button'
import Constants from '../../../Constants'

export default class PostbackButton extends Button {
  public title: string
  public payload: string

  constructor(title: string, payload: string) {
    super(Constants.ButtonType.POSTBACK)
    this.title = title
    this.payload = payload
  }
}
