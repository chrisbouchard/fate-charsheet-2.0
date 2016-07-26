import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CardColumnComponent } from '../card-column/card-column.component';
import { CharacterFacade } from '../common/character-facade';
import { Character } from '../model/character';

@Component({
  selector: 'fate-character-sidebar',
  directives: [CardColumnComponent],
  pipes: [AsyncPipe],
  templateUrl: require<string>('./character-sidebar.component.haml')
})
export class CharacterSidebarComponent {

  characters: Observable<Array<Character>>;

  constructor(private characterFacade: CharacterFacade) {
    this.characters = characterFacade.findAll();
  }

}

