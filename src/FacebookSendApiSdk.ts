import rp from 'request-promise'
import Constants from './Constants'
import MessageResponse from './model/MessageResponse'
import Bluebird from 'bluebird'

export default class FacebookSendApiSdk {
  public apiUrl: string
  public requestOptions: { method: string; json: boolean }

  constructor() {
    this.apiUrl = 'https://graph.facebook.com/v2.11/me/messages?access_token='
    this.requestOptions = {
      method: 'POST',
      json: true
    }
  }

  sendMessage(
    accessToken: string,
    messageRequestOrTemplate: any,
    typing: boolean
  ): Bluebird<MessageResponse> {
    const options = JSON.parse(JSON.stringify(this.requestOptions))
    options.uri = this.apiUrl + accessToken
    options.body = messageRequestOrTemplate

    if (typing) {
      return this.sendTypingIndicator(
        accessToken,
        messageRequestOrTemplate.recipient
      )
        .then(function(resp) {
          return rp(options)
        })
        .then(function(response) {
          return new MessageResponse(response.recipient_id, response.message_id)
        })
    } else {
      return rp(options).then(function(response) {
        return new MessageResponse(response.recipient_id, response.message_id)
      })
    }
  }

  sendTypingIndicator(
    accessToken: string,
    recipient: any
  ): Bluebird<MessageResponse> {
    return this.sendAction(
      accessToken,
      recipient,
      Constants.MessageState.TYPING_ON
    )
  }

  sendAction(accessToken, recipient, sender_action): Bluebird<MessageResponse> {
    const options = JSON.parse(JSON.stringify(this.requestOptions))
    options.uri = this.apiUrl + accessToken
    options.body = {
      recipient: recipient,
      sender_action: sender_action
    }

    return rp(options).then(function(response) {
      return new MessageResponse(response.recipient_id, response.message_id)
    })
  }
}
