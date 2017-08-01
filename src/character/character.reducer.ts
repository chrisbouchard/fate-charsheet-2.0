import { toggle } from '../common/util/sets';
import { CacheEntry } from '../model/cache-entry';
import { Character } from '../model/character';

import { CharacterAction, CharacterActionType } from './character.actions';
import { CharacterState } from './character.state';

export function characterReducer(state: CharacterState = new CharacterState(), action: CharacterAction): CharacterState {
    switch (action.type) {

        // TODO: Remove old characters from the cache eventually.
        case CharacterActionType.CLOSE_CHARACTER:
            if (state.activeId === action.id) {
                const firstId = state.inactiveIds.first();

                /* Pick another to become active. */
                // TODO: Pick better
                // TODO: Handle closing the last character
                return state
                    .set('activeId', firstId)
                    .update('inactiveIds', inactiveIds => inactiveIds.delete(firstId))
                    .delete('detail');
            }

            return state.update('inactiveIds', inactiveIds => inactiveIds.delete(action.id));

        case CharacterActionType.OPEN_CHARACTER:
            if (state.activeId === action.id) {
                return state;
            }

            return state.update('inactiveIds', inactiveIds => inactiveIds.add(action.id));

        case CharacterActionType.SELECT_CHARACTER:
            if (state.activeId === action.id) {
                return state;
            }

            return state
                .update('inactiveIds', inactiveIds =>
                    inactiveIds
                        /* What was active becomes inactive. */
                        .add(state.activeId)
                        /* If the selected character was inactive, it's not anymore. */
                        .delete(action.id)
                )
                .set('activeId', action.id)
                .delete('detail');

        case CharacterActionType.SET_CHARACTER_STRESS:
            if (!state.activeCharacter) {
                return state;
            }

            return state.updateActiveCharacter(character =>
                character.update('stressTracks', tracks =>
                    tracks.update(action.track, track =>
                        track.update('boxes', boxes =>
                            boxes.set(action.index, action.value)
                        )
                    )
                )
            );


        case CharacterActionType.CHARACTER_LOADING_STARTED:
            return state.update('cache', cache =>
                cache.set(action.id, new CacheEntry<Character>({
                    loading: true
                }))
            );

        case CharacterActionType.CHARACTER_LOADING_SUCCESS:
            return state.update('cache', cache =>
                cache.update(action.id, entry =>
                    entry.set('loading', false).set('value', action.character)
                )
            );

        case CharacterActionType.CHARACTER_LOADING_FAILURE:
            return state.update('cache', cache =>
                cache.update(action.id, entry =>
                    entry.set('loading', false).set('error', action.error)
                )
            );


        case CharacterActionType.CLEAR_ASPECTS:
            return state.update('detail', detail => detail.delete('selectedAspects'));

        case CharacterActionType.CLEAR_SKILLS:
            return state.update('detail', detail => detail.delete('selectedSkills'));

        case CharacterActionType.TOGGLE_ASPECT:
            if (!state.activeCharacter || !state.activeCharacter.aspects.contains(action.aspect)) {
                return state;
            }

            return state.update('detail', detail =>
                detail.update('selectedAspects', selectedAspects =>
                    toggle(selectedAspects, action.aspect)
                )
            );

        case CharacterActionType.TOGGLE_SKILL:
            if (!state.activeCharacter || !state.activeCharacter.skills.contains(action.skill)) {
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
