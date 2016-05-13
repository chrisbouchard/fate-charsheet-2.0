import { Action, Reducer } from '@ngrx/store';

import { AppState } from '../model/app-state';
import { Character } from '../model/character';

import { SELECT_CHARACTER, SET_CHARACTER_STRESS } from './app-actions';

export const appReducer: Reducer<AppState> = (state: AppState = new AppState(), action: any) => {
  switch (action.type) {
    case SELECT_CHARACTER:
      return Object.assign({}, state, { currentCharacter: action.character });

    case SET_CHARACTER_STRESS:
      if (!state.currentCharacter) {
        return state;
      }

      let stressTracks = new Map(state.currentCharacter.stressTracks);
      let stressTrack = Array.from(stressTracks.get(action.track));
      let stressBox = Object.assign({}, stressTrack[action.index]);

      stressBox.marked = stressBox.enabled && action.value;
      stressTrack[action.index] = stressBox;
      stressTracks.set(action.track, stressTrack);

      let currentCharacter = Object.assign({}, state.currentCharacter, { stressTracks });
      return Object.assign({}, state, { currentCharacter });

    default:
      return state;
  }
};

