import { makeTypedRecord, TypedRecord, TypedRecordFactory } from '../common/typed-record';

module Stunt {
  export interface Options {
    name: string;
    description: string;
  }
}

export const DEFAULT_STUNT: Stunt.Options = {
  name: undefined,
  description: undefined
};

export interface Stunt extends TypedRecord<Stunt.Options> {}

export const makeStunt: TypedRecordFactory<Stunt.Options, Stunt> =
    makeTypedRecord(DEFAULT_STUNT);

