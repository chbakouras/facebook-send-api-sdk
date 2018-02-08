'use strict';
import Button from "./Button";
import {ButtonType} from "../../../constants";

class UrlButton extends Button {

    constructor({url, title, webview_height_ratio, messenger_extensions, fallback_url, webview_share_button}) {
        super(ButtonType.WEB_URL);
        this.url = url;
        this.title = title;

        if (webview_height_ratio) {
            this.webview_height_ratio = webview_height_ratio;
        }

        if (messenger_extensions) {
            this.messenger_extensions = messenger_extensions;

            if (fallback_url) {
                this.fallback_url = fallback_url;
            }
        }

        if (webview_share_button) {
            this.webview_share_button = webview_share_button;
        }
    }
}

export default UrlButton;
