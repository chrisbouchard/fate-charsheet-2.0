import { Component, Input } from '@angular/core';

import { CardComponent } from '../card/card.component';
import { Character } from '../model/character';

@Component({
  selector: 'fate-list',
  directives: [CardComponent],
  templateUrl: require<string>('./list.component.haml')
})
export class ListComponent {
  @Input() characters: Array<Character>;
}

