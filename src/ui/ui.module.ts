import { CommonModule as NgCommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CommonModule } from '../common/common.module';

import { CardColumnComponent } from './card-column.component';
import { CardComponent } from './card.component';
import { FabActionComponent } from './fab-action.component';
import { FabComponent } from './fab.component';
import { ListComponent } from './list.component';
import { OverlayComponent } from './overlay.component';
import { SheetComponent } from './sheet.component';
import { StressBoxComponent } from './stress-box.component';
import { UIActions } from './ui.actions';

@NgModule({
  imports: [ CommonModule, NgCommonModule ],
  declarations: [
    CardColumnComponent, CardComponent, FabActionComponent, FabComponent, ListComponent, OverlayComponent,
    SheetComponent, StressBoxComponent
  ],
  exports: [
    CardColumnComponent, CardComponent, FabActionComponent, FabComponent, ListComponent, OverlayComponent,
    SheetComponent, StressBoxComponent
  ],
  providers: [ UIActions ]
})
export class UIModule {}

