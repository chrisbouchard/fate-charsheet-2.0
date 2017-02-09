import { makeTypedRecord, TypedRecord, TypedRecordFactory } from '../common/typed-record';

module Skill {
  export interface Options {
    name: string;
    rank: number;
  }
}

export const DEFAULT_SKILL: Skill.Options = {
  name: undefined,
  rank: 0
};

export class Skill extends makeTypedRecord(DEFAULT_SKILL) {}

