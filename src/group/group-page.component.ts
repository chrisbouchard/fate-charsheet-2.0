import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Observable } from 'rxjs';

import { CharacterFacade } from '../common/character-facade';
import { ListComponent } from '../list/list.component';
import { Character } from '../model/character';

@Component({
  selector: 'fate-group-page',
  directives: [ListComponent],
  pipes: [AsyncPipe],
  templateUrl: require<string>('./group-page.component.haml')
})
export class GroupPageComponent {

  characters: Observable<Array<Character>>;

  constructor(private params: RouteParams, private characterFacade: CharacterFacade) {
    this.characters = characterFacade.findAll();
  }

}

