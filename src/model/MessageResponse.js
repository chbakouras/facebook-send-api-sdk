'use strict';

class MessageResponse {

    constructor({recipient_id, message_id}) {
        this.recipient_id = recipient_id;
        this.message_id = message_id;
    }
}

export default MessageResponse;
