import * as Immutable from 'immutable';

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

export class Aspect extends Immutable.Record(DEFAULT_ASPECT) implements Aspect.Options {
  readonly label: string;
  readonly name: string;
}

