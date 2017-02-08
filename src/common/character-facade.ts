import { List, Set } from 'immutable';
import { Observable } from 'rxjs';

import { Aspect, makeAspect } from '../model/aspect';
import { Character, makeCharacter } from '../model/character';
import { Consequence, makeConsequence } from '../model/consequence';
import { makePlayer, Player } from '../model/player';
import { makeSkill, Skill } from '../model/skill';
import { makeStressTrack, StressTrack } from '../model/stress-track';
import { makeStunt, Stunt } from '../model/stunt';

const RANK_ASPECT_NAME = 'rank';

export class CharacterFacade {

  private mbouchard: Player = makePlayer({
    id: 'mbouchard',
    name: 'Mary Bouchard'
  });

  private jdoe: Player = makePlayer({
    id: 'jdoe',
    name: 'John Doe'
  });

  private amaryllis: Character = makeCharacter({
    name: 'Amaryllis Aster Jennings',
    player: this.mbouchard,
    portrait: require<string>('../assets/placeholder.svg'),
    color: 'purple',

    aspects: List([
      makeAspect({ label: 'High Concept', name: 'Graying Starfleet Devil' }),
      makeAspect({ label: 'Trouble', name: 'Number One' }),
      makeAspect({ label: 'Rank', name: 'Captain' }),
      makeAspect({ name: 'To Boldly Go' }),
      makeAspect({ name: 'Warp Core on Legs' }),
      makeAspect({ name: 'Glint in the Eye' })
    ]),

    skills: Set([
      makeSkill({ name: 'Athletics', rank: 1 }),
      makeSkill({ name: 'Burglary', rank: 1 }),
      makeSkill({ name: 'Contacts', rank: 1 }),
      makeSkill({ name: 'Crafts', rank: 1 }),
      makeSkill({ name: 'Deceive', rank: 1 }),
      makeSkill({ name: 'Drive', rank: 1 }),
      makeSkill({ name: 'Empathy', rank: 2 }),
      makeSkill({ name: 'Fight', rank: 2 }),
      makeSkill({ name: 'Investigate', rank: 2 }),
      makeSkill({ name: 'Lore', rank: 2 }),
      makeSkill({ name: 'Notice', rank: 3 }),
      makeSkill({ name: 'Physique', rank: 3 }),
      makeSkill({ name: 'Provoke', rank: 3 }),
      makeSkill({ name: 'Rapport', rank: 4 }),
      makeSkill({ name: 'Resources', rank: 4 })
    ]),

    stunts: List([
      makeStunt({
        name: 'Test Stunt',
        description: 'A stunt that tests stuff. Lorem ipsum blah blah blah. Lots of text.'
      }),
      makeStunt({ name: 'A B C', description: 'Foo bar.' }),
      makeStunt({ name: 'X Y Z', description: 'Foo bar.' })
    ]),

    stressTracks: List([
      makeStressTrack({
        name: 'Physical',
        boxes: List([true, true, false, false])
      }),
      makeStressTrack({
        name: 'Mental',
        boxes: List([false, false])
      })
    ]),

    consequences: List<Consequence>([
      makeConsequence({
        name: 'Shaken, Not Stirred',
        label: 'Mild',
        rank: 2
      }),
      makeConsequence({
        label: 'Moderate',
        rank: 4
      }),
      makeConsequence({
        label: 'Severe',
        rank: 6
      }),
    ])
  });

  private fooBar: Character = makeCharacter({
    name: 'Foo Bar',
    player: this.jdoe,
    portrait: require<string>('../assets/placeholder.svg'),
    color: 'blue',

    aspects: List([
      makeAspect({ label: 'High Concept', name: 'Lorem Ipsum Dolor Sit Amen' }),
      makeAspect({ label: 'Trouble', name: 'Troubling Troubles' })
    ]),

    skills: Set<Skill>(),
    stunts: List<Stunt>(),

    stressTracks: List([
      makeStressTrack({
        name: 'Physical',
        boxes: List([true, true, false, false])
      }),
      makeStressTrack({
        name: 'Mental',
        boxes: List([false, false])
      })
    ]),

    consequences: List<Consequence>(),
  });

  private fixedCharacters: Character[] = [ this.amaryllis ];

  find(id: string): Observable<Character> {
    return Observable.of(this.amaryllis).delay(5);
  }

  findAll(): Observable<Character[]> {
    const fooBars = Array.from({length: 4}, () => this.fooBar);
    return Observable.of(this.fixedCharacters.concat(fooBars));
  }

}

