import Button from './Button'
import Constants from '../../../Constants'

export default class LoginButton extends Button {
  public url: string

  constructor(url: string) {
    super(Constants.ButtonType.ACCOUNT_LINK)
    this.url = url
  }
}
