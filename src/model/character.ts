import { List } from 'immutable';
import * as Immutable from 'immutable';

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
    skills: List<Skill>;
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
  skills: List<Skill>(),
  stunts: List<Stunt>(),

  stressTracks: List<StressTrack>(),
  consequences: List<Consequence>()
};

export class Character extends Immutable.Record(DEFAULT_CHARACTER) implements Character.Options {
  readonly name: string;
  readonly player: Player;

  readonly color: string;
  readonly portrait: string;

  readonly aspects: List<Aspect>;
  readonly skills: List<Skill>;
  readonly stunts: List<Stunt>;

  readonly stressTracks: List<StressTrack>;
  readonly consequences: List<Consequence>;

  public get highConcept(): Aspect {
    return this.aspects.get(0);
  }
}

