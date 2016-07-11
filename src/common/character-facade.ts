import { List } from 'immutable';
import { Observable } from 'rxjs';

import { Aspect } from '../model/aspect';
import { Character } from '../model/character';
import { Consequence } from '../model/consequence';
import { Player } from '../model/player';
import { Skill } from '../model/skill';
import { StressTrack } from '../model/stress-track';
import { Stunt } from '../model/stunt';

const RANK_ASPECT_NAME = 'rank';

export class CharacterFacade {

  private mbouchard: Player = new Player({
    id: 'mbouchard',
    name: 'Mary Bouchard'
  });

  private jdoe: Player = new Player({
    id: 'jdoe',
    name: 'John Doe'
  });

  private amaryllis: Character = new Character({
    name: 'Amaryllis Aster Jennings',
    player: this.mbouchard,
    portrait: require<string>('../assets/placeholder.svg'),
    color: 'purple',

    aspects: List<Aspect>([
      new Aspect({ label: 'High Concept', name: 'Graying Starfleet Devil' }),
      new Aspect({ label: 'Trouble', name: 'Number One' }),
      new Aspect({ label: 'Rank', name: 'Captain' }),
      new Aspect({ name: 'To Boldly Go' }),
      new Aspect({ name: 'Warp Core on Legs' }),
      new Aspect({ name: 'Glint in the Eye' })
    ]),

    skills: List([
      new Skill({ name: 'Foo', rank: 1 }),
      new Skill({ name: 'Bar', rank: 2 }),
      new Skill({ name: 'Baz', rank: 3 })
    ]),

    stunts: List([
      new Stunt({
        name: 'Test Stunt',
        description: 'A stunt that tests stuff. Lorem ipsum blah blah blah. Lots of text.'
      }),
      new Stunt({ name: 'A B C', description: 'Foo bar.' }),
      new Stunt({ name: 'X Y Z', description: 'Foo bar.' })
    ]),

    stressTracks: List<StressTrack>([
      new StressTrack({
        name: 'Physical',
        boxes: List([true, true, false, false])
      }),
      new StressTrack({
        name: 'Mental',
        boxes: List([false, false])
      })
    ]),

    consequences: List<Consequence>()
  });

  private fooBar: Character = new Character({
    name: 'Foo Bar',
    player: this.jdoe,
    portrait: require<string>('../assets/placeholder.svg'),
    color: 'blue',

    aspects: List<Aspect>([
      new Aspect({ label: 'High Concept', name: 'Lorem Ipsum Dolor Sit Amen' }),
      new Aspect({ label: 'Trouble', name: 'Troubling Troubles' })
    ]),

    skills: List<Skill>(),
    stunts: List<Stunt>(),

    stressTracks: List<StressTrack>([
      new StressTrack({
        name: 'Physical',
        boxes: List([true, true, false, false])
      }),
      new StressTrack({
        name: 'Mental',
        boxes: List([false, false])
      })
    ]),

    consequences: List<Consequence>(),
  });

  private fixedCharacters: Character[] = [ this.amaryllis ];

  find(id: string): Observable<Character> {
    return Observable.of(this.amaryllis).delay(1);
  }

  findAll(): Observable<Character[]> {
    const fooBars = Array.from({length: 4}, () => this.fooBar);
    return Observable.of(this.fixedCharacters.concat(fooBars)).delay(1);
  }

}

