import { makeTypedRecord, TypedRecord, TypedRecordFactory } from '../common/typed-record';

module Consequence {
  export interface Options {
    label: string;
    name: string;
    rank: number;
  }
}

export const DEFAULT_CONSEQUENCE: Consequence.Options = {
  label: undefined,
  name: undefined,
  rank: 0
};

export class Consequence extends makeTypedRecord(DEFAULT_CONSEQUENCE) {}

