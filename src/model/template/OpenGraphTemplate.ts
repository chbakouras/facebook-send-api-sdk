import Recipient from '../component/Recipient'
import OpenGraphElement from '../component/element/OpenGraphElement'
import Attachment from '../component/Attachment'
import Message from '../component/Message'
import Constants from '../../Constants'

export default class OpenGraphTemplate {
  public messaging_type: string
  public recipient: Recipient
  public message: Message

  constructor(
    recipient: Recipient,
    openGraphElement: OpenGraphElement,
    messaging_type: string
  ) {
    this.messaging_type = messaging_type
      ? messaging_type
      : Constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION
    this.recipient = recipient
    this.message = new Message(
      null,
      new Attachment(Constants.AttachmentType.TEMPLATE, {
        template_type: Constants.TemplateType.OPEN_GRAPH,
        elements: [openGraphElement]
      }),
      null,
      null
    )
  }
}
