import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Store } from '@ngrx/store';

import { CharacterActions } from '../character/character.actions';
import { COMMON_PIPES } from '../common/pipes';
import { FabComponent } from '../fab/fab.component';
import { FabActionComponent } from '../fab/fab-action.component';
import { Character } from '../model/character';

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

  constructor(private store: Store<any>, private characterActions: CharacterActions) {}

  setStress(event: any, track: number, stress: number, value: boolean): void {
    this.store.dispatch(this.characterActions.setCharacterStress(track, stress - 1, value));
    event.preventDefault();
    event.stopPropagation();
  }

  addPoint(): void {
    console.log('add');
    this.fatePoints += 1;
  }

  spendPoint(): void {
    console.log('spend');
    this.fatePoints -= 1;
  }
}

