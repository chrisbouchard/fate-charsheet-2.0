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

      let stressTracks = new Map(currentCharacter.stressTracks);
      let stressTrack = Array.from(stressTracks.get(action.payload.track));
      let stressBox = Object.assign({}, stressTrack[action.payload.index]);

      stressBox.marked = stressBox.enabled && action.payload.value;
      stressTrack[action.payload.index] = stressBox;
      stressTracks.set(action.payload.track, stressTrack);

      return Object.assign({}, currentCharacter, { stressTracks });

    default:
      return currentCharacter;
  }
};

