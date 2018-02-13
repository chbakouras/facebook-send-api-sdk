'use strict';

const rp = require('request-promise');
const messageResponse = require('./model/MessageResponse');
const constants = require('./constants');

const SendApiSdk = (function () {

    var apiUrl;
    var requestOptions;

    function SendApiSdk(accessToken) {
        apiUrl = 'https://graph.facebook.com/v2.11/me/messages?access_token=' + accessToken;
        requestOptions = {
            method: 'POST',
            uri: apiUrl,
            json: true
        };
    }

    SendApiSdk.prototype.sendMessage = function (messageRequestOrTemplate, typing) {
        const options = JSON.parse(JSON.stringify(requestOptions));
        options.body = messageRequestOrTemplate;

        if (typing) {
            return this.sendTypingIndicator(messageRequestOrTemplate.recipient)
                .then(function (resp) {
                    return rp(options);
                })
                .then(function (response) {
                    return messageResponse(response.recipient_id, response.message_id);
                })
                .catch(function (error) {
                    console.log(error)
                })
        } else {
            return rp(options)
                .then(function (response) {
                    return messageResponse(response.recipient_id, response.message_id)
                })
                .catch(function (error) {
                    console.log(error)
                });
        }
    };

    SendApiSdk.prototype.sendTypingIndicator = function (recipient) {
        return SendApiSdk.prototype.sendAction(recipient, constants.MessageState.TYPING_ON);
    };


    SendApiSdk.prototype.sendAction = function (recipient, sender_action) {
        const options = JSON.parse(JSON.stringify(requestOptions));
        options.body = {
            recipient: recipient,
            sender_action: sender_action
        };

        return rp(options)
            .then(function (response) {
                return messageResponse(response.recipient_id, response.message_id);
            })
            .catch(function (reason) {
                console.log(reason)
            });
    };

    return SendApiSdk;
}());

module.exports = SendApiSdk;
