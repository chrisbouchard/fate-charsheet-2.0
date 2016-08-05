declare module Immutable {
  export function Record<T>(defaultValues: T, name?: string): Record.Factory<T>;

  export module Record {
    interface Base extends Map<string, any> {
      set(key: string, value: any): this;

      update(key: string, updater: (value: any) => any): this;
      update(key: string, notSetValue: any, updater: (value: any) => any): this;

      setIn(keyPath: Array<any>, value: any): this;
      setIn(keyPath: Iterable<any>, value: any): this;

      deleteIn(keyPath: Array<any>): this;
      deleteIn(keyPath: Iterable<any>): this;
      removeIn(keyPath: Array<any>): this;
      removeIn(keyPath: Iterable<any>): this;

      updateIn(
        keyPath: Array<any>,
        updater: (value: any) => any
      ): this;
      updateIn(
        keyPath: Array<any>,
        notSetValue: any,
        updater: (value: any) => any
      ): this;
      updateIn(
        keyPath: Iterable<any>,
        updater: (value: any) => any
      ): this;
      updateIn(
        keyPath: Iterable<any>,
        notSetValue: any,
        updater: (value: any) => any
      ): this;
    }

    interface Factory<T> {
      new (): Base;
      new (values: T): Base;
      (): Base;
      (values: T): Base;
    }
  }
}

