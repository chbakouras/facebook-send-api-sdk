import Recipient from '../component/Recipient'
import OpenGraphElement from '../component/element/OpenGraphElement'
import Attachment from '../component/Attachment'
import Message from '../component/Message'
import Constants from '../../Constants'

export interface IOpenGraphTemplate {
  recipient: Recipient
  openGraphElement: OpenGraphElement
  messaging_type?: string
}

export default class OpenGraphTemplate {
  public messaging_type: string
  public recipient: Recipient
  public message: Message

  constructor(openGraphTemplate: IOpenGraphTemplate) {
    this.messaging_type = openGraphTemplate.messaging_type
      ? openGraphTemplate.messaging_type
      : Constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION
    this.recipient = openGraphTemplate.recipient
    this.message = new Message({
      attachment: new Attachment({
        type: Constants.AttachmentType.TEMPLATE,
        payload: {
          template_type: Constants.TemplateType.OPEN_GRAPH,
          elements: [openGraphTemplate.openGraphElement]
        }
      })
    })
  }
}
