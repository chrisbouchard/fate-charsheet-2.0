import { Component, Input } from '@angular/core';

import { Set } from 'immutable';

import { Character } from '../model/character';

@Component({
    selector: 'fate-character-tab-list',
    styleUrls: ['./character-tab-list.component.less'],
    templateUrl: './character-tab-list.component.haml'
})
export class CharacterTabListComponent {
    @Input() characters: Set<Character>;
}
