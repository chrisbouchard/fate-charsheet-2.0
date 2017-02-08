import { Iterable, Record } from 'immutable';


export type TypedRecord<T> = Readonly<T> & TypedRecordMethods<T>;

export interface TypedRecordMethods<T> {

  set<K extends keyof T>(prop: K, val: T[K]): this;
  delete(key: keyof T): this;
  remove(key: keyof T): this;
  clear(): this;

  update(updater: (value: this) => this): this;
  update<K extends keyof T>(key: K, updater: (value: T[K]) => T[K]): this;
  update<K extends keyof T>(key: K, notSetValue: T, updater: (value: T[K]) => T[K]): this;

  merge(obj: any): this;
  mergeWith(
    merger: <K extends keyof T>(previous?: T[K], next?: T[K], key?: K) => T[K],
    obj: T
  ): this;
  mergeDeep(obj: T): this;
  mergeDeepWith(
    merger: (previous?: any, next?: any, key?: string) => any,
    obj: T
  ): this;

  setIn(keyPath: any[] | Iterable<any, any>, value: any): this;
  deleteIn(keyPath: any[] | Iterable<any, any>): this;
  removeIn(keyPath: any[] | Iterable<any, any>): this;
  updateIn(keyPath: any[] | Iterable<any, any>, updater: (value: any) => any): this;
  updateIn(
    keyPath: any[] | Iterable<any, any>,
    notSetValue: any,
    updater: (value: any) => any
  ): this;
  mergeIn(keyPath: any[] | Iterable<any, any>, obj: T): this;
  mergeDeepIn(keyPath: any[] | Iterable<any, any>, obj: T): this;

};


export function makeTypedRecord<T>(obj: T, name?: string): (val?: T) => TypedRecord<T> {
  const immutableRecordConstructor: new (val: T) => any = Record(obj, name);
  return (val = null) => new immutableRecordConstructor(val);
};

