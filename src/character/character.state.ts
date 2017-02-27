import { Map, Set } from 'immutable';

import { makeTypedRecord } from '../common/typed-record';
import { CacheEntry } from '../model/cache-entry';
import { Character } from '../model/character';
import { CharacterDetail } from '../model/character-detail';

export module CharacterState {
  export interface Options {
    cache: Map<string, CacheEntry<Character>>;
    currentId: string;
    detail: CharacterDetail;
  }
}

export const DEFAULT_CHARACTER_STATE: CharacterState.Options = {
  cache: Map<string, CacheEntry<Character>>(),
  currentId: undefined,
  detail: new CharacterDetail()
};

export class CharacterState extends makeTypedRecord(DEFAULT_CHARACTER_STATE) {
  get currentCacheEntry(): CacheEntry<Character> {
    return this.cache.get(this.currentId, new CacheEntry<Character>());
  }

  get currentCharacter(): Character {
    const entry = this.currentCacheEntry;

    if (entry.error || entry.loading) {
      return undefined;
    }

    return entry.value;
  }
}

