import Button from '../button/Button'

export interface IOpenGraphElement {
  url: string
  buttons: Button[]
}

export default class OpenGraphElement {
  public url: string
  public buttons: Button[]

  constructor(openGraphElement: IOpenGraphElement) {
    this.url = openGraphElement.url
    this.buttons = openGraphElement.buttons
  }
}
