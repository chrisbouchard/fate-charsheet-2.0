import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

import { CharacterFacade } from '../common/character-facade';
import { Character } from '../model/character';

import { Thunk } from './thunk-middleware';

export const SELECT_CHARACTER = 'SELECT_CHARACTER';
export const SET_CHARACTER_STRESS = 'SET_CHARACTER_STRESS';

@Injectable()
export class AppActions {

  constructor(private characterFacade: CharacterFacade) {}

  selectCharacter(id: string): Thunk {
    return dispatch => this.characterFacade.find(id).subscribe(character => {
      dispatch({ type: SELECT_CHARACTER, character } as Action);
    });
  }

  setCharacterStress(track: string, index: number, value: boolean): Action {
    return { type: SET_CHARACTER_STRESS, track, index, value } as Action;
  }

}

