import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

import { stringEnum } from '../common/string-enum';
import { Character } from '../model/character';


export const CharacterActionType = stringEnum([
    'BEGIN_LOADING_CHARACTER',
    'CACHE_CHARACTER',
    'SELECT_CHARACTER',
    'SET_CHARACTER_STRESS',

    'CLEAR_ASPECTS',
    'CLEAR_SKILLS',
    'SELECT_ASPECT',
    'SELECT_SKILL'
]);

export type CharacterActionType = keyof typeof CharacterActionType;


@Injectable()
export class CharacterActions {

  beginLoadingCharacter(id: string): Action {
    return { type: CharacterActionType.BEGIN_LOADING_CHARACTER, payload: { id } };
  }

  cacheCharacter(id: string, character: Character): Action {
    return { type: CharacterActionType.CACHE_CHARACTER, payload: { id, character } };
  }

  selectCharacter(id: string): Action {
    return { type: CharacterActionType.SELECT_CHARACTER, payload: { id } };
  }

  setCharacterStress(track: number, index: number, value: boolean): Action {
    return { type: CharacterActionType.SET_CHARACTER_STRESS, payload: { track, index, value } };
  }


  clearAspects(): Action {
    return { type: CharacterActionType.CLEAR_ASPECTS };
  }

  clearSkill(): Action {
    return { type: CharacterActionType.CLEAR_SKILLS };
  }

  selectAspect(name: string): Action {
    return { type: CharacterActionType.SELECT_ASPECT, payload: { name } };
  }

  selectSkill(name: string): Action {
    return { type: CharacterActionType.SELECT_SKILL, payload: { name } };
  }

}

