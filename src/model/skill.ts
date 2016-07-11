import * as Immutable from 'immutable';

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

export class Skill extends Immutable.Record(DEFAULT_SKILL) implements Skill.Options {
  readonly name: string;
  readonly rank: number;
}

