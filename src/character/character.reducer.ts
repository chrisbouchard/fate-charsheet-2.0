import { toggle } from '../common/util/sets';
import { CacheEntry } from '../model/cache-entry';
import { Character } from '../model/character';

import { CharacterAction, CharacterActionType } from './character.actions';
import { CharacterState } from './character.state';

export function characterReducer(state: CharacterState = new CharacterState(), action: CharacterAction): CharacterState {
    switch (action.type) {

        case CharacterActionType.BEGIN_LOADING_CHARACTER:
            return state.update('cache', cache =>
                cache.set(action.id, new CacheEntry<Character>({
                    loading: true
                }))
            );

        case CharacterActionType.CACHE_CHARACTER:
            return state.update('cache', cache =>
                cache.update(action.id, entry =>
                    entry.set('loading', false).set('value', action.character)
                )
            );

        case CharacterActionType.ERROR_LOADING_CHARACTER:
            return state
                .set('error', action.error)
                .delete('currentId');

        case CharacterActionType.SELECT_CHARACTER:
            return state
                .set('currentId', action.id)
                .delete('detail')
                .delete('error');

        case CharacterActionType.SET_CHARACTER_STRESS:
            if (!state.currentCharacter) {
                return state;
            }

            return state.updateCurrentCharacter(character =>
                character.update('stressTracks', tracks =>
                    tracks.update(action.track, track =>
                        track.update('boxes', boxes =>
                            boxes.set(action.index, action.value)
                        )
                    )
                )
            );


        case CharacterActionType.CLEAR_ASPECTS:
            return state.update('detail', detail => detail.delete('selectedAspects'));

        case CharacterActionType.CLEAR_SKILLS:
            return state.update('detail', detail => detail.delete('selectedSkills'));

        case CharacterActionType.TOGGLE_ASPECT:
            if (!state.currentCharacter || !state.currentCharacter.aspects.contains(action.aspect)) {
                return state;
            }

            return state.update('detail', detail =>
                detail.update('selectedAspects', selectedAspects =>
                    toggle(selectedAspects, action.aspect)
                )
            );

        case CharacterActionType.TOGGLE_SKILL:
            if (!state.currentCharacter || !state.currentCharacter.skills.contains(action.skill)) {
                return state;
            }

            return state.update('detail', detail =>
                detail.update('selectedSkills', selectedSkills =>
                    toggle(selectedSkills, action.skill)
                )
            );


        default:
            return state;

    }
}
