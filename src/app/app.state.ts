import { Map } from 'immutable';

import { CharacterState, makeCharacterState } from '../character/character.state';
import { UIState } from '../ui/ui.state';

export class AppState {
  characterState: CharacterState;
  uiState: UIState;
}

export const DEFAULT_APP_STATE: AppState = {
  characterState: makeCharacterState(),
  uiState: new UIState()
};

