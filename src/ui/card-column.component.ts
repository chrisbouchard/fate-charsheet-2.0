import { Component, Input } from '@angular/core';

import { Character } from '../model/character';

@Component({
  selector: 'fate-card-column',
  styleUrls: ['./card-column.component.less'],
  templateUrl: './card-column.component.haml'
})
export class CardColumnComponent {
  @Input() characters: Character[];
}

