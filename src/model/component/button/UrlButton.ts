import Button from './Button'
import Constants from '../../../Constants'

export default class UrlButton extends Button {
  public url: string
  public title: string
  public webview_height_ratio: string
  public messenger_extensions: boolean
  public fallback_url: string
  public webview_share_button: string

  constructor(
    url: string,
    title: string,
    webview_height_ratio: string,
    messenger_extensions: boolean,
    fallback_url: string,
    webview_share_button: string
  ) {
    super(Constants.ButtonType.WEB_URL)
    this.url = url
    this.title = title

    if (webview_height_ratio) {
      this.webview_height_ratio = webview_height_ratio
    }

    if (messenger_extensions) {
      this.messenger_extensions = messenger_extensions

      if (fallback_url) {
        this.fallback_url = fallback_url
      }
    }

    if (webview_share_button) {
      this.webview_share_button = webview_share_button
    }
  }
}
