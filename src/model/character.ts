import { Iterable, List, Seq, Set } from 'immutable';

import { MakeTypedRecord } from '../common/typed-record';

import { Aspect } from './aspect';
import { Consequence } from './consequence';
import { Player } from './player';
import { Skill } from './skill';
import { StressTrack } from './stress-track';
import { Stunt } from './stunt';

export module Character {
    export interface Options {
        id: string;
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
    id: undefined,
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

export class Character extends MakeTypedRecord(DEFAULT_CHARACTER) {
    get highConcept(): Aspect {
        return this.aspects.get(0);
    }

    get skillsByRank(): Seq.Keyed<number, Iterable<Skill, Skill>> {
        return this.skills.groupBy(skill => skill.rank);
    }
}
