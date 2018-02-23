import Constants from '../../Constants'

export interface IQuickReply {
  content_type: string
  title?: string
  payload?: string
  image_url?: string
}

export default class QuickReply {
  public content_type: string
  public title: string
  public payload: string
  public image_url: string

  constructor(quickReply: IQuickReply) {
    this.content_type = quickReply.content_type

    if (quickReply.content_type === Constants.QuickReplyContentType.TEXT) {
      this.title = quickReply.title
      this.payload = quickReply.payload

      if (quickReply.image_url) {
        this.image_url = quickReply.image_url
      }
    }
  }
}
