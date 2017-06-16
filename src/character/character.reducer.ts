import { ActionReducer } from '@ngrx/store';

import { toggle } from '../common/util/sets';
import { CacheEntry } from '../model/cache-entry';
import { Character } from '../model/character';

import { CharacterActionType } from './character.actions';
import { CharacterState } from './character.state';

export const characterReducer: ActionReducer<CharacterState> = (state = new CharacterState(), action) => {
  switch (action.type) {

    case CharacterActionType.BEGIN_LOADING_CHARACTER:
      return state.update('cache', cache =>
        cache.set(action.payload.id, new CacheEntry<Character>({
          loading: true
        }))
      );

    case CharacterActionType.CACHE_CHARACTER:
      return state.update('cache', cache =>
        cache.update(action.payload.id, entry =>
          entry.set('loading', false).set('value', action.payload.character)
        )
      );

    case CharacterActionType.SELECT_CHARACTER:
      return state.set('currentId', action.payload.id).delete('detail');

    case CharacterActionType.SET_CHARACTER_STRESS:
      if (!state.currentCharacter) {
        return state;
      }

      return state.updateCurrentCharacter(character =>
        character.update('stressTracks', tracks =>
          tracks.update(action.payload.track, track =>
            track.update('boxes', boxes =>
              boxes.set(action.payload.index, action.payload.value)
            )
          )
        )
      );


    case CharacterActionType.CLEAR_ASPECTS:
      return state.update('detail', detail => detail.delete('selectedAspects'));

    case CharacterActionType.CLEAR_SKILLS:
      return state.update('detail', detail => detail.delete('selectedSkills'));

    case CharacterActionType.TOGGLE_ASPECT:
      if (!state.currentCharacter || !state.currentCharacter.aspects.contains(action.payload.aspect)) {
        return state;
      }

      return state.update('detail', detail =>
        detail.update('selectedAspects', selectedAspects =>
          toggle(selectedAspects, action.payload.aspect)
        )
      );

    case CharacterActionType.TOGGLE_SKILL:
      if (!state.currentCharacter || !state.currentCharacter.skills.contains(action.payload.skill)) {
        return state;
      }

      return state.update('detail', detail =>
        detail.update('selectedSkills', selectedSkills =>
          toggle(selectedSkills, action.payload.skill)
        )
      );


    default:
      return state;
  }
};

