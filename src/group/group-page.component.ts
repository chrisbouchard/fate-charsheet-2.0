import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { CharacterFacade } from '../common/character-facade';
import { Character } from '../model/character';

@Component({
  selector: 'fate-group-page',
  templateUrl: require<string>('./group-page.component.haml')
})
export class GroupPageComponent {

  characters: Observable<Array<Character>>;

  constructor(private route: ActivatedRoute, private characterFacade: CharacterFacade) {
    this.characters = characterFacade.findAll();
  }

}

