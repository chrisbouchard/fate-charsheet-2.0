import { CharacterState } from '../character/character.state';
import { UIState } from '../ui/ui.state';

export interface AppState {
  characterState: CharacterState;
  uiState: UIState;
}

export const DEFAULT_APP_STATE: AppState = {
  characterState: new CharacterState(),
  uiState: new UIState()
};
