import { ActionReducer } from '@ngrx/store';

import { UIState } from './ui.state';

import { UIActionType } from './ui.actions';

export const uiReducer: ActionReducer<UIState> = (uiState = new UIState(), action) => {
  switch (action.type) {
    case UIActionType.CLOSE_MODAL:
      return uiState.set('modalOpen', false);

    case UIActionType.OPEN_MODAL:
      return uiState.set('modalOpen', true);

    case UIActionType.TOGGLE_MODAL:
      return uiState.update('modalOpen', (value: boolean) => !value);


    case UIActionType.CLOSE_OVERLAY:
      return uiState.set('overlayOpen', false);

    case UIActionType.OPEN_OVERLAY:
      return uiState.set('overlayOpen', true);

    case UIActionType.TOGGLE_OVERLAY:
      return uiState.update('overlayOpen', (value: boolean) => !value);


    case UIActionType.CLOSE_SIDEBAR:
      return uiState.set('sidebarOpen', false);

    case UIActionType.OPEN_SIDEBAR:
      return uiState.set('sidebarOpen', true);

    case UIActionType.TOGGLE_SIDEBAR:
      return uiState.update('sidebarOpen', (value: boolean) => !value);


    default:
      return uiState;
  }
};


