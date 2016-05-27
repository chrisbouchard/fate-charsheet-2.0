import { Record } from 'immutable';

import { Character } from './character';

export module AppState {
  export interface Options {
    currentCharacter: Character;
  }
}

export const DEFAULT_APP_STATE: AppState.Options = {
  currentCharacter: undefined
};

export class AppState extends Record(DEFAULT_APP_STATE) implements AppState.Options {
  currentCharacter: Character;
}

