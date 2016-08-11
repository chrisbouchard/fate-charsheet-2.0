import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Character } from '../model/character';

@Component({
  selector: 'fate-card',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: require<string>('./card.component.haml')
})
export class CardComponent {
  @Input() character: Character;
}

