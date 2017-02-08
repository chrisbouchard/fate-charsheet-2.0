import { Iterable, List, Seq, Set } from 'immutable';

import { makeTypedRecord, TypedRecord } from '../common/typed-record';

import { Aspect } from './aspect';
import { Consequence } from './consequence';
import { Player } from './player';
import { Skill } from './skill';
import { StressTrack } from './stress-track';
import { Stunt } from './stunt';

module Character {
  export interface Options {
    name: string;
    player: Player;

    color: string;
    portrait: string;

    aspects: List<Aspect>;
    skills: Set<Skill>;
    stunts: List<Stunt>;

    stressTracks: List<StressTrack>;
    consequences: List<Consequence>;
  }
}

export const DEFAULT_CHARACTER: Character.Options = {
  name: undefined,
  player: undefined,

  color: undefined,
  portrait: undefined,

  aspects: List<Aspect>(),
  skills: Set<Skill>(),
  stunts: List<Stunt>(),

  stressTracks: List<StressTrack>(),
  consequences: List<Consequence>()
};

export interface Character extends TypedRecord<Character.Options> {
  highConcept(): Aspect;
  skillsByRank(): Seq.Keyed<number, Iterable<Skill, Skill>>;
}

const makeRecord = makeTypedRecord(DEFAULT_CHARACTER);

export function makeCharacter(val?: Partial<Character.Options>): Character {
  return Object.create(makeRecord(val), {
    highConcept(): Aspect {
      return this.aspects.get(0);
    },

    skillsByRank(): Seq.Keyed<number, Iterable<Skill, Skill>> {
      return this.skills.groupBy(skill => skill.rank);
    }
  });
}

