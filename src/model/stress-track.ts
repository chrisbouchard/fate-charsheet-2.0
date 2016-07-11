import { List } from 'immutable';
import * as Immutable from 'immutable';

module StressTrack {
  export interface Options {
    name: string;
    boxes: List<boolean>;
  }
}

export const DEFAULT_STRESS_TRACK: StressTrack.Options = {
  name: undefined,
  boxes: List<boolean>()
};

export class StressTrack extends Immutable.Record(DEFAULT_STRESS_TRACK) implements StressTrack.Options {
  readonly name: string;
  readonly boxes: List<boolean>;
}

