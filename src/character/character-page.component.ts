import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../app/app.state';
import { Character } from '../model/character';
import { CharacterDetail } from '../model/character-detail';

import { SelectCharacterAction } from './character.actions';

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

    constructor(private route: ActivatedRoute, private store: Store<AppState>) {
        const cacheEntry = store.select(state => state.characterState.currentCacheEntry);

        this.character = cacheEntry.map(entry => entry.value);
        this.error = cacheEntry.map(entry => entry.error);
        this.loading = cacheEntry.map(entry => entry.loading);

        this.detail = store.select(state => state.characterState.detail);
    }

    ngOnInit(): void {
        // TODO: This should be handled by store "middleware".
        this.paramsSub = this.route.params.subscribe(params => {
            this.store.dispatch(new SelectCharacterAction(params['id']));
        });
    }

    ngOnDestroy(): void {
        this.paramsSub.unsubscribe();
    }

}
