import * as Immutable from 'immutable';

module UIState {
  export interface Options {
    modalOpen: boolean;
    overlayOpen: boolean;
    sidebarOpen: boolean;
  }
}

export const DEFAULT_UI_STATE: UIState.Options = {
  modalOpen: false,
  overlayOpen: false,
  sidebarOpen: false
};

export class UIState extends Immutable.Record(DEFAULT_UI_STATE) implements UIState.Options {
  readonly modalOpen: boolean;
  readonly overlayOpen: boolean;
  readonly sidebarOpen: boolean;
}

