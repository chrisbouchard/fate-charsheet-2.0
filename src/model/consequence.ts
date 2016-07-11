import * as Immutable from 'immutable';

module Consequence {
  export interface Options {
    label: string;
    name: string;
  }
}

export const DEFAULT_CONSEQUENCE: Consequence.Options = {
  label: undefined,
  name: undefined
};

export class Consequence extends Immutable.Record(DEFAULT_CONSEQUENCE) implements Consequence.Options {
  readonly label: string;
  readonly name: string;
}

