import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

import { Character } from '../model/character';

export const BEGIN_LOADING_CHARACTER = 'BEGIN_LOADING_CHARACTER';
export const CACHE_CHARACTER = 'CACHE_CHARACTER';
export const SELECT_CHARACTER = 'SELECT_CHARACTER';
export const SET_CHARACTER_STRESS = 'SET_CHARACTER_STRESS';

@Injectable()
export class CharacterActions {

  beginLoadingCharacter(id: string): Action {
    return { type: BEGIN_LOADING_CHARACTER, payload: { id } };
  }

  cacheCharacter(id: string, character: Character): Action {
    return { type: CACHE_CHARACTER, payload: { id, character } };
  }

  selectCharacter(id: string): Action {
    return { type: SELECT_CHARACTER, payload: { id } };
  }

  setCharacterStress(track: number, index: number, value: boolean): Action {
    return { type: SET_CHARACTER_STRESS, payload: { track, index, value } };
  }

}

