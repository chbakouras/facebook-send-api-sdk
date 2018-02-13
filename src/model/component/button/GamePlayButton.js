'use strict';

const constants = require('../../../constants');

const gamePlayButton = function (title, payload, playerId, contextId) {
    const gamePlayButtonObj = {};

    gamePlayButtonObj.type = constants.ButtonType.GAME_PLAY;
    gamePlayButtonObj.title = title;
    gamePlayButtonObj.payload = payload;

    if (playerId && contextId) {
        gamePlayButtonObj.game_metadata = {
            player_id: playerId,
            context_id: contextId
        }
    }

    return gamePlayButtonObj;
};

module.exports = gamePlayButton;
