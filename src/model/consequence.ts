import * as Immutable from 'immutable';

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

export class Consequence extends Immutable.Record(DEFAULT_CONSEQUENCE) implements Consequence.Options {
  readonly label: string;
  readonly name: string;
  readonly rank: number;
}

