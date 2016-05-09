import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';

import { autobind } from 'core-decorators';

import { COMMON_PIPES } from '../common/pipes';
import { Character } from '../model/character';
import { StressBox } from '../model/stress-track';
import { Stunt } from '../model/stunt';

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

  @autobind
  namedAspect(slot: string): {title: string, name: string} {
    return {
      title: this.character.template.aspectNames.get(slot),
      name: this.character.namedAspects.get(slot).name
    };
  }
}

