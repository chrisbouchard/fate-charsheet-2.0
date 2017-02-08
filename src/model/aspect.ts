import { makeTypedRecord, TypedRecord, TypedRecordFactory } from '../common/typed-record';

module Aspect {
  export interface Options {
    label?: string;
    name: string;
  }
}

export const DEFAULT_ASPECT: Aspect.Options = {
  label: undefined,
  name: undefined
};

export interface Aspect extends TypedRecord<Aspect.Options> {}

export const makeAspect: TypedRecordFactory<Aspect.Options, Aspect> =
    makeTypedRecord(DEFAULT_ASPECT);

