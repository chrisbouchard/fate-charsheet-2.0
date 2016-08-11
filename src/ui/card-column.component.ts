import { Component, Input } from '@angular/core';

import { Character } from '../model/character';

@Component({
  selector: 'fate-card-column',
  styleUrls: [require<string>('./card-column.component.less')],
  templateUrl: require<string>('./card-column.component.haml')
})
export class CardColumnComponent {
  @Input() characters: Array<Character>;
}

