import { Component, Input } from '@angular/core';

import { CardComponent } from '../card/card.component';
import { Character } from '../model/character';

@Component({
  selector: 'fate-card-column',
  directives: [CardComponent],
  templateUrl: require<string>('./card-column.component.haml')
})
export class CardColumnComponent {
  @Input() characters: Array<Character>;
}

