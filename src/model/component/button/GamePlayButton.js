'use strict';

import Button from "./Button";
import {ButtonType} from "../../../constants";

export default class GamePlayButton extends Button {

    constructor(title: string, payload: string, playerId: string, contextId: string) {
        super(ButtonType.GAME_PLAY);
        this.title = title;
        this.payload = payload;

        if (playerId && contextId) {
            this.game_metadata = {
                player_id: playerId,
                context_id: contextId
            }
        }
    }
}
