import { Action, ActionReducer } from '@ngrx/store';

import { Character } from '../model/character';

import { SET_CHARACTER, SET_CHARACTER_STRESS } from './character.actions';

export const characterReducer: ActionReducer<Character> = (currentCharacter: Character = undefined, action: any) => {
  switch (action.type) {
    case SET_CHARACTER:
      return action.payload.character;

    case SET_CHARACTER_STRESS:
      if (!currentCharacter) {
        return undefined;
      }

      return currentCharacter.setIn(
        ['stressTracks', action.payload.track, action.payload.index],
        action.payload.value
      );

    default:
      return currentCharacter;
  }
};

