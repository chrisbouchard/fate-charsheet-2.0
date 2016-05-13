import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { AppState } from '../model/app-state';
import { Character } from '../model/character';
import { SheetComponent } from '../sheet/sheet.component';
import { AppActions } from '../store/app-actions';

@Component({
  selector: 'fate-character-page',
  directives: [SheetComponent],
  pipes: [AsyncPipe],
  templateUrl: require<string>('./character-page.component.haml')
})
export class CharacterPageComponent implements OnInit {

  character: Observable<Character>;

  constructor(private params: RouteParams, private store: Store<any>, private appActions: AppActions) {
    this.character = store.select('app').map((state: AppState) => state.currentCharacter).do(character => {
      console.log('Update!');
    });
  }

  ngOnInit(): void {
    const id = this.params.get('id');
    this.store.next(this.appActions.selectCharacter(id));
  }

}

