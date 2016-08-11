import * as Immutable from 'immutable';


export interface ICacheEntry<T> {
  error: boolean;
  loading: boolean;
  value: T;
}

export function DEFAULT_CACHE_ENTRY<T>(): ICacheEntry<T> {
  return {
    error: false,
    loading: false,
    value: undefined
  };
}

export class CacheEntry<T> extends Immutable.Record(DEFAULT_CACHE_ENTRY<T>()) implements ICacheEntry<T> {
  readonly error: boolean;
  readonly loading: boolean;
  readonly value: T;
}

