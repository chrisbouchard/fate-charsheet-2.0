import { Action } from '@ngrx/store';

import { Aspect } from '../model/aspect';
import { Character } from '../model/character';
import { Skill } from '../model/skill';


export enum CharacterActionType {
    BEGIN_LOADING_CHARACTER = 'BEGIN_LOADING_CHARACTER',
    CACHE_CHARACTER = 'CACHE_CHARACTER',
    ERROR_LOADING_CHARACTER = 'ERROR_LOADING_CHARACTER',
    SELECT_CHARACTER = 'SELECT_CHARACTER',
    SET_CHARACTER_STRESS = 'SET_CHARACTER_STRESS',

    CLEAR_ASPECTS = 'CLEAR_ASPECTS',
    CLEAR_SKILLS = 'CLEAR_SKILLS',
    TOGGLE_ASPECT = 'TOGGLE_ASPECT',
    TOGGLE_SKILL = 'TOGGLE_SKILL'
}


export class BeginLoadingCharacterAction implements Action {
    readonly type = CharacterActionType.BEGIN_LOADING_CHARACTER;
    constructor(public id: string) {}
}

export class CacheCharacterAction implements Action {
    readonly type = CharacterActionType.CACHE_CHARACTER;
    constructor(public id: string, public character: Character) {}
}

export class ErrorLoadingCharacterAction implements Action {
    readonly type = CharacterActionType.ERROR_LOADING_CHARACTER;
    constructor(public error: any) {}
}

export class SelectCharacterAction implements Action {
    readonly type = CharacterActionType.SELECT_CHARACTER;
    constructor(public id: string) {}
}

export class SetCharacterStressAction implements Action {
    readonly type = CharacterActionType.SET_CHARACTER_STRESS;
    constructor(public track: number, public index: number, public value: boolean) {}
}


export class ClearAspectsAction implements Action {
    readonly type = CharacterActionType.CLEAR_ASPECTS;
}

export class ClearSkillsAction implements Action {
    readonly type = CharacterActionType.CLEAR_SKILLS;
}

export class ToggleAspectAction implements Action {
    readonly type = CharacterActionType.TOGGLE_ASPECT;
    constructor(public aspect: Aspect) {}
}

export class ToggleSkillAction implements Action {
    readonly type = CharacterActionType.TOGGLE_SKILL;
    constructor(public skill: Skill) {}
}

export type CharacterAction
    = BeginLoadingCharacterAction
    | CacheCharacterAction
    | ErrorLoadingCharacterAction
    | SelectCharacterAction
    | SetCharacterStressAction
    | ClearAspectsAction
    | ClearSkillsAction
    | ToggleAspectAction
    | ToggleSkillAction;
