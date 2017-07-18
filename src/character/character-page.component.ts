import { Component, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../app/app.state';
import { Character } from '../model/character';
import { CharacterDetail } from '../model/character-detail';

@Component({
    selector: 'fate-character-page',
    templateUrl: './character-page.component.haml'
})
export class CharacterPageComponent implements OnDestroy, OnInit {

    character: Observable<Character>;
    detail: Observable<CharacterDetail>;
    error: Observable<boolean>;
    loading: Observable<boolean>;

    private paramsSub: Subscription;

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        const cacheEntry = this.store.select(state => state.characterState.currentCacheEntry);

        this.character = cacheEntry.map(entry => entry.value);
        this.error = cacheEntry.map(entry => entry.error);
        this.loading = cacheEntry.map(entry => entry.loading);

        this.detail = this.store.select(state => state.characterState.detail);
    }

    ngOnDestroy(): void {
        this.paramsSub.unsubscribe();
    }

}
