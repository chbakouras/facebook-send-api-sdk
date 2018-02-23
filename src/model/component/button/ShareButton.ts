import Button from './Button'
import Constants from '../../../Constants'
import FbElement from '../element/FbElement'

export default class ShareButton extends Button {
  public share_contents: {
    attachment: {
      type: string
      payload: { template_type: string; elements: FbElement[] }
    }
  }

  constructor(element?: FbElement) {
    super(Constants.ButtonType.ELEMENT_SHARE)

    if (element) {
      this.share_contents = {
        attachment: {
          type: Constants.AttachmentType.TEMPLATE,
          payload: {
            template_type: Constants.TemplateType.GENERIC,
            elements: [element]
          }
        }
      }
    }
  }
}
