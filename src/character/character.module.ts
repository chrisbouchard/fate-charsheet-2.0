import { NgModule } from '@angular/core';

import { CommonModule } from '../common/common.module';
import { UIModule } from '../ui/ui.module';

import { CharacterOverlayComponent } from './character-overlay.component';
import { CharacterPageComponent } from './character-page.component';
import { CharacterSidebarComponent } from './character-sidebar.component';

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
    ]
})
export class CharacterModule {}
