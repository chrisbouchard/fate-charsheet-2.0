import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

import { Character } from '../model/character';

export const BEGIN_LOADING_CHARACTER = 'BEGIN_LOADING_CHARACTER';
export const CACHE_CHARACTER = 'CACHE_CHARACTER';
export const SELECT_CHARACTER = 'SELECT_CHARACTER';
export const SET_CHARACTER_STRESS = 'SET_CHARACTER_STRESS';

export const CLEAR_ASPECTS = 'CLEAR_ASPECTS';
export const CLEAR_SKILL = 'CLEAR_SKILL';
export const SELECT_ASPECT = 'SELECT_ASPECT';
export const SELECT_SKILL = 'SELECT_SKILL';

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


  clearAspects(): Action {
    return { type: CLEAR_ASPECTS };
  }

  clearSkill(): Action {
    return { type: CLEAR_SKILL };
  }

  selectAspect(name: string): Action {
    return { type: SELECT_ASPECT, payload: { name } };
  }

  selectSkill(name: string): Action {
    return { type: SELECT_SKILL, payload: { name } };
  }

}

