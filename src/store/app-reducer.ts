import { Action, ActionReducer } from '@ngrx/store';

import { AppState } from '../model/app-state';

export const appReducer: ActionReducer<AppState> = (state: AppState = new AppState(), action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

