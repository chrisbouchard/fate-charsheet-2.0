import { Action, ActionReducer } from '@ngrx/store';

import { UIState } from '../model/ui-state';

import { CLOSE_MODAL, CLOSE_OVERLAY, CLOSE_SIDEBAR, OPEN_MODAL, OPEN_OVERLAY, OPEN_SIDEBAR, TOGGLE_MODAL,
  TOGGLE_OVERLAY, TOGGLE_SIDEBAR } from './ui.actions';

export const uiReducer: ActionReducer<UIState> = (uiState: UIState = new UIState(), action: Action): UIState => {
  switch (action.type) {
    case CLOSE_MODAL:
      return uiState.set('modalOpen', false) as UIState;

    case OPEN_MODAL:
      return uiState.set('modalOpen', true) as UIState;

    case TOGGLE_MODAL:
      return uiState.update('modalOpen', (value: boolean) => !value) as UIState;


    case CLOSE_OVERLAY:
      return uiState.set('overlayOpen', false) as UIState;

    case OPEN_OVERLAY:
      return uiState.set('overlayOpen', true) as UIState;

    case TOGGLE_OVERLAY:
      return uiState.update('overlayOpen', (value: boolean) => !value) as UIState;


    case CLOSE_SIDEBAR:
      return uiState.set('sidebarOpen', false) as UIState;

    case OPEN_SIDEBAR:
      return uiState.set('sidebarOpen', true) as UIState;

    case TOGGLE_SIDEBAR:
      return uiState.update('sidebarOpen', (value: boolean) => !value) as UIState;


    default:
      return uiState;
  }
};


