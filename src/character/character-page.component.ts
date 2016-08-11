import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { AppState } from '../app/app.state';
import { CacheEntry } from '../model/cache-entry';
import { Character } from '../model/character';

import { CharacterActions } from './character.actions';

@Component({
  selector: 'fate-character-page',
  templateUrl: require<string>('./character-page.component.haml')
})
export class CharacterPageComponent implements OnDestroy, OnInit {

  character: Observable<Character>;
  error: Observable<boolean>;
  loading: Observable<boolean>;

  private paramsSub: any;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private characterActions: CharacterActions) {
    const cacheEntry = store.select(state => state.characterState.currentCacheEntry());

    this.character = cacheEntry.map(entry => entry.value);
    this.error = cacheEntry.map(entry => entry.error);
    this.loading = cacheEntry.map(entry => entry.loading);
  }

  ngOnInit(): void {
    // TODO: This should be handled by store "middleware".
    this.paramsSub = this.route.params.subscribe(params => {
      this.store.dispatch(this.characterActions.selectCharacter(params['id']));
    });
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
  }

}

