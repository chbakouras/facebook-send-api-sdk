'use strict';

import Attachment from "./Attachment";
import QuickReply from "./QuickReply";

export default class Message {

    constructor(text: string, attachment: Attachment, quick_replies: QuickReply[], metadata: string) {
        if (!text && !attachment) throw new Error("Message text or attachment must be included");

        if (text) {
            this.text = text;
        }

        if (attachment) {
            this.attachment = attachment;
        }

        if (quick_replies) {
            if (quick_replies.length > 11) throw new Error("Facebook renders up to 11 quick replies");
            this.quick_replies = quick_replies;
        }

        if (metadata) {
            this.metadata = metadata;
        }
    }
}
