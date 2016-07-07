import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
export class CharacterPageComponent implements OnDestroy, OnInit {

  character: Observable<Character>;

  private paramsSub: any;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private characterActions: CharacterActions) {
    this.character = store.select(state => state.currentCharacter);
  }

  ngOnInit(): void {
    // TODO: This should be handled by store "middleware".
    this.paramsSub = this.route.params.subscribe(params => {
      this.store.dispatch(this.characterActions.loadCharacter(params['id']));
    });
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
  }

}

