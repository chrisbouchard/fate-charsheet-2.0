import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '../common/common.module';

import { CardColumnComponent } from './card-column.component';
import { CardComponent } from './card.component';
import { CharacterTabComponent } from './character-tab.component';
import { CharacterTabListComponent } from './character-tab-list.component';
import { FabActionComponent } from './fab-action.component';
import { FabComponent } from './fab.component';
import { ListComponent } from './list.component';
import { OverlayComponent } from './overlay.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        CardColumnComponent,
        CardComponent,
        CharacterTabComponent,
        CharacterTabListComponent,
        FabActionComponent,
        FabComponent,
        ListComponent,
        OverlayComponent,
    ],
    exports: [
        CardColumnComponent,
        CardComponent,
        CharacterTabComponent,
        CharacterTabListComponent,
        FabActionComponent,
        FabComponent,
        ListComponent,
        OverlayComponent,
    ]
})
export class UIModule {}
