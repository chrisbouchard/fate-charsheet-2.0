import {Component, Input} from '@angular/core';

import {Card} from '../card/card';
import {Character} from '../model/character';

@Component({
  selector: 'fate-list',
  directives: [Card],
  template: require<string>('./list.html.haml')
})
export class List {
  @Input() characters: Array<Character>;
}

