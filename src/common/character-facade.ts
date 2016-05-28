import { List, Map, Set } from 'immutable';
import { Observable } from 'rxjs';

import { Aspect, COMMON_ASPECTS } from '../model/aspect';
import { Character } from '../model/character';
import { Consequence, COMMON_CONSEQUENCES } from '../model/consequence';
import { Player } from '../model/player';
import { Skill } from '../model/skill';
import { COMMON_STRESS_TRACKS, StressTrack } from '../model/stress-track';
import { Stunt } from '../model/stunt';
import { Template } from '../model/template';

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

  private template: Template = new Template({
    id: '1',
    name: 'Star Trek',
    aspectNames: Map<string, string>([
      [ COMMON_ASPECTS.HIGH_CONCEPT, 'High Concept' ],
      [ COMMON_ASPECTS.TROUBLE, 'Trouble' ],
      [ RANK_ASPECT_NAME, 'Rank']
    ]),
    consequenceNames: Map<string, string>([
      [ COMMON_CONSEQUENCES.MILD, 'Mild' ],
      [ COMMON_CONSEQUENCES.MODERATE, 'Moderate' ],
      [ COMMON_CONSEQUENCES.SEVERE, 'Severe' ],
      [ COMMON_CONSEQUENCES.EXTREME, 'Extreme' ]
    ]),
    stressTrackNames: Map<string, string>([
      [ COMMON_STRESS_TRACKS.PHYSICAL, 'Physical' ],
      [ COMMON_STRESS_TRACKS.MENTAL, 'Mental' ]
    ]),

    aspectSlots: List([
      COMMON_ASPECTS.HIGH_CONCEPT,
      COMMON_ASPECTS.TROUBLE,
      RANK_ASPECT_NAME
    ]),
    consequenceSlots: List([
      COMMON_CONSEQUENCES.MILD,
      COMMON_CONSEQUENCES.MODERATE,
      COMMON_CONSEQUENCES.SEVERE,
      COMMON_CONSEQUENCES.EXTREME
    ]),
    stressTrackSlots: List([
      { field: COMMON_STRESS_TRACKS.PHYSICAL, cap: 4 },
      { field: COMMON_STRESS_TRACKS.MENTAL, cap: 4 }
    ])
  });

  private amaryllis: Character = new Character({
    id: '1',
    template: this.template,
    name: 'Amaryllis Aster Jennings',
    player: this.mbouchard,
    portrait: require<string>('../assets/placeholder.svg'),
    color: 'purple',
    namedAspects: Map<string, Aspect>([
      [COMMON_ASPECTS.HIGH_CONCEPT, new Aspect('Graying Starfleet Devil')],
      [COMMON_ASPECTS.TROUBLE, new Aspect('Number One')],
      [RANK_ASPECT_NAME, new Aspect('Captain')]
    ]),
    unnamedAspects: Set([
      new Aspect('To Boldly Go'),
      new Aspect('Warp Core on Legs'),
      new Aspect('Glint in the Eye')
    ]),
    skills: List([
      Set([new Skill('Foo')]),
      Set([new Skill('Bar')]),
      Set([new Skill('Baz')])
    ]),
    stressTracks: Map<string, StressTrack>([
      [COMMON_STRESS_TRACKS.PHYSICAL, List([
        { enabled: true, marked: true },
        { enabled: true, marked: true },
        { enabled: true, marked: false },
        { enabled: true, marked: false }
      ])],
      [COMMON_STRESS_TRACKS.MENTAL, List([
        { enabled: true, marked: false },
        { enabled: true, marked: false }
      ])]
    ]),
    consequences: Map<string, Set<Consequence>>([
      [COMMON_CONSEQUENCES.MILD, Set([
        {}, {type: COMMON_STRESS_TRACKS.PHYSICAL}, {type: COMMON_STRESS_TRACKS.MENTAL}
      ])],
      [COMMON_CONSEQUENCES.MODERATE, Set([ {} ])],
      [COMMON_CONSEQUENCES.SEVERE, Set([ {} ])],
      [COMMON_CONSEQUENCES.EXTREME, Set([ {} ])],
    ]),
    stunts: Set([
      {
        id: '1',
        name: 'Test Stunt',
        description: 'A stunt that tests stuff. Lorem ipsum blah blah blah. Lots of text.'
      },
      { id: '2', name: 'A B C', description: 'Foo bar.' },
      { id: '3', name: 'X Y Z', description: 'Foo bar.' }
    ])
  });

  private fooBar: Character = new Character({
    id: '2',
    template: this.template,
    name: 'Foo Bar',
    player: this.jdoe,
    portrait: require<string>('../assets/placeholder.svg'),
    color: 'blue',
    namedAspects: Map<string, Aspect>([
      [COMMON_ASPECTS.HIGH_CONCEPT, new Aspect('Lorem Ipsum Dolor Sit Amen')],
      [COMMON_ASPECTS.TROUBLE, new Aspect('Troubling Troubles')]
    ]),
    unnamedAspects: Set<Aspect>(),
    skills: List<Set<Skill>>(),
    stressTracks: Map<string, StressTrack>([
      [COMMON_STRESS_TRACKS.PHYSICAL, List([
        { enabled: true, marked: true },
        { enabled: true, marked: true },
        { enabled: true, marked: false },
        { enabled: true, marked: false }
      ])],
      [COMMON_STRESS_TRACKS.MENTAL, List([
        { enabled: true, marked: false },
        { enabled: true, marked: false }
      ])]
    ]),
    consequences: Map<string, Set<Consequence>>([
      [COMMON_CONSEQUENCES.MILD, Set([ {} ])],
      [COMMON_CONSEQUENCES.MODERATE, Set([ {} ])],
      [COMMON_CONSEQUENCES.SEVERE, Set([ {} ])],
      [COMMON_CONSEQUENCES.EXTREME, Set([ {} ])],
    ]),
    stunts: Set<Stunt>()
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

