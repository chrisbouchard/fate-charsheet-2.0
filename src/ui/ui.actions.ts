import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

import { UIState } from '../model/ui-state';

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const CLOSE_OVERLAY = 'CLOSE_OVERLAY';
export const OPEN_OVERLAY = 'OPEN_OVERLAY';
export const TOGGLE_OVERLAY = 'TOGGLE_OVERLAY';

export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';
export const OPEN_SIDEBAR = 'OPEN_SIDEBAR';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

@Injectable()
export class UIActions {

  closeModal(): Action {
    return { type: CLOSE_MODAL };
  }

  openModal(): Action {
    return { type: OPEN_MODAL };
  }

  toggleModal(): Action {
    return { type: TOGGLE_MODAL };
  }


  closeOverlay(): Action {
    return { type: CLOSE_OVERLAY };
  }

  openOverlay(): Action {
    return { type: OPEN_OVERLAY };
  }

  toggleOverlay(): Action {
    return { type: TOGGLE_OVERLAY };
  }


  closeSidebar(): Action {
    return { type: CLOSE_SIDEBAR };
  }

  openSidebar(): Action {
    return { type: OPEN_SIDEBAR };
  }

  toggleSidebar(): Action {
    return { type: TOGGLE_SIDEBAR };
  }

}


