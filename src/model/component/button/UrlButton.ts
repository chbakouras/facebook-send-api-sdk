import Button from './Button'
import Constants from '../../../Constants'

export interface IUrlButton {
  url: string
  title: string
  webview_height_ratio?: string
  messenger_extensions?: boolean
  fallback_url?: string
  webview_share_button?: string
}

export default class UrlButton extends Button {
  public url: string
  public title: string
  public webview_height_ratio: string
  public messenger_extensions: boolean
  public fallback_url: string
  public webview_share_button: string

  constructor(urlButton: IUrlButton) {
    super(Constants.ButtonType.WEB_URL)
    this.url = urlButton.url
    this.title = urlButton.title

    if (urlButton.webview_height_ratio) {
      this.webview_height_ratio = urlButton.webview_height_ratio
    }

    if (urlButton.messenger_extensions) {
      this.messenger_extensions = urlButton.messenger_extensions

      if (urlButton.fallback_url) {
        this.fallback_url = urlButton.fallback_url
      }
    }

    if (urlButton.webview_share_button) {
      this.webview_share_button = urlButton.webview_share_button
    }
  }
}
