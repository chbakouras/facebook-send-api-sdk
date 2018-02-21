'use strict'

import Button from '../button/Button'
import DefaultAction from '../button/DefaultAction'

export default class FbElement {
  public title: string
  public subtitle: string
  public image_url: string
  public default_action: any
  public buttons: Button[]

  constructor(
    title: string,
    subtitle: string,
    image_url: string,
    default_action: DefaultAction,
    buttons: Button[]
  ) {
    this.title = title
    this.subtitle = subtitle
    this.image_url = image_url
    this.default_action = default_action
    this.buttons = buttons
  }
}
