import { Action, ActionReducer } from '@ngrx/store';

import { CharacterState, makeCharacterState } from '../character/character.state';
import { CacheEntry } from '../model/cache-entry';
import { Character } from '../model/character';

import { BEGIN_LOADING_CHARACTER, CACHE_CHARACTER, SELECT_CHARACTER, SET_CHARACTER_STRESS } from './character.actions';

export const characterReducer: ActionReducer<CharacterState> = (state: CharacterState = makeCharacterState(), action: Action): CharacterState => {
  switch (action.type) {

    case BEGIN_LOADING_CHARACTER:
      return state.updateIn(
        ['cache', action.payload.id],
        new CacheEntry<Character>(),
        entry => entry.set('loading', true)
      );

    case CACHE_CHARACTER:
      return state.updateIn(
        ['cache', action.payload.id],
        new CacheEntry<Character>(),
        entry => entry.set('loading', false).set('value', action.payload.character)
      );

    case SELECT_CHARACTER:
      return state.set('currentId', action.payload.id);

    case SET_CHARACTER_STRESS:
      if (!state.currentCharacter()) {
        return state;
      }

      return state.setIn(
        ['cache', state.currentId, 'value', 'stressTracks', action.payload.track, 'boxes', action.payload.index],
        action.payload.value
      );

    default:
      return state;

  }
};

