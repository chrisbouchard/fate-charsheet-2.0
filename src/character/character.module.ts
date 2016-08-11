import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '../common/common.module';
import { UIModule } from '../ui/ui.module';

import { CharacterOverlayComponent } from './character-overlay.component';
import { CharacterPageComponent } from './character-page.component';
import { CharacterSidebarComponent } from './character-sidebar.component';
import { CharacterActions } from './character.actions';
import { CHARACTER_ROUTES } from './character.routes';

@NgModule({
  imports: [
    CommonModule,
    UIModule
  ],
  declarations: [
    CharacterOverlayComponent,
    CharacterPageComponent,
    CharacterSidebarComponent
  ],
  exports: [
    CharacterOverlayComponent,
    CharacterPageComponent,
    CharacterSidebarComponent
  ],
  providers: [ CharacterActions ]
})
export class CharacterModule {}

