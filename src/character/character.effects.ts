import { Injectable } from '@angular/core';

import { Effect, StateUpdates } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';

import { CharacterFacade } from '../common/character-facade';
import { AppState } from '../model/app-state';

import { CharacterActions, SELECT_CHARACTER } from './character.actions';

@Injectable()
export class CharacterEffects {

  constructor(
    private updates: StateUpdates<AppState>,
    private characterActions: CharacterActions,
    private characterFacade: CharacterFacade
  ) {}

  // TODO: This needs some error handling
  @Effect() loadCharacter = this.updates
    .whenAction(SELECT_CHARACTER)
    .filter(update => !update.state.characterState.cache.has(update.action.payload.id))
    .flatMap(update =>
      this.characterFacade
        .find(update.action.payload.id)
        .map(character => ({ id: update.action.payload.id, character }))
    )
    .map(result => this.characterActions.cacheCharacter(result.id, result.character));

}

