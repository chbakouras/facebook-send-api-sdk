import rp from 'request-promise'
import Constants from './Constants'
import MessageResponse from './model/MessageResponse'
import Recipient from './model/component/Recipient'
import * as Bluebird from 'bluebird'

export default class FacebookSendApiSdk {
  public apiUrl: string
  public requestOptions: { method: string; json: boolean }
  public accessToken?: string

  constructor(accessToken?: string) {
    this.apiUrl = 'https://graph.facebook.com/v2.11/me/messages?access_token='
    this.accessToken = accessToken
    this.requestOptions = {
      method: 'POST',
      json: true
    }
  }

  sendMessage(
    messageRequestOrTemplate: any,
    typing?: boolean,
    accessToken?: string
  ): Bluebird<MessageResponse> {
    const options = JSON.parse(JSON.stringify(this.requestOptions))
    options.uri = this.apiUrl + (accessToken ? accessToken : this.accessToken)
    options.body = messageRequestOrTemplate

    if (typing) {
      return this.sendTypingIndicator(
        messageRequestOrTemplate.recipient,
        accessToken ? accessToken : this.accessToken
      )
        .then(resp => {
          return rp(options)
        })
        .then(response => {
          return new MessageResponse({
            recipient_id: response.recipient_id,
            message_id: response.message_id
          })
        })
    } else {
      return rp(options).then(response => {
        return new MessageResponse({
          recipient_id: response.recipient_id,
          message_id: response.message_id
        })
      })
    }
  }

  sendTypingIndicator(
    recipient: Recipient,
    accessToken?: string
  ): Bluebird<MessageResponse> {
    return this.sendAction(
      recipient,
      Constants.MessageState.TYPING_ON,
      accessToken ? accessToken : this.accessToken
    )
  }

  sendAction(
    recipient: Recipient,
    sender_action: string,
    accessToken: string
  ): Bluebird<MessageResponse> {
    const options = JSON.parse(JSON.stringify(this.requestOptions))
    options.uri = this.apiUrl + (accessToken ? accessToken : this.accessToken)
    options.body = {
      recipient: recipient,
      sender_action: sender_action
    }

    return rp(options).then(response => {
      return new MessageResponse({
        recipient_id: response.recipient_id,
        message_id: response.message_id
      })
    })
  }
}
