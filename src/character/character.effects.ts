import { Injectable } from '@angular/core';

import { Effect, StateUpdates } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { AppState } from '../app/app.state';
import { CharacterFacade } from '../common/character-facade';

import { CharacterActions, SELECT_CHARACTER } from './character.actions';

@Injectable()
export class CharacterEffects {

  constructor(
    private updates: StateUpdates<AppState>,
    private characterActions: CharacterActions,
    private characterFacade: CharacterFacade
  ) {}

  // TODO: This needs some error handling
  @Effect() loadCharacter: Observable<Action> =
    this.updates
      .whenAction(SELECT_CHARACTER)
      .filter(update => !update.state.characterState.cache.has(update.action.payload.id))
      .flatMap(update =>
        Observable.concat(
          Observable.of(this.characterActions.beginLoadingCharacter(update.action.payload.id)),
          this.characterFacade
            .find(update.action.payload.id)
            .map(character => this.characterActions.cacheCharacter(update.action.payload.id, character))
        )
      );

}

