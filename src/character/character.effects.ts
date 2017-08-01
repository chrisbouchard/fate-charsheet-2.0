import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Action, Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { AppState } from '../app/app.state';
import { CharacterFacade } from '../common/character-facade';

import {
    CharacterActionType,
    CharacterLoadingFailureAction,
    CharacterLoadingStartedAction,
    CharacterLoadingSuccessAction,
    SelectCharacterAction
} from './character.actions';

@Injectable()
export class CharacterEffects {

    constructor(
        private actions: Actions,
        private characterFacade: CharacterFacade,
        private store: Store<AppState>
    ) {}

    @Effect() navigateToCharacter: Observable<Action> =
        this.actions
            .ofType(ROUTER_NAVIGATION)
            .map(action => action as RouterNavigationAction)
            .map(action => action.payload.routerState.root.firstChild)
            .filter(state => state && state.url[0].path === 'character')
            .map(state => new SelectCharacterAction(state.firstChild.url[0].path));

    @Effect() loadCharacter: Observable<Action> =
        this.actions
            .ofType(CharacterActionType.SELECT_CHARACTER)
            .map(action => action as SelectCharacterAction)
            .withLatestFrom(this.store)
            .filter(([action, state]) => !state.characterState.cache.has(action.id))
            .switchMap(([action]) =>
                Observable.concat(
                    Observable.of(new CharacterLoadingStartedAction(action.id)),
                    this.characterFacade
                        .find(action.id)
                        .map(character => new CharacterLoadingSuccessAction(action.id, character))
                        .catch(error => Observable.of(new CharacterLoadingFailureAction(action.id, error)))
                )
            );

}
