'use strict';
import Button from "./Button";
import {ButtonType} from "../../../constants";

class GamePlayButton extends Button {

    constructor({title, payload, playerId, contextId}) {
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

export default GamePlayButton;
