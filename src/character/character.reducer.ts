import { Action, ActionReducer } from '@ngrx/store';

import { CacheEntry } from '../model/cache-entry';
import { Character } from '../model/character';

import { BEGIN_LOADING_CHARACTER, CACHE_CHARACTER, SELECT_CHARACTER, SET_CHARACTER_STRESS } from './character.actions';
import { CharacterState } from './character.state';

export const characterReducer: ActionReducer<CharacterState> = (state: CharacterState = new CharacterState(), action: Action): CharacterState => {
  switch (action.type) {

    case BEGIN_LOADING_CHARACTER:
      return state.update('cache', cache =>
        cache.set(action.payload.id, new CacheEntry<Character>({
          loading: true
        }))
      );

    case CACHE_CHARACTER:
      return state.update('cache', cache =>
        cache.update(action.payload.id, entry =>
          entry.set('loading', false).set('value', action.payload.character)
        )
      );

    case SELECT_CHARACTER:
      return state.set('currentId', action.payload.id);

    case SET_CHARACTER_STRESS:
      if (!state.currentCharacter()) {
        return state;
      }

      return state.update('cache', cache =>
        cache.update(state.currentId, entry =>
          entry.update('value', character =>
            character.update('stressTracks', tracks =>
              tracks.update(action.payload.track, track =>
                track.update('boxes', boxes =>
                  boxes.set(action.payload.index, action.payload.value)
                )
              )
            ) as Character
          )
        )
      );

    default:
      return state;

  }
};

