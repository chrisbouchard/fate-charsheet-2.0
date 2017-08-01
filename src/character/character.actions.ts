import { Action } from '@ngrx/store';

import { Aspect } from '../model/aspect';
import { Character } from '../model/character';
import { Skill } from '../model/skill';


export enum CharacterActionType {
    CLOSE_CHARACTER = 'CLOSE_CHARACTER',
    OPEN_CHARACTER = 'OPEN_CHARACTER',
    SELECT_CHARACTER = 'SELECT_CHARACTER',
    SET_CHARACTER_STRESS = 'SET_CHARACTER_STRESS',

    CHARACTER_LOADING_STARTED = 'CHARACTER_LOADING_STARTED',
    CHARACTER_LOADING_SUCCESS = 'CHARACTER_LOADING_SUCCESS',
    CHARACTER_LOADING_FAILURE = 'CHARACTER_LOADING_FAILURE',

    CLEAR_ASPECTS = 'CLEAR_ASPECTS',
    CLEAR_SKILLS = 'CLEAR_SKILLS',
    TOGGLE_ASPECT = 'TOGGLE_ASPECT',
    TOGGLE_SKILL = 'TOGGLE_SKILL'
}


export class CloseCharacterAction implements Action {
    readonly type = CharacterActionType.CLOSE_CHARACTER;
    constructor(public id: string) {}
}

export class OpenCharacterAction implements Action {
    readonly type = CharacterActionType.OPEN_CHARACTER;
    constructor(public id: string) {}
}

export class SelectCharacterAction implements Action {
    readonly type = CharacterActionType.SELECT_CHARACTER;
    constructor(public id: string) {}
}

export class SetCharacterStressAction implements Action {
    readonly type = CharacterActionType.SET_CHARACTER_STRESS;
    constructor(public track: number, public index: number, public value: boolean) {}
}


export class CharacterLoadingStartedAction implements Action {
    readonly type = CharacterActionType.CHARACTER_LOADING_STARTED;
    constructor(public id: string) {}
}

export class CharacterLoadingSuccessAction implements Action {
    readonly type = CharacterActionType.CHARACTER_LOADING_SUCCESS;
    constructor(public id: string, public character: Character) {}
}

export class CharacterLoadingFailureAction implements Action {
    readonly type = CharacterActionType.CHARACTER_LOADING_FAILURE;
    constructor(public id: string, public error: any) {}
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
    = CloseCharacterAction
    | OpenCharacterAction
    | SelectCharacterAction
    | SetCharacterStressAction

    | CharacterLoadingStartedAction
    | CharacterLoadingSuccessAction
    | CharacterLoadingFailureAction

    | ClearAspectsAction
    | ClearSkillsAction
    | ToggleAspectAction
    | ToggleSkillAction;
