'use strict';

const rp = require('request-promise');
const messageResponse = require('./model/MessageResponse');
const constants = require('./constants');

const SendApiSdk = (function () {

    var apiUrl;
    var requestOptions;

    function SendApiSdk() {
        apiUrl = 'https://graph.facebook.com/v2.11/me/messages?access_token=';
        requestOptions = {
            method: 'POST',
            json: true
        };
    }

    SendApiSdk.prototype.sendMessage = function (accessToken, messageRequestOrTemplate, typing) {
        const options = JSON.parse(JSON.stringify(requestOptions));
        options.uri = apiUrl + accessToken;
        options.body = messageRequestOrTemplate;

        if (typing) {
            return this.sendTypingIndicator(messageRequestOrTemplate.recipient)
                .then(function (resp) {
                    return rp(options);
                })
                .then(function (response) {
                    return messageResponse(response.recipient_id, response.message_id);
                });
        } else {
            return rp(options)
                .then(function (response) {
                    return messageResponse(response.recipient_id, response.message_id)
                });
        }
    };

    SendApiSdk.prototype.sendTypingIndicator = function (accessToken, recipient) {
        return SendApiSdk.prototype.sendAction(accessToken, recipient, constants.MessageState.TYPING_ON);
    };


    SendApiSdk.prototype.sendAction = function (accessToken, recipient, sender_action) {
        const options = JSON.parse(JSON.stringify(requestOptions));
        options.uri = apiUrl + accessToken;
        options.body = {
            recipient: recipient,
            sender_action: sender_action
        };

        return rp(options)
            .then(function (response) {
                return messageResponse(response.recipient_id, response.message_id);
            });
    };

    return SendApiSdk;
}());

module.exports = SendApiSdk;
