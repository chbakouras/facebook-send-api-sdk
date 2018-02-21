import Button from '../button/Button'

export default class OpenGraphElement {
  public url: string
  public buttons: Button[]

  constructor(url: string, buttons: Button[]) {
    this.url = url
    this.buttons = buttons
  }
}
