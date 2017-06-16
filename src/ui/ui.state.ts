import { MakeTypedRecord } from '../common/typed-record';

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

export class UIState extends MakeTypedRecord(DEFAULT_UI_STATE) {
}
