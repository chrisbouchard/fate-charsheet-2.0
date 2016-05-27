import { List } from 'immutable';

export interface StressBox {
  enabled: boolean;
  marked: boolean;
}

export type StressTrack = List<StressBox>;

export const COMMON_STRESS_TRACKS = {
  PHYSICAL: 'physical',
  MENTAL: 'mental'
};

