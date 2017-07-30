import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '../common/common.module';
import { UIModule } from '../ui/ui.module';

import { SheetComponent } from './sheet.component';
import { StressBoxComponent } from './stress-box.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        UIModule
    ],
    declarations: [
        SheetComponent,
        StressBoxComponent
    ],
    exports: [
        SheetComponent
    ]
})
export class SheetModule {}

