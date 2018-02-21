import Button from './Button'
import Constants from '../../../Constants'

export default class GamePlayButton extends Button {
  public title: string
  public payload: string
  public game_metadata: { player_id: string; context_id: string }

  constructor(
    title: string,
    payload: string,
    playerId: string,
    contextId: string
  ) {
    super(Constants.ButtonType.GAME_PLAY)
    this.title = title
    this.payload = payload

    if (playerId && contextId) {
      this.game_metadata = {
        player_id: playerId,
        context_id: contextId
      }
    }
  }
}
