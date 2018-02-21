import Recipient from '../component/Recipient'
import MediaElement from '../component/element/MediaElement'
import Constants from '../../Constants'
import Attachment from '../component/Attachment'
import Message from '../component/Message'

export default class MediaTemplate {
  public messaging_type: string
  public recipient: Recipient
  public message: Message

  constructor(
    recipient: Recipient,
    mediaElement: MediaElement,
    messaging_type: string
  ) {
    this.messaging_type = messaging_type
      ? messaging_type
      : Constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION
    this.recipient = recipient
    this.message = new Message(
      null,
      new Attachment(Constants.AttachmentType.TEMPLATE, {
        template_type: Constants.TemplateType.MEDIA,
        elements: [mediaElement]
      }),
      null,
      null
    )
  }
}
