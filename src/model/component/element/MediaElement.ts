import Constants from '../../../Constants'
import Button from '../button/Button'

export interface IMediaElement {
  media_type: string
  attachment_id?: string
  url?: string
  button: Button
}

export default class MediaElement {
  public media_type: string
  public attachment_id: string
  public url: string
  public buttons: Button[]

  constructor(mediaElement: IMediaElement) {
    this.media_type = mediaElement.media_type

    if (mediaElement.attachment_id) {
      this.attachment_id = mediaElement.attachment_id
    } else if (mediaElement.url) {
      this.url = mediaElement.url
    }

    this.buttons = [mediaElement.button]
  }
}
