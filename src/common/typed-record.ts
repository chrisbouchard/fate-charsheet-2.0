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

}


export type TypedRecordFactory<T, U extends TypedRecord<T>> = new (val?: Partial<T>) => U;

export function MakeTypedRecord<T>(obj: T, name?: string): TypedRecordFactory<T, TypedRecord<T>> {
    /* The cast is necessary as an intermediate step on the way to TypedRecordFactory<T, TypedRecord<T>>. The return type
     * is any instead of TypedRecord<T>, so it can be further implicitly cast to the return type. */
    return Record(obj, name) as TypedRecordFactory<T, any>;
}
