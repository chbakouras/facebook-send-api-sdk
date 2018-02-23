import Recipient from '../component/Recipient'
import FbElement from '../component/element/FbElement'
import Button from '../component/button/Button'
import Constants from '../../Constants'
import Attachment from '../component/Attachment'
import Message from '../component/Message'

export interface IListTemplate {
  recipient: Recipient
  elements: FbElement[]
  button: Button
  top_element_style: string
  messaging_type: string
}

export default class ListTemplate {
  public recipient: Recipient
  public message: Message
  public messaging_type?: string

  constructor(listTemplate: IListTemplate) {
    if (listTemplate.elements.length < 2) throw new Error('Minimum 2 elements')
    if (listTemplate.elements.length > 4) throw new Error('Maximum 4 elements')

    this.messaging_type = listTemplate.messaging_type
      ? listTemplate.messaging_type
      : Constants.MessagingType.NON_PROMOTIONAL_SUBSCRIPTION
    this.recipient = listTemplate.recipient
    this.message = new Message({
      attachment: new Attachment({
        type: Constants.AttachmentType.TEMPLATE,
        payload: {
          template_type: Constants.TemplateType.LIST,
          top_element_style: listTemplate.top_element_style
            ? listTemplate.top_element_style
            : Constants.TopElementStyle.COMPACT,
          buttons: listTemplate.button ? [listTemplate.button] : [],
          elements: listTemplate.elements
        }
      })
    })
  }
}
