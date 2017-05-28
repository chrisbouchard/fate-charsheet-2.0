import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CharacterFacade } from '../common/character-facade';
import { Character } from '../model/character';

@Component({
  selector: 'fate-group-page',
  templateUrl: './group-page.component.haml'
})
export class GroupPageComponent implements OnInit {

  characters: Observable<Character[]>;

  constructor(private characterFacade: CharacterFacade) {}

  ngOnInit(): void {
    this.characters = this.characterFacade.findAll();
  }

}

