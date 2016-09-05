import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { AppState } from '../app/app.state';
import { CharacterFacade } from '../common/character-facade';

import { CharacterActions, SELECT_CHARACTER } from './character.actions';

@Injectable()
export class CharacterEffects {

  constructor(
    private actions: Actions,
    private characterActions: CharacterActions,
    private characterFacade: CharacterFacade,
    private store: Store<AppState>
  ) {}

  // TODO: This needs some error handling
  @Effect() loadCharacter: Observable<Action> =
    this.actions
      .ofType(SELECT_CHARACTER)
      .withLatestFrom(this.store)
      .filter(([action, state]) => !state.characterState.cache.has(action.payload.id))
      .flatMap(([action, state]) =>
        Observable.concat(
          Observable.of(this.characterActions.beginLoadingCharacter(action.payload.id)),
          this.characterFacade
            .find(action.payload.id)
            .map(character => this.characterActions.cacheCharacter(action.payload.id, character))
        )
      );

}

