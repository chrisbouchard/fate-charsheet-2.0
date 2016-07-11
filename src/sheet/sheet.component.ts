import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Store } from '@ngrx/store';

import { CharacterActions } from '../character/character.actions';
import { COMMON_PIPES } from '../common/pipes';
import { Aspect } from '../model/aspect';
import { Character } from '../model/character';
import { Stunt } from '../model/stunt';

interface NamedAspect {
  title: string;
  name: string;
}

@Component({
  selector: 'fate-sheet',
  directives: [ROUTER_DIRECTIVES],
  pipes: [COMMON_PIPES],
  styleUrls: [require<string>('./sheet.component.less')],
  templateUrl: require<string>('./sheet.component.haml')
})
export class SheetComponent {
  @Input() character: Character;

  constructor(private store: Store<any>, private characterActions: CharacterActions) {}

  setStress(event: any, track: number, stress: number, value: boolean): void {
    this.store.dispatch(this.characterActions.setCharacterStress(track, stress - 1, value));
    event.preventDefault();
    event.stopPropagation();
  }
}

