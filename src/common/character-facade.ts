import { List, Set } from 'immutable';
import { Observable } from 'rxjs';

import { Aspect } from '../model/aspect';
import { Character } from '../model/character';
import { Consequence } from '../model/consequence';
import { Player } from '../model/player';
import { Skill } from '../model/skill';
import { StressTrack } from '../model/stress-track';
import { Stunt } from '../model/stunt';

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
        portrait: require('../assets/number-one.jpg'),
        color: 'purple',

        aspects: List([
            new Aspect({ label: 'High Concept', name: 'Graying Starfleet Devil' }),
            new Aspect({ label: 'Trouble', name: 'Number One' }),
            new Aspect({ label: 'Rank', name: 'Captain' }),
            new Aspect({ name: 'To Boldly Go' }),
            new Aspect({ name: 'Warp Core on Legs' }),
            new Aspect({ name: 'Glint in the Eye' })
        ]),

        skills: Set([
            new Skill({ name: 'Athletics', rank: 1 }),
            new Skill({ name: 'Burglary', rank: 1 }),
            new Skill({ name: 'Contacts', rank: 1 }),
            new Skill({ name: 'Crafts', rank: 1 }),
            new Skill({ name: 'Deceive', rank: 1 }),
            new Skill({ name: 'Drive', rank: 1 }),
            new Skill({ name: 'Empathy', rank: 2 }),
            new Skill({ name: 'Fight', rank: 2 }),
            new Skill({ name: 'Investigate', rank: 2 }),
            new Skill({ name: 'Lore', rank: 2 }),
            new Skill({ name: 'Notice', rank: 3 }),
            new Skill({ name: 'Physique', rank: 3 }),
            new Skill({ name: 'Provoke', rank: 3 }),
            new Skill({ name: 'Rapport', rank: 4 }),
            new Skill({ name: 'Resources', rank: 4 })
        ]),

        stunts: List([
            new Stunt({
                name: 'Test Stunt',
                description: 'A stunt that tests stuff. Lorem ipsum blah blah blah. Lots of text.'
            }),
            new Stunt({ name: 'A B C', description: 'Foo bar.' }),
            new Stunt({ name: 'X Y Z', description: 'Foo bar.' })
        ]),

        stressTracks: List([
            new StressTrack({
                name: 'Physical',
                boxes: List([true, true, false, false])
            }),
            new StressTrack({
                name: 'Mental',
                boxes: List([false, false])
            })
        ]),

        consequences: List<Consequence>([
            new Consequence({
                name: 'Shaken, Not Stirred',
                label: 'Mild',
                rank: 2
            }),
            new Consequence({
                label: 'Moderate',
                rank: 4
            }),
            new Consequence({
                label: 'Severe',
                rank: 6
            }),
        ])
    });

    private fooBar: Character = new Character({
        name: 'Foo Bar',
        player: this.jdoe,
        portrait: require('../assets/placeholder.svg'),
        color: 'blue',

        aspects: List([
            new Aspect({ label: 'High Concept', name: 'Lorem Ipsum Dolor Sit Amen' }),
            new Aspect({ label: 'Trouble', name: 'Troubling Troubles' })
        ]),

        skills: Set<Skill>(),
        stunts: List<Stunt>(),

        stressTracks: List([
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
        return Observable.of(this.amaryllis.set('id', id)).delay(5);
    }

    findAll(): Observable<Character[]> {
        const fooBars = Array.from({length: 4}, () => this.fooBar);
        return Observable.of(this.fixedCharacters.concat(fooBars));
    }

}
