import { Map } from 'immutable';
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


export interface Cache<K, V> extends Map<K, CacheEntry<V>> {
}

export function Cache<K, V>(arg?: any): Cache<K, V> {
  return Map<K, CacheEntry<V>>(arg);
}

export module Cache {
  export function getEntry<K, V>(cache: Cache<K, V>, key: K): CacheEntry<V> {
    return cache.get(key, new CacheEntry<V>());
  }
}

