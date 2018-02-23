import Constants from '../Constants'
import Recipient from './component/Recipient'
import Message from './component/Message'

export interface IMessageRequest {
  recipient: Recipient
  message?: Message
  messaging_type?: string
  notification_type?: string
  tag?: string
  sender_action?: string
}

export default class MessageRequest {
  public recipient: Recipient
  public sender_action: string
  public message: Message
  public messaging_type: string
  public notification_type: string
  public tag: string

  constructor(messageRequest: IMessageRequest) {
    this.recipient = messageRequest.recipient

    if (messageRequest.sender_action) {
      this.sender_action = messageRequest.sender_action
    } else {
      this.message = messageRequest.message
      this.messaging_type = messageRequest.messaging_type
        ? messageRequest.messaging_type
        : Constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION
      this.notification_type = messageRequest.notification_type
        ? messageRequest.notification_type
        : Constants.NotificationType.REGULAR

      if (messageRequest.tag) {
        this.tag = messageRequest.tag
      }
    }
  }
}
