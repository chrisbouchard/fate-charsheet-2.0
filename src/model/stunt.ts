import * as Immutable from 'immutable';

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

export class Stunt extends Immutable.Record(DEFAULT_STUNT) implements Stunt.Options {
  readonly name: string;
  readonly description: string;
}

