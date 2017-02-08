import { Map } from 'immutable';
import * as Immutable from 'immutable';

import { makeTypedRecord, TypedRecord } from '../common/typed-record';
import { CacheEntry, makeCacheEntry } from '../model/cache-entry';
import { Character } from '../model/character';

export module CharacterState {
  export interface Options {
    cache: Map<string, CacheEntry<Character>>;
    currentId: string;
  }
}

export const DEFAULT_CHARACTER_STATE: CharacterState.Options = {
  cache: Map<string, CacheEntry<Character>>(),
  currentId: undefined
};

export interface CharacterState extends TypedRecord<CharacterState.Options> {
  currentCacheEntry(): CacheEntry<Character>;
  currentCharacter(): Character;
}

const makeRecord = makeTypedRecord(DEFAULT_CHARACTER_STATE);

export function makeCharacterState(val?: Partial<CharacterState.Options>): CharacterState {
  return Object.create(makeRecord(val), {
    currentCacheEntry(): CacheEntry<Character> {
      return this.cache.get(this.currentId, makeCacheEntry<Character>());
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

