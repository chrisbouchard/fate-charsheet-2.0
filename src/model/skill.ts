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

export interface Skill extends TypedRecord<Skill.Options> {}

export const makeSkill: TypedRecordFactory<Skill.Options, Skill> =
    makeTypedRecord(DEFAULT_SKILL);

