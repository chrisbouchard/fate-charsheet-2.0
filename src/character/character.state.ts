import { Map, Set } from 'immutable';

import { makeTypedRecord } from '../common/typed-record';
import { CacheEntry } from '../model/cache-entry';
import { Character } from '../model/character';

export module CharacterState {
  export interface Options {
    cache: Map<string, CacheEntry<Character>>;
    currentId: string;
    selectedAspects: Set<string>;
    selectedSkill: string;
  }
}

export const DEFAULT_CHARACTER_STATE: CharacterState.Options = {
  cache: Map<string, CacheEntry<Character>>(),
  currentId: undefined,
  selectedAspects: Set<string>(),
  selectedSkill: undefined
};

export class CharacterState extends makeTypedRecord(DEFAULT_CHARACTER_STATE) {
  currentCacheEntry(): CacheEntry<Character> {
    return this.cache.get(this.currentId, new CacheEntry<Character>());
  }

  currentCharacter(): Character {
    const entry = this.currentCacheEntry();

    if (entry.error || entry.loading) {
      return undefined;
    }

    return entry.value;
  }
}

