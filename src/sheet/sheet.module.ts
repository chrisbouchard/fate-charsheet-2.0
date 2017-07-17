import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { SheetComponent } from './sheet.component';
import { StressBoxComponent } from './stress-box.component';

@NgModule({
    imports: [
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

