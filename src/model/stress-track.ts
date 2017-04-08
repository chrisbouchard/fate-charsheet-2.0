import { List } from 'immutable';

import { MakeTypedRecord, TypedRecord, TypedRecordFactory } from '../common/typed-record';

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

export class StressTrack extends MakeTypedRecord(DEFAULT_STRESS_TRACK) {}

