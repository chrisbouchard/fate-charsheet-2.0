import { Action, ActionReducer } from '@ngrx/store';

import { UIState } from './ui.state';

import { CLOSE_MODAL, CLOSE_OVERLAY, CLOSE_SIDEBAR, OPEN_MODAL, OPEN_OVERLAY, OPEN_SIDEBAR, TOGGLE_MODAL,
  TOGGLE_OVERLAY, TOGGLE_SIDEBAR } from './ui.actions';

export const uiReducer: ActionReducer<UIState> = (uiState: UIState = new UIState(), action: Action): UIState => {
  switch (action.type) {
    case CLOSE_MODAL:
      return uiState.set('modalOpen', false);

    case OPEN_MODAL:
      return uiState.set('modalOpen', true);

    case TOGGLE_MODAL:
      return uiState.update('modalOpen', (value: boolean) => !value);


    case CLOSE_OVERLAY:
      return uiState.set('overlayOpen', false);

    case OPEN_OVERLAY:
      return uiState.set('overlayOpen', true);

    case TOGGLE_OVERLAY:
      return uiState.update('overlayOpen', (value: boolean) => !value);


    case CLOSE_SIDEBAR:
      return uiState.set('sidebarOpen', false);

    case OPEN_SIDEBAR:
      return uiState.set('sidebarOpen', true);

    case TOGGLE_SIDEBAR:
      return uiState.update('sidebarOpen', (value: boolean) => !value);


    default:
      return uiState;
  }
};


