import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';

import { CommonModule } from '../common/common.module';
import { SheetModule } from '../sheet/sheet.module';
import { UIModule } from '../ui/ui.module';

import { CharacterOverlayComponent } from './character-overlay.component';
import { CharacterPageComponent } from './character-page.component';
import { CharacterSidebarComponent } from './character-sidebar.component';
import { CharacterEffects } from './character.effects';

@NgModule({
    imports: [
        EffectsModule.forFeature([CharacterEffects]),
        CommonModule,
        SheetModule,
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
    ]
})
export class CharacterModule {}
