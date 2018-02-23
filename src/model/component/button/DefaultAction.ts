import Button from './Button'
import Constants from '../../../Constants'

export interface IDefaultAction {
  url: string
  webview_height_ratio?: string
  messenger_extensions?: boolean
  fallback_url?: string
  webview_share_button?: string
}

export default class DefaultAction extends Button {
  public url: string
  public webview_height_ratio: string
  public messenger_extensions: boolean
  public fallback_url: string
  public webview_share_button: string

  constructor(defaultAction: IDefaultAction) {
    super(Constants.ButtonType.WEB_URL)
    this.url = defaultAction.url

    if (defaultAction.webview_height_ratio) {
      this.webview_height_ratio = defaultAction.webview_height_ratio
    }

    if (defaultAction.messenger_extensions) {
      this.messenger_extensions = defaultAction.messenger_extensions

      if (defaultAction.fallback_url) {
        this.fallback_url = defaultAction.fallback_url
      }
    }

    if (defaultAction.webview_share_button) {
      this.webview_share_button = defaultAction.webview_share_button
    }
  }
}
