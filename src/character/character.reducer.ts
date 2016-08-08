import { Action, ActionReducer } from '@ngrx/store';

import { CharacterState } from '../character/character.state';
import { Character } from '../model/character';

import { CACHE_CHARACTER, SELECT_CHARACTER, SET_CHARACTER_STRESS } from './character.actions';

export const characterReducer: ActionReducer<CharacterState> = (state: CharacterState = new CharacterState(), action: Action): CharacterState => {
  switch (action.type) {

    case CACHE_CHARACTER:
      return state.setIn(
        ['cache', action.payload.id],
        action.payload.character
      ) as CharacterState;

    case SELECT_CHARACTER:
      return state.set('currentId', action.payload.id) as CharacterState;

    case SET_CHARACTER_STRESS:
      if (!state.currentCharacter()) {
        return undefined;
      }

      return state.updateIn(
        ['cache', state.currentId],
        character => character.setIn(
          ['stressTracks', action.payload.track, 'boxes', action.payload.index],
          action.payload.value
        )
      ) as CharacterState;

    default:
      return state;

  }
};

