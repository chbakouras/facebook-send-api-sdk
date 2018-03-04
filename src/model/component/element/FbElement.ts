import Button from '../button/Button'
import DefaultAction from '../button/DefaultAction'

export interface IFbElement {
  title: string
  subtitle?: string
  image_url?: string
  default_action?: DefaultAction
  buttons?: Button[]
}

export default class FbElement {
  public title: string
  public subtitle: string
  public image_url: string
  public default_action: DefaultAction
  public buttons: Button[]

  constructor(fbElement: IFbElement) {
    this.title = fbElement.title
    this.subtitle = fbElement.subtitle
    this.image_url = fbElement.image_url
    this.default_action = fbElement.default_action
    this.buttons = fbElement.buttons
  }
}
