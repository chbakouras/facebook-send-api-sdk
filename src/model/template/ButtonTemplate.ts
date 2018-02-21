import Constants from '../../Constants'
import Message from '../component/Message'
import Attachment from '../component/Attachment'
import Recipient from '../component/Recipient'
import Button from '../component/button/Button'

export default class ButtonTemplate {
  public messaging_type: string
  public recipient: Recipient
  public message: Message

  constructor(
    recipient: Recipient,
    text: string,
    buttons: Button[],
    messaging_type: string
  ) {
    if (buttons.length > 3) throw new Error('Max 3 buttons')

    this.messaging_type = messaging_type
      ? messaging_type
      : Constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION
    this.recipient = recipient
    this.message = new Message(
      null,
      new Attachment(Constants.AttachmentType.TEMPLATE, {
        template_type: Constants.TemplateType.BUTTON,
        text: text,
        buttons: buttons
      }),
      null,
      null
    )
  }
}
