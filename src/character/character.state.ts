import { Map } from 'immutable';
import * as Immutable from 'immutable';

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

export class CharacterState extends Immutable.Record(DEFAULT_CHARACTER_STATE) implements ICharacterState {
  readonly cache: Map<string, CacheEntry<Character>>;
  readonly currentId: string;

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

