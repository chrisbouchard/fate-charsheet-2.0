import { List, Map } from 'immutable';

import { makeTypedRecord, TypedRecord, TypedRecordFactory } from '../common/typed-record';

module StressTrackSlot {
  export interface Options {
    field: string;
    cap: number;
  }
}

export const DEFAULT_STRESS_TRACK_SLOT: StressTrackSlot.Options = {
  field: undefined,
  cap: 0
};

export interface StressTrackSlot extends TypedRecord<StressTrackSlot.Options> {}

export const makeStressTrackSlot: TypedRecordFactory<StressTrackSlot.Options, StressTrackSlot> =
    makeTypedRecord(DEFAULT_STRESS_TRACK_SLOT);


module Template {
  export interface Options {
    id: string;
    name: string;

    aspectNames: Map<string, string>;
    consequenceNames: Map<string, string>;
    stressTrackNames: Map<string, string>;

    aspectSlots: List<string>;
    consequenceSlots: List<string>;
    stressTrackSlots: List<StressTrackSlot>;
  }
}

export const DEFAULT_TEMPLATE: Template.Options = {
  id: undefined,
  name: undefined,

  aspectNames: Map<string, string>(),
  consequenceNames: Map<string, string>(),
  stressTrackNames: Map<string, string>(),

  aspectSlots: List<string>(),
  consequenceSlots: List<string>(),
  stressTrackSlots: List<StressTrackSlot>()
};

export interface Template extends TypedRecord<Template.Options> {}

export const makeTemplate: TypedRecordFactory<Template.Options, Template> =
    makeTypedRecord(DEFAULT_TEMPLATE);

