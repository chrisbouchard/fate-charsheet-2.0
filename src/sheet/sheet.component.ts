import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Store } from '@ngrx/store';

import { Map } from 'immutable';

import { CharacterActions } from '../character/character.actions';
import { COMMON_PIPES } from '../common/pipes';
import { FabActionComponent } from '../fab/fab-action.component';
import { FabComponent } from '../fab/fab.component';
import { Character } from '../model/character';
import { UIActions } from '../ui/ui.actions';

interface NamedAspect {
  title: string;
  name: string;
}

@Component({
  selector: 'fate-sheet',
  directives: [ROUTER_DIRECTIVES, FabActionComponent, FabComponent],
  pipes: [COMMON_PIPES],
  styleUrls: [require<string>('./sheet.component.less')],
  templateUrl: require<string>('./sheet.component.haml')
})
export class SheetComponent {
  @Input() character: Character;

  fatePoints: number = 1;

  adjectiveLadder = Map([
    [-2, 'Terrible'],
    [-1, 'Poor'],
    [0, 'Mediocre'],
    [1, 'Average'],
    [2, 'Fair'],
    [3, 'Good'],
    [4, 'Great'],
    [5, 'Superb'],
    [6, 'Fantastic'],
    [7, 'Epic'],
    [8, 'Legendary']
  ]);

  constructor(
      private characterActions: CharacterActions,
      private store: Store<any>,
      private uiActions: UIActions
      ) {}

  setStress(event: any, track: number, stress: number, value: boolean): void {
    this.store.dispatch(this.characterActions.setCharacterStress(track, stress - 1, value));
    event.preventDefault();
    event.stopPropagation();
  }

  addPoint(): void {
    this.fatePoints += 1;
  }

  spendPoint(): void {
    this.fatePoints -= 1;
  }

  addModifier(): void {
    this.store.dispatch(this.uiActions.toggleOverlay());
  }

}

