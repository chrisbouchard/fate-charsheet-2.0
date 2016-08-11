import { Component, Input } from '@angular/core';

import { Character } from '../model/character';

@Component({
  selector: 'fate-card',
  templateUrl: require<string>('./card.component.haml')
})
export class CardComponent {
  @Input() character: Character;
}

