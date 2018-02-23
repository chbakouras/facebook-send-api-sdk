import Recipient from '../component/Recipient'
import MediaElement from '../component/element/MediaElement'
import Constants from '../../Constants'
import Attachment from '../component/Attachment'
import Message from '../component/Message'

export interface IMediaTemplate {
  recipient: Recipient
  mediaElement: MediaElement
  messaging_type?: string
}

export default class MediaTemplate {
  public messaging_type: string
  public recipient: Recipient
  public message: Message

  constructor(mediaTemplate: IMediaTemplate) {
    this.messaging_type = mediaTemplate.messaging_type
      ? mediaTemplate.messaging_type
      : Constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION
    this.recipient = mediaTemplate.recipient
    this.message = new Message({
      attachment: new Attachment({
        type: Constants.AttachmentType.TEMPLATE,
        payload: {
          template_type: Constants.TemplateType.MEDIA,
          elements: [mediaTemplate.mediaElement]
        }
      })
    })
  }
}
