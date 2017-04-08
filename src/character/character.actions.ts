import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';

import { stringEnum } from '../common/string-enum';
import { Aspect } from '../model/aspect';
import { Character } from '../model/character';
import { Skill } from '../model/skill';


export const CharacterActionType = stringEnum([
    'BEGIN_LOADING_CHARACTER',
    'CACHE_CHARACTER',
    'SELECT_CHARACTER',
    'SET_CHARACTER_STRESS',

    'CLEAR_ASPECTS',
    'CLEAR_SKILLS',
    'TOGGLE_ASPECT',
    'TOGGLE_SKILL'
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

  clearSkills(): Action {
    return { type: CharacterActionType.CLEAR_SKILLS };
  }

  toggleAspect(aspect: Aspect): Action {
    return { type: CharacterActionType.TOGGLE_ASPECT, payload: { aspect } };
  }

  toggleSkill(skill: Skill): Action {
    return { type: CharacterActionType.TOGGLE_SKILL, payload: { skill } };
  }

}

