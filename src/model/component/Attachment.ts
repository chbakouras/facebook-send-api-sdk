export interface IAttachment {
  type: string
  payload: any
}

export default class Attachment {
  public type: string
  public payload: any

  constructor(attachment: IAttachment) {
    this.type = attachment.type
    this.payload = attachment.payload
  }
}
