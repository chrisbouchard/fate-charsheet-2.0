import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { AppState } from '../app/app.state';
import { CharacterFacade } from '../common/character-facade';

import {
    BeginLoadingCharacterAction, CacheCharacterAction, CharacterActionType,
    SelectCharacterAction
} from './character.actions';

@Injectable()
export class CharacterEffects {

    constructor(
        private actions: Actions,
        private characterFacade: CharacterFacade,
        private store: Store<AppState>
    ) {}

    // TODO: This needs some error handling
    @Effect() loadCharacter: Observable<Action> =
        this.actions
            .ofType(CharacterActionType.SELECT_CHARACTER)
            .map(action => action as SelectCharacterAction)
            .do(action => console.log(action))
            .withLatestFrom(this.store)
            .filter(([action, state]) => !state.characterState.cache.has(action.id))
            .flatMap(([action]) =>
                Observable.concat(
                    Observable.of(new BeginLoadingCharacterAction(action.id)),
                    this.characterFacade
                        .find(action.id)
                        .map(character => new CacheCharacterAction(action.id, character))
                )
            );

}
