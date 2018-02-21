import Constants from '../Constants'
import Recipient from './component/Recipient'
import Message from './component/Message'

export default class MessageRequest {
  public recipient: Recipient
  public sender_action: string
  public message: Message
  public messaging_type: string
  public notification_type: string
  public tag: string

  constructor(
    recipient: Recipient,
    message: Message,
    messaging_type: string,
    notification_type: string,
    tag: string,
    sender_action: string
  ) {
    this.recipient = recipient

    if (sender_action) {
      this.sender_action = sender_action
    } else {
      this.message = message
      this.messaging_type = messaging_type
        ? messaging_type
        : Constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION
      this.notification_type = notification_type
        ? notification_type
        : Constants.NotificationType.REGULAR

      if (tag) {
        this.tag = tag
      }
    }
  }
}
