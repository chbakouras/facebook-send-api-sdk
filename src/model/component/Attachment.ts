export default class Attachment {
  public type: string
  public payload: any

  constructor(type: string, payload: any) {
    this.type = type
    this.payload = payload
  }
}
