import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';

import { Store } from '@ngrx/store';

import { autobind } from 'core-decorators';

import { COMMON_PIPES } from '../common/pipes';
import { Character } from '../model/character';
import { StressBox } from '../model/stress-track';
import { Stunt } from '../model/stunt';
import { AppActions} from '../store/app-actions';

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

  constructor(private store: Store<any>, private appActions: AppActions) {}

  @autobind
  namedAspect(slot: string): {title: string, name: string} {
    return {
      title: this.character.template.aspectNames.get(slot),
      name: this.character.namedAspects.get(slot).name
    };
  }

  setStress(event: any, track: string, stress: number, value: boolean): void {
    this.store.dispatch(this.appActions.setCharacterStress(track, stress - 1, value));
    event.preventDefault();
    event.stopPropagation();
  }
}

