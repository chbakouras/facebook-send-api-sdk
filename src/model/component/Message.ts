import Attachment from './Attachment'
import QuickReply from './QuickReply'

export interface IMessage {
  text?: string
  attachment?: Attachment
  quick_replies?: QuickReply[]
  metadata?: string
}

export default class Message {
  public text: string
  public attachment: Attachment
  public quick_replies: QuickReply[]
  public metadata: string

  constructor(message: IMessage) {
    if (message.text) {
      this.text = message.text
    }

    if (message.attachment) {
      this.attachment = message.attachment
    }

    if (message.quick_replies) {
      this.quick_replies = message.quick_replies
    }

    if (message.metadata) {
      this.metadata = message.metadata
    }
  }
}
