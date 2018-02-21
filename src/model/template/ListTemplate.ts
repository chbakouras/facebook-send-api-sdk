import Recipient from '../component/Recipient'
import FbElement from '../component/element/FbElement'
import Button from '../component/button/Button'
import Constants from '../../Constants'
import Attachment from '../component/Attachment'
import Message from '../component/Message'

export default class ListTemplate {
  public messaging_type: string
  public recipient: Recipient
  public message: Message

  constructor(
    recipient: Recipient,
    elements: FbElement[],
    button: Button,
    top_element_style: string,
    messaging_type: string
  ) {
    if (elements.length < 2) throw new Error('Minimum 2 elements')
    if (elements.length > 4) throw new Error('Maximum 4 elements')

    this.messaging_type = messaging_type
      ? messaging_type
      : Constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION
    this.recipient = recipient
    this.message = new Message(
      null,
      new Attachment(Constants.AttachmentType.TEMPLATE, {
        template_type: Constants.TemplateType.LIST,
        top_element_style: top_element_style
          ? top_element_style
          : Constants.TopElementStyle.COMPACT,
        buttons: button ? [button] : [],
        elements: elements
      }),
      null,
      null
    )
  }
}
