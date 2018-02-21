import Constants from '../../../Constants'
import Button from '../button/Button'

export default class MediaElement {
  public media_type: string
  public attachment_id: string
  public url: string
  public buttons: Button[]

  constructor(
    media_type: string,
    attachment_id: string,
    url: string,
    button: Button
  ) {
    if (
      media_type !== Constants.MediaType.IMAGE &&
      media_type !== Constants.MediaType.VIDEO
    )
      throw new Error('Not supported media type')

    this.media_type = media_type

    if (attachment_id) {
      this.attachment_id = attachment_id
    } else if (url) {
      this.url = url
    }

    this.buttons = [button]
  }
}
