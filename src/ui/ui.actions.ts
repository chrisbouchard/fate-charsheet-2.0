import { Injectable } from '@angular/core';

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

@Injectable()
export class UIActions {

  closeModal(): Action {
    return { type: UIActionType.CLOSE_MODAL };
  }

  openModal(): Action {
    return { type: UIActionType.OPEN_MODAL };
  }

  toggleModal(): Action {
    return { type: UIActionType.TOGGLE_MODAL };
  }


  closeOverlay(): Action {
    return { type: UIActionType.CLOSE_OVERLAY };
  }

  openOverlay(): Action {
    return { type: UIActionType.OPEN_OVERLAY };
  }

  toggleOverlay(): Action {
    return { type: UIActionType.TOGGLE_OVERLAY };
  }


  closeSidebar(): Action {
    return { type: UIActionType.CLOSE_SIDEBAR };
  }

  openSidebar(): Action {
    return { type: UIActionType.OPEN_SIDEBAR };
  }

  toggleSidebar(): Action {
    return { type: UIActionType.TOGGLE_SIDEBAR };
  }

}
