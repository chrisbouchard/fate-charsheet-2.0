import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import { Observable } from 'rxjs';

import { CharacterFacade } from '../common/character_facade';
import { Character } from '../model/character';
import { Sheet } from '../sheet/sheet';

@Component({
  selector: 'fate-character-page',
  directives: [Sheet],
  pipes: [AsyncPipe],
  template: require<string>('./character_page.html.haml')
})
export class CharacterPage {

  character: Observable<Character>;

  constructor(private params: RouteParams, private characterFacade: CharacterFacade) {
    const id = params.get('id');
    this.character = characterFacade.find(id);
  }

}

