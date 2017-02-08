import { Map } from 'immutable';
import * as Immutable from 'immutable';

import { makeTypedRecord, TypedRecord } from '../common/typed-record';
import { CacheEntry } from '../model/cache-entry';
import { Character } from '../model/character';

export interface ICharacterState {
  cache: Map<string, CacheEntry<Character>>;
  currentId: string;
}

export const DEFAULT_CHARACTER_STATE: ICharacterState = {
  cache: Map<string, CacheEntry<Character>>(),
  currentId: undefined
};

export interface CharacterState extends TypedRecord<ICharacterState> {
  currentCacheEntry(): CacheEntry<Character>;
  currentCharacter(): Character;
}

export function makeCharacterState(val?: ICharacterState): CharacterState {
  return Object.create(makeTypedRecord(DEFAULT_CHARACTER_STATE), {
    currentCacheEntry(): CacheEntry<Character> {
      return this.cache.get(this.currentId, new CacheEntry<Character>());
    },

    currentCharacter(): Character {
      const entry = this.currentCacheEntry();

      if (entry.error || entry.loading) {
        return undefined;
      }

      return entry.value;
    }
  });
}



