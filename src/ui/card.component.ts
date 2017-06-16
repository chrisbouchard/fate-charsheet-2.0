import { Component, Input } from '@angular/core';

import { Character } from '../model/character';

@Component({
    selector: 'fate-card',
    templateUrl: './card.component.haml'
})
export class CardComponent {
    @Input() character: Character;
}
