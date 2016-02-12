import {AsyncPipe} from 'angular2/common';
import {Component, View} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Observable} from 'rxjs';

import {CharacterFacade} from '../common/character_facade';
import {Character} from '../common/model';
import {Sheet} from '../sheet/sheet';

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

