import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Observable } from 'rxjs';

import { CharacterFacade } from '../common/character-facade';
import { Character } from '../model/character';
import { SheetComponent } from '../sheet/sheet.component';

@Component({
  selector: 'fate-character-page',
  directives: [SheetComponent],
  pipes: [AsyncPipe],
  templateUrl: require<string>('./character-page.component.haml')
})
export class CharacterPageComponent {

  character: Observable<Character>;

  constructor(private params: RouteParams, private characterFacade: CharacterFacade) {
    const id = params.get('id');
    this.character = characterFacade.find(id);
  }

}

