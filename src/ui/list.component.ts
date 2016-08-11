import { Component, Input } from '@angular/core';

import { Character } from '../model/character';
import { CardComponent } from '../ui/card.component';

@Component({
  selector: 'fate-list',
  directives: [CardComponent],
  templateUrl: require<string>('./list.component.haml')
})
export class ListComponent {
  @Input() characters: Array<Character>;
}

