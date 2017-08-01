import { Map, Set } from 'immutable';

import { MakeTypedRecord } from '../common/typed-record';
import { CacheEntry } from '../model/cache-entry';
import { Character } from '../model/character';
import { CharacterDetail } from '../model/character-detail';

export module CharacterState {
    export interface Options {
        cache: Map<string, CacheEntry<Character>>;
        activeId: string;
        inactiveIds: Set<string>;
        detail: CharacterDetail;
    }
}

export const DEFAULT_CHARACTER_STATE: CharacterState.Options = {
    cache: Map<string, CacheEntry<Character>>(),
    activeId: undefined,
    inactiveIds: Set(),
    detail: new CharacterDetail(),
};

export class CharacterState extends MakeTypedRecord(DEFAULT_CHARACTER_STATE) {
    get activeCacheEntry(): CacheEntry<Character> {
        return this.getCacheEntry(this.activeId);
    }

    get inactiveCacheEntries(): Set<CacheEntry<Character>> {
        return Set(this.inactiveIds.map(id => this.getCacheEntry(id)));
    }

    private getCacheEntry(id: string): CacheEntry<Character> {
        return this.cache.get(id, new CacheEntry<Character>());
    }


    get activeCharacter(): Character {
        return this.getCharacter(this.activeCacheEntry);
    }

    get inactiveCharacters(): Set<Character> {
        return Set(this.inactiveCacheEntries.map(entry => this.getCharacter(entry)));
    }

    private getCharacter(entry: CacheEntry<Character>): Character {
        if (entry.error || entry.loading) {
            return undefined;
        }

        return entry.value;
    }


    updateActiveCharacter(updater: (character: Character) => Character): this {
        if (this.activeCharacter === undefined) {
            return this;
        }

        return this.update('cache', cache =>
            cache.update(this.activeId, entry =>
                entry.update('value', updater)
            )
        );
    }
}
