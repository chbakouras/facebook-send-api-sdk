'use strict';

import Button from "./Button";
import {ButtonType} from "../../../constants";

export default class UrlButton extends Button {

    constructor(url: string, title: string, webview_height_ratio: string, messenger_extensions: boolean, fallback_url: string, webview_share_button: string) {
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
