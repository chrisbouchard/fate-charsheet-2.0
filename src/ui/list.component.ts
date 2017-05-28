import { Component, Input } from '@angular/core';

import { Character } from '../model/character';

@Component({
  selector: 'fate-list',
  templateUrl: './list.component.haml'
})
export class ListComponent {
  @Input() characters: Character[];
}

