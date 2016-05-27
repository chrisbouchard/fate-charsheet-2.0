import { Action, Reducer } from '@ngrx/store';

import { AppState } from '../model/app-state';
import { Character } from '../model/character';
import { StressBox, StressTrack } from '../model/stress-track';

import { SELECT_CHARACTER, SET_CHARACTER_STRESS } from './app-actions';

export const appReducer: Reducer<AppState> = (state: AppState = new AppState(), action: any) => {
  switch (action.type) {
    case SELECT_CHARACTER:
      return state.set('currentCharacter', action.character);

    case SET_CHARACTER_STRESS:
      if (!state.currentCharacter) {
        return state;
      }

      return state.updateIn(
        ['currentCharacter', 'stressTracks', action.track, action.index],
        (box: StressBox) => ({
          enabled: box.enabled,
          marked: box.enabled && action.value
        })
      );

    default:
      return state;
  }
};

