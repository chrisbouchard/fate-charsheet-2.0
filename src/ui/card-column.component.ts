import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { CardComponent } from '../card/card.component';
import { Character } from '../model/character';

@Component({
  selector: 'fate-card-column',
  directives: [ROUTER_DIRECTIVES, CardComponent],
  styleUrls: [require<string>('./card-column.component.less')],
  templateUrl: require<string>('./card-column.component.haml')
})
export class CardColumnComponent {
  @Input() characters: Array<Character>;
}

