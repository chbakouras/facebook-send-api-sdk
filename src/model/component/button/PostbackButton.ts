import Button from './Button'
import Constants from '../../../Constants'

export interface IPostbackButton {
  title: string
  payload: string
}

export default class PostbackButton extends Button {
  public title: string
  public payload: string

  constructor(postbackButton: IPostbackButton) {
    super(Constants.ButtonType.POSTBACK)
    this.title = postbackButton.title
    this.payload = postbackButton.payload
  }
}
