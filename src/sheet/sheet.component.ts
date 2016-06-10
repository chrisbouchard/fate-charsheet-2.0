import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';

import { Store } from '@ngrx/store';

import { Iterable, List } from 'immutable';

import { CharacterActions } from '../character/character.actions';
import { COMMON_PIPES } from '../common/pipes';
import { Aspect } from '../model/aspect';
import { Character } from '../model/character';
import { StressBox } from '../model/stress-track';
import { Stunt } from '../model/stunt';

interface NamedAspect {
  title: string;
  name: string;
}

@Component({
  selector: 'fate-sheet',
  directives: [RouterLink],
  pipes: [COMMON_PIPES],
  styleUrls: [require<string>('./sheet.component.less')],
  templateUrl: require<string>('./sheet.component.haml')
})
export class SheetComponent {
  @Input() character: Character;

  emptyStressBox: StressBox = { enabled: false, marked: false };

  constructor(private store: Store<any>, private characterActions: CharacterActions) {}

  namedAspects(): Iterable<number, NamedAspect> {
    if (!this.character) {
      return List<NamedAspect>();
    }

    return this.character.template.aspectSlots.map(slot => ({
      title: this.character.template.aspectNames.get(slot),
      name: this.character.namedAspects.get(slot).name
    }));
  }

  setStress(event: any, track: string, stress: number, value: boolean): void {
    this.store.dispatch(this.characterActions.setCharacterStress(track, stress - 1, value));
    event.preventDefault();
    event.stopPropagation();
  }
}

