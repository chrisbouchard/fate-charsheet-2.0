import { Action } from '@ngrx/store';

import { Character } from '../model/character';

export const SELECT_CHARACTER = 'SELECT_CHARACTER';

export function selectCharacter(character: Character): Action {
  return {
    type: SELECT_CHARACTER
  };
}

