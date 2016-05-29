import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { AppState } from '../model/app-state';
import { Character } from '../model/character';
import { SheetComponent } from '../sheet/sheet.component';

import { CharacterActions } from './character.actions';

@Component({
  selector: 'fate-character-page',
  directives: [SheetComponent],
  pipes: [AsyncPipe],
  templateUrl: require<string>('./character-page.component.haml')
})
export class CharacterPageComponent implements OnInit {

  character: Observable<Character>;

  constructor(private params: RouteParams, private store: Store<AppState>, private characterActions: CharacterActions) {
    this.character = store.select(state => state.currentCharacter);
  }

  ngOnInit(): void {
    const id = this.params.get('id');
    this.store.dispatch(this.characterActions.loadCharacter(id));
  }

}

