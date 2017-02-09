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

export class Aspect extends makeTypedRecord(DEFAULT_ASPECT) {}

