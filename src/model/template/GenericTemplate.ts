import Recipient from '../component/Recipient'
import Constants from '../../Constants'
import FbElement from '../component/element/FbElement'
import Attachment from '../component/Attachment'
import Message from '../component/Message'

export default class GenericTemplate {
  public messaging_type: string
  public recipient: Recipient
  public message: Message

  constructor(
    recipient: Recipient,
    elements: FbElement[],
    sharable: boolean,
    image_aspect_ratio: string,
    messaging_type: string
  ) {
    this.messaging_type = messaging_type
      ? messaging_type
      : Constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION
    this.recipient = recipient
    this.message = new Message(
      null,
      new Attachment(Constants.AttachmentType.TEMPLATE, {
        template_type: Constants.TemplateType.GENERIC,
        sharable: sharable ? sharable : false,
        image_aspect_ratio: image_aspect_ratio
          ? image_aspect_ratio
          : Constants.ImageAspectRatio.HORIZONTAL,
        elements: elements
      }),
      null,
      null
    )
  }
}
