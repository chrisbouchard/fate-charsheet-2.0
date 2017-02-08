import * as Immutable from 'immutable';

import { makeTypedRecord, TypedRecord } from '../common/typed-record';


export module CacheEntry {
  export interface Options<T> {
    error: boolean;
    loading: boolean;
    value: T;
  }
}

export function DEFAULT_CACHE_ENTRY<T>(): CacheEntry.Options<T> {
  return {
    error: false,
    loading: false,
    value: undefined
  };
}

export interface CacheEntry<T> extends TypedRecord<CacheEntry.Options<T>> {}

export const makeCacheEntry: <T> (val?: Partial<CacheEntry.Options<T>>) => CacheEntry<T> =
    makeTypedRecord(DEFAULT_CACHE_ENTRY());

