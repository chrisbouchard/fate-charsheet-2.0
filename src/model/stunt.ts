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

export class Stunt extends makeTypedRecord(DEFAULT_STUNT) {}

