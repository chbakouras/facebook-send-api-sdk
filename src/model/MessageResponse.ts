export default class MessageResponse {
  public recipient_id: string
  public message_id: string

  constructor(recipient_id: string, message_id: string) {
    this.recipient_id = recipient_id
    this.message_id = message_id
  }
}
