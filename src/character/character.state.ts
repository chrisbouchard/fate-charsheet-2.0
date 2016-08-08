import { Map } from 'immutable';
import * as Immutable from 'immutable';

import { Character } from '../model/character';

export interface ICharacterState {
  cache: Map<string, Character>;
  currentId: string;
}

export const DEFAULT_CHARACTER_STATE: ICharacterState = {
  cache: Map<string, Character>(),
  currentId: undefined
};

export class CharacterState extends Immutable.Record(DEFAULT_CHARACTER_STATE) implements ICharacterState {
  readonly cache: Map<string, Character>;
  readonly currentId: string;

  currentCharacter(): Character {
    return this.cache.get(this.currentId);
  }
}

