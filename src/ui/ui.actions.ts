import { Action } from '@ngrx/store';

export enum UIActionType {
    CLOSE_MODAL = 'CLOSE_MODAL',
    OPEN_MODAL = 'OPEN_MODAL',
    TOGGLE_MODAL = 'TOGGLE_MODAL',

    CLOSE_OVERLAY = 'CLOSE_OVERLAY',
    OPEN_OVERLAY = 'OPEN_OVERLAY',
    TOGGLE_OVERLAY = 'TOGGLE_OVERLAY',

    CLOSE_SIDEBAR = 'CLOSE_SIDEBAR',
    OPEN_SIDEBAR = 'OPEN_SIDEBAR',
    TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
}


export class CloseModalAction implements Action {
    readonly type = UIActionType.CLOSE_MODAL;
}

export class OpenModalAction implements Action {
    readonly type = UIActionType.OPEN_MODAL;
}

export class ToggleModalAction implements Action {
    readonly type = UIActionType.TOGGLE_MODAL;
}


export class CloseOverlayAction implements Action {
    readonly type = UIActionType.CLOSE_OVERLAY;
}

export class OpenOverlayAction implements Action {
    readonly type = UIActionType.OPEN_OVERLAY;
}

export class ToggleOverlayAction implements Action {
    readonly type = UIActionType.TOGGLE_OVERLAY;
}


export class CloseSidebarAction implements Action {
    readonly type = UIActionType.CLOSE_SIDEBAR;
}

export class OpenSidebarAction implements Action {
    readonly type = UIActionType.OPEN_SIDEBAR;
}

export class ToggleSidebarAction implements Action {
    readonly type = UIActionType.TOGGLE_SIDEBAR;
}


export type UIAction
    = CloseModalAction
    | OpenModalAction
    | ToggleModalAction
    | CloseOverlayAction
    | OpenOverlayAction
    | ToggleOverlayAction
    | CloseSidebarAction
    | OpenSidebarAction
    | ToggleSidebarAction;
