import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '../common/common.module';

import { CardColumnComponent } from './card-column.component';
import { CardComponent } from './card.component';
import { FabActionComponent } from './fab-action.component';
import { FabComponent } from './fab.component';
import { ListComponent } from './list.component';
import { OverlayComponent } from './overlay.component';
import { SheetComponent } from './sheet.component';
import { StressBoxComponent } from './stress-box.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        CardColumnComponent,
        CardComponent,
        FabActionComponent,
        FabComponent,
        ListComponent,
        OverlayComponent,
        SheetComponent,
        StressBoxComponent
    ],
    exports: [
        CardColumnComponent,
        CardComponent,
        FabActionComponent,
        FabComponent,
        ListComponent,
        OverlayComponent,
        SheetComponent,
        StressBoxComponent
    ]
})
export class UIModule {}
