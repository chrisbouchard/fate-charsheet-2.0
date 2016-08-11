import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Character } from '../model/character';
import { CardComponent } from '../ui/card.component';

@Component({
  selector: 'fate-card-column',
  directives: [ROUTER_DIRECTIVES, CardComponent],
  styleUrls: [require<string>('./card-column.component.less')],
  templateUrl: require<string>('./card-column.component.haml')
})
export class CardColumnComponent {
  @Input() characters: Array<Character>;
}

