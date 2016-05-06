import { Component, Input } from '@angular/core';

import { CardComponent } from '../card/card';
import { Character } from '../model/character';

@Component({
  selector: 'fate-list',
  directives: [CardComponent],
  template: require<string>('./list.html.haml')
})
export class ListComponent {
  @Input() characters: Array<Character>;
}

