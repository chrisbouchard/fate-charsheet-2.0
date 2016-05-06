import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';

import { Character } from '../model/character';

@Component({
  selector: 'fate-card',
  directives: [RouterLink],
  template: require<string>('./card.html.haml')
})
export class CardComponent {
  @Input() character: Character;
}
