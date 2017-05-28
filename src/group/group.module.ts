import { NgModule } from '@angular/core';

import { CommonModule } from '../common/common.module';
import { UIModule } from '../ui/ui.module';

import { GroupPageComponent } from './group-page.component';

@NgModule({
  imports: [
    CommonModule,
    UIModule
  ],
  declarations: [ GroupPageComponent ],
  exports: [ GroupPageComponent ]
})
export class GroupModule {}

