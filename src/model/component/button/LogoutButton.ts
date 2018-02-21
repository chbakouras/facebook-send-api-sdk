import Button from './Button'
import Constants from '../../../Constants'

export default class LogoutButton extends Button {
  constructor() {
    super(Constants.ButtonType.ACCOUNT_UNLINK)
  }
}
