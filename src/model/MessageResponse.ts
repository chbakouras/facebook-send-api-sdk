export interface IMessageResponse {
  recipient_id: string
  message_id: string
}

export default class MessageResponse {
  public recipient_id: string
  public message_id: string

  constructor(messageResponse: IMessageResponse) {
    this.recipient_id = messageResponse.recipient_id
    this.message_id = messageResponse.message_id
  }
}
