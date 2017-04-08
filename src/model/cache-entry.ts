import * as Immutable from 'immutable';

import { MakeTypedRecord, TypedRecord } from '../common/typed-record';


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

export class CacheEntry<T> extends MakeTypedRecord(DEFAULT_CACHE_ENTRY<T>()) {}

