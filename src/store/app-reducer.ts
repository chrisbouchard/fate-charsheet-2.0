import { Action, Reducer } from '@ngrx/store';

import { AppState } from '../model/app-state';
import { Character } from '../model/character';

import { SELECT_CHARACTER } from './app-actions';

export const appReducer: Reducer<AppState> = (state: AppState = new AppState(), action: Action) => {
  switch (action.type) {
    case SELECT_CHARACTER:
      return state;

    default:
      return state;
  }
};

