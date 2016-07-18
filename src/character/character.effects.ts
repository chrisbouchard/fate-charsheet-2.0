import { Injectable } from '@angular/core';

import { Effect, StateUpdates } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';

import { CharacterFacade } from '../common/character-facade';
import { Character } from '../model/character';

import { CharacterActions, LOAD_CHARACTER } from './character.actions';

@Injectable()
export class CharacterEffects {
  constructor(
    private updates: StateUpdates<Character>,
    private characterActions: CharacterActions,
    private characterFacade: CharacterFacade
  ) {}

  // TODO: This needs some error handling
  @Effect() loadCharacter = this.updates
    .whenAction(LOAD_CHARACTER)
    .map(update => update.action.payload.id)
    .switchMap(id => this.characterFacade.find(id))
    .map(character => this.characterActions.setCharacter(character));
}

