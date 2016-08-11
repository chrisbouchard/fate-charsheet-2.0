import { Component, Input } from '@angular/core';

import { Character } from '../model/character';

@Component({
  selector: 'fate-list',
  templateUrl: require<string>('./list.component.haml')
})
export class ListComponent {
  @Input() characters: Array<Character>;
}

