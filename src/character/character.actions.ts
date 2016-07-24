import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

import { Character } from '../model/character';

export const LOAD_CHARACTER = 'LOAD_CHARACTER';
export const SET_CHARACTER = 'SET_CHARACTER';
export const SET_CHARACTER_STRESS = 'SET_CHARACTER_STRESS';

@Injectable()
export class CharacterActions {

  loadCharacter(id: string): Action {
    return { type: LOAD_CHARACTER, payload: { id } };
  }

  setCharacter(character: Character): Action {
    return { type: SET_CHARACTER, payload: { character } };
  }

  setCharacterStress(track: number, index: number, value: boolean): Action {
    return { type: SET_CHARACTER_STRESS, payload: { track, index, value } };
  }

}

