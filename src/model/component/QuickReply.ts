import Constants from '../../Constants'

export default class QuickReply {
  public content_type: string
  public title: string
  public payload: string
  public image_url: string

  constructor(
    content_type: string,
    title: string,
    payload: string,
    image_url: string
  ) {
    this.content_type = content_type

    if (content_type === Constants.QuickReplyContentType.TEXT) {
      this.title = title
      this.payload = payload

      if (image_url) {
        this.image_url = image_url
      }
    }
  }
}
