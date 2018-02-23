import Button from './Button'
import Constants from '../../../Constants'

export interface IGamePlayButton {
  title: string
  payload: string
  playerId: string
  contextId: string
}

export default class GamePlayButton extends Button {
  public title: string
  public payload: string
  public game_metadata: { player_id: string; context_id: string }

  constructor(gamePlayButton: IGamePlayButton) {
    super(Constants.ButtonType.GAME_PLAY)
    this.title = gamePlayButton.title
    this.payload = gamePlayButton.payload

    if (gamePlayButton.playerId && gamePlayButton.contextId) {
      this.game_metadata = {
        player_id: gamePlayButton.playerId,
        context_id: gamePlayButton.contextId
      }
    }
  }
}
