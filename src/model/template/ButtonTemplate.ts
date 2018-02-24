import Constants from '../../Constants'
import Message from '../component/Message'
import Attachment from '../component/Attachment'
import Recipient from '../component/Recipient'
import Button from '../component/button/Button'

export interface IButtonTemplate {
  recipient: Recipient
  text: string
  buttons: Button[]
  messaging_type?: string
}

export default class ButtonTemplate {
  public messaging_type: string
  public recipient: Recipient
  public message: Message

  constructor(buttonTemplate: IButtonTemplate) {
    this.messaging_type = buttonTemplate.messaging_type
      ? buttonTemplate.messaging_type
      : Constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION
    this.recipient = buttonTemplate.recipient
    this.message = new Message({
      attachment: new Attachment({
        type: Constants.AttachmentType.TEMPLATE,
        payload: {
          template_type: Constants.TemplateType.BUTTON,
          text: buttonTemplate.text,
          buttons: buttonTemplate.buttons
        }
      })
    })
  }
}
