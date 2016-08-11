import { Map } from 'immutable';

import { CharacterState } from '../character/character.state';
import { UIState } from '../ui/ui.state';

export class AppState {
  characterState: CharacterState;
  uiState: UIState;
}

