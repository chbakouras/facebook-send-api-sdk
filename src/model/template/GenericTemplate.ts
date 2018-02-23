import Recipient from '../component/Recipient'
import Constants from '../../Constants'
import FbElement from '../component/element/FbElement'
import Attachment from '../component/Attachment'
import Message from '../component/Message'

export interface IGenericTemplate {
  recipient: Recipient
  elements: FbElement[]
  sharable?: boolean
  image_aspect_ratio?: string
  messaging_type?: string
}

export default class GenericTemplate {
  public messaging_type: string
  public recipient: Recipient
  public message: Message

  constructor(genericTemplate: IGenericTemplate) {
    this.messaging_type = genericTemplate.messaging_type
      ? genericTemplate.messaging_type
      : Constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION
    this.recipient = genericTemplate.recipient
    this.message = new Message({
      attachment: new Attachment({
        type: Constants.AttachmentType.TEMPLATE,
        payload: {
          template_type: Constants.TemplateType.GENERIC,
          sharable: genericTemplate.sharable ? genericTemplate.sharable : false,
          image_aspect_ratio: genericTemplate.image_aspect_ratio
            ? genericTemplate.image_aspect_ratio
            : Constants.ImageAspectRatio.HORIZONTAL,
          elements: genericTemplate.elements
        }
      })
    })
  }
}
